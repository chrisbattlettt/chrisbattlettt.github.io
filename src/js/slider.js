 let currentSlide = 0;
  const slides = document.querySelectorAll('.slider-image');
  const totalSlides = slides.length;
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  }
  
  function updateSlider() {
    const slideWidth = slides[0].offsetWidth;
    document.querySelector('.slider-container').style.transform = `translateX(-${slideWidth * currentSlide}px)`;
  }
  
  setInterval(nextSlide, 3000);