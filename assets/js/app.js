const ALL_QUESTIONS = [...QUESTION_BANK, ...(typeof HARD_QUESTION_BANK !== 'undefined' ? HARD_QUESTION_BANK : [])];
const TOPICS = [...new Set(ALL_QUESTIONS.map(q => q.topic))];
const DIFFICULTIES = ['Foundational', 'Intermediate', 'Advanced', 'Expert'];
const LETTERS = ['A', 'B', 'C', 'D'];
const INCIDENT_STEPS = ['Detect', 'Diagnose', 'Analyze', 'Remediate', 'Verify', 'Prevent'];
const $ = id => document.getElementById(id);

const state = {
  mode: 'practice',
  session: [],
  index: 0,
  responses: [],
  locked: false,
  streak: 0,
  bestStreak: 0,
  feedbackMode: 'instant',
  timeLimit: 0,
  timeLeft: 0,
  timer: null,
  questionStartedAt: 0,
  weakTopics: []
};

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, ch => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' }[ch]));
}
function shuffle(items) {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
function toast(message) {
  $('toast').textContent = message;
  $('toast').classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => $('toast').classList.remove('show'), 1800);
}
function stopTimer() { clearInterval(state.timer); state.timer = null; }

function applyPreferences() {
  const p = DEVOPS_STORAGE.prefs();
  const theme = p.theme === 'system' ? (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark') : p.theme;
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.setProperty('--accent', p.accent);
  document.body.classList.toggle('no-terminal', !p.terminalBlocks);
  document.body.classList.toggle('reduced-motion', !!p.reducedMotion);
  $('themeToggle').textContent = theme === 'dark' ? '☾' : '☀';
  document.querySelectorAll('[data-theme-choice]').forEach(b => b.classList.toggle('active', b.dataset.themeChoice === p.theme));
  document.querySelectorAll('#accentRow button').forEach(b => b.classList.toggle('active', b.dataset.accent === p.accent));
  $('terminalToggle').checked = p.terminalBlocks;
  $('motionToggle').checked = p.reducedMotion;
}

function updateBestScore() {
  const h = DEVOPS_STORAGE.history();
  const best = h.length ? Math.max(...h.map(x => Number(x.weighted || x.raw || 0))) : null;
  const label = best === null ? '—' : `${best}%`;
  $('sidebarBest').textContent = label;
  $('homeBest').textContent = label;
}

function show(viewName) {
  stopTimer();
  const id = `${viewName}View`;
  document.querySelectorAll('.view').forEach(v => v.classList.toggle('hidden', v.id !== id));
  document.querySelectorAll('[data-nav]').forEach(b => b.classList.toggle('active', b.dataset.nav === viewName));
  $('sidebar').classList.remove('open');
  window.scrollTo({ top: 0, behavior: document.body.classList.contains('reduced-motion') ? 'auto' : 'smooth' });
  if (viewName === 'achievements') renderAchievements();
}

function renderChecks() {
  const short = t => ({
    'Monitoring and Observability':'Monitoring',
    'Architecture and Incident Response':'Architecture'
  }[t] || t);
  $('topicChecks').innerHTML = TOPICS.map(t => `<label class="topic-choice"><input type="checkbox" name="topic" value="${escapeHtml(t)}" checked><span class="topic-symbol">${escapeHtml(short(t).slice(0,2).toUpperCase())}</span><span>${escapeHtml(short(t))}</span></label>`).join('');
  $('difficultyChecks').innerHTML = DIFFICULTIES.map(d => `<label class="difficulty-choice"><input type="checkbox" name="difficulty" value="${d}" checked><span>${d}</span></label>`).join('');
  document.querySelectorAll('#setupView input, #setupView select').forEach(el => el.addEventListener('change', updatePreview));
}

function selectedValues(name) { return [...document.querySelectorAll(`input[name="${name}"]:checked`)].map(x => x.value); }

function configureMode(mode) {
  state.mode = mode;
  document.querySelectorAll('input[name="topic"]').forEach(x => x.checked = true);
  document.querySelectorAll('input[name="difficulty"]').forEach(x => x.checked = true);
  if (mode === 'practice') {
    $('sessionSize').value = '20'; $('feedbackMode').value = 'instant'; $('timeLimit').value = '0';
  } else if (mode === 'interview') {
    $('sessionSize').value = '20'; $('feedbackMode').value = 'exam'; $('timeLimit').value = '60';
  } else if (mode === 'incident') {
    $('sessionSize').value = '10'; $('feedbackMode').value = 'instant'; $('timeLimit').value = '45';
    document.querySelectorAll('input[name="difficulty"]').forEach(x => x.checked = ['Advanced','Expert'].includes(x.value));
  } else {
    $('sessionSize').value = '20'; $('feedbackMode').value = 'instant'; $('timeLimit').value = '60';
  }
  updatePreview();
  if (mode === 'incident') startSession(); else show('setup');
}

function updatePreview() {
  const topics = selectedValues('topic');
  const diffs = selectedValues('difficulty');
  const modeLabel = ({practice:'Practice',interview:'Interview',incident:'Incident Lab',custom:'Custom Quiz'})[state.mode] || 'Custom Quiz';
  $('previewMode').textContent = modeLabel;
  $('previewTopics').textContent = topics.length === TOPICS.length ? `All ${TOPICS.length} domains` : `${topics.length} selected`;
  $('previewDifficulty').textContent = diffs.length === 4 ? 'All levels' : (diffs.join(', ') || 'None');
  $('previewQuestions').textContent = state.mode === 'incident' ? '6' : $('sessionSize').selectedOptions[0].textContent;
  $('previewTimer').textContent = Number($('timeLimit').value) ? `${$('timeLimit').value} sec` : 'Off';
}

function sortByDifficulty(pool) {
  const rank = { Foundational: 1, Intermediate: 2, Advanced: 3, Expert: 4 };
  return [...pool].sort((a,b) => rank[a.difficulty] - rank[b.difficulty]);
}

function startSession(customQuestions = null) {
  // Event handlers pass a MouseEvent argument by default. Only treat an
  // explicit array as a custom question list; otherwise build from filters.
  customQuestions = Array.isArray(customQuestions) ? customQuestions : null;
  const topics = selectedValues('topic');
  const diffs = selectedValues('difficulty');
  if (!customQuestions && (!topics.length || !diffs.length)) return toast('Select at least one topic and difficulty.');
  let pool = customQuestions || ALL_QUESTIONS.filter(q => topics.includes(q.topic) && diffs.includes(q.difficulty));
  if (state.mode === 'incident' && !customQuestions) {
    pool = ALL_QUESTIONS.filter(q => ['Advanced','Expert'].includes(q.difficulty));
  }
  if (!pool.length) return toast('No questions match these filters.');
  const requested = state.mode === 'incident' ? 6 : ($('sessionSize').value === 'all' ? pool.length : Math.min(Number($('sessionSize').value), pool.length));
  const ordered = $('questionOrder').value === 'difficulty' && state.mode !== 'incident' ? sortByDifficulty(pool) : shuffle(pool);
  state.session = ordered.slice(0, requested);
  state.index = 0; state.responses = []; state.locked = false; state.streak = 0; state.bestStreak = 0;
  state.feedbackMode = state.mode === 'interview' ? 'exam' : $('feedbackMode').value;
  state.timeLimit = state.mode === 'incident' ? 45 : Number($('timeLimit').value || 0);
  show('quiz');
  renderQuestion();
}

function currentQuestion() { return state.session[state.index]; }
function modeLabel() { return ({practice:'Practice',interview:'Interview',incident:'Incident Lab',custom:'Custom Quiz',weak:'Weak Areas'})[state.mode] || 'Practice'; }

function contextFor(q) {
  const topic = q.topic;
  const map = {
    'Linux':'Think in terms of evidence from CPU, memory, process state, filesystems, I/O, and system logs.',
    'Kubernetes':'Prioritize scheduler events, pod state, service discovery, resource constraints, and rollout behavior.',
    'Git':'Prefer recoverable, collaboration-safe operations over destructive shortcuts.',
    'Docker':'Separate image, container, network, and persistent-storage behavior when diagnosing the issue.',
    'CI/CD':'Optimize for repeatability, immutable artifacts, least privilege, and safe rollout controls.',
    'Cloud':'Look for single points of failure, blast radius, failure-domain capacity, and managed-service behavior.',
    'Monitoring and Observability':'Choose signals that explain user impact and help distinguish symptoms from root causes.',
    'Networking':'Follow the path layer by layer: name resolution, routing, ports, state, load balancing, and timeouts.',
    'Security':'Apply least privilege, short-lived identity, explicit trust boundaries, and auditable controls.',
    'Architecture and Incident Response':'Choose the action that reduces risk, preserves evidence, and addresses the underlying failure mode.',
    'Terraform and IaC':'Treat the plan and state as production control surfaces: understand drift, identity, replacement, and blast radius before applying.',
    'Helm':'Think about rendered manifests, Kubernetes API semantics, release history, and external side effects such as database migrations.',
    'GitOps and Argo CD':'Git is the declared state, but safe GitOps still needs review, promotion controls, reconciliation awareness, and a break-glass path.',
    'Service Mesh and Envoy':'Follow the request through policy, proxy configuration, endpoint selection, mTLS, retries, and upstream connection state.',
    'Kafka and Streaming':'Reason from partition ownership, delivery semantics, consumer throughput, durability settings, and backpressure—not just broker CPU.',
    'Redis':'Separate memory policy, key distribution, event-loop blocking, replication semantics, and client connection behavior.',
    'Database Operations':'Start with transaction behavior, execution plans, connection queues, replication consistency, and recovery requirements.',
    'SRE and Reliability':'Optimize for user-visible reliability, controlled blast radius, sustainable operations, and decisions tied to SLOs and error budgets.',
    'Performance Engineering':'Look for queueing, tail latency, workload-model bias, resource saturation, and the real serial or bounded part of the system.',
    'eBPF and Linux Observability':'Use the least invasive signal that answers the question, keep kernel safety and overhead in mind, and preserve workload attribution.'
  };
  return map[topic] || 'Choose the answer that best addresses the underlying operational risk, not just the visible symptom.';
}

function renderIncidentTimeline() {
  if (state.mode !== 'incident') { $('incidentTimeline').classList.add('hidden'); return; }
  $('incidentTimeline').classList.remove('hidden');
  $('incidentTimeline').innerHTML = INCIDENT_STEPS.map((s,i) => `<div class="incident-step ${i < state.index ? 'done' : ''} ${i === state.index ? 'active' : ''}"><b>${i+1}</b><span>${s}</span></div>`).join('');
}

function renderQuestion() {
  stopTimer();
  const q = currentQuestion();
  state.locked = false;
  state.questionStartedAt = Date.now();
  $('questionCounter').textContent = `Question ${state.index + 1} of ${state.session.length}`;
  $('questionSource').textContent = `Q${String(q.id).padStart(3,'0')} · ${q.pack || 'Core Bank'}`;
  const pct = Math.round((state.index / state.session.length) * 100);
  $('questionPercent').textContent = `${pct}%`;
  $('questionProgress').style.width = `${pct}%`;
  $('topicBadge').textContent = q.topic;
  $('difficultyBadge').textContent = q.difficulty;
  $('severityBadge').classList.toggle('hidden', state.mode !== 'incident');
  $('severityBadge').textContent = q.difficulty === 'Expert' ? 'SEV-1' : 'SEV-2';
  $('questionText').textContent = q.question;
  $('contextText').textContent = contextFor(q);
  $('options').innerHTML = q.options.map((opt,i) => `<button class="option" data-letter="${LETTERS[i]}"><span class="option-key">${LETTERS[i]}</span><span>${escapeHtml(opt)}</span></button>`).join('');
  $('options').querySelectorAll('.option').forEach(btn => btn.addEventListener('click', () => answer(btn.dataset.letter)));
  $('feedback').className = 'feedback hidden'; $('feedback').innerHTML = '';
  $('nextBtn').disabled = true;
  $('nextBtn').textContent = state.index === state.session.length - 1 ? 'View report →' : 'Next question →';
  $('quizModeLabel').textContent = modeLabel();
  $('quizTopicLabel').textContent = q.topic;
  $('quizDifficultyLabel').textContent = q.difficulty;
  $('infoTopic').textContent = q.topic; $('infoDifficulty').textContent = q.difficulty; $('infoMode').textContent = modeLabel();
  const bookmarked = DEVOPS_STORAGE.bookmarks().includes(Number(q.id));
  $('bookmarkBtn').textContent = bookmarked ? '★ Bookmarked' : '☆ Bookmark';
  renderIncidentTimeline();
  updateLiveScore();
  startTimer();
}

function startTimer() {
  const limit = state.timeLimit;
  $('timerBlock').classList.toggle('hidden', !limit);
  if (!limit) { $('infoTime').textContent = 'Untimed'; return; }
  state.timeLeft = limit;
  $('infoTime').textContent = `${limit}s limit`;
  updateTimerVisual();
  state.timer = setInterval(() => {
    state.timeLeft -= 1;
    updateTimerVisual();
    if (state.timeLeft <= 0) {
      stopTimer();
      timeoutQuestion();
    }
  }, 1000);
}
function updateTimerVisual() {
  $('timerValue').textContent = `00:${String(Math.max(0,state.timeLeft)).padStart(2,'0')}`;
  const pct = state.timeLimit ? (state.timeLeft / state.timeLimit) * 100 : 0;
  $('timerBar').style.width = `${pct}%`;
  $('timerBlock').classList.toggle('urgent', pct <= 25);
}

function recordResponse(letter, timedOut = false) {
  const q = currentQuestion();
  const seconds = Math.max(1, Math.round((Date.now() - state.questionStartedAt) / 1000));
  const correct = !timedOut && letter === q.answer;
  if (correct) { state.streak += 1; state.bestStreak = Math.max(state.bestStreak, state.streak); } else state.streak = 0;
  state.responses.push({ question: q, selected: letter, correct, timedOut, seconds });
  return { q, correct };
}

function answer(letter) {
  if (state.locked) return;
  state.locked = true;
  stopTimer();
  const { q, correct } = recordResponse(letter, false);
  const buttons = [...$('options').querySelectorAll('.option')];
  buttons.forEach(btn => {
    btn.disabled = true;
    const l = btn.dataset.letter;
    if (state.feedbackMode === 'instant') {
      if (l === q.answer) btn.classList.add('correct');
      else if (l === letter) btn.classList.add('wrong');
      else btn.classList.add('dim');
    } else if (l === letter) btn.classList.add('selected');
  });
  if (state.feedbackMode === 'instant') showFeedback(q, correct, letter);
  $('nextBtn').disabled = false;
  updateLiveScore();
}

function timeoutQuestion() {
  if (state.locked) return;
  state.locked = true;
  const { q } = recordResponse(null, true);
  $('options').querySelectorAll('.option').forEach(btn => {
    btn.disabled = true;
    if (state.feedbackMode === 'instant' && btn.dataset.letter === q.answer) btn.classList.add('correct');
    else btn.classList.add('dim');
  });
  if (state.feedbackMode === 'instant') {
    const f = $('feedback');
    f.className = 'feedback wrong';
    f.innerHTML = `<strong>Time expired — correct answer: ${q.answer}</strong><p>${escapeHtml(q.explanation)}</p>`;
  }
  $('nextBtn').disabled = false;
  updateLiveScore();
  if (state.mode === 'interview') setTimeout(next, 700);
}

function showFeedback(q, correct, letter) {
  const f = $('feedback');
  f.className = `feedback ${correct ? 'correct' : 'wrong'}`;
  const title = correct ? 'Correct' : `Incorrect — correct answer: ${q.answer}`;
  const whyWrong = q.whyWrong ? `<details class="why-wrong"><summary>Why the other options miss the mark</summary><div>${Object.entries(q.whyWrong).map(([key,reason]) => `<p><b>${key}.</b> ${escapeHtml(reason)}</p>`).join('')}</div></details>` : '';
  f.innerHTML = `<div class="feedback-head"><span>${correct ? '✓' : '!'}</span><strong>${title}</strong></div><p>${escapeHtml(q.explanation)}</p>${whyWrong}<div class="feedback-tip"><b>Production takeaway</b>${escapeHtml(contextFor(q))}</div>`;
}

function updateLiveScore() {
  const metrics = DEVOPS_SCORING.calculate(state.responses);
  $('liveScore').textContent = `${metrics.raw}%`;
  $('liveWeighted').textContent = `Weighted ${metrics.weighted}%`;
}

function next() {
  if (!state.locked) return;
  if (state.index >= state.session.length - 1) finish();
  else { state.index += 1; renderQuestion(); }
}

function finish() {
  stopTimer();
  if (!state.responses.length) { show('modes'); return; }
  const metrics = DEVOPS_SCORING.calculate(state.responses);
  const readiness = DEVOPS_SCORING.readiness(metrics.weighted, state.responses);
  const wrong = state.responses.filter(r => !r.correct);
  const result = { ...metrics, bestStreak: state.bestStreak, readiness: readiness.label };
  DEVOPS_STORAGE.saveSession(result, state.responses, state.mode);
  updateBestScore();

  $('finalPercent').textContent = `${metrics.raw}%`;
  $('scoreRing').style.setProperty('--score-angle', `${metrics.raw * 3.6}deg`);
  $('rawAccuracy').textContent = `${metrics.raw}%`;
  $('weightedScore').textContent = `${metrics.weighted}%`;
  $('streakStat').textContent = state.bestStreak;
  $('avgTimeStat').textContent = metrics.averageSeconds ? `${metrics.averageSeconds}s` : '—';
  $('readinessLabel').textContent = readiness.label;
  $('readinessText').textContent = readiness.text;
  $('resultMessage').textContent = `${state.responses.filter(r => r.correct).length}/${state.responses.length} correct · ${modeLabel()} mode`;

  const byTopic = {};
  state.responses.forEach(r => { const t = r.question.topic; byTopic[t] ||= { answered:0, correct:0 }; byTopic[t].answered++; if (r.correct) byTopic[t].correct++; });
  const rows = Object.entries(byTopic).map(([topic,s]) => ({ topic, pct: Math.round((s.correct/s.answered)*100), ...s })).sort((a,b) => a.pct - b.pct);
  state.weakTopics = rows.slice(0, Math.min(3, rows.length)).map(x => x.topic);
  $('topicPerformance').innerHTML = rows.map(r => `<div class="perf-row"><div><span>${escapeHtml(r.topic)}</span><b>${r.pct}%</b></div><div class="perf-track"><span style="width:${r.pct}%"></span></div></div>`).join('');

  $('reviewList').innerHTML = wrong.length ? wrong.map(r => {
    const q = r.question;
    const chosen = r.timedOut ? 'Timed out' : `${r.selected}. ${q.options[LETTERS.indexOf(r.selected)]}`;
    const right = `${q.answer}. ${q.options[LETTERS.indexOf(q.answer)]}`;
    return `<details class="review-item"><summary><span>Q${String(q.id).padStart(3,'0')}</span>${escapeHtml(q.topic)} — ${escapeHtml(q.question)}</summary><div><p><b>Your answer:</b> ${escapeHtml(chosen)}</p><p><b>Correct answer:</b> ${escapeHtml(right)}</p><p>${escapeHtml(q.explanation)}</p></div></details>`;
  }).join('') : '<div class="perfect-state">Perfect session — no incorrect answers.</div>';
  $('retryMissedBtn').disabled = !wrong.length;
  show('results');
}

function startWeakAreas() {
  const p = DEVOPS_STORAGE.progress();
  const ranked = Object.entries(p.topics || {}).filter(([,v]) => v.answered >= 3).map(([topic,v]) => ({ topic, pct: v.correct / v.answered })).sort((a,b) => a.pct - b.pct);
  const topics = ranked.slice(0,3).map(x => x.topic);
  const pool = ALL_QUESTIONS.filter(q => (topics.length ? topics.includes(q.topic) : state.weakTopics.includes(q.topic)) && ['Intermediate','Advanced','Expert'].includes(q.difficulty));
  if (!pool.length) return toast('Complete more sessions before weak-area practice is available.');
  state.mode = 'weak'; state.feedbackMode = 'instant'; state.timeLimit = 0;
  state.session = shuffle(pool).slice(0, Math.min(20, pool.length)); state.index = 0; state.responses = []; state.streak = 0; state.bestStreak = 0;
  show('quiz'); renderQuestion();
}

function achievements() {
  const p = DEVOPS_STORAGE.progress();
  const topicPct = topic => { const t = p.topics?.[topic]; return t?.answered ? Math.round((t.correct/t.answered)*100) : 0; };
  return [
    { name:'First Steps', desc:'Complete your first practice session.', unlocked:p.sessions >= 1, progress:`${Math.min(p.sessions,1)}/1` },
    { name:'Kubernetes Operator', desc:'Answer 25 Kubernetes questions with at least 75% accuracy.', unlocked:(p.topics?.Kubernetes?.answered||0)>=25 && topicPct('Kubernetes')>=75, progress:`${p.topics?.Kubernetes?.answered||0}/25` },
    { name:'Incident Responder', desc:'Complete 5 Incident Lab sessions.', unlocked:p.incidentLabs >= 5, progress:`${Math.min(p.incidentLabs,5)}/5` },
    { name:'Streak Master', desc:'Reach a 10-question correct streak.', unlocked:p.bestStreak >= 10, progress:`${Math.min(p.bestStreak,10)}/10` },
    { name:'Observability Specialist', desc:'Answer 20 monitoring questions with at least 80% accuracy.', unlocked:(p.topics?.['Monitoring and Observability']?.answered||0)>=20 && topicPct('Monitoring and Observability')>=80, progress:`${p.topics?.['Monitoring and Observability']?.answered||0}/20` },
    { name:'Production Engineer', desc:'Answer at least 100 questions with 75% overall accuracy.', unlocked:p.answered>=100 && (p.correct/p.answered)>=0.75, progress:`${Math.min(p.answered,100)}/100` }
  ];
}

function renderAchievements() {
  const p = DEVOPS_STORAGE.progress();
  $('totalSessions').textContent = p.sessions;
  $('totalAnswered').textContent = p.answered;
  $('totalCorrect').textContent = p.correct;
  $('allTimeStreak').textContent = p.bestStreak;
  $('achievementGrid').innerHTML = achievements().map((a,i) => `<article class="achievement-card ${a.unlocked ? 'unlocked' : ''}"><div class="achievement-icon">${['⌁','K8','△','★','◫','◇'][i]}</div><div><h3>${a.name}</h3><p>${a.desc}</p><div class="achievement-progress"><span>${a.progress}</span>${a.unlocked ? '<b>Completed</b>' : '<b>In progress</b>'}</div></div></article>`).join('');
}

function copySummary() {
  const metrics = DEVOPS_SCORING.calculate(state.responses);
  const readiness = DEVOPS_SCORING.readiness(metrics.weighted, state.responses);
  const text = `DevOps Interview Lab — ${modeLabel()}\nAccuracy: ${metrics.raw}%\nWeighted score: ${metrics.weighted}%\nReadiness: ${readiness.label}\nQuestions: ${state.responses.length}`;
  navigator.clipboard?.writeText(text).then(() => toast('Result summary copied.')).catch(() => toast('Copy not available in this browser.'));
}

function bindNavigation() {
  document.querySelectorAll('[data-nav]').forEach(el => el.addEventListener('click', e => { e.preventDefault(); show(el.dataset.nav); if (el.dataset.modeShortcut) configureMode(el.dataset.modeShortcut); }));
  document.querySelectorAll('[data-start-mode]').forEach(el => el.addEventListener('click', () => configureMode(el.dataset.startMode)));
}

function bindSettings() {
  $('themeToggle').addEventListener('click', () => { const p = DEVOPS_STORAGE.prefs(); DEVOPS_STORAGE.savePrefs({ theme: p.theme === 'dark' ? 'light' : 'dark' }); applyPreferences(); });
  document.querySelectorAll('[data-theme-choice]').forEach(b => b.addEventListener('click', () => { DEVOPS_STORAGE.savePrefs({ theme: b.dataset.themeChoice }); applyPreferences(); }));
  document.querySelectorAll('#accentRow button').forEach(b => b.addEventListener('click', () => { DEVOPS_STORAGE.savePrefs({ accent: b.dataset.accent }); applyPreferences(); }));
  $('terminalToggle').addEventListener('change', e => { DEVOPS_STORAGE.savePrefs({ terminalBlocks:e.target.checked }); applyPreferences(); });
  $('motionToggle').addEventListener('change', e => { DEVOPS_STORAGE.savePrefs({ reducedMotion:e.target.checked }); applyPreferences(); });
  $('clearProgressBtn').addEventListener('click', () => { if (confirm('Reset all locally saved DevOps Interview Lab progress and preferences?')) { DEVOPS_STORAGE.clearAll(); applyPreferences(); updateBestScore(); renderAchievements(); toast('Local data reset.'); } });
}

$('startSessionBtn').addEventListener('click', () => startSession());
$('nextBtn').addEventListener('click', next);
$('stopBtn').addEventListener('click', finish);
$('newSessionBtn').addEventListener('click', () => show('modes'));
$('retryMissedBtn').addEventListener('click', () => {
  const missed = state.responses.filter(r => !r.correct).map(r => r.question);
  if (!missed.length) return;
  state.mode = 'practice'; state.feedbackMode = 'instant'; state.timeLimit = 0; state.session = shuffle(missed); state.index = 0; state.responses = []; state.streak = 0; state.bestStreak = 0; show('quiz'); renderQuestion();
});
$('recommendedBtn').addEventListener('click', startWeakAreas);
$('shareResultsBtn').addEventListener('click', copySummary);
$('bookmarkBtn').addEventListener('click', () => { const q = currentQuestion(); const active = DEVOPS_STORAGE.toggleBookmark(q.id); $('bookmarkBtn').textContent = active ? '★ Bookmarked' : '☆ Bookmark'; toast(active ? 'Question bookmarked.' : 'Bookmark removed.'); });
$('selectAllTopics').addEventListener('click', () => { document.querySelectorAll('input[name="topic"]').forEach(x => x.checked = true); updatePreview(); });
$('mobileMenuBtn').addEventListener('click', () => $('sidebar').classList.toggle('open'));

document.addEventListener('keydown', e => {
  if ($('quizView').classList.contains('hidden')) return;
  const key = e.key.toUpperCase();
  if (LETTERS.includes(key) && !state.locked) answer(key);
  else if (e.key === 'Enter' && state.locked) next();
});

renderChecks();
bindNavigation();
bindSettings();
applyPreferences();
updateBestScore();
updatePreview();
show('home');
