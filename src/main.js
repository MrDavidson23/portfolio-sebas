import './style.css';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;

/* ------------------------------------------------------------------ *
 * Always-on behavior (works with or without animation)
 * ------------------------------------------------------------------ */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

const button = document.getElementById('reveal');
const figure = document.getElementById('excerpt');
const note = document.getElementById('reveal-note');
if (button && figure && note) {
  button.addEventListener('click', () => {
    const on = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(on));
    figure.setAttribute('data-revealed', String(on));
    note.hidden = !on;
    button.textContent = on ? 'Hide the highlight' : 'Find the sentence I added';
  });
}

const header = document.getElementById('site-header');
const setHeader = (y) => header && header.setAttribute('data-scrolled', String(y > 10));

/* ------------------------------------------------------------------ *
 * Helpers
 * ------------------------------------------------------------------ */
function splitWords(el) {
  if (!el) return [];
  const words = el.textContent.trim().split(/\s+/);
  el.innerHTML = words
    .map((w) => `<span class="word"><span class="word-inner">${w}</span></span>`)
    .join(' ');
  return Array.from(el.querySelectorAll('.word-inner'));
}

/* ---- Three.js hero particle field — lazy-loaded (resolves true on success) ---- */
async function startHeroThree(hero) {
  let THREE, renderer;
  try {
    THREE = await import('three');
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  } catch (e) {
    return false;
  }
  if (!renderer) return false;

  const rect = hero.getBoundingClientRect();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(rect.width, rect.height);
  const canvas = renderer.domElement;
  canvas.id = 'hero-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  hero.insertBefore(canvas, hero.firstChild);

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0b0b0c, 0.11);
  const camera = new THREE.PerspectiveCamera(60, rect.width / rect.height, 0.1, 100);
  camera.position.set(0, 2.2, 7);
  camera.lookAt(0, 0, 0);

  const COLS = 70, ROWS = 48, SP = 0.32;
  const count = COLS * ROWS;
  const positions = new Float32Array(count * 3);
  let p = 0;
  for (let z = 0; z < ROWS; z++) {
    for (let x = 0; x < COLS; x++) {
      positions[p++] = (x - COLS / 2) * SP;
      positions[p++] = 0;
      positions[p++] = (z - ROWS / 2) * SP;
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const mat = new THREE.PointsMaterial({
    color: 0xa855f7, size: 0.035, sizeAttenuation: true, transparent: true, opacity: 0.9,
  });
  const pointsMesh = new THREE.Points(geo, mat);
  scene.add(pointsMesh);

  const mouse = { x: 0, y: 0 };
  hero.addEventListener('pointermove', (e) => {
    const r = hero.getBoundingClientRect();
    mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    mouse.y = ((e.clientY - r.top) / r.height) * 2 - 1;
  });

  const pos = geo.attributes.position;
  let t = 0, raf = 0, visible = true;
  function frame() {
    t += 0.015;
    for (let z = 0; z < ROWS; z++) {
      for (let x = 0; x < COLS; x++) {
        const idx = z * COLS + x;
        pos.array[idx * 3 + 1] =
          Math.sin(x * 0.3 + t) * 0.18 + Math.cos(z * 0.3 + t * 0.8) * 0.18;
      }
    }
    pos.needsUpdate = true;
    pointsMesh.rotation.y = mouse.x * 0.12;
    camera.position.x += (mouse.x * 0.9 - camera.position.x) * 0.05;
    camera.position.y += (2.2 - mouse.y * 0.4 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
    raf = requestAnimationFrame(frame);
  }
  function resize() {
    const r = hero.getBoundingClientRect();
    renderer.setSize(r.width, r.height);
    camera.aspect = r.width / r.height;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);
  const io = new IntersectionObserver((entries) => {
    visible = entries[0].isIntersecting;
    if (visible && !raf) raf = requestAnimationFrame(frame);
    if (!visible && raf) { cancelAnimationFrame(raf); raf = 0; }
  }, { threshold: 0 });
  io.observe(hero);
  raf = requestAnimationFrame(frame);
  return true;
}

/* ---- 2D fallback dot field ---- */
function startHeroCanvas(hero) {
  const canvas = document.createElement('canvas');
  canvas.id = 'hero-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  hero.insertBefore(canvas, hero.firstChild);
  const ctx = canvas.getContext('2d');
  let w = 0, h = 0, raf = 0, visible = true;
  const dpr = Math.min(window.devicePixelRatio || 1, 2), gap = 42;
  let dots = [];
  const mouse = { x: -9999, y: -9999 };
  function build() {
    const rect = hero.getBoundingClientRect();
    w = rect.width; h = rect.height;
    canvas.width = Math.floor(w * dpr); canvas.height = Math.floor(h * dpr);
    canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    dots = [];
    for (let y = gap; y < h; y += gap) for (let x = gap; x < w; x += gap) dots.push({ x, y });
  }
  function frame() {
    ctx.clearRect(0, 0, w, h);
    const R = 150;
    for (const d of dots) {
      const near = Math.max(0, 1 - Math.hypot(d.x - mouse.x, d.y - mouse.y) / R);
      ctx.beginPath();
      ctx.arc(d.x, d.y, 1 + near * 2.2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(168, 85, 247, ${0.12 + near * 0.55})`;
      ctx.fill();
    }
    raf = requestAnimationFrame(frame);
  }
  hero.addEventListener('pointermove', (e) => {
    const rect = hero.getBoundingClientRect();
    mouse.x = e.clientX - rect.left; mouse.y = e.clientY - rect.top;
  });
  hero.addEventListener('pointerleave', () => { mouse.x = -9999; mouse.y = -9999; });
  window.addEventListener('resize', build);
  const io = new IntersectionObserver((entries) => {
    visible = entries[0].isIntersecting;
    if (visible && !raf) raf = requestAnimationFrame(frame);
    if (!visible && raf) { cancelAnimationFrame(raf); raf = 0; }
  }, { threshold: 0 });
  io.observe(hero);
  build();
  raf = requestAnimationFrame(frame);
}

/* ---- Custom cursor ---- */
function startCursor() {
  const el = document.createElement('div');
  el.className = 'cursor';
  el.innerHTML = '<div class="cursor-ring"></div>';
  document.body.appendChild(el);
  const xTo = gsap.quickTo(el, 'x', { duration: 0.25, ease: 'power3' });
  const yTo = gsap.quickTo(el, 'y', { duration: 0.25, ease: 'power3' });
  window.addEventListener('pointermove', (e) => {
    el.classList.add('is-active');
    xTo(e.clientX); yTo(e.clientY);
  });
  window.addEventListener('pointerdown', () => el.classList.add('is-down'));
  window.addEventListener('pointerup', () => el.classList.remove('is-down'));
  document.querySelectorAll('a, button, .card').forEach((t) => {
    t.addEventListener('pointerenter', () => el.classList.add('is-hover'));
    t.addEventListener('pointerleave', () => el.classList.remove('is-hover'));
  });
}

/* ------------------------------------------------------------------ *
 * Reduced motion: reveal everything, no smooth scroll, no effects
 * ------------------------------------------------------------------ */
if (prefersReduced) {
  setHeader(window.scrollY);
  window.addEventListener('scroll', () => setHeader(window.scrollY), { passive: true });
} else {
  /* ---- Lenis smooth scroll ---- */
  const lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });
  lenis.on('scroll', (e) => { ScrollTrigger.update(); setHeader(e.scroll); });
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (ev) => {
      const id = a.getAttribute('href');
      if (id && id.length > 1) {
        const target = document.querySelector(id);
        if (target) { ev.preventDefault(); lenis.scrollTo(target, { offset: -70 }); }
      }
    });
  });

  /* ---- Hero intro timeline (played after the entry transition) ---- */
  const h1 = document.querySelector('.hero h1');
  const words = splitWords(h1);
  if (h1) gsap.set(h1, { opacity: 1 });
  const otherHero = gsap.utils.toArray('.hero [data-reveal]').filter((el) => el !== h1);

  const heroTl = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } });
  heroTl
    .from(words, { yPercent: 110, opacity: 0, duration: 0.8, stagger: 0.06 })
    .to(otherHero, { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 }, '-=0.5');

  /* ---- Entry transition, then play the hero ---- */
  const intro = document.createElement('div');
  intro.id = 'intro';
  intro.innerHTML = '<div class="intro-mark">S<span class="g">Q</span></div>';
  document.body.appendChild(intro);
  const mark = intro.querySelector('.intro-mark');
  gsap.timeline({ onComplete: () => intro.remove() })
    .from(mark, { opacity: 0, y: 20, duration: 0.5, ease: 'power2.out' })
    .to(mark, { opacity: 0, y: -20, duration: 0.4, ease: 'power2.in', delay: 0.35 })
    .to(intro, {
      yPercent: -100, duration: 0.75, ease: 'power3.inOut',
      onStart: () => heroTl.play(),
    }, '-=0.1');

  /* ---- Reveal on scroll ---- */
  const rest = gsap.utils.toArray('[data-reveal]').filter((el) => !el.closest('.hero'));
  ScrollTrigger.batch(rest, {
    start: 'top 88%',
    onEnter: (batch) =>
      gsap.to(batch, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1, overwrite: true }),
  });

  /* ---- Parallax on section index labels ---- */
  gsap.utils.toArray('.section-head .idx').forEach((el) => {
    gsap.fromTo(el, { y: 20 }, {
      y: -20, ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });

  /* ---- Nav scroll-spy ---- */
  const navLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
  const setActive = (id) => navLinks.forEach((a) =>
    a.setAttribute('aria-current', String(a.getAttribute('href') === '#' + id)));
  document.querySelectorAll('main section[id]').forEach((sec) => {
    ScrollTrigger.create({
      trigger: sec, start: 'top center', end: 'bottom center',
      onToggle: (self) => { if (self.isActive) setActive(sec.id); },
    });
  });

  /* ---- Magnetic buttons ---- */
  if (finePointer) {
    document.querySelectorAll('.btn').forEach((btn) => {
      const xTo = gsap.quickTo(btn, 'x', { duration: 0.4, ease: 'power3' });
      const yTo = gsap.quickTo(btn, 'y', { duration: 0.4, ease: 'power3' });
      btn.addEventListener('pointermove', (e) => {
        const r = btn.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * 0.3);
        yTo((e.clientY - (r.top + r.height / 2)) * 0.3);
      });
      btn.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
    });
    startCursor();
  }

  /* ---- Hero background: lazy Three.js, with 2D fallback ---- */
  const hero = document.querySelector('.hero');
  if (hero) startHeroThree(hero).then((ok) => { if (!ok) startHeroCanvas(hero); });

  ScrollTrigger.refresh();
}
