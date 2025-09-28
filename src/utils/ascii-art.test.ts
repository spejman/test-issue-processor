import { getImploidAsciiArt } from './ascii-art';

describe('ASCII Art', () => {
  describe('getImploidAsciiArt', () => {
    it('should return IMPLOID ASCII art as a string', () => {
      const art = getImploidAsciiArt();
      expect(typeof art).toBe('string');
      expect(art).toBeTruthy();
      expect(art.length).toBeGreaterThan(0);
    });

    it('should contain ASCII art representing IMPLOID', () => {
      const art = getImploidAsciiArt();
      // Check that the ASCII art contains typical ASCII art characters
      expect(art).toContain('_');
      expect(art).toContain('|');
      expect(art).toContain('/');
      expect(art).toContain('\\');
      // Ensure it has the structure of ASCII art letters
      expect(art).toMatch(/[_|/\\]+/);
    });

    it('should be properly formatted with multiple lines', () => {
      const art = getImploidAsciiArt();
      const lines = art.split('\n');
      expect(lines.length).toBeGreaterThan(1);
    });

    it('should have consistent line lengths for proper display', () => {
      const art = getImploidAsciiArt();
      const lines = art.split('\n').filter(line => line.trim() !== '');
      
      for (const line of lines) {
        expect(line.length).toBeLessThanOrEqual(80);
      }
    });
  });
});