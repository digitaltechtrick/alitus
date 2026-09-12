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

  const offcanvasNav = document.getElementById('offcanvasNav');
  const toggler = document.querySelector('.navbar-toggler');
  if (offcanvasNav && window.bootstrap) {
    const offcanvasInstance = bootstrap.Offcanvas.getOrCreateInstance(offcanvasNav);

    offcanvasNav.addEventListener('click', (event) => {
      if (event.target.closest('a[href]') && offcanvasNav.classList.contains('show')) {
        offcanvasInstance.hide();
      }
    });

    if (toggler) {
      offcanvasNav.addEventListener('show.bs.offcanvas', () => toggler.setAttribute('aria-expanded', 'true'));
      offcanvasNav.addEventListener('hidden.bs.offcanvas', () => toggler.setAttribute('aria-expanded', 'false'));
    }
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
    const submitButton = form.querySelector('button[type="submit"]');
    const buttonLabel = submitButton ? submitButton.textContent.trim() : '';
    const successMessage = 'Thanks for reaching out. Your project inquiry has been received. I\u2019ll review the details and get back to you using the contact information you provided.';
    const failureMessage = 'I couldn\u2019t send your inquiry right now. Please try again, or contact me directly by WhatsApp, phone or email.';

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      event.stopPropagation();
      form.classList.add('was-validated');

      if (!form.checkValidity()) {
        if (status) status.textContent = 'Please complete the required fields.';
        return;
      }

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
      }
      if (status) {
        status.className = 'form-status mt-3';
        status.textContent = '';
      }

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (!response.ok) {
          throw new Error(`Formspree request failed with status ${response.status}`);
        }

        if (status) {
          status.className = 'form-status mt-3 text-success';
          status.textContent = successMessage;
        }
        form.reset();
        form.classList.remove('was-validated');
      } catch (error) {
        if (status) {
          status.className = 'form-status mt-3 text-danger';
          status.textContent = failureMessage;
        }
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = buttonLabel;
        }
      }
    });
  }
})();
