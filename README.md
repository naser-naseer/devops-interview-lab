# DevOps Interview Lab

> 520+ scenario-based interview questions for engineers who want to practice production reasoning—not just memorize commands.

**DevOps Interview Lab** is a lightweight, browser-based practice environment covering Linux, Git, CI/CD, Docker, Kubernetes, Cloud, Monitoring, Networking, Security, Architecture, and Incident Response.

The project is intentionally static: no backend, no login, no database, and no tracking. It can run locally or be published directly with GitHub Pages.


## Version 2 interface

The current release adds a production-console style UI with four practice modes: **Practice**, **Interview**, **Incident Lab**, and **Custom Quiz**. It also adds timers, weighted difficulty scoring, readiness reporting, bookmarks, local achievements, dark/light/system themes, and cumulative topic progress while keeping the original 520-question bank intact.

See [`docs/V2-UPGRADE.md`](docs/V2-UPGRADE.md) for the upgrade and deployment notes.

## Why this project exists

DevOps interviews increasingly test how an engineer reasons through failure modes, operational trade-offs, and production incidents. This project turns a 520+ question bank into short randomized practice sessions that are easy to repeat.

Instead of focusing only on syntax, the question bank emphasizes situations such as:

- Kubernetes scheduling, probes, services, DNS, resource limits, and rollouts
- Linux CPU, memory, process, filesystem, and I/O diagnosis
- Git recovery, rebasing, and safe collaboration workflows
- Docker networking, persistence, images, and runtime behavior
- CI/CD deployment safety and credential handling
- Cloud resilience, multi-AZ design, and failure capacity
- Prometheus alerting, ratios, observability, and incident signals
- Networking, security, architecture, and production incident response

## Features

- 520+ embedded MCQs
- Randomized questions without repetition
- Topic and difficulty filters
- 10, 20, 50, 100, or all-question sessions
- Instant-feedback and exam modes
- Explanations for every answer
- Live score and progress tracking
- Topic-by-topic performance report
- Review and retry of missed questions
- Keyboard shortcuts (`A-D`, `Enter`)
- Browser-local best-score storage
- Works offline
- No backend or external runtime dependencies

## Live demo

After enabling GitHub Pages, your site will be available at:

```text
https://<your-github-username>.github.io/devops-interview-lab/
```

Replace `<your-github-username>` in this README after publishing.

## Repository structure

```text
devops-interview-lab/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── question_improvement.md
│   ├── workflows/
│   │   ├── ci.yml
│   │   └── deploy-pages.yml
│   └── pull_request_template.md
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── images/
│   │   ├── devops-interview-lab.png
│   │   └── devops-lab.svg
│   └── js/
│       ├── app.js
│       └── questions.js
├── docs/
│   └── DEPLOYMENT.md
├── resources/
│   └── devops-interview-520-mcq-question-bank.pdf
├── scripts/
│   └── validate-questions.mjs
├── .gitignore
├── .nojekyll
├── CONTRIBUTING.md
├── LICENSE
├── SECURITY.md
├── index.html
├── package.json
└── README.md
```

## Run locally

The simplest option is to open `index.html` directly in a modern browser.

For an HTTP server:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Validate the project

Node.js is only needed for repository validation, not for running the quiz.

```bash
npm run check
```

The validator checks JavaScript syntax and verifies that the question bank has at least 520 questions, unique IDs, valid difficulty levels, four options per question, and valid A-D answers.

## Publish with GitHub Pages

1. Create a new public GitHub repository named `devops-interview-lab`.
2. Push this project to the `main` branch.
3. Open **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **GitHub Actions**.
5. Open the **Actions** tab and confirm `Deploy GitHub Pages` succeeds.
6. Your live URL will be shown in the deployment environment and Pages settings.

The included workflow validates the question bank, stages the static site, uploads the Pages artifact, and deploys it to the `github-pages` environment.

## First push

```bash
git init
git add .
git commit -m "feat: launch DevOps Interview Lab"
git branch -M main
git remote add origin https://github.com/<your-github-username>/devops-interview-lab.git
git push -u origin main
```

## CI/CD

Two workflows are included:

**Quality Checks** runs on pushes and pull requests to validate JavaScript and question-bank integrity.

**Deploy GitHub Pages** runs on pushes to `main` or manually. It validates the project and publishes the static site through GitHub Pages.

## Roadmap

Potential extensions:

- Timed interview mode
- Bookmarked questions
- Weak-topic adaptive sessions
- Searchable question browser
- Import/export session results
- Question statistics by topic and difficulty
- PWA/offline installation
- Optional JSON question format and contributor tooling

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Technical corrections and production-realistic scenarios are especially welcome.

## Privacy

The application is entirely client-side. Scores are stored in browser local storage and are not sent to a server.

## License

Released under the [MIT License](LICENSE).

---

If this project helps with your interview preparation, consider starring the repository and sharing it with other engineers.
