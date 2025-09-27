#!/usr/bin/env node

import { Command } from 'commander';
import { greet } from './commands/greet';

const program = new Command();

program
  .name('typescript-cli')
  .description('TypeScript CLI application')
  .version('1.0.0');

program
  .command('greet')
  .description('Greet a user')
  .argument('[name]', 'name to greet', 'World')
  .option('-u, --uppercase', 'convert greeting to uppercase')
  .action(greet);

program.parse();