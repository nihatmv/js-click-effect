const arrow = document.querySelector(".arrow");




function scroolToTop () {
  window.scrollTo({
    top: 0,
    
    
  });
}

arrow.addEventListener('click', function() {
  // Scroll to the top of the page
  
  arrow.animate({
    transform: scroolToTop()
  }, {
    duration: 4000,
    easing: "ease"
  })
  
});
