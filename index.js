const arrow = document.querySelector(".arrow");




function scroolToTop () {
  window.scrollTo({
    top: 0,
  });
}

arrow.addEventListener('click', function() {
  const newspaperSpinning = [
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" },
  ];
  
  const newspaperTiming = {
    duration: 2000,
    
  };
  

  scroolToTop().animate(arrow, arrowTiming);
  
});
