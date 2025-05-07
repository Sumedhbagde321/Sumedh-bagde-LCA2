
let slidesContainer = document.getElementById('slides-container');
let slideElements = document.querySelectorAll('.slide');
let totalSlides = slideElements.length;
let currentIndex = 0;

function updateSlidePosition() {
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  slidesContainer.style.transition = "transform 0.5s ease-in-out";
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }
  updateSlidePosition();
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }
  updateSlidePosition();
}

// Auto Slide
setInterval(() => {
  nextSlide();
}, 4000);

// Initialize
updateSlidePosition();

function scrollRight() {
    const slider = document.getElementById('slider');
    slider.scrollLeft += 300;
  }
  
  function scrollFeatured(direction) {
    const container = document.getElementById('featured-container');
    const scrollAmount = 300;
    container.scrollLeft += direction * scrollAmount;
  }
  
  
