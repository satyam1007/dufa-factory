document.getElementById('menu-button').addEventListener('click', function () {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
});

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

if (slides.length > 0) {
  document.querySelector('.carousel-control-next').addEventListener('click', () => {
    slides[currentSlide].classList.add('hidden');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.remove('hidden');
  });

  document.querySelector('.carousel-control-prev').addEventListener('click', () => {
    slides[currentSlide].classList.add('hidden');
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].classList.remove('hidden');
  });
};

// Get all the list items
const listItems = document.querySelectorAll('#mobile-menu ul li');

// Add a click event listener to each list item
listItems.forEach(item => {
  item.addEventListener('click', (event) => {
    // Prevent the default link behavior
    event.preventDefault();
    // Get the href attribute from the anchor tag
    const targetPage = item.querySelector('a').getAttribute('href');
    // Navigate to the target page
    if (targetPage) {
      location.href = targetPage;
    };
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the class "heartIcon"
  let heartIcons = document.querySelectorAll(".heartIcon");

  // Load the saved states from local storage
  heartIcons.forEach((element, index) => {
    let isRed = localStorage.getItem(`heartIcon_${index}`);
    if (isRed === 'true') {
      element.style.color = 'red';
    }

    element.addEventListener("click", function () {
      let currentState = localStorage.getItem(`heartIcon_${index}`);
      if (currentState === 'true') {
        this.style.color = '';
        localStorage.setItem(`heartIcon_${index}`, 'false');
      } else {
        this.style.color = 'red';
        localStorage.setItem(`heartIcon_${index}`, 'true');
      }
    });
  });
});


