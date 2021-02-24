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
