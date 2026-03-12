/* particles-init.js — Initialisation Particles.js via fichier de configuration JSON
   Charge la configuration depuis assets/particles/particles-config.json
   Dépend de : particles.min.js (local ou CDN) */

document.addEventListener('DOMContentLoaded', function () {
  if (typeof particlesJS === 'undefined') {
    console.warn('particles-init: particlesJS non disponible — vérifier le chargement de particles.min.js');
    return;
  }

  particlesJS.load(
    'particles-js',
    'assets/particles/particles-config.json',
    function () {
      console.log('Particles chargées depuis particles-config.json');
    }
  );
});
