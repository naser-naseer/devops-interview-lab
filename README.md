# DevOps Interview Lab

> 1,120+ production-focused interview questions for engineers who want to practice how real systems fail—not just memorize commands.

DevOps Interview Lab is a static browser-based practice environment for DevOps, SRE, cloud, platform, Linux, Kubernetes, networking, observability, security, infrastructure-as-code, streaming, databases, and incident response.

There is no backend, login, database, or tracking. Run it locally or publish it directly with GitHub Pages.

## Version 3 — Hard Pack

Version 3 keeps the original 520-question Core Bank and adds **600 Advanced/Expert questions**, taking the project to **1,120 questions across 20 domains**.

The additional questions are deliberately written like conversations you might have during an interview, change review, design discussion, or production incident. They emphasize judgement, evidence, trade-offs, and what you would actually do next.

The 600-question Hard Pack is split into:

- **300 Senior Production Pack questions** that take proven DevOps concepts and place them in more realistic on-call, release, outage, and review situations.
- **300 Specialist Deep-Dive questions** across Terraform/IaC, Helm, GitOps/Argo CD, Service Mesh/Envoy, Kafka, Redis, Database Operations, SRE, Performance Engineering, and eBPF/Linux observability.

Specialist questions also include **“Why the other options miss the mark”** explanations so the app teaches the reasoning, not only the answer.

## Current coverage

The app now covers 20 domains:

- Linux
- Git
- CI/CD
- Docker
- Kubernetes
- Cloud
- Monitoring and Observability
- Networking
- Security
- Architecture and Incident Response
- Terraform and IaC
- Helm
- GitOps and Argo CD
- Service Mesh and Envoy
- Kafka and Streaming
- Redis
- Database Operations
- SRE and Reliability
- Performance Engineering
- eBPF and Linux Observability

## Features

- 1,120+ embedded questions
- 600-question Advanced/Expert Hard Pack
- Practice, Interview, Incident Lab, and Custom Quiz modes
- Topic and difficulty filters
- Timed interview sessions
- Weighted scoring and readiness reporting
- Immediate feedback or exam-style feedback
- Humanized production scenarios
- Detailed explanations
- “Why the other options miss the mark” for specialist questions
- Bookmarks, achievements, and local progress
- Weak-area retry sessions
- Dark, light, and system themes
- No backend or external runtime dependency

## Question files

The question bank is intentionally split so the original bank stays easy to preserve:

```text
assets/js/questions.js            # Original 520-question Core Bank
assets/js/questions-hardpack.js   # New 600-question Hard Pack
```

The browser combines both at runtime.

A readable Hard Pack reference is also included:

```text
resources/devops-hardpack-600-question-bank.md
resources/devops-hardpack-600-question-bank.json
```

## Run locally

```bash
python3 -m http.server 8080
```

Open:

```text
http://localhost:8080
```

## Validate everything

Node.js is only needed for repository validation:

```bash
npm run check
```

Expected result:

```text
Validated 1120 questions across 20 topics.
Core bank: 520
Hard pack: 600
```

The validator checks JavaScript syntax, unique question IDs, valid difficulty levels, four distinct options, valid A-D answers, duplicate stems, and optional `whyWrong` metadata.

## GitHub Pages deployment

The existing Pages workflow still works. It validates the project, copies `index.html`, `assets/`, and `resources/`, then deploys the static site.

For an upgrade from the existing v2 repository, follow:

[`docs/DEPLOY-HARDPACK-V3.md`](docs/DEPLOY-HARDPACK-V3.md)

The live project URL is:

```text
https://naser-naseer.github.io/devops-interview-lab/
```

## CI/CD

**Quality Checks** runs on pushes and pull requests.

**Deploy GitHub Pages** runs when `main` changes or when triggered manually.

No workflow redesign is required for Version 3 because the existing workflow already publishes the `assets` and `resources` directories.

## Privacy

Everything runs in the browser. Scores and preferences are stored in local storage and are not sent to a server.

## License

Released under the [MIT License](LICENSE).
