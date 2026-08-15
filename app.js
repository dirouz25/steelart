const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

if (menu && menuLinks) {
  menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  });
  menu.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      menu.classList.toggle('is-active');
      menuLinks.classList.toggle('active');
    }
  });
}

window.addEventListener('load', () => {
  const mainContent = document.querySelector('.main__content');
  const mainImage = document.querySelector('.main_img--container');
  if (mainContent) mainContent.classList.add('animate-in');
  if (mainImage) mainImage.classList.add('animate-in');

  const header = document.querySelector('h1');
  const description = document.querySelector('.products-description');
  if (header) header.classList.add('animate-in');
  if (description) {
    setTimeout(() => description.classList.add('animate-in'), 300);
  }

  document.querySelectorAll('.product-card').forEach((product, index) => {
    setTimeout(() => product.classList.add('animate-in'), 300 + index * 100);
  });
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('animate-in');
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.services__card').forEach(card => observer.observe(card));
}

let slideIndex = 0;
const slides = document.getElementsByClassName('slide');

function showSlides(n) {
  if (!slides.length) return;
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;
  for (let i = 0; i < slides.length; i++) slides[i].classList.remove('active');
  slides[slideIndex].classList.add('active');
}

function changeSlide(n) {
  showSlides(slideIndex += n);
}

if (slides.length) {
  showSlides(slideIndex);
  window.setInterval(() => changeSlide(1), 5000);
}
