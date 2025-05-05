document.addEventListener('DOMContentLoaded', function() {
  // Package filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const packageCards = document.querySelectorAll('.package-card');
  
  if (filterButtons.length > 0 && packageCards.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => {
          btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        // Show/hide packages based on filter
        packageCards.forEach(card => {
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