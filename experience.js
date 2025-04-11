// Bouton Menu
const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");

// Afficher/Masquer le menu
menuButton.addEventListener("click", () => {
  menu.classList.toggle("visible");
});

// Données des expériences professionnelles
const professionalExperiences = [
  { period: "2023 - 2024", title: "Associé Auto", company: "MSCAR", logo: "" },
  { period: "2025", title: "Administrateur Système et Réseau", company: "Resistex", logo: "" },
  { period: "2021", title: "Chauffeur - Livreur", company: "La Poste", logo: "" },
  { period: "2021 - 2024", title: "Agent de support Dispatcher", company: "Pickup", logo: "" },
  { period: "2018 - 2019", title: "Livreur", company: "SAKURA TAVERNY", logo: "" },
  { period: "2019 - 2020", title: "Chauffeur - Livreur", company: "Amazon", logo: "" },
];

// Données des expériences scolaires
const educationExperiences = [
  { period: "2024 - 2026", school: "IRIS Mediaschool - Nice", degree: "BTS SIO option SISR" },
  { period: "2020 - 2021", school: "Lycée Galilée - Cergy", degree: "BTS Comptabilité et Gestion" },
  { period: "2016 - 2019", school: "Lycée Jacques Prevert - Taverny", degree: "BAC STMG (Sciences Technologiques du Management et de la Gestion)" },
];

// Données des certifications
const certifications = [
  { name: "ANSSI", logo: "" },
  { name: "CompTIA", logo: "" },
  { name: "Cisco", logo: "" },
];

// Fonction pour créer une carte HTML
function createCard({ period, title, company, school, degree, name, logo }) {
  const card = document.createElement("div");
  card.className = "card";

  if (period && title && company) {
    card.innerHTML = `<p><strong>${period}</strong></p><p>${title}</p><p>${company}</p>`;
  } else if (period && school && degree) {
    card.innerHTML = `<p><strong>${period}</strong></p><p>${school}</p><p><em>${degree}</em></p>`;
  } else if (name) {
    card.innerHTML = `<p>${name}</p><img src="${logo}" alt="${name}" class="certification-logo">`;
  }

  return card;
}

// Insérer les expériences professionnelles
const professionalContainer = document.getElementById("professional-experiences");
professionalExperiences.forEach(exp => professionalContainer.appendChild(createCard(exp)));

// Insérer les expériences scolaires
const educationContainer = document.getElementById("education-experiences");
educationExperiences.forEach(edu => educationContainer.appendChild(createCard(edu)));

// Insérer les certifications
const certificationContainer = document.getElementById("certifications-list");
certifications.forEach(cert => certificationContainer.appendChild(createCard(cert)));
