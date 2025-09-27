import { formatGreeting } from '../index';
import type { GreetOptions } from '../index';

describe('index exports', () => {
  it('should export formatGreeting function', () => {
    expect(typeof formatGreeting).toBe('function');
  });

  it('should have working formatGreeting export', () => {
    const result = formatGreeting('Test');
    expect(result).toBe('Hello, Test!');
  });

  it('should properly type GreetOptions', () => {
    const options: GreetOptions = {
      uppercase: true
    };
    expect(options.uppercase).toBe(true);
  });

  it('should allow undefined uppercase in GreetOptions', () => {
    const options: GreetOptions = {};
    expect(options.uppercase).toBeUndefined();
  });
});