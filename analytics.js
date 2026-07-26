/* Google Analytics 4 — pageviews, referrer, engagement time, plus two custom
   events: outbound/contact clicks and scroll depth on long pages. */
(function () {
  var ID = 'G-JE0HXRSCNK';
  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') return;

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', ID);

  /* Outbound links, email, and resume — the actions that signal real interest. */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (!href) return;

    if (href.indexOf('mailto:') === 0) {
      gtag('event', 'contact_click', { method: 'email', link_url: href });
    } else if (href.indexOf('tel:') === 0) {
      gtag('event', 'contact_click', { method: 'phone', link_url: href });
    } else if (/^https?:/i.test(href) && a.hostname !== location.hostname) {
      gtag('event', 'click', {
        link_domain: a.hostname,
        link_url: href,
        outbound: true,
        link_text: (a.textContent || '').trim().slice(0, 80)
      });
    } else if (/resume/i.test(href)) {
      gtag('event', 'resume_view', { link_url: href });
    }
  }, true);

  /* Scroll depth — how far into a case study people actually read. */
  var marks = [25, 50, 75, 90], fired = {};
  function onScroll() {
    var doc = document.documentElement;
    var scrollable = doc.scrollHeight - window.innerHeight;
    if (scrollable < 400) return;
    var pct = (window.scrollY / scrollable) * 100;
    for (var i = 0; i < marks.length; i++) {
      var m = marks[i];
      if (pct >= m && !fired[m]) {
        fired[m] = true;
        gtag('event', 'scroll_depth', { percent_scrolled: m, page_path: location.pathname });
      }
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
})();
