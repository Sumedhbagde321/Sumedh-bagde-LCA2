document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".ba-container");
    const afterWrapper = document.querySelector(".after-wrapper");
    const handle = document.getElementById("slider-handle");
  
    let isDragging = false;
  
    const updateSlider = (x) => {
      const rect = container.getBoundingClientRect();
      let offsetX = x - rect.left;
      offsetX = Math.max(0, Math.min(offsetX, rect.width));
      const percent = (offsetX / rect.width) * 100;
      afterWrapper.style.width = percent + "%";
      handle.style.left = percent + "%";
    };
  
    handle.addEventListener("mousedown", () => isDragging = true);
    window.addEventListener("mouseup", () => isDragging = false);
    window.addEventListener("mousemove", (e) => {
      if (isDragging) {
        updateSlider(e.clientX);
      }
    });
  
    // Touch support
    handle.addEventListener("touchstart", () => isDragging = true);
    window.addEventListener("touchend", () => isDragging = false);
    window.addEventListener("touchmove", (e) => {
      if (isDragging) {
        updateSlider(e.touches[0].clientX);
      }
    });
  });

  function scrollFeatured(direction) {
    const container = document.getElementById('featured-container');
    const scrollAmount = 300;
    container.scrollLeft += direction * scrollAmount;
  }