(() => {
  const year = document.getElementById('currentYear');
  if (year) year.textContent = new Date().getFullYear();

  const nav = document.querySelector('.site-nav');
  const updateNav = () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 12);
  };
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });

  document.querySelectorAll('.navbar-collapse .nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      const openMenu = document.querySelector('.navbar-collapse.show');
      if (openMenu && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(openMenu).hide();
    });
  });

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

      if (status) status.textContent = 'Form validated. We will connect real message delivery in a later step.';
    });
  }
})();
