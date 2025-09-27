export interface GreetOptions {
  uppercase?: boolean;
}

export function formatGreeting(name: string, options: GreetOptions = {}): string {
  const greeting = `Hello, ${name}!`;
  return options.uppercase ? greeting.toUpperCase() : greeting;
}

export function greet(name: string, options: GreetOptions): void {
  const greeting = formatGreeting(name, options);
  // eslint-disable-next-line no-console
  console.log(greeting);
}