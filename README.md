# TypeScript CLI Application

A TypeScript CLI application with linting, typechecking, and testing configured.

## Features

- TypeScript for type safety
- ESLint for code quality
- Jest for testing with coverage
- Commander.js for CLI functionality
- Fully configured build system

## Installation

```bash
npm install
```

## Development

```bash
# Run the CLI in development mode
npm run dev -- greet "Your Name"

# Build the project
npm run build

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch

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
npm start -- greet "Your Name"

# With options
npm start -- greet "Your Name" --uppercase

# Get help
npm start -- --help
```

## CLI Commands

### greet

Greets the specified person.

```bash
npm run dev -- greet <name> [options]

Options:
  -u, --uppercase  Convert greeting to uppercase
```

## Project Structure

```
├── src/
│   ├── cli.ts           # Main CLI entry point
│   ├── index.ts         # Library exports
│   ├── commands/        # CLI command implementations
│   │   └── greet.ts
│   ├── types/           # TypeScript type definitions
│   └── __tests__/       # Test files
│       ├── cli.test.ts
│       ├── greet.test.ts
│       └── index.test.ts
├── dist/                # Compiled JavaScript (generated)
├── coverage/            # Test coverage reports (generated)
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── jest.config.js       # Jest testing configuration
└── .eslintrc.js         # ESLint configuration
```

## Testing

The project includes comprehensive unit and integration tests:

- Unit tests for all functions
- Integration tests for CLI commands
- Coverage reporting configured
- Test coverage thresholds enforced

## License

MIT