/**
 * build-lib.js
 * Builds the dual CommonJS and ES Module distribution of @HolimaX/beerbank.
 * Produces:
 *   - dist/cjs/index.js (CommonJS format)
 *   - dist/esm/index.js (ES Module format)
 */

const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const cjsDir = path.join(distDir, 'cjs');
const esmDir = path.join(distDir, 'esm');

// Ensure clean dist directory
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(cjsDir, { recursive: true });
fs.mkdirSync(esmDir, { recursive: true });

// Declare external dependencies so host apps share single instances (especially React)
const externals = [
  /^react$/,
  /^react-dom$/,
  /^react-router-dom$/,
  /^react-redux$/,
  /^redux$/,
  /^redux-thunk$/,
  /^@okta\/.*/,
  /^@fortawesome\/.*/,
  /^axios$/,
  /^react-bootstrap$/,
  /^react-cookie-consent$/,
  /^react-ga4$/
];

const cjsConfig = {
  mode: 'production',
  entry: path.resolve(rootDir, 'src/index.lib.js'),
  output: {
    path: cjsDir,
    filename: 'index.js',
    library: {
      type: 'commonjs2'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            require.resolve('@babel/preset-env'),
            require.resolve('@babel/preset-react')
          ]
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  externals
};

const esmConfig = {
  mode: 'production',
  entry: path.resolve(rootDir, 'src/index.lib.js'),
  output: {
    path: esmDir,
    filename: 'index.js',
    module: true,
    library: {
      type: 'module'
    }
  },
  experiments: {
    outputModule: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            [require.resolve('@babel/preset-env'), { modules: false }],
            require.resolve('@babel/preset-react')
          ]
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  externals
};

function runWebpack(config, name) {
  return new Promise((resolve, reject) => {
    webpack(config, (err, stats) => {
      if (err) {
        return reject(err);
      }
      if (stats.hasErrors()) {
        const errors = stats.toJson().errors.map(e => e.message).join('\n');
        return reject(new Error(`${name} build errors:\n${errors}`));
      }
      const duration = stats.endTime - stats.startTime;
      console.log(`[build-lib] ${name} bundle completed in ${duration}ms.`);
      resolve();
    });
  });
}

async function build() {
  try {
    console.log('[build-lib] Starting library build for @HolimaX/beerbank...');
    await runWebpack(cjsConfig, 'CommonJS (dist/cjs)');
    fs.writeFileSync(path.join(cjsDir, 'package.json'), JSON.stringify({ type: 'commonjs' }, null, 2));

    await runWebpack(esmConfig, 'ES Module (dist/esm)');
    fs.writeFileSync(path.join(esmDir, 'package.json'), JSON.stringify({ type: 'module' }, null, 2));

    console.log('[build-lib] Successfully built dual CJS/ESM distribution in dist/.');
  } catch (error) {
    console.error('[build-lib] Build failed:', error);
    process.exit(1);
  }
}

build();

