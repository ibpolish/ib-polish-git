document.addEventListener('DOMContentLoaded', function() {

  // ── Hamburger ──
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  // ── Dropdown: mobile = klik, desktop = hover (CSS) ──
  document.querySelectorAll('.nav-dropdown > a').forEach(link => {
    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 860) {
        e.preventDefault();
        this.parentElement.classList.toggle('open');
      }
    });
  });

  // ── Zamknij mobile menu po kliknięciu linku z dropdown ──
  document.querySelectorAll('.dropdown-menu a').forEach(a => {
    a.addEventListener('click', () => {
      if (navLinks) navLinks.classList.remove('open');
    });
  });

  // ── Accordion ──
  document.querySelectorAll('.accordion-header').forEach(btn => {
    btn.addEventListener('click', function() {
      const body = this.nextElementSibling;
      const isOpen = this.classList.contains('open');
      const container = this.closest('.accordion-group') || document;
      container.querySelectorAll('.accordion-header.open').forEach(h => {
        h.classList.remove('open');
        h.nextElementSibling.classList.remove('open');
      });
      if (!isOpen) { this.classList.add('open'); body.classList.add('open'); }
    });
  });

  // ── Aktywny link ──
  const cur = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === cur) a.classList.add('active');
    const ofertaSubpages = ['zajecia-indywidualne.html','zajecia-mini-grupy.html','przygotowanie-do-egzaminu.html'];
    if (ofertaSubpages.includes(cur) && href === 'oferta.html') {
      a.classList.add('active');
    }
  });

  // ── FAQ accordion ──
  document.querySelectorAll('.faq-trigger').forEach(btn => {
    btn.addEventListener('click', function() {
      const item   = this.parentElement;
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // ── Language switcher ──
  (function() {
    var btn = document.getElementById('lang-switch-btn');
    var dd  = document.getElementById('lang-dropdown');
    if (!btn || !dd) return;
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      dd.classList.toggle('open');
    });
    document.addEventListener('click', function() {
      if (dd) dd.classList.remove('open');
    });
  })();

});
