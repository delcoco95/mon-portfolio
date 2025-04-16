// Configuration Swiper uniquement pour les petits écrans (≤800px)
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
        // Si l'écran est large, désactive Swiper et rétablit l'affichage statique
        swiperContainer.classList.remove('swiper-container-initialized');
    }
}

// Initialisation de Swiper avec configuration responsive
const swiper = new Swiper('.swiper-container', {
    loop: true, // Boucle infinie
    autoplay: {
        delay: 3000, // Transition automatique toutes les 3 secondes
        disableOnInteraction: false, // Continue même après interaction
    },
    slidesPerView: 3, // 3 images visibles sur les grands écrans
    spaceBetween: 30, // Espacement entre les slides
    breakpoints: {
        768: { // Pour écrans ≤ 768px
            slidesPerView: 1, // 1 image visible
            spaceBetween: 20, // Espacement réduit
        },
        1024: { // Pour écrans ≤ 1024px
            slidesPerView: 2, // 2 images visibles
            spaceBetween: 25,
        },
    },
});
