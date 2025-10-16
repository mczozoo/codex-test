# codex-test

Just a simple project for testing Codex

## Country CLI

This repository now includes a simple Node.js command-line script that fetches
and prints the list of all countries in the world.

### Prerequisites

- Node.js 18 or newer (for built-in `fetch` support)

### Usage

```bash
npm install # no dependencies, but keeps lockfile in sync if added later
npm start
```

The script fetches data from [REST Countries](https://restcountries.com) and
prints the country names in alphabetical order.
