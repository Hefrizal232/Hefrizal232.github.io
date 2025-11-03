const funFacts = [
  "di malam hari aku lebih produktif dalam belajar",
  "Aku suka Traveling",
];

function showFunFact() {
  const modal = document.getElementById("funFactModal");
  const factText = document.getElementById("factText");
  const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];

  factText.textContent = randomFact;
  modal.classList.add("active");
}

function closeModal(event) {
  const modal = document.getElementById("funFactModal");
  if (!event || event.target === modal) {
    modal.classList.remove("active");
  }
}
