
  const hamburger = document.getElementById('hamburger');
  const navbar = document.getElementById('navbar');

  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Optional: Auto-close menu when clicking a link
  document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });

