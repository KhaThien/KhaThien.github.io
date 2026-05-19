document.addEventListener('DOMContentLoaded', function() {
  var c = PAGE_CONTENT;
  document.title = c.meta.title;
  document.body.innerHTML = renderProjectsPage(c);

  wireTabSwitching();
  wireSidenavSwitching();

  // Pin sidenav below the sticky tab bar
  var tabBar  = document.querySelector('.tab-bar');
  var sidenav = document.querySelector('.featured-sidenav');
  if (tabBar && sidenav) {
    sidenav.style.top = (tabBar.getBoundingClientRect().bottom + 16) + 'px';
  }

  // Wire all galleries declared in any section block
  c.featured.sections.forEach(function(section) {
    section.subsections.forEach(function(sub) {
      sub.blocks.forEach(function(b) {
        if (b.type === 'gallery') wireGallery(b.id, b.autoplay !== false, b.intervalMs);
      });
    });
  });
});

// ── Page ──────────────────────────────────────────────────────
function renderProjectsPage(c) {
  return renderNav(c.nav) +
    '<div class="projects-page">' +
    renderTabBar(c.tabs) +
    renderFeaturedTab(c.featured) +
    renderPastTab(c.past) +
    '</div>';
}

// ── Nav ───────────────────────────────────────────────────────
function renderNav(links) {
  return '<nav class="nav" style="background:#ffffff">' +
    '<a class="nav-brand" href="index.html">Thien Nguyen</a>' +
    '<ul class="nav-links">' +
    links.map(function(l) {
      return '<li><a href="' + l.href + '"' + (l.active ? ' class="active"' : '') + '>' + l.label + '</a></li>';
    }).join('') + '</ul></nav>';
}

// ── Tab bar ───────────────────────────────────────────────────
function renderTabBar(tabs) {
  return '<div class="tab-bar">' +
    tabs.map(function(t) {
      return '<button class="tab-btn' + (t.active ? ' active' : '') + '" data-tab="' + t.id + '">' + (t.id === 'featured' ? '★ ' : '') + t.label + '</button>';
    }).join('') + '</div>';
}

// ── Featured tab ──────────────────────────────────────────────
function renderFeaturedTab(f) {
  return '<div id="tab-featured" class="tab-panel active">' +
    '<div class="featured-wrap">' +
    (function(src, alt) {
      if (/\.(mp4|mov|webm)$/i.test(src)) {
        var type = /\.mov$/i.test(src) ? 'video/quicktime' : 'video/mp4';
        return '<video class="featured-hero" autoplay loop muted playsinline>' +
          '<source src="' + src + '" type="' + type + '">' +
          '</video>';
      }
      return '<img class="featured-hero" src="' + src + '" alt="' + alt + '">';
    })(f.heroSrc, f.heroAlt) +
    '<h1 class="featured-title">' + f.title + '</h1>' +
    '<p class="featured-subtitle">' + f.subtitle + '</p>' +
    '<div class="featured-layout">' +
    renderSidenav(f.sections) +
    '<div class="featured-content">' +
    f.sections.map(renderFeaturedSection).join('') +
    '</div></div></div></div>';
}

function renderSidenav(sections) {
  return '<div class="featured-sidenav">' +
    sections.map(function(s, i) {
      return '<button type="button" class="sidenav-btn' + (i === 0 ? ' active' : '') + '" data-section="' + s.id + '">' + s.label + '</button>';
    }).join('') + '</div>';
}

function renderFeaturedSection(section) {
  return '<div id="section-' + section.id + '" class="featured-panel">' +
    section.subsections.map(function(sub) {
      return '<div class="featured-section"><h2>' + sub.title + '</h2>' + renderBlocks(sub.blocks) + '</div>';
    }).join('') + '</div>';
}

// ── Past projects tab ─────────────────────────────────────────
function renderPastTab(projects) {
  return '<div id="tab-past" class="tab-panel">' +
    '<div class="past-projects-wrap"><ul class="article-list">' +
    projects.map(function(p) {
      var imgStyle = p.imgStyle ? ' style="' + p.imgStyle + '"' : '';
      return '<li class="article-item">' +
        '<a class="article-img-link" href="' + p.href + '">' +
        '<img src="' + p.imgSrc + '" alt="' + p.imgAlt + '"' + imgStyle + '></a>' +
        '<a class="article-text-link" href="' + p.href + '">' +
        '<div class="article-title">' + p.title + '</div>' +
        '<p class="article-summary">' + p.summary + '</p>' +
        '</a></li>';
    }).join('') +
    '</ul></div></div>';
}

// ── Event wiring ──────────────────────────────────────────────
function wireTabSwitching() {
  function activateTab(tabId) {
    document.querySelectorAll('.tab-panel').forEach(function(p) { p.classList.remove('active'); });
    document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
    var panel = document.getElementById('tab-' + tabId);
    var btn   = document.querySelector('[data-tab="' + tabId + '"]');
    if (panel) panel.classList.add('active');
    if (btn)   btn.classList.add('active');
    history.replaceState(null, '', '#' + tabId);
  }

  document.querySelectorAll('.tab-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      activateTab(btn.getAttribute('data-tab'));
    });
  });

  // Restore tab from URL hash when navigating back
  var hash = location.hash.replace('#', '');
  if (hash && document.querySelector('[data-tab="' + hash + '"]')) {
    activateTab(hash);
  }
}

function wireSidenavSwitching() {
  document.querySelectorAll('.sidenav-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var target = document.getElementById('section-' + btn.getAttribute('data-section'));
      if (!target) return;
      var stickyBar = document.querySelector('.tab-bar');
      var clearance = stickyBar ? stickyBar.getBoundingClientRect().bottom : 0;
      var top = target.getBoundingClientRect().top + window.scrollY - clearance - 16;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  // Scroll spy: highlight whichever section is nearest the top of the viewport
  var panels = Array.from(document.querySelectorAll('.featured-panel'));
  var btns   = document.querySelectorAll('.sidenav-btn');

  function setActive(id) {
    btns.forEach(function(b) {
      b.classList.toggle('active', b.getAttribute('data-section') === id);
    });
  }

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) setActive(entry.target.id.replace('section-', ''));
    });
  }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });

  panels.forEach(function(p) { observer.observe(p); });
}
