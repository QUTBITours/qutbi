document.addEventListener('DOMContentLoaded', function() {
  // Contact form validation and submission
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    const nameInput = contactForm.querySelector('#name');
    const emailInput = contactForm.querySelector('#email');
    const phoneInput = contactForm.querySelector('#phone');
    const messageInput = contactForm.querySelector('#message');
    const inquiryType = contactForm.querySelector('#inquiry-type');
    
    // Helper function to validate email format
    function isValidEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
    
    // Helper function to validate phone number
    function isValidPhone(phone) {
      const phonePattern = /^[0-9+\- ]{10,15}$/;
      return phonePattern.test(phone);
    }
    
    // Function to highlight input errors
    function setErrorStyles(input, isError) {
      if (isError) {
        input.style.borderColor = '#F44336';
      } else {
        input.style.borderColor = '#DEE2E6';
      }
    }
    
    // Real-time validation
    nameInput.addEventListener('blur', function() {
      setErrorStyles(nameInput, nameInput.value.trim() === '');
    });
    
    emailInput.addEventListener('blur', function() {
      const value = emailInput.value.trim();
      setErrorStyles(emailInput, value === '' || !isValidEmail(value));
    });
    
    phoneInput.addEventListener('blur', function() {
      const value = phoneInput.value.trim();
      setErrorStyles(phoneInput, value !== '' && !isValidPhone(value));
    });
    
    messageInput.addEventListener('blur', function() {
      setErrorStyles(messageInput, messageInput.value.trim() === '');
    });
    
    // Form submission
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validate all fields
      let isValid = true;
      
      // Name validation
      if (nameInput.value.trim() === '') {
        setErrorStyles(nameInput, true);
        isValid = false;
      }
      
      // Email validation
      const emailValue = emailInput.value.trim();
      if (emailValue === '' || !isValidEmail(emailValue)) {
        setErrorStyles(emailInput, true);
        isValid = false;
      }
      
      // Phone validation (optional but must be valid if provided)
      const phoneValue = phoneInput.value.trim();
      if (phoneValue !== '' && !isValidPhone(phoneValue)) {
        setErrorStyles(phoneInput, true);
        isValid = false;
      }
      
      // Message validation
      if (messageInput.value.trim() === '') {
        setErrorStyles(messageInput, true);
        isValid = false;
      }
      
      if (isValid) {
        // In a real project, this would connect to a backend
        // For demo purposes, we'll just show a success message
        
        // Create success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.style.backgroundColor = '#4CAF50';
        successMessage.style.color = 'white';
        successMessage.style.padding = '15px';
        successMessage.style.borderRadius = '4px';
        successMessage.style.marginBottom = '20px';
        successMessage.style.textAlign = 'center';
        successMessage.innerHTML = '<p>Thank you for your message! We will get back to you soon.</p>';
        
        // Insert success message
        contactForm.parentNode.insertBefore(successMessage, contactForm);
        
        // Reset form
        contactForm.reset();
        
        // Remove error styles
        const inputs = contactForm.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
          setErrorStyles(input, false);
        });
        
        // Remove success message after 5 seconds
        setTimeout(function() {
          successMessage.style.opacity = '0';
          successMessage.style.transition = 'opacity 0.5s ease';
          
          setTimeout(function() {
            successMessage.remove();
          }, 500);
        }, 5000);
      } else {
        // Create error message
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.style.backgroundColor = '#F44336';
        errorMessage.style.color = 'white';
        errorMessage.style.padding = '15px';
        errorMessage.style.borderRadius = '4px';
        errorMessage.style.marginBottom = '20px';
        errorMessage.style.textAlign = 'center';
        errorMessage.innerHTML = '<p>Please fill in all required fields correctly.</p>';
        
        // Insert error message
        contactForm.parentNode.insertBefore(errorMessage, contactForm);
        
        // Remove error message after 5 seconds
        setTimeout(function() {
          errorMessage.style.opacity = '0';
          errorMessage.style.transition = 'opacity 0.5s ease';
          
          setTimeout(function() {
            errorMessage.remove();
          }, 500);
        }, 5000);
      }
    });
  }
});