document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const messageContainer = document.getElementById("form-message");

    const response = await fetch("https://formspree.io/f/xeokpgqw", {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      messageContainer.innerHTML = `<div class="alert alert-success">✅ Merci, votre message a bien été envoyé.</div>`;
      form.reset();
    } else {
      messageContainer.innerHTML = `<div class="alert alert-danger">❌ Une erreur est survenue. Veuillez réessayer.</div>`;
    }
  });
});
