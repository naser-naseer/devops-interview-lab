const DEVOPS_SCORING = (() => {
  const WEIGHTS = { Foundational: 1, Intermediate: 2, Advanced: 3, Expert: 4 };

  function calculate(responses) {
    if (!responses.length) return { raw: 0, weighted: 0, earned: 0, possible: 0, averageSeconds: 0 };
    const correct = responses.filter(r => r.correct).length;
    let earned = 0;
    let possible = 0;
    let totalSeconds = 0;
    responses.forEach(r => {
      const weight = WEIGHTS[r.question.difficulty] || 1;
      possible += weight;
      if (r.correct) earned += weight;
      totalSeconds += Number(r.seconds || 0);
    });
    return {
      raw: Math.round((correct / responses.length) * 100),
      weighted: possible ? Math.round((earned / possible) * 100) : 0,
      earned,
      possible,
      averageSeconds: Math.round(totalSeconds / responses.length)
    };
  }

  function readiness(weighted, responses) {
    const hard = responses.filter(r => ['Advanced', 'Expert'].includes(r.question.difficulty));
    const hardAccuracy = hard.length ? Math.round((hard.filter(r => r.correct).length / hard.length) * 100) : null;
    let label = 'Foundation building';
    let text = 'Build consistency across core concepts before increasing time pressure.';
    if (weighted >= 90 && (hardAccuracy === null || hardAccuracy >= 80)) {
      label = 'Senior level'; text = 'Strong performance across weighted scenarios. Keep pressure-testing weak domains and incident trade-offs.';
    } else if (weighted >= 80) {
      label = 'Strong'; text = 'You are performing well. Focus next on the weakest topic and Advanced/Expert scenarios.';
    } else if (weighted >= 65) {
      label = 'Interview ready'; text = 'Your foundation is solid. Improve consistency under timed and senior-level scenarios.';
    } else if (weighted >= 50) {
      label = 'Developing'; text = 'You have useful coverage, but several topics still need targeted revision.';
    }
    return { label, text, hardAccuracy };
  }

  return { WEIGHTS, calculate, readiness };
})();
