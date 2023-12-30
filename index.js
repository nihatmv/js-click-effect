const arrow = document.querySelector(".arrow");


arrow.addEventListener('click', function() {
  // Scroll to the top of the page
  window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: Adds smooth scrolling animation
      
  });

  arrow.animate({ 
    transform: scrollTo
  }, {
    duration: 4000,
    easing:"ease"
  })

});
