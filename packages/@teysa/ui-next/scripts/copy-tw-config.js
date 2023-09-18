const path = require('path');
const fsExtra = require('fs-extra');

const FILENAME = 'tailwind.config.js';
const TW_CONFIG = path.resolve(__dirname, '../src/styles', FILENAME);
const DIST = path.resolve(__dirname, '../dist', FILENAME);

async function copyTwConfig() {
  try {
    await fsExtra.copy(TW_CONFIG, DIST);
    console.log('Copied @teysa tailwind config');
  } catch (error) {
    console.log(error);
  }
}

copyTwConfig();
