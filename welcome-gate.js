/* DigiMaa welcome gate: new visitors → welcome.html; returning / share / child / HS stay on app.
   Must run before app scripts. Safe if localStorage is unavailable. */
(function () {
  try {
    var params = new URLSearchParams(location.search || '');
    if (params.get('app') === '1') return;
    if (params.get('child') === '1' || params.get('share') === '1') return;
    if (params.get('d') || params.get('r')) return;
    if (/[#&?]d=/.test(location.href)) return;
    try { if (sessionStorage.getItem('dmEnterApp') === '1') return; } catch (e) {}
    var standalone = false;
    try {
      standalone = !!(window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || !!navigator.standalone;
    } catch (e) {}
    if (standalone) return;
    var keys = ['childMode', 'routines', 'seenShare', 'parentDevice', 'firstRun', 'kids', 'appShellVer', 'devPro'];
    for (var i = 0; i < keys.length; i++) {
      try { if (localStorage.getItem(keys[i]) != null) return; } catch (e) { return; }
    }
    // Any non-empty digimaa-ish storage → treat as returning (lang alone is weak; skip bare lang)
    try {
      if (localStorage.getItem('mode') != null || localStorage.getItem('device') != null) return;
    } catch (e) {}
    var dest = 'welcome.html';
    if (location.search) dest += location.search;
    if (location.hash) dest += location.hash;
    location.replace(dest);
  } catch (e) {}
})();
