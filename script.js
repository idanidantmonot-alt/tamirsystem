// === הנפשות בגלילה ===
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});

// === HEADER — blur on scroll ===
const header = document.getElementById('main-header');
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

// === Mobile Menu ===
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu    = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    mobileMenuBtn.classList.toggle('open', isOpen);
  });
}

function closeMobileMenu() {
  if (mobileMenu)    mobileMenu.classList.remove('open');
  if (mobileMenuBtn) mobileMenuBtn.classList.remove('open');
}

// Close mobile menu on outside click
document.addEventListener('click', (e) => {
  if (mobileMenu && mobileMenuBtn &&
      !mobileMenu.contains(e.target) &&
      !mobileMenuBtn.contains(e.target)) {
    closeMobileMenu();
  }
});

// === טופס יצירת קשר ===
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name  = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const msg   = document.getElementById('msg').value.trim();

    if (!name || !phone || !msg) {
      // Show inline error
      if (!name)  document.getElementById('name').style.borderColor  = 'rgba(239,68,68,0.6)';
      if (!phone) document.getElementById('phone').style.borderColor = 'rgba(239,68,68,0.6)';
      if (!msg)   document.getElementById('msg').style.borderColor   = 'rgba(239,68,68,0.6)';
      return;
    }

    // Reset error styles
    ['name','phone','msg'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.borderColor = '';
    });

    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.textContent = 'שולח...';
      btn.disabled = true;
    }

    // Simulate send (replace with real API call when Supabase is ready)
    setTimeout(() => {
      const successMsg = document.getElementById('success-message');
      if (successMsg) {
        successMsg.style.display = 'block';
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      form.reset();
      if (btn) {
        btn.textContent = 'שלח הודעה 🚀';
        btn.disabled = false;
      }
      setTimeout(() => {
        if (successMsg) successMsg.style.display = 'none';
      }, 6000);
    }, 800);
  });

  // Remove error color on input
  ['name','phone','email','msg'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', () => { el.style.borderColor = ''; });
  });
}

// === גלילה חלקה לעוגנים ===
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const headerH = header ? header.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// === הדגשת עמוד פעיל בניווט ===
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href && href.split('#')[0] === currentPage) {
    link.classList.add('active');
  }
});
