export interface GreetOptions {
  uppercase?: boolean;
}

export function greet(name: string, options: GreetOptions): void {
  const greeting = formatGreeting(name, options.uppercase);
  // eslint-disable-next-line no-console
  console.log(greeting);
}

export function formatGreeting(name: string, uppercase = false): string {
  const message = `Hello, ${name}!`;
  return uppercase ? message.toUpperCase() : message;
}