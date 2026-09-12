# Deploy DevOps Interview Lab v3 Hard Pack

This upgrade adds 600 questions without replacing the original 520-question bank.

## 1. Start from a clean main branch

```bash
cd /home/naser/Desktop/scripts/MyGithub/devops-interview-lab
git checkout main
git pull origin main
git status
```

Expected:

```text
nothing to commit, working tree clean
```

## 2. Create the feature branch

```bash
git checkout -b feature/v3-hard-question-pack
```

Verify:

```bash
git branch --show-current
```

Expected:

```text
feature/v3-hard-question-pack
```

## 3. Extract the update package outside the repository

```bash
rm -rf /tmp/devops-v3-hardpack
mkdir -p /tmp/devops-v3-hardpack
unzip -q ~/Downloads/devops-interview-lab-v3-hardpack-update.zip -d /tmp/devops-v3-hardpack
```

Set the patch path:

```bash
PATCH=/tmp/devops-v3-hardpack/devops-interview-lab-v3-hardpack-update
```

Review the files:

```bash
find "$PATCH" -type f | sort
```

## 4. Copy the patch into the repository

From the repository root:

```bash
rsync -av "$PATCH"/ ./
```

The update intentionally does **not** contain `assets/js/questions.js`, so the original 520-question bank remains untouched.

Verify:

```bash
git status --short
```

You should see changes including:

```text
M  index.html
M  assets/css/styles.css
M  assets/js/app.js
A  assets/js/questions-hardpack.js
M  scripts/validate-questions.mjs
M  package.json
M  README.md
A  resources/devops-hardpack-600-question-bank.md
A  resources/devops-hardpack-600-question-bank.json
A  docs/DEPLOY-HARDPACK-V3.md
```

Confirm the Core Bank is unchanged:

```bash
git diff -- assets/js/questions.js
```

There should be no output.

## 5. Validate all 1,120 questions

```bash
npm run check
```

Expected headline:

```text
Validated 1120 questions across 20 topics.
Core bank: 520
Hard pack: 600
```

Do not continue if validation fails.

## 6. Run locally

```bash
python3 -m http.server 8080
```

Open:

```text
http://localhost:8080
```

Verify:

- Home shows `1,120+` questions and `20` domains.
- Practice mode starts normally.
- Interview mode starts normally.
- Incident Lab starts normally.
- Custom Quiz starts normally.
- New topics such as Terraform, Helm, Kafka, Redis, SRE, and eBPF appear in filters.
- A Specialist Deep-Dive question shows “Why the other options miss the mark” after answering in Practice mode.
- Resources includes the 600-question Hard Pack reference.

Stop the server with `Ctrl+C`.

## 7. Review the Git changes

```bash
git diff --check
git diff --stat
git diff --name-status
```

Confirm again that `assets/js/questions.js` is not modified.

## 8. Commit

```bash
git add \
  index.html \
  assets/css/styles.css \
  assets/js/app.js \
  assets/js/questions-hardpack.js \
  scripts/validate-questions.mjs \
  package.json \
  README.md \
  resources/devops-hardpack-600-question-bank.md \
  resources/devops-hardpack-600-question-bank.json \
  docs/DEPLOY-HARDPACK-V3.md
```

Check staged files:

```bash
git diff --cached --name-status
```

Commit:

```bash
git commit -m "feat: add 600-question advanced DevOps hard pack"
```

## 9. Push the feature branch

```bash
git push -u origin feature/v3-hard-question-pack
```

## 10. Create a pull request

With GitHub CLI:

```bash
gh pr create \
  --base main \
  --head feature/v3-hard-question-pack \
  --title "DevOps Interview Lab v3 — 600-question hard pack" \
  --body "Adds 600 humanized Advanced/Expert production questions, 10 specialist domains, richer answer reasoning, and validates 1,120 total questions while preserving the original 520-question bank."
```

Review the PR's **Files changed** tab. Make sure `questions-hardpack.js`, `index.html`, `app.js`, and `styles.css` are included.

## 11. Wait for CI

```bash
gh pr checks --watch
```

You want `Quality Checks` to pass.

## 12. Merge

```bash
gh pr merge --merge --delete-branch
```

Or merge from the GitHub UI.

## 13. Refresh local main

```bash
git checkout main
git pull origin main
git fetch --prune origin
```

## 14. Watch GitHub Pages deployment

```bash
gh run list --workflow deploy-pages.yml --branch main --limit 3
```

To watch the newest run:

```bash
RUN_ID=$(gh run list \
  --workflow deploy-pages.yml \
  --branch main \
  --limit 1 \
  --json databaseId \
  --jq '.[0].databaseId')

gh run watch "$RUN_ID" --exit-status
```

## 15. Verify production

```bash
curl -I https://naser-naseer.github.io/devops-interview-lab/
```

Expected:

```text
HTTP/2 200
```

Confirm the new question count:

```bash
curl -sL https://naser-naseer.github.io/devops-interview-lab/ | grep -n "1,120+"
```

Confirm the Hard Pack JavaScript is deployed:

```bash
curl -I https://naser-naseer.github.io/devops-interview-lab/assets/js/questions-hardpack.js
```

Expected:

```text
HTTP/2 200
```

Confirm the readable Hard Pack is deployed:

```bash
curl -I https://naser-naseer.github.io/devops-interview-lab/resources/devops-hardpack-600-question-bank.md
```

Finally open:

```text
https://naser-naseer.github.io/devops-interview-lab/?v=3
```

## 16. Optional branch cleanup

After production is verified:

```bash
git checkout main
git pull origin main
git branch -d feature/v3-hard-question-pack
git push origin --delete feature/v3-hard-question-pack 2>/dev/null || true
git fetch --prune origin
git branch -a
```
