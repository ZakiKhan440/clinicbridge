// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Scroll-in effect
const faders = document.querySelectorAll('.fade-up');
const options = { threshold: .2 };

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, options);

faders.forEach(el => observer.observe(el));
