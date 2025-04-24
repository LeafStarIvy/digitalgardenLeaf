// Initialize particles.js
document.addEventListener('DOMContentLoaded', function() {
  // Create a container for particles
  const particlesContainer = document.createElement('div');
  particlesContainer.id = 'particles-js';
  particlesContainer.style.position = 'fixed';
  particlesContainer.style.top = '0';
  particlesContainer.style.left = '0';
  particlesContainer.style.width = '100%';
  particlesContainer.style.height = '100%';
  particlesContainer.style.zIndex = '1'; // Above background, below content
  particlesContainer.style.pointerEvents = 'none'; // So clicks pass through

  // Add to body as the first element
  document.body.insertBefore(particlesContainer, document.body.firstChild);

  // Configure particles.js
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 80, // Number of particles
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#E0B2FF' // Matching your --text-primary color
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000'
        }
      },
      opacity: {
        value: 0.3, // Base opacity
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3, // Base size
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#8AD6EE', // Match your --link-color
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 0.5, // Slower movement for dust-like effect
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab' // Particles connect when hovering
        },
        onclick: {
          enable: true,
          mode: 'push' // Add particles on click
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.3
          }
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  });
});