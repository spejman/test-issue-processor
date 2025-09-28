import { displayImploidAsciiArt } from './asciiArt';

describe('asciiArt', () => {
  describe('displayImploidAsciiArt', () => {
    it('should display ASCII art for IMPLOID', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      
      displayImploidAsciiArt();
      
      expect(consoleSpy).toHaveBeenCalledTimes(1);
      const callArg = consoleSpy.mock.calls[0][0] as string;
      expect(callArg).toContain('___');
      expect(callArg).toContain('|');
      expect(callArg).toMatch(/___.*___/s);
      
      consoleSpy.mockRestore();
    });

    it('should contain the word IMPLOID in ASCII art format', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      
      displayImploidAsciiArt();
      
      const callArg = consoleSpy.mock.calls[0][0] as string;
      expect(callArg).toMatch(/[I|_]/);
      expect(callArg).toMatch(/[M|\\|/]/);
      expect(callArg).toMatch(/[P|_]/);
      expect(callArg).toMatch(/[L|_]/);
      expect(callArg).toMatch(/[O|_]/);
      expect(callArg).toMatch(/[I|_]/);
      expect(callArg).toMatch(/[D|_]/);
      
      consoleSpy.mockRestore();
    });
  });
});