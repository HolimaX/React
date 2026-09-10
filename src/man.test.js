import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

describe('UNIX Man Page Generation Feature', () => {
  const rootDir = path.resolve(__dirname, '..');
  const packageJsonPath = path.join(rootDir, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  describe('Package Configuration Integrity', () => {
    it('should define a valid man array in package.json', () => {
      expect(packageJson.man).toBeDefined();
      expect(Array.isArray(packageJson.man)).toBe(true);
      expect(packageJson.man).toContain('./man/beerbank.1');
    });

    it('should configure generate:man and man scripts in package.json', () => {
      expect(packageJson.scripts).toBeDefined();
      expect(packageJson.scripts['generate:man']).toBeDefined();
      expect(packageJson.scripts['generate:man']).toContain('marked-man');
      expect(packageJson.scripts['generate:man']).toContain('./man/beerbank.1');
      expect(packageJson.scripts['man']).toBe('npm run generate:man');
    });

    it('should invoke generate:man in build-nix and prepack scripts', () => {
      expect(packageJson.scripts['build-nix']).toBeDefined();
      expect(packageJson.scripts['build-nix']).toContain('generate:man');
      expect(packageJson.scripts['prepack']).toBeDefined();
      expect(packageJson.scripts['prepack']).toContain('generate:man');
    });

    it('should verify all paths referenced in man array exist and are non-empty', () => {
      packageJson.man.forEach((manRelPath) => {
        const fullPath = path.join(rootDir, manRelPath);
        expect(fs.existsSync(fullPath)).toBe(true);
        const stats = fs.statSync(fullPath);
        expect(stats.isFile()).toBe(true);
        expect(stats.size).toBeGreaterThan(1000);
      });
    });
  });

  describe('Troff Syntax and Macro Structure', () => {
    const manRelPath = './man/beerbank.1';
    const fullPath = path.join(rootDir, manRelPath);
    let content = '';

    beforeAll(() => {
      content = fs.readFileSync(fullPath, 'utf8');
    });

    it('should contain a Title Header (.TH) with Section 1 and package version', () => {
      expect(content).toMatch(/\.TH\s+"[^"]*"\s+"1"/);
      expect(content).toContain(packageJson.version);
    });

    it('should contain Section Headers (.SH)', () => {
      expect(content).toMatch(/\.SH\s+"NAME"/);
      expect(content).toMatch(/\.SH\s+Available Scripts/);
    });

    it('should contain standard roff formatting macros (.P, .RS, .RE, .IP)', () => {
      expect(content).toContain('.P\n');
      expect(content).toContain('.RS 1\n');
      expect(content).toContain('.RE\n');
      expect(content).toContain('.IP \\(bu 2');
    });

    it('should have properly balanced .RS and .RE blocks', () => {
      const rsCount = (content.match(/^\.RS/gm) || []).length;
      const reCount = (content.match(/^\.RE/gm) || []).length;
      expect(rsCount).toBeGreaterThan(0);
      expect(rsCount).toBe(reCount);
    });
  });

  describe('Generation Process Execution', () => {
    it('should successfully compile README.md to troff via marked-man CLI', () => {
      const readmePath = path.join(rootDir, 'README.md');
      expect(fs.existsSync(readmePath)).toBe(true);

      const generatedTroff = execSync('npx marked-man ./README.md', {
        cwd: rootDir,
        encoding: 'utf8',
      });

      expect(generatedTroff).toBeDefined();
      expect(generatedTroff.length).toBeGreaterThan(1000);
      expect(generatedTroff).toContain('.TH');
      expect(generatedTroff).toContain(packageJson.version);
    });
  });

  describe('Groff and Man Command Compatibility', () => {
    it('should format cleanly using groff if available on the system', () => {
      let hasGroff = false;
      try {
        execSync('command -v groff', { stdio: 'ignore' });
        hasGroff = true;
      } catch {
        hasGroff = false;
      }

      if (hasGroff) {
        const output = execSync('groff -man -Tascii ./man/beerbank.1', {
          cwd: rootDir,
          encoding: 'utf8',
        });
        expect(output).toContain('General Commands Manual');
        expect(output).toContain(packageJson.version);
      } else {
        console.warn('groff binary not found on system; skipping groff formatting test.');
      }
    });
  });
});

