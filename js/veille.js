/**
 * Logic for the Tools Carousel and Side Drawer in veille.html
 */

document.addEventListener("DOMContentLoaded", () => {
    // Initialize Swiper
    const swiper = new Swiper('.tools-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        }
    });

    // Elements for Side Drawer
    const toolCards = document.querySelectorAll('.artifact-card');
    const offcanvasElement = document.getElementById('veilleSideDrawer');

    if (!offcanvasElement) return;

    const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
    const titleEl = document.getElementById('drawerTitle');
    const descriptionEl = document.getElementById('drawerDescription');
    const iconEl = document.getElementById('drawerIcon');

    // Data for each tool
    const toolsData = {
        'anssi': {
            title: 'ANSSI',
            icon: 'bi-shield-fill-check',
            description: 'L\'Agence nationale de la sécurité des systèmes d\'information est le service à compétence nationale rattaché au secrétaire général de la Défense et de la Sécurité nationale. C\'est la référence absolue en France pour la cybersécurité, fournissant rapports techniques, alertes et guides de bonnes pratiques.'
        },
        'sentinel': {
            title: 'Microsoft Sentinel',
            icon: 'bi-shield-lock-fill',
            description: 'Microsoft Sentinel est une solution complète, native-cloud, intégrée au SIEM (Security Information and Event Management) et au SOAR (Security Orchestration, Automation, and Response). Elle utilise l\'intelligence artificielle intelligente pour analyser des volumes massifs de données à travers l\'entreprise.'
        },
        'splunk': {
            title: 'Splunk',
            icon: 'bi-bar-chart-fill',
            description: 'Splunk est une plateforme de "Data-to-Everything" qui permet d\'ingérer, indexer et corréler des logs en temps réel. Dans un cadre de sécurité, il sert de SIEM puissant pour détecter les anomalies et enquêter sur les incidents complexes via des tableaux de bord avancés.'
        },
        'enisa': {
            title: 'ENISA',
            icon: 'bi-globe2',
            description: 'L\'Agence de l\'Union européenne pour la cybersécurité. Elle publie chaque année le "ENISA Threat Landscape", une analyse approfondie des tendances mondiales et européennes en matière de menaces numériques, essentielle pour une veille stratégique.'
        },
        'mit': {
            title: 'MIT Technology Review',
            icon: 'bi-journal-text',
            description: 'Publication de référence mondiale issue du Massachusetts Institute of Technology. Elle offre un regard prospectif sur les technologies de rupture, particulièrement l\'intelligence artificielle et ses implications éthiques et sécuritaires dans la défense.'
        },
        'feedly': {
            title: 'Feedly',
            icon: 'bi-rss',
            description: 'Agrégateur de flux RSS indispensable pour centraliser toutes vos sources (blogs experts, Hacker News, sites institutionnels). Il permet de filtrer le bruit et de se concentrer sur les signaux faibles et les annonces techniques majeures.'
        },
        'google-alerts': {
            title: 'Google Alertes',
            icon: 'bi-bell-fill',
            description: 'Un service d\'envoi de notifications par e-mail lorsque de nouveaux résultats correspondant à des termes de recherche spécifiques (ex: "CVE-2025", "Zero Trust Architecture") sont indexés par le moteur de recherche.'
        },
        'osint': {
            title: 'OSINT Framework',
            icon: 'bi-search',
            description: 'Open Source Intelligence Framework. Un ensemble d\'outils et de ressources facilitant la collecte d\'informations à partir de sources publiques. Crucial pour le renseignement sur les menaces et la cartographie de la surface d\'attaque.'
        }
    };

    // Add click listeners to cards
    toolCards.forEach(card => {
        card.addEventListener('click', function () {
            const toolKey = this.getAttribute('data-tool');
            const data = toolsData[toolKey];

            if (data) {
                // Update drawer content
                titleEl.textContent = data.title;
                descriptionEl.textContent = data.description;

                // Update icon class
                iconEl.className = `bi ${data.icon} tool-detail-icon`;

                // Open the drawer
                bsOffcanvas.show();
            }
        });
    });
});
