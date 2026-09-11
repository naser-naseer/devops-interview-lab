# Contributing

Contributions that improve technical accuracy, production realism, accessibility, or usability are welcome.

## Local validation

```bash
npm run check
```

Open `index.html` directly in a browser for a quick local test, or serve the repository with any static HTTP server.

## Question changes

Questions live in `assets/js/questions.js`. Each question must include:

- unique numeric `id`
- `topic`
- one of: `Foundational`, `Intermediate`, `Advanced`, `Expert`
- `question`
- exactly four `options`
- answer `A`, `B`, `C`, or `D`
- concise technical `explanation`

Prefer scenario-based questions that test diagnosis, trade-offs, and production judgment over trivia.
