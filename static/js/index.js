document.addEventListener('DOMContentLoaded', function () {
  // Scroll reveal animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  // Navbar burger toggle
  const burgers = document.querySelectorAll('.navbar-burger');
  burgers.forEach((burger) => {
    burger.addEventListener('click', () => {
      burger.classList.toggle('is-active');
      const menu = document.getElementById(burger.dataset.target);
      if (menu) menu.classList.toggle('is-active');
    });
  });
});
