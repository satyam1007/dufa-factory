document.getElementById('menu-button').addEventListener('click', function () {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
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

const carousel = document.getElementById('carousel');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
let offset = 0;

if (carousel && next && prev) {
  next.addEventListener('click', () => {
    if (offset < (carousel.children.length - 1) * 100) {
      offset += 100;
      carousel.style.transform = `translateX(-${offset}%)`;
    }
  });

  prev.addEventListener('click', () => {
    if (offset > 0) {
      offset -= 100;
      carousel.style.transform = `translateX(-${offset}%)`;
    }
  });
}

