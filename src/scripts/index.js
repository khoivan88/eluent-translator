import 'alpinejs';

const env = document.querySelector('body').dataset.env;

import SmoothScroll from 'smooth-scroll';

// Initialize Smooth scroll
var scroll = new SmoothScroll('a[href*="#"]');

// Check that service workers are supported
if ('serviceWorker' in navigator && env === 'production') {
  // use the window load event to keep the page load performance
  window.addEventListener('load', () => {
    try {
      console.log('Service worker registration succeeded!');
      navigator.serviceWorker.register('/sw.js');
    } catch (error) {
      console.error('Service worker registration failed: ', error);
    }
  });
}

function toggleScrollTopBtn() {
  const toTopBtn = document.getElementById('toTopButton');

  toTopBtn.style.display = 'none';
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopBtn.style.display = 'block';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.addEventListener('DOMContentLoaded', function () {
  // console.log('main.js working!');

  // When the user scrolls down 20px from the top of the document, show the button
  document.addEventListener('scroll', toggleScrollTopBtn);
  document.querySelector('#toTopButton').addEventListener('click', topFunction);
});