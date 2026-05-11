// טופס יצירת קשר
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const msg = document.getElementById('msg').value.trim();

  if (!name || !phone || !msg) {
    alert('נא למלא את כל השדות החובה');
    return;
  }

  // הצגת הודעת הצלחה
  document.getElementById('success-message').style.display = 'block';
  this.reset();

  // גלילה להודעת ההצלחה
  document.getElementById('success-message').scrollIntoView({ behavior: 'smooth' });

  // הסתרת ההודעה אחרי 5 שניות
  setTimeout(function() {
    document.getElementById('success-message').style.display = 'none';
  }, 5000);
});

// גלילה חלקה לעוגנים בניווט
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});