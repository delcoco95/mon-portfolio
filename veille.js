// Gérer le clic sur le bouton Menu
document.getElementById('menu-icon').addEventListener('click', () => {
    alert('Menu en cours de développement.');
  });
  
  // Gérer les boutons de réseaux sociaux
  document.querySelectorAll('.social-button').forEach(button => {
    button.addEventListener('click', (event) => {
      const altText = event.target.alt; // "GitHub" ou "LinkedIn"
      alert(`Redirection vers ${altText}`);
    });
  });
  