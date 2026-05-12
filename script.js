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

// === טופס יצירת קשר ===
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name  = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const msg   = document.getElementById('msg').value.trim();

    if (!name || !phone || !msg) {
      alert('נא למלא את כל השדות החובה');
      return;
    }

    const successMsg = document.getElementById('success-message');
    successMsg.style.display = 'block';
    this.reset();
    successMsg.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      successMsg.style.display = 'none';
    }, 5000);
  });
}

// === גלילה חלקה לעוגנים ===
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// === הדגשת עמוד פעיל בניווט ===
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(link => {
  const linkPage = link.getAttribute('href');
  if (linkPage === currentPage) {
    link.classList.add('active');
  }
});
