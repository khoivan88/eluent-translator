import 'alpinejs';
import SmoothScroll from 'smooth-scroll';

// Initialize Smooth scroll
var scroll = new SmoothScroll('a[href*="#"]');

// Check that service workers are supported
if ('serviceWorker' in navigator) {
  // use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    try {
      navigator.serviceWorker.register('/service-worker.js');
    } catch (error) {
      console.error('Service worker registration failed: ', error);
    }
  });
}
