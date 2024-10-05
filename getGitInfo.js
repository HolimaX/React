const { execSync } = require('child_process');
const fs = require('fs');

const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
const repoPath = execSync('git rev-parse --show-toplevel').toString().trim();
const remoteRepoPath = execSync('git remote get-url origin').toString().trim();
const shortHash = execSync('git rev-parse --verify --short HEAD').toString().trim();

const gitInfo = {
  branch,
  repoPath,
  remoteRepoPath,
  shortHash
};

fs.writeFileSync('./src/gitInfo.json', JSON.stringify(gitInfo, null, 2));
