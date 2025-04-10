let index = 0;
function moveCarousel(direction) {
    const carousel = document.getElementById('carousel');
    const carousel1 = document.getElementById('carousel1');

    const cards = document.querySelectorAll('.card');
    const cardWidth = cards[0].offsetWidth + 20;
    const maxIndex = cards.length - 3;

    index += direction;
    if (index < 0) index = 0;
    if (index > maxIndex) index = maxIndex;

    carousel.style.transform = `translateX(${-index * cardWidth}px)`;
    carousel1.style.transform = `translateX(${-index * cardWidth}px)`;


}

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const menus = document.querySelectorAll('.menu, #menu-2');
    
    hamburger.addEventListener('click', function() {
        menus.forEach(menu => {
            menu.classList.toggle('active');
        });
    });
});
