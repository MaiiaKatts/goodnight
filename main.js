const showPngButton = document.getElementById('show-png-button');
const pngContainer = document.getElementById('png-container');

showPngButton.addEventListener('click', () => {
  showPngButton.style.display = 'none';
  pngContainer.style.display = 'block';
  setTimeout(() => {
    pngContainer.style.display = 'none';
    showPngButton.style.display = 'block';
  }, 5000);
});
