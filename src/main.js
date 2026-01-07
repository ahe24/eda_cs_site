import './style.css'
import './flow.css'

// --- Hero Canvas Animation (Digital Circuit / Constellation) ---
const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];
const particleCount = 70; // Increased density
const connectionDistance = 120;

function resize() {
  const parent = canvas.parentElement;
  if (parent) {
    width = parent.clientWidth;
    height = parent.clientHeight;
    // Handle DPI for crisp rendering
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
  }
}

class Particle {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.8;
    this.vy = (Math.random() - 0.5) * 0.8;
    this.size = Math.random() * 2 + 1;
    this.alpha = Math.random() * 0.5 + 0.2;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // Bounce off edges
    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 243, 255, ${this.alpha})`; // Cyan
    ctx.fill();
  }
}

function initParticles() {
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, width, height);

  particles.forEach((p, index) => {
    p.update();
    p.draw();

    // Draw lines
    for (let j = index + 1; j < particles.length; j++) {
      const p2 = particles[j];
      const dx = p.x - p2.x;
      const dy = p.y - p2.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < connectionDistance) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p2.x, p2.y);
        // Fade out lines based on distance
        const opacity = 1 - (dist / connectionDistance);
        ctx.strokeStyle = `rgba(0, 243, 255, ${opacity * 0.5})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  });

  requestAnimationFrame(animate);
}

// Handle resize efficiently
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    resize();
    initParticles(); // Re-distribute particles
  }, 100);
});

// Init
resize();
initParticles();
animate();


// --- Scroll Animations (Intersection Observer) ---
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Keep observing if you want re-trigger on scroll up/down, 
      // or unobserve for one-time animation. One-time is usually classier.
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);



document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// --- Language Toggle (I18n) ---
import { translations } from './translations.js';

let currentLang = 'en';
const langBtn = document.getElementById('lang-toggle');

function updateContent() {
  const t = translations[currentLang];

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      // Check if it's strictly text or needs HTML (using innerHTML for tags like <br> or <em>)
      el.innerHTML = t[key];

      // Update data-text for glitch effects if present
      if (el.hasAttribute('data-text')) {
        // Strip HTML tags for the attribute content to avoid showing <br> literally
        const plainText = t[key].replace(/<br\s*\/?>/gi, '\n').replace(/<\/?[^>]+(>|$)/g, "");
        el.setAttribute('data-text', plainText);
      }
    }
  });

  // Update button text
  // langBtn.textContent = currentLang === 'en' ? "🇺🇸 English" : "🇰🇷 한국어";
}

if (langBtn) {
  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'kr' : 'en';
    updateContent();
  });
}

