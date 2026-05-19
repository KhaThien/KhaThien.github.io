// ── Block dispatcher ──────────────────────────────────────────
function renderBlocks(blocks) {
  return (blocks || []).map(renderBlock).join('');
}

function renderBlock(b) {
  switch (b.type) {
    case 'paragraph':         return '<p>' + b.content + '</p>';
    case 'h3':                return '<h3 class="subsection-title">' + b.text + '</h3>';
    case 'quote':             return '<p class="eliot-quote">&ldquo;' + b.text + '&rdquo; - ' + b.author + '</p>';
    case 'ul':                return renderUl(b);
    case 'ol':                return renderOl(b);
    case 'code':              return renderCode(b);
    case 'img':               return renderImg(b);
    case 'img-grid':          return renderImgGrid(b);
    case 'concept-layout':    return renderConceptLayout(b);
    case 'decision-matrix':   return renderDecisionMatrix(b);
    case 'procurement-table': return renderProcurementTable(b);
    case 'data-table':        return renderDataTable(b);
    case 'build-log':         return renderBuildLog(b);
    case 'callout':           return '<div class="detail-callout">' + b.html + '</div>';
    case 'gallery':           return renderGallery(b);
    case 'doc-cards':         return renderDocCards(b);
    case 'mech-slideshow':    return renderMechSlideshow(b);
    default:                  return '';
  }
}

// ── Text & lists ──────────────────────────────────────────────
function renderUl(b) {
  var style = b.style ? ' style="' + b.style + '"' : '';
  return '<ul class="content-list"' + style + '>' +
    b.items.map(function(i) { return '<li>' + i + '</li>'; }).join('') + '</ul>';
}

function renderOl(b) {
  return '<ol class="content-list" style="list-style:decimal">' +
    b.items.map(function(i) { return '<li>' + i + '</li>'; }).join('') + '</ol>';
}

function renderCode(b) {
  var esc = b.content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  var cls = b.language ? ' class="language-' + b.language + '"' : '';
  return '<pre class="code-block"><code' + cls + '>' + esc + '</code></pre>';
}

// ── Images ────────────────────────────────────────────────────
function renderImg(b) {
  var style = b.style ? ' style="' + b.style + '"' : '';
  return '<img class="section-img" src="' + b.src + '" alt="' + b.alt + '"' + style + '>';
}

function renderImgGrid(b) {
  var colStyle = b.cols ? 'grid-template-columns:repeat(' + b.cols + ',1fr);' : '';
  return '<div class="concept-grid" style="' + colStyle + 'margin-bottom:1.5rem">' +
    b.images.map(function(img) {
      var s = img.style ? ' style="' + img.style + '"' : '';
      return '<img class="concept-img" src="' + img.src + '" alt="' + img.alt + '"' + s + '>';
    }).join('') + '</div>';
}

function renderConceptLayout(b) {
  return '<div class="concept-layout">' +
    b.items.map(function(item) {
      var s = item.imgStyle ? ' style="' + item.imgStyle + '"' : '';
      return '<div class="concept-item">' +
        '<div class="concept-img-wrap"><img class="concept-img" src="' + item.imgSrc + '" alt="' + item.imgAlt + '"' + s + '></div>' +
        '<div>' + item.text + '</div>' +
        '</div>';
    }).join('') + '</div>';
}

// ── Tables ────────────────────────────────────────────────────
function renderDecisionMatrix(b) {
  var heads = b.headers.map(function(h) { return '<th>' + h + '</th>'; }).join('');
  var rows  = b.rows.map(function(row) {
    return '<tr>' + row.map(function(c) { return '<td>' + c + '</td>'; }).join('') + '</tr>';
  }).join('');
  var total = '<tr class="matrix-total-row">' +
    b.totalRow.map(function(c, i) {
      var cls = (i === b.winnerCol) ? ' class="matrix-winner"' : '';
      return '<td' + cls + '><strong>' + c + '</strong></td>';
    }).join('') + '</tr>';
  return '<div class="matrix-wrap">' +
    '<table class="decision-matrix">' +
    '<thead>' +
    '<tr><th colspan="' + b.headers.length + '" class="matrix-title">' + b.title + '</th></tr>' +
    '<tr>' + heads + '</tr>' +
    '</thead><tbody>' + rows + total + '</tbody></table>' +
    (b.caption ? '<p class="matrix-caption">' + b.caption + '</p>' : '') +
    '</div>';
}

function renderProcurementTable(b) {
  var heads = b.headers.map(function(h) { return '<th>' + h + '</th>'; }).join('');
  var rows  = b.rows.map(function(row) {
    return '<tr>' + row.map(function(c) { return '<td>' + c + '</td>'; }).join('') + '</tr>';
  }).join('');
  return '<div class="matrix-wrap" style="margin-top:0.5rem">' +
    '<table class="decision-matrix">' +
    '<thead><tr>' + heads + '</tr></thead>' +
    '<tbody>' + rows + '</tbody></table></div>' +
    (b.note ? '<p style="font-size:0.85rem;color:var(--muted);margin-top:0.5rem">' + b.note + '</p>' : '');
}

function renderDataTable(b) {
  return '<table class="decision-matrix k9-data-table"><tbody>' +
    b.rows.map(function(row) {
      return '<tr><td>' + row[0] + '</td><td>' + row[1] + '</td></tr>';
    }).join('') + '</tbody></table>';
}

// ── Build log ─────────────────────────────────────────────────
function renderBuildLog(b) {
  return '<ol class="build-log">' +
    b.entries.map(function(e) {
      var tag = e.tag ? ' <span class="design-tag ' + e.tagClass + '">' + e.tag + '</span>' : '';
      return '<li><strong>' + e.title + '</strong>' + tag + '<p>' + e.text + '</p></li>';
    }).join('') + '</ol>';
}

// ── Mechanical slideshow ──────────────────────────────────────
function renderMechSlideshow(b) {
  return '<div class="mech-list">' +
    b.slides.map(function(s) {
      var imgStyle = s.imgStyle ? ' style="' + s.imgStyle + '"' : '';
      return '<div class="mech-item">' +
        '<img class="mech-item-img" src="' + s.imgSrc + '" alt="' + s.imgAlt + '"' + imgStyle + '>' +
        '<div class="mech-item-desc">' +
        '<h4 class="component-title">' + s.title + '</h4>' +
        '<p>' + s.text + '</p>' +
        '</div></div>';
    }).join('') +
    '</div>';
}

// ── Gallery ───────────────────────────────────────────────────
function renderGallery(b) {
  var slides = b.slides.map(function(s, i) {
    var cls = 'gallery-slide' + (i === 0 ? ' active' : '');
    if (s.type === 'video') {
      return '<video class="' + cls + '" src="' + s.src + '" controls playsinline></video>';
    }
    return '<img class="' + cls + '" src="' + s.src + '" alt="' + s.alt + '">';
  }).join('');
  var dots = b.slides.map(function(s, i) {
    return '<button class="gallery-dot' + (i === 0 ? ' active' : '') + '" aria-label="Slide ' + (i + 1) + '"></button>';
  }).join('');
  return '<div class="img-gallery" id="' + b.id + '">' +
    slides +
    '<button class="gallery-arrow gallery-arrow-left" aria-label="Previous">&#8249;</button>' +
    '<button class="gallery-arrow gallery-arrow-right" aria-label="Next">&#8250;</button>' +
    '<div class="gallery-dots">' + dots + '</div></div>';
}

// ── Doc cards ─────────────────────────────────────────────────
function renderDocCards(b) {
  return '<div class="doc-cards">' +
    b.items.map(function(item) {
      return '<div class="doc-card">' +
        '<div class="doc-icon">&#128196;</div>' +
        '<div class="doc-card-body">' +
        '<p class="doc-card-title">' + item.title + '</p>' +
        '<p class="doc-card-desc">' + item.desc + '</p>' +
        '</div>' +
        '<button class="doc-card-btn" data-doc-open="' + item.modalId + '">View</button>' +
        '</div>';
    }).join('') + '</div>';
}

// ── Event wiring (called after DOM is built) ──────────────────
function wireMechSlideshow(id) {
  var container = document.getElementById(id);
  if (!container) return;
  var slides  = container.querySelectorAll('.mech-slide');
  var dots    = container.querySelectorAll('.mech-dot');
  var current = 0;

  function goTo(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  container.addEventListener('click', function(e) {
    if (e.target.closest('.mech-slide-next')) { goTo(current + 1); return; }
    if (e.target.closest('.mech-slide-prev')) { goTo(current - 1); return; }
    var dot = e.target.closest('.mech-dot');
    if (dot) goTo(parseInt(dot.getAttribute('data-index'), 10));
  });
}

function wireGallery(id, autoplay, intervalMs) {
  var gallery = document.getElementById(id);
  if (!gallery) return;
  var slides  = gallery.querySelectorAll('.gallery-slide');
  var dots    = gallery.querySelectorAll('.gallery-dot');
  var left    = gallery.querySelector('.gallery-arrow-left');
  var right   = gallery.querySelector('.gallery-arrow-right');
  var current = 0;
  var timer;

  function pauseVideos() {
    slides.forEach(function(s) { if (s.tagName === 'VIDEO') { s.pause(); s.currentTime = 0; } });
  }
  function goTo(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    pauseVideos();
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    if (slides[current].tagName === 'VIDEO') stop();
  }
  function start() { if (autoplay) timer = setInterval(function() { goTo(current + 1); }, intervalMs || 5000); }
  function stop()  { clearInterval(timer); }

  dots.forEach(function(dot, i) {
    dot.addEventListener('click', function() { stop(); goTo(i); if (slides[current].tagName !== 'VIDEO') start(); });
  });
  left.addEventListener('click',  function() { stop(); goTo(current - 1); if (slides[current].tagName !== 'VIDEO') start(); });
  right.addEventListener('click', function() { stop(); goTo(current + 1); if (slides[current].tagName !== 'VIDEO') start(); });
  slides.forEach(function(s) {
    if (s.tagName === 'VIDEO') s.addEventListener('ended', function() { goTo(current + 1); start(); });
  });
  gallery.addEventListener('mouseenter', stop);
  gallery.addEventListener('mouseleave', function() { if (slides[current].tagName !== 'VIDEO') start(); });
  start();
}

function wireDocModals(modalIds) {
  document.querySelectorAll('[data-doc-open]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var el = document.getElementById(btn.getAttribute('data-doc-open'));
      if (el) el.classList.add('open');
    });
  });
  document.querySelectorAll('[data-doc-close]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var el = document.getElementById(btn.getAttribute('data-doc-close'));
      if (el) el.classList.remove('open');
    });
  });
  modalIds.forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('click', function(e) { if (e.target === el) el.classList.remove('open'); });
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      modalIds.forEach(function(id) {
        var el = document.getElementById(id);
        if (el) el.classList.remove('open');
      });
    }
  });
}
