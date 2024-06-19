// Smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    var scrollLinks = document.querySelectorAll('.navbar-nav a');

    for (var i = 0; i < scrollLinks.length; i++) {
      scrollLinks[i].addEventListener('click', function(e) {
        e.preventDefault();
        
        var hash = this.hash;
        var target = document.querySelector(hash);
        var targetTop = target.offsetTop;
        
        window.scrollTo({
          top: targetTop,
          behavior: 'smooth'
        });
      });
    }
  });

// Form validation
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  form.addEventListener('submit', function (event) {
      // Prevent the default form submission
      event.preventDefault();

      // Validate the form fields
      let valid = true;

      if (!validateName(nameInput.value)) {
          valid = false;
          nameInput.classList.add('is-invalid');
      } else {
          nameInput.classList.remove('is-invalid');
      }

      if (!validateEmail(emailInput.value)) {
          valid = false;
          emailInput.classList.add('is-invalid');
      } else {
          emailInput.classList.remove('is-invalid');
      }

      if (!validateMessage(messageInput.value)) {
          valid = false;
          messageInput.classList.add('is-invalid');
      } else {
          messageInput.classList.remove('is-invalid');
      }

      // If all fields are valid, submit the form
      if (valid) {
          form.submit();
      }
  });

  function validateName(name) {
      return name.trim() !== '';
  }

  function validateEmail(email) {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailPattern.test(email);
  }

  function validateMessage(message) {
      return message.trim() !== '';
  }
});


