#!/usr/bin/env node

import { Command } from 'commander';
import { greet } from './commands/greet';

const program = new Command();

program
  .name('cli-app')
  .description('A TypeScript CLI application')
  .version('1.0.0');

program
  .command('greet')
  .description('Greet someone')
  .argument('<name>', 'name to greet')
  .option('-u, --uppercase', 'convert greeting to uppercase')
  .action(greet);

program.parse(process.argv);