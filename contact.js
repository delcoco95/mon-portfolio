// Gérer le clic sur le bouton Menu
document.getElementById('menu-icon').addEventListener('click', () => {
    alert('Menu en cours de développement.');
  });
  
  // Gérer l'envoi du formulaire
  document.getElementById('contactForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Empêcher la soumission par défaut
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    alert(`Merci ${name}, votre message a été envoyé avec succès !`);
    // Ici, vous pourriez ajouter une logique pour envoyer les données à un serveur.
  });
  
  // Gérer les boutons de réseaux sociaux
  document.querySelectorAll('.social-button').forEach(button => {
    button.addEventListener('click', (event) => {
      const altText = event.target.alt; // "GitHub" ou "LinkedIn"
      alert(`Redirection vers ${altText}`);
    });
  });
  