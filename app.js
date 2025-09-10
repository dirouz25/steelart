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

