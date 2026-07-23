// Click-to-copy email — no mailto, no Apple Mail surprise.
(function () {
  function flash(btn) {
    var hint = btn.querySelector('.copy-hint');
    btn.classList.add('is-copied');
    var prev = hint ? hint.textContent : null;
    if (hint) hint.textContent = 'Copied \u2713';
    setTimeout(function () {
      btn.classList.remove('is-copied');
      if (hint && prev !== null) hint.textContent = prev;
    }, 1800);
  }
  function copy(text, btn) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { flash(btn); }, function () { fallback(text, btn); });
    } else {
      fallback(text, btn);
    }
  }
  function fallback(text, btn) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
    flash(btn);
  }
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-copy-email]');
    if (!btn) return;
    e.preventDefault();
    copy(btn.getAttribute('data-copy-email'), btn);
  });
})();
