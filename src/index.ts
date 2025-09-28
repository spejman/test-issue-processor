#!/usr/bin/env node

import { Command } from 'commander';
import { greet } from './commands/greet';
import { getImploidAsciiArt } from './utils/ascii-art';

console.log(getImploidAsciiArt());

const program = new Command();

program
  .name('ts-cli')
  .description('A TypeScript CLI application')
  .version('1.0.0');

program
  .command('greet')
  .description('Greet someone')
  .argument('<name>', 'name to greet')
  .option('-u, --uppercase', 'convert greeting to uppercase')
  .action(greet);

program.parse();