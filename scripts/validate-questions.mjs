import fs from 'node:fs';
import vm from 'node:vm';

const coreSource = fs.readFileSync('assets/js/questions.js', 'utf8');
const hardSource = fs.readFileSync('assets/js/questions-hardpack.js', 'utf8');
const context = {};
vm.createContext(context);
vm.runInContext(`${coreSource}\n${hardSource}\nglobalThis.__QUESTION_BANK__ = QUESTION_BANK; globalThis.__HARD_QUESTION_BANK__ = HARD_QUESTION_BANK;`, context);

const core = context.__QUESTION_BANK__;
const hard = context.__HARD_QUESTION_BANK__;
if (!Array.isArray(core)) throw new Error('QUESTION_BANK must be an array.');
if (!Array.isArray(hard)) throw new Error('HARD_QUESTION_BANK must be an array.');
if (core.length < 520) throw new Error(`Expected at least 520 core questions, found ${core.length}.`);
if (hard.length < 600) throw new Error(`Expected at least 600 hard-pack questions, found ${hard.length}.`);

const questions = [...core, ...hard];
if (questions.length < 1120) throw new Error(`Expected at least 1120 total questions, found ${questions.length}.`);

const validAnswers = new Set(['A', 'B', 'C', 'D']);
const validDifficulties = new Set(['Foundational', 'Intermediate', 'Advanced', 'Expert']);
const ids = new Set();
const stems = new Set();

for (const q of questions) {
  if (!Number.isInteger(q.id)) throw new Error(`Invalid question id: ${q.id}`);
  if (ids.has(q.id)) throw new Error(`Duplicate question id: ${q.id}`);
  ids.add(q.id);
  if (!q.topic || !q.question || !q.explanation) throw new Error(`Question ${q.id} is missing required text.`);
  if (!validDifficulties.has(q.difficulty)) throw new Error(`Question ${q.id} has invalid difficulty: ${q.difficulty}`);
  if (!Array.isArray(q.options) || q.options.length !== 4) throw new Error(`Question ${q.id} must have exactly 4 options.`);
  if (!validAnswers.has(q.answer)) throw new Error(`Question ${q.id} has invalid answer: ${q.answer}`);
  if (new Set(q.options).size !== 4) throw new Error(`Question ${q.id} has duplicate options.`);
  const normalized = q.question.trim().toLowerCase().replace(/\s+/g, ' ');
  if (stems.has(normalized)) throw new Error(`Exact duplicate question stem found at ${q.id}.`);
  stems.add(normalized);
  if (q.whyWrong) {
    for (const [letter, reason] of Object.entries(q.whyWrong)) {
      if (!validAnswers.has(letter) || letter === q.answer || !reason) {
        throw new Error(`Question ${q.id} has invalid whyWrong entry for ${letter}.`);
      }
    }
  }
}

const topics = [...new Set(questions.map(q => q.topic))].sort();
console.log(`Validated ${questions.length} questions across ${topics.length} topics.`);
console.log(`Core bank: ${core.length}`);
console.log(`Hard pack: ${hard.length}`);
console.log(topics.map(t => `- ${t}: ${questions.filter(q => q.topic === t).length}`).join('\n'));
