// Add this to a script file or in a <script> tag at the end of your HTML

document.addEventListener('DOMContentLoaded', function() {
  // Create HTML elements for galaxy effects
  createGalaxyElements();
  
  // Set up parallax effect
  setupParallax();
  
  // Add interactive flares to buttons and links
  setupInteractiveFlares();
});

function createGalaxyElements() {
  // Create stellar flare container and flares
  const flareContainer = document.createElement('div');
  flareContainer.className = 'stellar-flare-container';
  
  for (let i = 0; i < 4; i++) {
    const flare = document.createElement('div');
    flare.className = 'stellar-flare';
    flareContainer.appendChild(flare);
  }
  
  // Create nebula clouds
  const nebulaContainer = document.createElement('div');
  nebulaContainer.className = 'galaxy-nebula';
  
  for (let i = 0; i < 8; i++) {
    const nebula = document.createElement('div');
    nebula.className = 'nebula-cloud';
    nebulaContainer.appendChild(nebula);
  }
  
  // Create parallax stars
  const parallaxContainer = document.createElement('div');
  parallaxContainer.className = 'parallax-stars';
  
  for (let i = 1; i <= 3; i++) {
    const layer = document.createElement('div');
    layer.className = `parallax-layer layer-${i}`;
    parallaxContainer.appendChild(layer);
  }
  
  // Add all elements to the body
  document.body.appendChild(flareContainer);
  document.body.appendChild(nebulaContainer);
  document.body.appendChild(parallaxContainer);
}

function setupParallax() {
  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const layer1 = document.querySelector('.layer-1');
    const layer2 = document.querySelector('.layer-2');
    const layer3 = document.querySelector('.layer-3');
    
    if (layer1 && layer2 && layer3) {
      layer1.style.transform = `translateY(${scrollY * 0.1}px) translateZ(-300px) scale(4)`;
      layer2.style.transform = `translateY(${scrollY * 0.05}px) translateZ(-200px) scale(3)`;
      layer3.style.transform = `translateY(${scrollY * 0.02}px) translateZ(-100px) scale(2)`;
    }
  });
}

function setupInteractiveFlares() {
  const interactiveElements = document.querySelectorAll('a, button, .flashcard, .card');
  
  interactiveElements.forEach(element => {
    // Create a flare element for each interactive element
    const flare = document.createElement('div');
    flare.className = 'interactive-flare';
    element.style.position = 'relative';
    element.appendChild(flare);
    
    // Position the flare at mouse position on hover
    element.addEventListener('mouseenter', function(e) {
      const rect = element.getBoundingClientRect();
      flare.style.left = (e.clientX - rect.left - 60) + 'px';
      flare.style.top = (e.clientY - rect.top - 60) + 'px';
      flare.classList.add('show-flare');
    });
    
    element.addEventListener('mousemove', function(e) {
      const rect = element.getBoundingClientRect();
      flare.style.left = (e.clientX - rect.left - 60) + 'px';
      flare.style.top = (e.clientY - rect.top - 60) + 'px';
    });
    
    element.addEventListener('mouseleave', function() {
      flare.classList.remove('show-flare');
    });
  });
}