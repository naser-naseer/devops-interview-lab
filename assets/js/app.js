const TOPICS = [...new Set(QUESTION_BANK.map(q => q.topic))];
const DIFFICULTIES = ['Foundational','Intermediate','Advanced','Expert'];
const LETTERS = ['A','B','C','D'];

const $ = id => document.getElementById(id);
const state = { session: [], index: 0, responses: [], locked: false, streak: 0, bestStreak: 0, feedbackMode: 'instant' };

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
}
function shuffle(items) {
  const a = [...items];
  for (let i=a.length-1;i>0;i--) { const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}
function toast(msg) {
  $('toast').textContent = msg; $('toast').classList.add('show');
  clearTimeout(toast.timer); toast.timer=setTimeout(()=>$('toast').classList.remove('show'),1800);
}
function renderChecks() {
  $('topicChecks').innerHTML = TOPICS.map((t,i)=>`<label class="check"><input type="checkbox" name="topic" value="${escapeHtml(t)}" checked><span>${escapeHtml(t)} <small>(${QUESTION_BANK.filter(q=>q.topic===t).length})</small></span></label>`).join('');
  $('difficultyChecks').innerHTML = DIFFICULTIES.map(d=>`<label class="check"><input type="checkbox" name="difficulty" value="${d}" checked><span>${d}</span></label>`).join('');
}
function selectedValues(name) { return [...document.querySelectorAll(`input[name="${name}"]:checked`)].map(x=>x.value); }
function show(view) {
  ['setupView','quizView','resultsView'].forEach(id=>$(id).classList.toggle('hidden', id!==view));
  window.scrollTo({top:0, behavior:'smooth'});
}
function startSession(customQuestions=null) {
  const topics=selectedValues('topic'), diffs=selectedValues('difficulty');
  if (!customQuestions && (!topics.length || !diffs.length)) return toast('Select at least one topic and difficulty.');
  let pool = customQuestions || QUESTION_BANK.filter(q=>topics.includes(q.topic)&&diffs.includes(q.difficulty));
  if (!pool.length) return toast('No questions match the selected filters.');
  const sizeVal=$('sessionSize').value;
  const size=sizeVal==='all'?pool.length:Math.min(Number(sizeVal),pool.length);
  state.session=shuffle(pool).slice(0,size);
  state.index=0; state.responses=[]; state.locked=false; state.streak=0; state.bestStreak=0;
  state.feedbackMode=$('feedbackMode').value;
  show('quizView'); renderQuestion();
}
function currentQuestion() { return state.session[state.index]; }
function renderQuestion() {
  const q=currentQuestion();
  state.locked=false;
  $('questionId').textContent=`Question ${state.index+1} of ${state.session.length} · Source Q${String(q.id).padStart(3,'0')}`;
  $('topicBadge').textContent=q.topic;
  $('difficultyBadge').textContent=q.difficulty;
  $('questionText').textContent=q.question;
  $('options').innerHTML=q.options.map((opt,i)=>`<button class="option" data-letter="${LETTERS[i]}"><span class="option-key">${LETTERS[i]}</span><span>${escapeHtml(opt)}</span></button>`).join('');
  [...$('options').querySelectorAll('.option')].forEach(btn=>btn.addEventListener('click',()=>answer(btn.dataset.letter)));
  $('feedback').className='feedback hidden'; $('feedback').innerHTML='';
  $('nextBtn').disabled=true; $('nextBtn').textContent=state.index===state.session.length-1?'View results':'Next question';
  updateHeader();
}
function answer(letter) {
  if (state.locked) return;
  state.locked=true;
  const q=currentQuestion(); const correct=letter===q.answer;
  if (correct) { state.streak++; state.bestStreak=Math.max(state.bestStreak,state.streak); } else state.streak=0;
  state.responses.push({question:q, selected:letter, correct});
  const buttons=[...$('options').querySelectorAll('.option')];
  buttons.forEach(btn=>{
    btn.disabled=true;
    const l=btn.dataset.letter;
    if (state.feedbackMode==='instant') {
      if (l===q.answer) btn.classList.add('correct');
      else if (l===letter) btn.classList.add('wrong');
      else btn.classList.add('dim');
    } else if (l===letter) btn.style.borderColor='#8ba7ed';
  });
  if (state.feedbackMode==='instant') {
    const f=$('feedback'); f.className=`feedback ${correct?'correct':'wrong'}`;
    f.innerHTML=`<strong>${correct?'Correct':'Incorrect - correct answer: '+q.answer}</strong>${escapeHtml(q.explanation)}`;
  }
  $('nextBtn').disabled=false; updateHeader();
}
function updateHeader() {
  const answered=state.responses.length, correct=state.responses.filter(r=>r.correct).length;
  $('progressBar').style.width=`${(answered/state.session.length)*100}%`;
  $('progressLabel').textContent=`${answered}/${state.session.length}`;
  $('liveScore').textContent=`${correct} correct`;
}
function next() {
  if (!state.locked) return;
  if (state.index>=state.session.length-1) finish(); else { state.index++; renderQuestion(); }
}
function finish() {
  if (!state.responses.length) { show('setupView'); return; }
  const answered=state.responses.length, correct=state.responses.filter(r=>r.correct).length;
  const wrong=answered-correct, pct=Math.round(correct/answered*100);
  $('finalPercent').textContent=`${pct}%`;
  $('scoreCircle').style.setProperty('--score-angle',`${pct*3.6}deg`);
  $('answeredStat').textContent=answered; $('correctStat').textContent=correct; $('wrongStat').textContent=wrong; $('streakStat').textContent=state.bestStreak;
  let heading='Keep building'; let msg='Review the explanations and repeat weak topics.';
  if (pct>=80) { heading='Strong interview readiness'; msg='Excellent result. Continue with advanced and expert scenarios.'; }
  else if (pct>=65) { heading='Developing well'; msg='Good foundation. Target the topics with the lowest scores.'; }
  else if (pct>=50) { heading='Focused revision needed'; msg='Use the missed-question review to strengthen key concepts.'; }
  $('resultHeading').textContent=heading; $('resultMessage').textContent=msg;
  const byTopic={};
  state.responses.forEach(r=>{ const t=r.question.topic; byTopic[t] ||= {answered:0,correct:0}; byTopic[t].answered++; if(r.correct)byTopic[t].correct++; });
  $('breakdownBody').innerHTML=Object.entries(byTopic).sort((a,b)=>(a[1].correct/a[1].answered)-(b[1].correct/b[1].answered)).map(([t,s])=>`<tr><td>${escapeHtml(t)}</td><td>${s.correct}</td><td>${s.answered}</td><td><strong>${Math.round(s.correct/s.answered*100)}%</strong></td></tr>`).join('');
  const missed=state.responses.filter(r=>!r.correct);
  $('reviewList').innerHTML=missed.length?missed.map(r=>{
    const q=r.question, chosen=q.options[LETTERS.indexOf(r.selected)], right=q.options[LETTERS.indexOf(q.answer)];
    return `<details class="review-item"><summary>Q${String(q.id).padStart(3,'0')} · ${escapeHtml(q.topic)} — ${escapeHtml(q.question)}</summary><p><strong>Your answer (${r.selected}):</strong> ${escapeHtml(chosen)}<br><strong>Correct (${q.answer}):</strong> ${escapeHtml(right)}<br><br>${escapeHtml(q.explanation)}</p></details>`;
  }).join(''):'<div class="empty">Perfect session — no incorrect answers.</div>';
  $('retryMissedBtn').disabled=!missed.length;
  saveHistory({date:new Date().toISOString(),answered,correct,pct});
  show('resultsView');
}
function saveHistory(result) {
  const history=JSON.parse(localStorage.getItem('devopsQuizHistory')||'[]'); history.unshift(result); localStorage.setItem('devopsQuizHistory',JSON.stringify(history.slice(0,20))); updateBest();
}
function updateBest() {
  const h=JSON.parse(localStorage.getItem('devopsQuizHistory')||'[]');
  if (!h.length) $('bestScore').textContent='Best score: Not attempted';
  else { const best=Math.max(...h.map(x=>x.pct)); $('bestScore').textContent=`Best score: ${best}% · ${h.length} session${h.length===1?'':'s'}`; }
}
$('startBtn').addEventListener('click',()=>startSession());
$('nextBtn').addEventListener('click',next);
$('stopBtn').addEventListener('click',finish);
$('newSessionBtn').addEventListener('click',()=>show('setupView'));
$('retryMissedBtn').addEventListener('click',()=>{
  const missed=state.responses.filter(r=>!r.correct).map(r=>r.question); if(missed.length) startSession(missed);
});
$('selectAllBtn').addEventListener('click',()=>{ document.querySelectorAll('input[type=checkbox]').forEach(x=>x.checked=true); toast('All topics and levels selected.'); });
$('clearProgressBtn').addEventListener('click',()=>{ if(confirm('Clear locally saved quiz history?')) { localStorage.removeItem('devopsQuizHistory'); updateBest(); toast('Saved progress cleared.'); } });
document.addEventListener('keydown',e=>{
  if ($('quizView').classList.contains('hidden')) return;
  const key=e.key.toUpperCase();
  if (LETTERS.includes(key) && !state.locked) answer(key);
  else if (e.key==='Enter' && state.locked) next();
});
renderChecks(); updateBest();
