document.addEventListener('DOMContentLoaded', function () {
  var c = PAGE_CONTENT;
  document.title = c.meta.title;
  document.documentElement.lang = c.meta.lang;
  document.body.innerHTML = renderNav(c.nav) + renderResumePage(c.resume);
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

function renderResumePage(r) {
  return '<main class="resume-page">' +
    '<iframe src="' + r.pdfSrc + '" title="Resume"></iframe>' +
    '</main>';
}
