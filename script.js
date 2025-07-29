// Animation simple sur le scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(section => {
    const pos = section.getBoundingClientRect();
    if (pos.top < window.innerHeight - 80) {
      section.classList.add('visible');
    }
  });
});

// Contact form
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Merci pour votre message ! Je vous répondrai rapidement.");
  this.reset();
});



// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  // Optional: close menu when clicking a link
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });
});
// ...existing