(() => {
  const year = document.getElementById('currentYear');
  if (year) year.textContent = new Date().getFullYear();

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches && window.bootstrap) {
    document.querySelectorAll('.carousel').forEach((carousel) => {
      bootstrap.Carousel.getOrCreateInstance(carousel).pause();
    });
  }

  const hero = document.getElementById('heroCarousel');
  if (hero) {
    const heroCount = hero.querySelector('.hero-count-current');
    const heroIndicators = hero.querySelectorAll('.carousel-indicators [data-bs-slide-to]');
    hero.addEventListener('slide.bs.carousel', (event) => {
      if (heroCount) heroCount.textContent = String(event.to + 1).padStart(2, '0');
      heroIndicators.forEach((indicator, index) => {
        if (index === event.to) indicator.setAttribute('aria-current', 'true');
        else indicator.removeAttribute('aria-current');
      });
    });
  }

  const nav = document.querySelector('.site-nav');
  const updateNav = () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 12);
  };
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });

  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      event.stopPropagation();
      form.classList.add('was-validated');

      if (!form.checkValidity()) {
        if (status) status.textContent = 'Please complete the required fields.';
        return;
      }

      if (status) status.textContent = 'This demo form is not connected to email yet. Please contact me directly by phone, WhatsApp or email.';
    });
  }
})();
