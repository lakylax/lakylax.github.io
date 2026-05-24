/**
 * Core portfolio interactions, dynamic rendering, and custom particle engine
 */

document.addEventListener('DOMContentLoaded', () => {
  renderPortfolioData();
  setupScrollAnimations();
  setupCursorGlow();
  setupCanvasParticles();
  setupMobileNav();
  setupContactForm();
  setupStatCounters();
  setupCardTilt();
});

// Render dynamic content blocks from data.js
function renderPortfolioData() {
  const data = SITE_DATA;

  // Render About Section
  const textContainer = document.getElementById('about-text');
  if (textContainer) {
    textContainer.innerHTML = data.about.summary.map(paragraph => `<p>${paragraph}</p>`).join('');
  }
  
  const statsContainer = document.getElementById('about-stats');
  if (statsContainer) {
    statsContainer.innerHTML = data.about.stats.map(item =>
      `<div class="stat-card reveal"><span class="stat-number">${item.number}</span><span class="stat-label">${item.label}</span></div>`
    ).join('');
  }

  // Render Tech Skills
  const skillsContainer = document.getElementById('skills-content');
  if (skillsContainer) {
    skillsContainer.innerHTML = data.skills.map(group =>
      `<div class="skill-category reveal">
        <h3>${group.category}</h3>
        <div class="skill-tags">${group.items.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}</div>
      </div>`
    ).join('');
  }

  // Render Professional Timeline
  const experienceContainer = document.getElementById('experience-content');
  if (experienceContainer) {
    experienceContainer.innerHTML = data.experience.map(job =>
      `<article class="experience-card reveal">
        <div class="experience-meta">${job.period} · ${job.location}</div>
        <h3>${job.role}</h3>
        <p class="experience-company">${job.company}</p>
        <ul>${job.highlights.map(point => `<li>${point}</li>`).join('')}</ul>
      </article>`
    ).join('');
  }

  // Render Project Cards
  const projectsContainer = document.getElementById('projects-content');
  if (projectsContainer) {
    projectsContainer.innerHTML = data.projects.map(proj =>
      `<div class="project-card reveal">
        <h3>${proj.title}</h3>
        <p class="project-desc">${proj.description}</p>
        <div class="project-tech">${proj.tech.map(t => `<span>${t}</span>`).join('')}</div>
        ${proj.link ? `<a href="${proj.link}" target="_blank" rel="noopener" class="project-link">↗ GitHub</a>` : ''}
      </div>`
    ).join('');
  }

  // Render Certifications
  const certsContainer = document.getElementById('certs-content');
  if (certsContainer) {
    certsContainer.innerHTML = data.certifications.map(cert =>
      `<a href="${cert.credlyUrl}" target="_blank" rel="noopener" class="cert-card reveal">
        <img src="${cert.image}" alt="${cert.name}" class="cert-badge" loading="lazy">
        <div class="cert-info">
          <h3>${cert.name}</h3>
          <p class="cert-issuer">${cert.issuer}</p>
          <p class="cert-date">Issued: ${cert.issued}${cert.expires ? ' · Expires: ' + cert.expires : ''}</p>
          ${cert.expires ? '<span class="cert-status">✓ Active</span>' : ''}
        </div>
      </a>`
    ).join('');
  }

  // Render Volunteering
  const volunteerContainer = document.getElementById('volunteer-content');
  if (volunteerContainer) {
    volunteerContainer.innerHTML = data.volunteering.map(vol =>
      `<div class="volunteer-card reveal">
        ${vol.image ? `<img src="${vol.image}" alt="${vol.title}" class="volunteer-badge" loading="lazy">` : ''}
        <div>
          <h3>${vol.title}</h3>
          <p class="volunteer-org">${vol.organization}</p>
          <p>${vol.description}</p>
        </div>
      </div>`
    ).join('');
  }

  // Render Education
  const educationContainer = document.getElementById('education-content');
  if (educationContainer) {
    educationContainer.innerHTML = data.education.map(edu =>
      `<div class="edu-card reveal">
        <h3>${edu.degree}</h3>
        <p class="edu-school">${edu.school}</p>
        <p class="edu-period">${edu.period} · ${edu.location}${edu.gpa ? ' · GPA: ' + edu.gpa : ''}${edu.concentration ? ' · Concentration: ' + edu.concentration : ''}</p>
        <p class="edu-coursework"><strong>Coursework:</strong> ${edu.coursework}</p>
      </div>`
    ).join('');
  }

  // Wire personal strings and forms
  document.getElementById('contact-email').textContent = data.personal.email;
  document.getElementById('contact-email').href = `mailto:${data.personal.email}`;
  document.getElementById('contact-phone').textContent = data.personal.phone;
  document.getElementById('contact-linkedin').href = data.personal.linkedin;
  document.getElementById('contact-github').href = data.personal.github;
  document.getElementById('contact-form').action = data.personal.formspreeEndpoint;
}

// Fade-in on scroll configuration
function setupScrollAnimations() {
  const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  elements.forEach(el => scrollObserver.observe(el));
}

// Interactive desktop cursor spotlight
function setupCursorGlow() {
  const glowEl = document.getElementById('cursor-glow');
  if (!glowEl || window.matchMedia('(max-width: 900px)').matches) return;
  
  document.addEventListener('mousemove', e => {
    glowEl.style.left = e.clientX + 'px';
    glowEl.style.top = e.clientY + 'px';
  });
}

// Interactive background grid and moving nodes
function setupCanvasParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let nodes = [];
  const totalNodes = 60;
  let mouseX = 0, mouseY = 0;

  function handleResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  handleResize();
  window.addEventListener('resize', handleResize);
  
  document.addEventListener('mousemove', e => { 
    mouseX = e.clientX; 
    mouseY = e.clientY; 
  });

  for (let i = 0; i < totalNodes; i++) {
    nodes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2.5 + 1
    });
  }

  let gradientRotation = 0;

  function renderFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Canvas Background Tech Grid
    ctx.strokeStyle = 'rgba(0,255,200,0.04)';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 60) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 60) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }

    // Dynamic Ambient Glows
    gradientRotation += 0.008;
    const coreGlow = ctx.createRadialGradient(
      200 + Math.sin(gradientRotation) * 50, 200 + Math.cos(gradientRotation) * 40, 0,
      200, 200, 300
    );
    coreGlow.addColorStop(0, 'rgba(0,255,200,0.06)');
    coreGlow.addColorStop(1, 'transparent');
    ctx.fillStyle = coreGlow;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const accentGlow = ctx.createRadialGradient(
      canvas.width - 200 + Math.cos(gradientRotation) * 40, canvas.height - 200 + Math.sin(gradientRotation) * 30, 0,
      canvas.width - 200, canvas.height - 200, 250
    );
    accentGlow.addColorStop(0, 'rgba(123,94,167,0.07)');
    accentGlow.addColorStop(1, 'transparent');
    ctx.fillStyle = accentGlow;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update and draw interactive nodes
    nodes.forEach(n => {
      const deltaX = mouseX - n.x;
      const deltaY = mouseY - n.y;
      const distance = Math.hypot(deltaX, deltaY);
      
      if (distance < 120) { 
        n.x -= deltaX * 0.015; 
        n.y -= deltaY * 0.015; 
      }
      
      n.x += n.vx; 
      n.y += n.vy;
      
      if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
      if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 255, 200, 0.45)';
      ctx.fill();
    });

    // Constellation lines
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
        if (dist < 140) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(0, 255, 200, ${0.12 * (1 - dist / 140)})`;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(renderFrame);
  }
  renderFrame();
}

// Mobile responsive nav layout
function setupMobileNav() {
  const toggleBtn = document.getElementById('nav-toggle');
  const linkMenu = document.getElementById('nav-links');
  if (!toggleBtn || !linkMenu) return;

  toggleBtn.addEventListener('click', () => {
    linkMenu.classList.toggle('open');
    toggleBtn.textContent = linkMenu.classList.contains('open') ? '✕' : '☰';
  });

  linkMenu.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', () => {
      linkMenu.classList.remove('open');
      toggleBtn.textContent = '☰';
    });
  });
}

// AJAX form execution
function setupContactForm() {
  const contactForm = document.getElementById('contact-form');
  const statusBanner = document.getElementById('form-status');
  if (!contactForm) return;

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        statusBanner.textContent = "✓ Message sent successfully! I'll be in touch.";
        statusBanner.className = 'form-status success';
        contactForm.reset();
      } else {
        throw new Error('Submission error');
      }
    } catch {
      statusBanner.textContent = '✕ Transmission failed. Please contact me directly via email.';
      statusBanner.className = 'form-status error';
    }
  });
}

// Numbers rolling animations
function setupStatCounters() {
  const targetCounters = document.querySelectorAll('.stat-number');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        const initialText = entry.target.textContent;
        const numberMatch = initialText.match(/(\d+)/);
        if (!numberMatch) return;
        
        const finalVal = parseInt(numberMatch[1]);
        const appendedString = initialText.replace(numberMatch[1], '');
        let currentVal = 0;
        const tickIncrement = Math.max(1, Math.floor(finalVal / 20));
        
        const rollTimer = setInterval(() => {
          currentVal += tickIncrement;
          if (currentVal >= finalVal) { 
            currentVal = finalVal; 
            clearInterval(rollTimer); 
          }
          entry.target.textContent = currentVal + appendedString;
        }, 60);
      }
    });
  }, { threshold: 0.5 });
  
  targetCounters.forEach(counter => counterObserver.observe(counter));
}

// Soft 3D tilt tracking for grid layouts
function setupCardTilt() {
  const targetCards = document.querySelectorAll('.project-card, .cert-card, .stat-card, .skill-category');
  targetCards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const boundary = card.getBoundingClientRect();
      const relativeX = (e.clientX - boundary.left) / boundary.width - 0.5;
      const relativeY = (e.clientY - boundary.top) / boundary.height - 0.5;
      card.style.transform = `perspective(600px) rotateY(${relativeX * 6}deg) rotateX(${-relativeY * 6}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}