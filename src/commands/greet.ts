export interface GreetOptions {
  uppercase?: boolean;
}

export function greet(name: string, options: GreetOptions): void {
  const greeting = formatGreeting(name, options);
  console.log(greeting); // eslint-disable-line no-console
}

export function formatGreeting(name: string, options: GreetOptions = {}): string {
  let greeting = `Hello, ${name}!`;

  if (options.uppercase) {
    greeting = greeting.toUpperCase();
  }

  return greeting;
}
