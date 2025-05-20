/**
 * setupSmoothNavigation: Adds smooth navigation behavior to navigation buttons.
 */
function setupSmoothNavigation() {
  const navSelectors = ['.main-nav button', '.nav-buttons button'];
  document.querySelectorAll(navSelectors.join(', ')).forEach(btn => {
    btn.addEventListener('click', () => {
      window.location.href = btn.dataset.link;
    });
    btn.addEventListener('keyup', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        window.location.href = btn.dataset.link;
      }
    });
  });
}

/**
 * setupGetDirectionsButton: Opens Google Maps with the venue address.
 */
function setupGetDirectionsButton() {
  const directionsBtn = document.querySelector('#get-directions');
if (!directionsBtn) return;
directionsBtn.addEventListener('click', () => {
const url = 'https://www.google.com/maps/search/?api=1&query=barnathiddenridge';
window.open(url, '_blank');
});
}

function setupOpenRegistryButton() {
  const registryBtn = document.querySelector('#open-registry');
if (!registryBtn) return;
registryBtn.addEventListener('click', () => {
const url = 'https://www.amazon.com/wedding/registry/3921HTI4PC24Y';
window.open(url, '_blank');
});
}

/**
 * preloadBackgroundImage: Lazy-loads a background image after window.load.
 */
function preloadBackgroundImage() {
  const panel = document.querySelector('.panel');
  if (!panel) return;
  const img = new Image();
  img.src = 'assets/img/background.jpg';
  img.onload = () => {
    panel.style.backgroundImage = `url('${img.src}')`;
  };
}

// Initialize features on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  setupSmoothNavigation();
  setupGetDirectionsButton();
  setupOpenRegistryButton();
});

// Lazy-load background on window load
window.addEventListener('load', preloadBackgroundImage);
