import { execSync } from 'child_process';
import * as path from 'path';

describe('CLI integration tests', () => {
  const cliPath = path.join(__dirname, '..', 'cli.ts');
  
  const runCLI = (args: string): string => {
    try {
      const output = execSync(`npx ts-node ${cliPath} ${args}`, {
        encoding: 'utf-8'
      });
      return output.trim();
    } catch (error: unknown) {
      if (error && typeof error === 'object' && 'stdout' in error) {
        return (error as { stdout: Buffer | string }).stdout.toString().trim();
      }
      throw error;
    }
  };

  describe('version command', () => {
    it('should display version with --version flag', () => {
      const output = runCLI('--version');
      expect(output).toBe('1.0.0');
    });

    it('should display version with -V flag', () => {
      const output = runCLI('-V');
      expect(output).toBe('1.0.0');
    });
  });

  describe('help command', () => {
    it('should display help with --help flag', () => {
      const output = runCLI('--help');
      expect(output).toContain('A TypeScript CLI application');
      expect(output).toContain('Commands:');
      expect(output).toContain('greet');
    });

    it('should display help with -h flag', () => {
      const output = runCLI('-h');
      expect(output).toContain('A TypeScript CLI application');
    });
  });

  describe('greet command', () => {
    it('should greet with a name', () => {
      const output = runCLI('greet Sergio');
      expect(output).toBe('Hello, Sergio!');
    });

    it('should greet with uppercase option using -u', () => {
      const output = runCLI('greet Sergio -u');
      expect(output).toBe('HELLO, SERGIO!');
    });

    it('should greet with uppercase option using --uppercase', () => {
      const output = runCLI('greet Sergio --uppercase');
      expect(output).toBe('HELLO, SERGIO!');
    });

    it('should handle names with spaces when quoted', () => {
      const output = runCLI('greet "John Doe"');
      expect(output).toBe('Hello, John Doe!');
    });

    it('should display greet command help', () => {
      const output = runCLI('greet --help');
      expect(output).toContain('Greet someone');
      expect(output).toContain('Arguments:');
      expect(output).toContain('name');
      expect(output).toContain('Options:');
      expect(output).toContain('uppercase');
    });
  });
});