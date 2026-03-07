/**
 * Logic for the Tools Side Drawer in veille.html
 */

document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const toolCards = document.querySelectorAll('.artifact-card');
    const offcanvasElement = document.getElementById('veilleSideDrawer');

    if (!offcanvasElement) return;

    const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
    const titleEl = document.getElementById('drawerTitle');
    const descriptionEl = document.getElementById('drawerDescription');
    const iconEl = document.getElementById('drawerIcon');

    // Data for each tool (can be expanded)
    const toolsData = {
        'google-alerts': {
            title: 'Google Alertes',
            icon: 'bi-bell',
            description: 'Permet de recevoir des notifications quotidiennes ou hebdomadaires sur des mots-clés spécifiques comme "AIOps", "Zero Trust", "Cybersécurité". C\'est le premier filtre indispensable pour une veille passive efficace.'
        },
        'feedly': {
            title: 'Feedly',
            icon: 'bi-rss',
            description: 'Agrégateur de flux RSS pour centraliser les articles de blogs spécialisés (Cisco Blog, Hacker News, BleepingComputer). Permet de classer l\'information par thématique (Réseau, Sécurité, Cloud).'
        },
        'youtube': {
            title: 'YouTube',
            icon: 'bi-youtube',
            description: 'Format idéal pour la veille technique approfondie. Suivi de chaînes comme Cisco Networking Academy, NetworkChuck ou Tech2Tech pour comprendre les implémentations pratiques des nouvelles technologies.'
        },
        'linkedin': {
            title: 'LinkedIn',
            icon: 'bi-linkedin',
            description: 'Pour suivre l\'actualité corporate et les annonces majeures des équipementiers (Cisco, Palo Alto Networks) et des experts du secteur. Format plus synthétique et orienté "tendances du marché".'
        },
        'n8n': {
            title: 'n8n',
            icon: 'bi-diagram-3',
            description: 'Outil d\'automatisation open-source (node-based) pour orchestrer des workflows complets. Utilisé par exemple pour lier une alerte de sécurité à la création d\'un ticket, ou automatiser des scripts réseaux via API.'
        },
        'zapier': {
            title: 'Zapier',
            icon: 'bi-lightning-charge',
            description: 'Plateforme no-code d\'automatisation. Très utile pour connecter rapidement des outils de supervision à des canaux de communication (ex: envoi d\'une alerte critique Prometheus directement sur un channel Teams/Slack).'
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
