// Active Swiper uniquement sur les petits écrans (≤800px)
function setupSwiper() {
    const swiperContainer = document.querySelector('.swiper-container');
    if (window.innerWidth <= 800) {
        new Swiper('.swiper-container', {
            loop: false, // Désactive la boucle infinie
            slidesPerView: 1, // Une image visible à la fois
            spaceBetween: 15, // Espacement entre les slides
            autoplay: {
                delay: 3000, // Transition automatique toutes les 3 secondes
                disableOnInteraction: true, // Arrête l'autoplay après interaction
            },
        });
    } else {
        // Si l'écran est large, affiche tous les logos côte à côte
        swiperContainer.classList.remove('swiper-container-initialized');
    }
}

setupSwiper();
window.addEventListener('resize', setupSwiper); // Réagit aux redimensionnements
