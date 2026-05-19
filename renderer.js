document.addEventListener('DOMContentLoaded', function () {
  var c = PAGE_CONTENT;

  document.title = c.meta.title;
  document.documentElement.lang = c.meta.lang;
  document.body.innerHTML = render(c);
  wireEvents();
});

// ── top-level render ───────────────────────────────────────────
function render(c) {
  return renderNav(c.nav) + renderHero(c.hero);
}

// ── sections ──────────────────────────────────────────────────
function renderNav(links) {
  return [
    '<nav class="nav">',
    '<a class="nav-brand" href="index.html">Thien Nguyen</a>',
    '<ul class="nav-links">',
    links.map(function (l) {
      return '<li><a href="' + l.href + '"' + (l.active ? ' class="active"' : '') + '>' + l.label + '</a></li>';
    }).join(''),
    '</ul></nav>'
  ].join('');
}

function renderHero(h) {
  return [
    '<div class="hero-grid">',
    '  <div class="hero-main">',
    '    <div class="block-photo"><img src="' + h.photo.src + '" alt="' + h.photo.alt + '" /></div>',
    '    <div class="block-intro">',
    '      <h1>' + h.headline + '</h1>',
    h.bio.map(function (p) { return '      <p>' + p + '</p>'; }).join(''),
    '    </div>',
    '    <div class="hero-buttons">',
    h.buttons.map(function (btn) { return '      ' + renderButton(btn); }).join(''),
    '      <p class="contact-line"><span class="contact-label">' + h.contact.label + '</span> <a class="contact-email" href="mailto:' + h.contact.email + '">' + h.contact.email + '</a></p>',
    '      <p class="contact-line"><a class="contact-git" href="' + h.contact.linkedin.href + '" target="_blank" rel="noopener">' + h.contact.linkedin.label + '</a></p>',
    '    </div>',
    '  </div>',
    '  <div class="block-drawing-3">',
    '    <img src="' + h.drawing.src + '" alt="' + h.drawing.alt + '" />',
    '  </div>',
    '</div>'
  ].join('');
}

function renderButton(btn) {
  if (btn.action === 'resume') {
    return '<button class="cta-btn" data-resume-open>' + btn.label + '</button>';
  }
  var ext = btn.external ? ' target="_blank" rel="noopener"' : '';
  return '<a class="cta-btn" href="' + btn.href + '"' + ext + '>' + btn.label + '</a>';
}

// ── events ────────────────────────────────────────────────────
function wireEvents() {}
