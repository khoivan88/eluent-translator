import 'alpinejs';
import SmoothScroll from 'smooth-scroll';


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

// Initialize Smooth scroll
var scroll = new SmoothScroll('a[href*="#"]');

// Contact form submission: https://docs.netlify.com/forms/setup/#submit-html-forms-with-ajax
// const handleSubmit = (e) => {
//   e.preventDefault();
//   let myForm = document.getElementById('contactForm');
//   let formData = new FormData(myForm);
//   fetch('/', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//     body: new URLSearchParams(formData).toString(),
//   })
//     .then(() => console.log('Form successfully submitted'))
//     .catch((error) => alert(error));
// };
// document.querySelector('form').addEventListener('submit', handleSubmit);
