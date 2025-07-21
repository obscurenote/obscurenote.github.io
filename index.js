document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('waitlist-form');
  const emailInput = document.getElementById('waitlist-email');
  const submitBtn = document.getElementById('waitlist-submit');
  const successMsg = document.getElementById('waitlist-success');

  function isValidEmail(email) {
    // Simple email regex validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Check localStorage for joined state
  if (localStorage.getItem('waitlistJoined') === 'true') {
    submitBtn.textContent = 'Joined';
    submitBtn.disabled = true;
    emailInput.disabled = true;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      emailInput.focus();
      return;
    }
    submitBtn.disabled = true;
    const originalBtnHTML = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="spinner"></span>';
    // Send to Google Apps Script endpoint
    fetch('https://script.google.com/macros/s/AKfycbxiu6nXdJ-1VBUag37ITYQ-3wEIvfhps2MB-dAhhwf2D8g4yGim_RUBNExcCPz01SHzuw/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `email=${encodeURIComponent(email)}`
    }).then(() => {
      form.reset();
      submitBtn.disabled = true;
      submitBtn.textContent = 'Joined';
      emailInput.disabled = true;
      localStorage.setItem('waitlistJoined', 'true');
      submitBtn.innerHTML = 'Joined';
      successMsg.style.display = 'block';
      setTimeout(() => { successMsg.style.display = 'none'; }, 4000);
    }).catch(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHTML;
      alert('There was an error joining the waitlist. Please try again.');
    });
  });

  // Countdown Timer Logic
  const countdownElement = document.getElementById('countdown-timer');
  // Set launch date to August 1st, 2024, 00:00:00 local time
  const launchDate = new Date('2025-08-01T00:00:00');

  const timerInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = launchDate - now;

    if (distance < 0) {
      clearInterval(timerInterval);
      countdownElement.innerHTML = '<a href="assets/ObscureInstaller.msi" download>Get Beta</a>';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    countdownElement.innerHTML = `<span>${days}d ${hours}h ${minutes}m</span>`;
  }, 1000);
});

// Spinner CSS (injects a style tag for the spinner)
(function() {
  const style = document.createElement('style');
  style.textContent = `
    .spinner {
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 3px solid rgba(255,255,255,0.2);
      border-top: 3px solid #fff;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      vertical-align: middle;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
})(); 