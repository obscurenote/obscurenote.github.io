document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('waitlist-form');
  const emailInput = document.getElementById('waitlist-email');
  const submitBtn = document.getElementById('waitlist-submit');
  const successMsg = document.getElementById('waitlist-success');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    submitBtn.disabled = true;
    const email = emailInput.value;
    // Google Forms details
    const formData = new FormData();
    formData.append('entry.699321639', email);

    fetch('https://docs.google.com/forms/d/e/1FAIpQLScoowyrmXfBIgUvyichkogEeaMtfIX-vXHOduEXtEqyysqP3g/formResponse', {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    }).then(() => {
      form.reset();
      submitBtn.disabled = false;
      successMsg.style.display = 'block';
      setTimeout(() => { successMsg.style.display = 'none'; }, 4000);
    });
  });
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