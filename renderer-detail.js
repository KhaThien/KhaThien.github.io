document.addEventListener('DOMContentLoaded', function() {
  var c = PAGE_CONTENT;
  document.title = c.meta.title;
  document.body.innerHTML = renderDetailPage(c);

  // Wire galleries
  c.sections.forEach(function(section) {
    section.blocks.forEach(function(b) {
      if (b.type === 'gallery') wireGallery(b.id, b.autoplay !== false, b.intervalMs);
    });
  });

  // Wire doc modals
  var modalIds = (c.modals || []).map(function(m) { return m.id; });
  if (modalIds.length) wireDocModals(modalIds);
});

// ── Page ──────────────────────────────────────────────────────
function renderDetailPage(c) {
  var hero = c.hero
    ? '<img class="detail-hero" src="' + c.hero.src + '" alt="' + c.hero.alt + '"' + (c.hero.style ? ' style="' + c.hero.style + '"' : '') + '>'
    : '';

  var sections = c.sections.map(function(s) {
    return '<div class="detail-section"><h2>' + s.title + '</h2>' + renderBlocks(s.blocks) + '</div>';
  }).join('');

  var modals = (c.modals || []).map(function(m) {
    return '<div class="modal-overlay" id="' + m.id + '">' +
      '<div class="modal"><div class="modal-header">' +
      '<span>' + m.title + '</span>' +
      '<button class="modal-close" data-doc-close="' + m.id + '" aria-label="Close">&times;</button>' +
      '</div><div class="modal-body">' +
      '<iframe src="' + m.iframeSrc + '" title="' + m.title + '"></iframe>' +
      '</div></div></div>';
  }).join('');

  return renderNav(c.nav) +
    '<div class="detail-page"><div class="detail-wrap">' +
    '<a class="detail-back" href="' + c.backHref + '">&#8592; Back to Projects</a>' +
    hero +
    '<h1 class="detail-title">' + c.title + '</h1>' +
    '<p class="detail-meta">' + c.subtitle + '</p>' +
    sections +
    '</div></div>' +
    modals;
}

function renderNav(links) {
  return '<nav class="nav">' +
    '<a class="nav-brand" href="../index.html">Thien Nguyen</a>' +
    '<ul class="nav-links">' +
    links.map(function(l) {
      return '<li><a href="' + l.href + '"' + (l.active ? ' class="active"' : '') + '>' + l.label + '</a></li>';
    }).join('') + '</ul></nav>';
}
