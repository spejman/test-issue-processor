import { formatGreeting } from "./greet";

describe("greet command", () => {
  describe("formatGreeting", () => {
    it("should return a basic greeting", () => {
      const result = formatGreeting("World");
      expect(result).toBe("Hello, World!");
    });

    it("should return a greeting with a custom name", () => {
      const result = formatGreeting("Alice");
      expect(result).toBe("Hello, Alice!");
    });

    it("should convert greeting to uppercase when option is set", () => {
      const result = formatGreeting("Bob", { uppercase: true });
      expect(result).toBe("HELLO, BOB!");
    });

    it("should handle empty options object", () => {
      const result = formatGreeting("Charlie", {});
      expect(result).toBe("Hello, Charlie!");
    });

    it("should handle special characters in name", () => {
      const result = formatGreeting("John-Doe");
      expect(result).toBe("Hello, John-Doe!");
    });

    it("should handle numbers in name", () => {
      const result = formatGreeting("User123");
      expect(result).toBe("Hello, User123!");
    });

    it("should handle Unicode characters", () => {
      const result = formatGreeting("José");
      expect(result).toBe("Hello, José!");
    });
  });
});
