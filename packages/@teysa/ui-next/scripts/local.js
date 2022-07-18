const path = require('path');
const fsExtra = require('fs-extra');

const DIST = path.resolve(__dirname, '../dist');

const TEST_DIST_PATH = path.resolve(
  __dirname,
  '../../test/node_modules/@teysa/ui-next/dist'
);

async function copyLocalDist() {
  try {
    await fsExtra.copy(DIST, TEST_DIST_PATH);
    console.log('Copied built files to test repository');
  } catch (error) {
    console.log(error);
  }
}

copyLocalDist();
