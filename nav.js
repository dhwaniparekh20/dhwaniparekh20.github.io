// Mobile hamburger nav — injects a toggle button into the shared .nav markup
// (homepage + case-study pages) and turns .nav-links into a dropdown at ≤809px.
(function () {
  function init() {
    document.querySelectorAll('nav.nav').forEach(function (nav) {
      var inner = nav.querySelector('.nav-inner');
      var links = nav.querySelector('.nav-links');
      if (!inner || !links || inner.querySelector('.nav-toggle')) return;

      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'nav-toggle';
      btn.setAttribute('aria-label', 'Menu');
      btn.setAttribute('aria-expanded', 'false');
      btn.innerHTML = '<span class="nav-toggle__box"><span></span><span></span><span></span></span>';
      inner.appendChild(btn);

      function close() {
        nav.classList.remove('nav--open');
        btn.setAttribute('aria-expanded', 'false');
      }
      function toggle() {
        var open = nav.classList.toggle('nav--open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      }

      btn.addEventListener('click', function (e) { e.stopPropagation(); toggle(); });
      links.addEventListener('click', function (e) { if (e.target.closest('a')) close(); });
      document.addEventListener('click', function (e) {
        if (nav.classList.contains('nav--open') && !nav.contains(e.target)) close();
      });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
      window.addEventListener('resize', function () { if (window.innerWidth > 809) close(); }, { passive: true });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
