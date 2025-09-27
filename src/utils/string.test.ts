import { capitalize, truncate } from './string';

describe('string utils', () => {
  describe('capitalize', () => {
    it('should capitalize a lowercase string', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    it('should handle an uppercase string', () => {
      expect(capitalize('WORLD')).toBe('World');
    });

    it('should handle mixed case string', () => {
      expect(capitalize('hElLo')).toBe('Hello');
    });

    it('should handle single character', () => {
      expect(capitalize('a')).toBe('A');
    });

    it('should handle empty string', () => {
      expect(capitalize('')).toBe('');
    });

    it('should handle string with numbers', () => {
      expect(capitalize('123abc')).toBe('123abc');
    });

    it('should handle string starting with space', () => {
      expect(capitalize(' hello')).toBe(' hello');
    });

    it('should handle special characters', () => {
      expect(capitalize('@hello')).toBe('@hello');
    });
  });

  describe('truncate', () => {
    it('should not truncate short strings', () => {
      expect(truncate('hello', 10)).toBe('hello');
    });

    it('should truncate long strings', () => {
      expect(truncate('hello world', 8)).toBe('hello...');
    });

    it('should handle exact length strings', () => {
      expect(truncate('hello', 5)).toBe('hello');
    });

    it('should handle very short max length', () => {
      expect(truncate('hello', 3)).toBe('...');
    });

    it('should handle empty string', () => {
      expect(truncate('', 5)).toBe('');
    });

    it('should handle max length of 0', () => {
      expect(truncate('hello', 0)).toBe('...');
    });

    it('should handle Unicode characters correctly', () => {
      expect(truncate('こんにちは世界', 5)).toBe('こん...');
    });

    it('should handle strings with spaces correctly', () => {
      expect(truncate('The quick brown fox', 10)).toBe('The qui...');
    });
  });
});