document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
    });
  }

  // Header scroll effect
  const header = document.querySelector('header');
  
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
      }
    });
  }

  // Testimonial slider
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.querySelector('.testimonial-controls .prev');
  const nextBtn = document.querySelector('.testimonial-controls .next');
  
  if (testimonialSlides.length > 0 && prevBtn && nextBtn) {
    let currentSlide = 0;
    
    // Hide all slides except the first one
    testimonialSlides.forEach((slide, index) => {
      if (index !== 0) {
        slide.style.display = 'none';
      }
    });

    // Show the specified slide
    function showSlide(n) {
      testimonialSlides.forEach(slide => {
        slide.style.display = 'none';
      });
      testimonialSlides[n].style.display = 'block';
      testimonialSlides[n].classList.add('fade-in');
    }

    // Next slide
    nextBtn.addEventListener('click', function() {
      currentSlide++;
      if (currentSlide >= testimonialSlides.length) {
        currentSlide = 0;
      }
      showSlide(currentSlide);
    });

    // Previous slide
    prevBtn.addEventListener('click', function() {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = testimonialSlides.length - 1;
      }
      showSlide(currentSlide);
    });

    // Auto slide change
    setInterval(function() {
      nextBtn.click();
    }, 5000);
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  
  if (faqItems.length > 0) {
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      
      question.addEventListener('click', function() {
        item.classList.toggle('active');
      });
    });
  }

  // Form validation
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic form validation
      let isValid = true;
      const name = contactForm.querySelector('#name');
      const email = contactForm.querySelector('#email');
      const message = contactForm.querySelector('#message');
      
      if (name && name.value.trim() === '') {
        isValid = false;
        name.style.borderColor = '#F44336';
      }
      
      if (email && email.value.trim() === '') {
        isValid = false;
        email.style.borderColor = '#F44336';
      }
      
      if (message && message.value.trim() === '') {
        isValid = false;
        message.style.borderColor = '#F44336';
      }
      
      if (isValid) {
        // In a real project, this would connect to a backend
        // For demo purposes, we'll just show an alert
        alert('Thank you for your message! We will contact you soon.');
        contactForm.reset();
      } else {
        alert('Please fill in all required fields.');
      }
    });
  }
});