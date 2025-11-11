document.addEventListener('DOMContentLoaded', () => {
  const anioEl = document.getElementById('anio');
  if (anioEl) anioEl.textContent = new Date().getFullYear();
});