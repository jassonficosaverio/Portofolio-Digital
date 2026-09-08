// Tahun otomatis di footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menu mobile
const navToggle = document.getElementById('navToggle');
const navbar = document.getElementById('navbar');

navToggle.addEventListener('click', () => {
  const isOpen = navbar.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Tutup menu mobile setelah klik salah satu link
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navbar.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Kelopak sakura melayang — dihormati prefers-reduced-motion lewat CSS (.sakura-layer { display:none })
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  const layer = document.getElementById('sakuraLayer');
  const totalPetals = 14;

  for (let i = 0; i < totalPetals; i++) {
    const petal = document.createElement('span');
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = 9 + Math.random() * 8 + 's';
    petal.style.animationDelay = Math.random() * 10 + 's';
    petal.style.opacity = 0.3 + Math.random() * 0.4;
    petal.style.transform = `scale(${0.6 + Math.random() * 0.8})`;
    layer.appendChild(petal);
  }
}
