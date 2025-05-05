document.addEventListener('DOMContentLoaded', function() {
  // Country filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const countryCards = document.querySelectorAll('.country-card');
  
  if (filterButtons.length > 0 && countryCards.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => {
          btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        // Show/hide countries based on filter
        countryCards.forEach(card => {
          if (filterValue === 'all') {
            card.style.display = 'block';
          } else {
            if (card.classList.contains(filterValue)) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          }
        });
      });
    });
  }
});