import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync('assets/js/questions.js', 'utf8');
const context = {};
vm.createContext(context);
vm.runInContext(`${source}\nglobalThis.__QUESTION_BANK__ = QUESTION_BANK;`, context);
const questions = context.__QUESTION_BANK__;

if (!Array.isArray(questions)) throw new Error('QUESTION_BANK must be an array.');
if (questions.length < 520) throw new Error(`Expected at least 520 questions, found ${questions.length}.`);

const validAnswers = new Set(['A', 'B', 'C', 'D']);
const validDifficulties = new Set(['Foundational', 'Intermediate', 'Advanced', 'Expert']);
const ids = new Set();

for (const q of questions) {
  if (!Number.isInteger(q.id)) throw new Error(`Invalid question id: ${q.id}`);
  if (ids.has(q.id)) throw new Error(`Duplicate question id: ${q.id}`);
  ids.add(q.id);
  if (!q.topic || !q.question || !q.explanation) throw new Error(`Question ${q.id} is missing required text.`);
  if (!validDifficulties.has(q.difficulty)) throw new Error(`Question ${q.id} has invalid difficulty: ${q.difficulty}`);
  if (!Array.isArray(q.options) || q.options.length !== 4) throw new Error(`Question ${q.id} must have exactly 4 options.`);
  if (!validAnswers.has(q.answer)) throw new Error(`Question ${q.id} has invalid answer: ${q.answer}`);
}

const topics = [...new Set(questions.map(q => q.topic))].sort();
console.log(`Validated ${questions.length} questions across ${topics.length} topics.`);
console.log(topics.map(t => `- ${t}: ${questions.filter(q => q.topic === t).length}`).join('\n'));
