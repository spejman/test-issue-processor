# TypeScript CLI Application

A TypeScript CLI application with linting, type checking, and testing configured.

## Features

- TypeScript for type safety
- ESLint for code linting
- Jest for testing
- Commander.js for CLI interface
- Comprehensive test coverage

## Installation

```bash
npm install
```

## Development

```bash
# Run in development mode
npm run dev

# Build the project
npm run build

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Type checking
npm run typecheck
```

## Usage

After building the project:

```bash
# Run the CLI
npm start

# Or if installed globally
ts-cli greet World

# With options
ts-cli greet World --uppercase
```

## Project Structure

```
src/
├── index.ts           # Main CLI entry point
├── commands/          # CLI commands
│   ├── greet.ts      # Greet command implementation
│   └── greet.test.ts # Tests for greet command
└── utils/            # Utility functions
    ├── string.ts     # String utilities
    └── string.test.ts # Tests for string utilities
```

## Scripts

- `build`: Compile TypeScript to JavaScript
- `dev`: Run the application in development mode
- `start`: Run the compiled application
- `test`: Run tests
- `test:watch`: Run tests in watch mode
- `test:coverage`: Run tests with coverage report
- `lint`: Check for linting issues
- `lint:fix`: Fix auto-fixable linting issues
- `typecheck`: Check TypeScript types
- `prebuild`: Run lint and typecheck before building