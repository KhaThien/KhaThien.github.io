document.addEventListener('DOMContentLoaded', function () {
  var c = PAGE_CONTENT;
  document.title = c.meta.title;
  document.documentElement.lang = c.meta.lang;
  document.body.innerHTML = renderNav(c.nav) + renderCertsPage(c.certificates) + renderLightbox();
  wireLightbox();
});

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

function isImage(src) {
  return /\.(png|jpe?g|gif|webp)$/i.test(src);
}

function renderCertsPage(certs) {
  var cards = certs.items.map(function (c) {
    var preview = isImage(c.src)
      ? '<div class="cert-card-preview"><img src="' + c.src + '" alt="' + c.title + '" /></div>'
      : '<div class="cert-card-preview cert-card-preview--pdf"><iframe src="' + c.src + '#toolbar=0&navpanes=0&scrollbar=0" title="' + c.title + '" tabindex="-1"></iframe></div>';

    return '<div class="cert-card" data-src="' + c.src + '" data-type="' + (isImage(c.src) ? 'image' : 'pdf') + '" tabindex="0" role="button">' +
      preview +
      '<div class="cert-card-meta"><p class="cert-card-title">' + c.title + '</p><span class="cert-card-issued">Issued ' + c.issued + '</span></div>' +
      '</div>';
  }).join('');

  return '<main class="certs-page">' +
    '<h1 class="certs-page-heading">' + certs.title + '</h1>' +
    '<div class="certs-page-grid">' + cards + '</div>' +
    '</main>';
}

function renderLightbox() {
  return '<div class="certs-lightbox" id="certs-lightbox">' +
    '<button class="certs-lightbox-close" id="certs-lightbox-close" aria-label="Close">&times;</button>' +
    '<div class="certs-lightbox-inner" id="certs-lightbox-inner"></div>' +
    '</div>';
}

function wireLightbox() {
  var lb       = document.getElementById('certs-lightbox');
  var inner    = document.getElementById('certs-lightbox-inner');
  var closeBtn = document.getElementById('certs-lightbox-close');

  function open(src, type) {
    inner.innerHTML = type === 'image'
      ? '<img src="' + src + '" alt="Certificate" />'
      : '<iframe src="' + src + '#toolbar=0&navpanes=0&scrollbar=0" title="Certificate"></iframe>';
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lb.classList.remove('open');
    inner.innerHTML = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.cert-card').forEach(function (card) {
    card.addEventListener('click', function () { open(card.dataset.src, card.dataset.type); });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') open(card.dataset.src, card.dataset.type);
    });
  });

  closeBtn.addEventListener('click', close);
  lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
}
