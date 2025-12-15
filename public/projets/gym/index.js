document.querySelectorAll('.slider-tabs').forEach(slider => {
  const slides = slider.querySelectorAll('.slide');
  const tabs = slider.querySelectorAll('.tab');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      slides.forEach(s => s.classList.remove('active'));
      tabs.forEach(t => t.classList.remove('active'));

      const slideIndex = tab.getAttribute('data-slide') - 1;
      slides[slideIndex].classList.add('active');
      tab.classList.add('active');
    });
  });
});



 document.addEventListener("DOMContentLoaded", function () {
      const burger = document.getElementById("burger");
      const navMenu = document.getElementById("nav-menu");

      if (burger && navMenu) {
        burger.addEventListener("click", () => {
          navMenu.classList.toggle("open");
        });
      }
    });


     function updateButtonText() {
  const button = document.getElementById('action-button');
  const width = window.innerWidth;

  if (width <= 600) {
    button.textContent = 'Play now!';
  } else if (width <= 1024) {
    button.textContent = 'Let’s play';
  } else {
    button.textContent = 'Let’s do it!';
  }
}

window.addEventListener('resize', updateButtonText);
window.addEventListener('load', updateButtonText);