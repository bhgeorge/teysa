#!/usr/bin/env node

// Global
import { program } from 'commander';
// Actions
import { scaffold } from './scaffold/index.js';

// TODO: Auto-increment
program.version('0.0.7').usage('<command> [options]');

// Scaffold
program
  .command('scaffold <component-name>')
  .description('create template files for components')
  .action((name: string) => {
    scaffold(name);
  });

program.parse(process.argv);
