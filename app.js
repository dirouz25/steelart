const menu= document.querySelector('#mobile-menu')
const menuLinks=document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){

    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active')

})


window.addEventListener('load', () => {
    const mainContent = document.querySelector('.main__content');
    const mainImage = document.querySelector('.main_img--container');

    mainContent.classList.add('animate-in');
    mainImage.classList.add('animate-in');
})
window.addEventListener('load', () => {
    // Animacija headera i opisa
    const header = document.querySelector('h1');
    const description = document.querySelector('.products-description');

    header.classList.add('animate-in');
    setTimeout(() => {
        description.classList.add('animate-in');
    }, 300); // opis 0.3s nakon headera

    // Animacija proizvoda
    const products = document.querySelectorAll('.product-card');
    products.forEach((product, index) => {
        setTimeout(() => {
            product.classList.add('animate-in');
        }, 600 + index * 200); // svaki proizvod 0.2s kasnije, počinje nakon teksta
    });
});

const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.services__card').forEach(card => {
    observer.observe(card);
});


let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[slideIndex].classList.add("active");
}

// Automatsko pomjeranje (opciono)
setInterval(() => {
    changeSlide(1);
}, 5000);