#!/usr/bin/env node

import program from 'commander';
import gendiff from '..';

program
  .option('-f, --format [type]', 'Output format', 'tree')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) => {
    console.log(gendiff(firstConfig, secondConfig, program.format));
  });
program.parse(process.argv);
