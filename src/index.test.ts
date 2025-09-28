import { getImploidAsciiArt } from './utils/ascii-art';

describe('CLI Application', () => {
  describe('startup', () => {
    let originalLog: typeof console.log;
    let originalArgv: string[];
    let consoleOutput: string[] = [];

    beforeEach(() => {
      originalLog = console.log;
      originalArgv = process.argv;
      process.argv = ['node', 'index.js', '--help'];
      consoleOutput = [];
      console.log = jest.fn((...args) => {
        consoleOutput.push(args.map(arg => String(arg)).join(' '));
      });
    });

    afterEach(() => {
      console.log = originalLog;
      process.argv = originalArgv;
      jest.resetModules();
    });

    it('should display IMPLOID ASCII art on startup', () => {
      const expectedArt = getImploidAsciiArt();
      
      try {
        jest.isolateModules(() => {
          require('./index');
        });
      } catch (e) {
        // The CLI will throw an exit error after displaying help, which is expected
      }

      expect(console.log).toHaveBeenCalled();
      expect(consoleOutput[0]).toBe(expectedArt);
    });
  });
});