const DEVOPS_STORAGE = (() => {
  const KEYS = {
    history: 'devopsLabV2History',
    progress: 'devopsLabV2Progress',
    bookmarks: 'devopsLabV2Bookmarks',
    prefs: 'devopsLabV2Prefs'
  };

  const defaults = {
    progress: { sessions: 0, answered: 0, correct: 0, bestStreak: 0, topics: {}, incidentLabs: 0 },
    prefs: { theme: 'dark', accent: '#1597e5', terminalBlocks: true, reducedMotion: false }
  };

  function read(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
  }
  function write(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
  function history() { return read(KEYS.history, []); }
  function progress() { return read(KEYS.progress, structuredClone(defaults.progress)); }
  function prefs() { return { ...defaults.prefs, ...read(KEYS.prefs, {}) }; }
  function bookmarks() { return read(KEYS.bookmarks, []); }

  function saveSession(result, responses, mode) {
    const h = history();
    h.unshift({ date: new Date().toISOString(), mode, ...result });
    write(KEYS.history, h.slice(0, 50));

    const p = progress();
    p.sessions += 1;
    p.answered += responses.length;
    p.correct += responses.filter(r => r.correct).length;
    p.bestStreak = Math.max(p.bestStreak || 0, result.bestStreak || 0);
    if (mode === 'incident') p.incidentLabs += 1;
    responses.forEach(r => {
      const topic = r.question.topic;
      p.topics[topic] ||= { answered: 0, correct: 0 };
      p.topics[topic].answered += 1;
      if (r.correct) p.topics[topic].correct += 1;
    });
    write(KEYS.progress, p);
  }

  function toggleBookmark(id) {
    const list = bookmarks();
    const n = Number(id);
    const next = list.includes(n) ? list.filter(x => x !== n) : [...list, n];
    write(KEYS.bookmarks, next);
    return next.includes(n);
  }

  function savePrefs(next) { write(KEYS.prefs, { ...prefs(), ...next }); }
  function clearAll() { Object.values(KEYS).forEach(k => localStorage.removeItem(k)); }

  return { history, progress, prefs, bookmarks, saveSession, toggleBookmark, savePrefs, clearAll };
})();
