/* DigiMaa welcome: sample routine demo + enter-app helper. No network, no data collection. */
(function () {
  const STEPS = [
    'Wash your hands',
    'Brush your teeth',
    'Put on your shirt',
    'Put on your shoes',
    'You did it — great job!'
  ];

  function enterApp(anchor) {
    try { sessionStorage.setItem('dmEnterApp', '1'); } catch (e) {}
    const base = (anchor && anchor.getAttribute('data-app')) || './';
    const u = new URL(base, location.href);
    u.searchParams.set('app', '1');
    location.href = u.pathname + u.search + u.hash;
  }

  document.querySelectorAll('[data-enter-app]').forEach((el) => {
    el.addEventListener('click', (ev) => {
      ev.preventDefault();
      enterApp(el);
    });
  });

  const stepEl = document.getElementById('demoStep');
  const bar = document.getElementById('demoBar');
  const doneBtn = document.getElementById('demoDone');
  const backBtn = document.getElementById('demoBack');
  const praise = document.getElementById('demoPraise');
  const startOver = document.getElementById('demoRestart');
  if (!stepEl || !doneBtn) return;

  let i = 0;
  const praises = ['Nice work!', 'You did it!', 'Awesome!', 'Great job!'];

  function paint() {
    const last = i >= STEPS.length - 1;
    stepEl.textContent = STEPS[Math.min(i, STEPS.length - 1)];
    bar.style.width = Math.round(((i + 1) / STEPS.length) * 100) + '%';
    doneBtn.textContent = last ? 'Finish' : 'Done';
    doneBtn.disabled = false;
    backBtn.disabled = i === 0;
    if (praise) praise.textContent = '';
  }

  doneBtn.addEventListener('click', () => {
    if (i >= STEPS.length - 1) {
      if (praise) praise.textContent = 'Routine complete. Ready to try DigiMaa for real?';
      doneBtn.disabled = true;
      return;
    }
    if (praise) praise.textContent = praises[i % praises.length];
    i += 1;
    paint();
  });

  backBtn.addEventListener('click', () => {
    if (i > 0) { i -= 1; paint(); }
  });

  if (startOver) {
    startOver.addEventListener('click', () => { i = 0; paint(); });
  }

  paint();
})();
