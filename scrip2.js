document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".producto-card");
  cards.forEach((card, i) => {
    card.style.opacity = "0";
    setTimeout(() => {
      card.style.transition = "opacity 1s ease";
      card.style.opacity = "1";
    }, i * 300);
  });
});