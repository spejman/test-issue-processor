declare module '*.json' {
  const value: {
    version: string;
    [key: string]: unknown;
  };
  export = value;
}