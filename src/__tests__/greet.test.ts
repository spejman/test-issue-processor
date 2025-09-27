import { formatGreeting, greet } from '../commands/greet';

describe('greet command', () => {
  describe('greet function', () => {
    let consoleLogSpy: jest.SpyInstance;

    beforeEach(() => {
      consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
      consoleLogSpy.mockRestore();
    });

    it('should print greeting to console', () => {
      greet('Sergio', {});
      expect(consoleLogSpy).toHaveBeenCalledWith('Hello, Sergio!');
    });

    it('should print uppercase greeting when option is set', () => {
      greet('Sergio', { uppercase: true });
      expect(consoleLogSpy).toHaveBeenCalledWith('HELLO, SERGIO!');
    });

    it('should handle empty options object', () => {
      greet('Test', {});
      expect(consoleLogSpy).toHaveBeenCalledWith('Hello, Test!');
    });

    it('should handle uppercase false explicitly', () => {
      greet('Test', { uppercase: false });
      expect(consoleLogSpy).toHaveBeenCalledWith('Hello, Test!');
    });
  });
  describe('formatGreeting', () => {
    it('should return a basic greeting', () => {
      const result = formatGreeting('Sergio');
      expect(result).toBe('Hello, Sergio!');
    });

    it('should return a greeting with different names', () => {
      expect(formatGreeting('Alice')).toBe('Hello, Alice!');
      expect(formatGreeting('Bob')).toBe('Hello, Bob!');
      expect(formatGreeting('Charlie')).toBe('Hello, Charlie!');
    });

    it('should handle uppercase option when true', () => {
      const result = formatGreeting('Sergio', true);
      expect(result).toBe('HELLO, SERGIO!');
    });

    it('should handle uppercase option when false', () => {
      const result = formatGreeting('Sergio', false);
      expect(result).toBe('Hello, Sergio!');
    });

    it('should default to lowercase when uppercase not specified', () => {
      const result = formatGreeting('Test');
      expect(result).toBe('Hello, Test!');
    });

    it('should handle empty string name', () => {
      const result = formatGreeting('');
      expect(result).toBe('Hello, !');
    });

    it('should handle special characters in name', () => {
      expect(formatGreeting('O\'Brien')).toBe('Hello, O\'Brien!');
      expect(formatGreeting('Jean-Claude')).toBe('Hello, Jean-Claude!');
      expect(formatGreeting('李明')).toBe('Hello, 李明!');
    });

    it('should handle names with spaces', () => {
      const result = formatGreeting('John Doe');
      expect(result).toBe('Hello, John Doe!');
    });

    it('should handle names with numbers', () => {
      const result = formatGreeting('User123');
      expect(result).toBe('Hello, User123!');
    });

    it('should preserve case in names when not using uppercase option', () => {
      const result = formatGreeting('McDoNaLd');
      expect(result).toBe('Hello, McDoNaLd!');
    });

    it('should convert everything to uppercase when option is enabled', () => {
      const result = formatGreeting('McDoNaLd', true);
      expect(result).toBe('HELLO, MCDONALD!');
    });
  });
});