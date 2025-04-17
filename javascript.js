document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const messageDiv = document.getElementById('form-message');
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
      .then(
        () => {
          messageDiv.className = 'form-message success';
          messageDiv.textContent = 'Message sent successfully!';
          this.reset();
          setTimeout(() => (messageDiv.style.display = 'none'), 3000);
        },
        (error) => {
          messageDiv.className = 'form-message error';
          messageDiv.textContent = 'Failed to send message: ' + JSON.stringify(error);
          setTimeout(() => (messageDiv.style.display = 'none'), 3000);
        }
      );
  });