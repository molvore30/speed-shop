document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});
if (btnSubmit) {
    btnSubmit.addEventListener('click', function () {
      modal.classList.add('show');
  
      const next = document.querySelector('.next');
      next.setAttribute('value', 'https://cobee-the-junior-programmer.netlify.app/contact.html');
    });
  }