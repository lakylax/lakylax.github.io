// ═══════════════════════════════════════════════════════════════
// MAIN.JS — Scroll animations, interactions, particles, rendering
// ═══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  renderSite();
  initScrollReveal();
  initCursorGlow();
  initParticles();
  initNavToggle();
  initContactForm();
  initCounterAnimation();
  initTiltEffect();
  initProjectModal();
});

// ─── Render All Sections from Data ────────────────────────────
function renderSite() {
  const d = SITE_DATA;

  // About
  document.getElementById('about-text').innerHTML = d.about.summary.map(p => `<p>${p}</p>`).join('');
  document.getElementById('about-stats').innerHTML = d.about.stats.map(s =>
    `<div class="stat-card reveal"><span class="stat-number">${s.number}</span><span class="stat-label">${s.label}</span></div>`
  ).join('');

  // Skills
  document.getElementById('skills-content').innerHTML = d.skills.map(cat =>
    `<div class="skill-category reveal">
      <h3>${cat.category}</h3>
      <div class="skill-tags">${cat.items.map(i => `<span class="skill-tag">${i}</span>`).join('')}</div>
    </div>`
  ).join('');

  // Experience
  document.getElementById('experience-content').innerHTML = d.experience.map(exp =>
    `<article class="experience-card reveal">
      <div class="experience-meta">${exp.period} · ${exp.location}</div>
      <h3>${exp.role}</h3>
      <p class="experience-company">${exp.company}</p>
      <ul>${exp.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
    </article>`
  ).join('');

  // Projects
  document.getElementById('projects-content').innerHTML = d.projects.map(p =>
    `<div class="project-card reveal${p.images && p.images.length ? ' has-gallery' : ''}" ${p.images && p.images.length ? `data-images='${JSON.stringify(p.images)}'` : ''} data-title="${p.title}" data-desc="${p.description.replace(/"/g, '&quot;')}">
      <h3>${p.title}</h3>
      <p class="project-desc">${p.description}</p>
      <div class="project-tech">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
      ${p.images && p.images.length ? `<div class="project-gallery-hint"><span class="gallery-icon">⬡</span> View Project Evidence (${p.images.length})</div>` : ''}
      ${p.link ? `<a href="${p.link}" target="_blank" rel="noopener" class="project-link">↗ GitHub</a>` : ''}
      ${p.report ? `<a href="${p.report}" target="_blank" rel="noopener" class="project-report-link">📄 View Full Report</a>` : ''}
    </div>`
  ).join('');

  // Certifications
  document.getElementById('certs-content').innerHTML = d.certifications.map(c =>
    `<a href="${c.credlyUrl}" target="_blank" rel="noopener" class="cert-card reveal">
      <img src="${c.image}" alt="${c.name}" class="cert-badge" loading="lazy">
      <div class="cert-info">
        <h3>${c.name}</h3>
        <p class="cert-issuer">${c.issuer}</p>
        <p class="cert-date">Issued: ${c.issued}${c.expires ? ' · Expires: ' + c.expires : ''}</p>
        ${c.expires ? '<span class="cert-status">✓ Active</span>' : ''}
      </div>
    </a>`
  ).join('');

  // Volunteering
  document.getElementById('volunteer-content').innerHTML = d.volunteering.map(v =>
    `<div class="volunteer-card reveal">
      ${v.image ? `<img src="${v.image}" alt="${v.title}" class="volunteer-badge" loading="lazy">` : ''}
      <div>
        <h3>${v.title}</h3>
        <p class="volunteer-org">${v.organization}</p>
        <p>${v.description}</p>
      </div>
    </div>`
  ).join('');

  // Education
  document.getElementById('education-content').innerHTML = d.education.map(e =>
    `<div class="edu-card reveal">
      <h3>${e.degree}</h3>
      <p class="edu-school">${e.school}</p>
      <p class="edu-period">${e.period} · ${e.location}${e.gpa ? ' · GPA: ' + e.gpa : ''}${e.concentration ? ' · Concentration: ' + e.concentration : ''}</p>
      <p class="edu-coursework"><strong>Coursework:</strong> ${e.coursework}</p>
    </div>`
  ).join('');

  // Contact info
  document.getElementById('contact-email').textContent = d.personal.email;
  document.getElementById('contact-email').href = `mailto:${d.personal.email}`;
  document.getElementById('contact-phone').textContent = d.personal.phone;
  document.getElementById('contact-linkedin').href = d.personal.linkedin;
  document.getElementById('contact-github').href = d.personal.github;

  // Form action
  document.getElementById('contact-form').action = d.personal.formspreeEndpoint;
}

// ─── Scroll Reveal (Intersection Observer) ────────────────────
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(el => observer.observe(el));
}

// ─── Cursor Glow ──────────────────────────────────────────────
function initCursorGlow() {
  const glow = document.getElementById('cursor-glow');
  if (!glow || window.matchMedia('(max-width: 900px)').matches) return;
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}

// ─── Particle Background (Combo F: Orbs + Interactive + Grid) ──
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  const count = 60;
  let mx = 0, my = 0;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2.5 + 1
    });
  }

  let orbAngle = 0;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Grid
    ctx.strokeStyle = 'rgba(0,255,200,0.04)';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 60) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 60) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }

    // Orbs
    orbAngle += 0.008;
    const grd = ctx.createRadialGradient(
      200 + Math.sin(orbAngle) * 50, 200 + Math.cos(orbAngle) * 40, 0,
      200, 200, 300
    );
    grd.addColorStop(0, 'rgba(0,255,200,0.06)');
    grd.addColorStop(1, 'transparent');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const grd2 = ctx.createRadialGradient(
      canvas.width - 200 + Math.cos(orbAngle) * 40, canvas.height - 200 + Math.sin(orbAngle) * 30, 0,
      canvas.width - 200, canvas.height - 200, 250
    );
    grd2.addColorStop(0, 'rgba(123,94,167,0.07)');
    grd2.addColorStop(1, 'transparent');
    ctx.fillStyle = grd2;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Particles (interactive)
    particles.forEach(p => {
      const dx = mx - p.x, dy = my - p.y, d = Math.hypot(dx, dy);
      if (d < 120) { p.x -= dx * 0.015; p.y -= dy * 0.015; }
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 255, 200, 0.45)';
      ctx.fill();
    });

    // Connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const d = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
        if (d < 140) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 255, 200, ${0.12 * (1 - d / 140)})`;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }
  draw();
}

// ─── Mobile Nav Toggle ────────────────────────────────────────
function initNavToggle() {
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.textContent = links.classList.contains('open') ? '✕' : '☰';
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.textContent = '☰';
    });
  });
}

// ——— Project Modal / Lightbox ————————————————————————————
function initProjectModal() {
  const modal = document.createElement('div');
  modal.id = 'project-modal';
  modal.className = 'project-modal';
  modal.innerHTML = `
    <div class="modal-overlay"></div>
    <div class="modal-content">
      <button class="modal-close">&times;</button>
      <h2 class="modal-title"></h2>
      <p class="modal-desc"></p>
      <div class="modal-thumbs"></div>
    </div>
    <div class="modal-fullview" style="display:none">
      <button class="fullview-close">&times;</button>
      <button class="fullview-prev">&#8249;</button>
      <button class="fullview-next">&#8250;</button>
      <div class="fullview-img-container">
        <img class="fullview-img" src="" alt="">
      </div>
      <div class="fullview-counter"></div>
    </div>
  `;
  document.body.appendChild(modal);

  const overlay = modal.querySelector('.modal-overlay');
  const closeBtn = modal.querySelector('.modal-close');
  const titleEl = modal.querySelector('.modal-title');
  const descEl = modal.querySelector('.modal-desc');
  const thumbsEl = modal.querySelector('.modal-thumbs');
  const fullview = modal.querySelector('.modal-fullview');
  const fullviewImg = modal.querySelector('.fullview-img');
  const fullviewCounter = modal.querySelector('.fullview-counter');
  const prevBtn = modal.querySelector('.fullview-prev');
  const nextBtn = modal.querySelector('.fullview-next');
  const fullviewClose = modal.querySelector('.fullview-close');

  let currentImages = [];
  let currentIndex = 0;

  function openGallery(card) {
    currentImages = JSON.parse(card.dataset.images || '[]');
    titleEl.textContent = card.dataset.title;
    descEl.textContent = card.dataset.desc;
    thumbsEl.innerHTML = currentImages.map((src, i) =>
      `<div class="modal-thumb" data-index="${i}">
        <img src="${src}" alt="Evidence ${i + 1}" loading="lazy">
      </div>`
    ).join('');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Thumb click → open full view
    thumbsEl.querySelectorAll('.modal-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        currentIndex = parseInt(thumb.dataset.index);
        showFullView();
      });
    });
  }

  function showFullView() {
    fullviewImg.src = currentImages[currentIndex];
    fullviewCounter.textContent = `${currentIndex + 1} / ${currentImages.length}`;
    fullview.style.display = 'flex';
    fullviewImg.classList.remove('zoomed');
  }

  function hideFullView() {
    fullview.style.display = 'none';
  }

  function closeGallery() {
    modal.classList.remove('active');
    fullview.style.display = 'none';
    document.body.style.overflow = '';
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    showFullView();
  });
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % currentImages.length;
    showFullView();
  });
  fullviewImg.addEventListener('click', () => {
    fullviewImg.classList.toggle('zoomed');
  });
  fullviewClose.addEventListener('click', hideFullView);
  overlay.addEventListener('click', closeGallery);
  closeBtn.addEventListener('click', closeGallery);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (fullview.style.display === 'flex') hideFullView();
      else closeGallery();
    }
    if (fullview.style.display === 'flex') {
      if (e.key === 'ArrowLeft') { currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length; showFullView(); }
      if (e.key === 'ArrowRight') { currentIndex = (currentIndex + 1) % currentImages.length; showFullView(); }
    }
  });

  // Attach to project cards
  document.querySelectorAll('.project-card.has-gallery').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      openGallery(card);
    });
  });
}

// ─── Contact Form (Formspree) ─────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        status.textContent = '✓ Message sent! I\'ll get back to you soon.';
        status.className = 'form-status success';
        form.reset();
      } else {
        throw new Error('Failed');
      }
    } catch {
      status.textContent = '✕ Something went wrong. Please email me directly.';
      status.className = 'form-status error';
    }
  });
}

// ─── Counter Animation ────────────────────────────────────────
function initCounterAnimation() {
  const counters = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        const text = entry.target.textContent;
        const match = text.match(/(\d+)/);
        if (!match) return;
        const target = parseInt(match[1]);
        const suffix = text.replace(match[1], '');
        let current = 0;
        const step = Math.max(1, Math.floor(target / 20));
        const interval = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(interval); }
          entry.target.textContent = current + suffix;
        }, 60);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => observer.observe(el));
}

// ─── Hover Tilt Effect on Cards ───────────────────────────────
function initTiltEffect() {
  const cards = document.querySelectorAll('.project-card, .cert-card, .stat-card, .skill-category');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(600px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}
