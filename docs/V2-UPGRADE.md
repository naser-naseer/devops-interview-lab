# DevOps Interview Lab v2 Upgrade

Version 2 keeps the original 520-question bank and replaces the presentation layer with a production-console style experience.

## Main changes

- Dark-first professional interface with light/system themes
- Practice, Interview, Incident Lab, and Custom Quiz modes
- Timed interview sessions
- Weighted scoring by difficulty
- Interview-readiness report
- Incident Lab progression (Detect → Diagnose → Analyze → Remediate → Verify → Prevent)
- Local achievements and cumulative topic progress
- Bookmarks
- Accent color and reduced-motion preferences
- Responsive desktop/mobile layout

## Local validation

```bash
npm run check
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Deploy

Push to `main`. The existing `Deploy GitHub Pages` workflow validates the project and publishes the site automatically.
