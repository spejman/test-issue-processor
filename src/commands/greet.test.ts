import { formatGreeting } from './greet';

describe('greet command', () => {
  describe('formatGreeting', () => {
    it('should return a greeting with the given name', () => {
      const result = formatGreeting('Alice');
      expect(result).toBe('Hello, Alice!');
    });

    it('should return a greeting with default name', () => {
      const result = formatGreeting('World');
      expect(result).toBe('Hello, World!');
    });

    it('should return uppercase greeting when uppercase option is true', () => {
      const result = formatGreeting('Bob', { uppercase: true });
      expect(result).toBe('HELLO, BOB!');
    });

    it('should return normal case greeting when uppercase option is false', () => {
      const result = formatGreeting('Charlie', { uppercase: false });
      expect(result).toBe('Hello, Charlie!');
    });

    it('should handle empty string name', () => {
      const result = formatGreeting('');
      expect(result).toBe('Hello, !');
    });

    it('should handle special characters in name', () => {
      const result = formatGreeting('Alice & Bob');
      expect(result).toBe('Hello, Alice & Bob!');
    });
  });
});