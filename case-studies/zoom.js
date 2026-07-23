/* Lightweight click-to-zoom lightbox for case-study images.
   Delegated, dependency-free. Excludes nav/footer/back-to-top chrome.
   Also handles the .cc-banner background-image hero. */
(function () {
  if (window.__csZoomInit) return;
  window.__csZoomInit = true;

  var CSS = [
    '.cz-overlay{position:fixed;inset:0;z-index:10000;display:none;align-items:center;justify-content:center;',
    'background:rgba(14,17,23,.9);padding:4vmin;cursor:zoom-out;opacity:0;transition:opacity .22s ease;}',
    '.cz-overlay.cz-on{display:flex;opacity:1;}',
    '.cz-overlay img{max-width:95vw;max-height:92vh;width:auto;height:auto;border-radius:10px;background:#fff;padding:12px;box-sizing:border-box;',
    'box-shadow:0 30px 90px rgba(0,0,0,.55);transform:scale(.97);transition:transform .22s cubic-bezier(.2,.7,.2,1);}',
    '.cz-overlay.cz-on img{transform:none;}',
    '.cz-overlay__close{position:fixed;top:18px;right:22px;width:42px;height:42px;border:0;border-radius:50%;',
    'background:rgba(255,255,255,.14);color:#fff;font-size:24px;line-height:1;cursor:pointer;display:flex;',
    'align-items:center;justify-content:center;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);}',
    '.cz-overlay__close:hover{background:rgba(255,255,255,.24);}',
    '.cz-zoomable{cursor:zoom-in;}',
    '.cz-overlay img{cursor:zoom-out;}',
    '.cz-overlay.cz-can-double img{cursor:zoom-in;}',
    '.cz-overlay.cz-zoomed{align-items:flex-start;justify-content:flex-start;overflow:auto;padding:0;}',
    '.cz-overlay.cz-zoomed img{max-width:none;max-height:none;width:200vw;height:auto;border-radius:0;padding:0;cursor:zoom-out;transform:none;}',
    '@media (prefers-reduced-motion: reduce){.cz-overlay,.cz-overlay img{transition:none;}}'
  ].join('');

  var overlay, overlayImg;

  function build() {
    var s = document.createElement('style');
    s.textContent = CSS;
    document.head.appendChild(s);

    overlay = document.createElement('div');
    overlay.className = 'cz-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlayImg = document.createElement('img');
    overlayImg.alt = '';
    var close = document.createElement('button');
    close.className = 'cz-overlay__close';
    close.setAttribute('aria-label', 'Close');
    close.innerHTML = '&times;';
    overlay.appendChild(overlayImg);
    overlay.appendChild(close);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlayImg && overlay.classList.contains('cz-can-double')) { e.stopPropagation(); toggleZoom(); }
      else closeZoom();
    });
    document.body.appendChild(overlay);
  }

  function openZoom(src, alt, allowDouble) {
    if (!src) return;
    if (!overlay) build();
    overlay.classList.remove('cz-zoomed');
    overlay.classList.toggle('cz-can-double', !!allowDouble);
    overlayImg.src = src;
    overlayImg.alt = alt || '';
    requestAnimationFrame(function () { overlay.classList.add('cz-on'); });
    document.documentElement.style.overflow = 'hidden';
  }

  function toggleZoom() {
    if (!overlay) return;
    var on = overlay.classList.toggle('cz-zoomed');
    if (on) {
      requestAnimationFrame(function () {
        overlay.scrollLeft = (overlay.scrollWidth - overlay.clientWidth) / 2;
        overlay.scrollTop = (overlay.scrollHeight - overlay.clientHeight) / 2;
      });
    } else {
      overlay.scrollLeft = 0; overlay.scrollTop = 0;
    }
  }

  function closeZoom() {
    if (!overlay) return;
    overlay.classList.remove('cz-on');
    overlay.classList.remove('cz-zoomed');
    document.documentElement.style.overflow = '';
  }

  function excluded(el) {
    if (el.hasAttribute && el.hasAttribute('data-cz-zoom')) return false;
    return el.closest('nav, .footer, .back-to-top, .cz-overlay, .pdp');
  }

  function bgUrl(el) {
    var bg = getComputedStyle(el).backgroundImage;
    var m = bg && bg.match(/url\(["']?(.*?)["']?\)/);
    return m ? m[1] : null;
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeZoom();
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest) return;
    var img = e.target.closest('img');
    if (img && !excluded(img)) { openZoom(img.currentSrc || img.src, img.alt, img.hasAttribute('data-cz-double')); return; }
    var bgEl = e.target.closest('.cc-banner');
    if (bgEl && !excluded(bgEl)) openZoom(bgUrl(bgEl), '', false);
  });

  var raf = null;
  function mark() {
    raf = null;
    document.querySelectorAll('img').forEach(function (im) {
      if (!excluded(im)) im.classList.add('cz-zoomable');
    });
    document.querySelectorAll('.cc-banner').forEach(function (b) {
      if (!excluded(b) && bgUrl(b)) b.classList.add('cz-zoomable');
    });
  }
  function scheduleMark() { if (!raf) raf = requestAnimationFrame(mark); }

  function init() {
    mark();
    var mo = new MutationObserver(scheduleMark);
    mo.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
