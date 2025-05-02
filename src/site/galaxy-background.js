/*
 * Galaxy Background Effect
 * 
 * This script creates an immersive, interactive galaxy background
 * inspired by Super Mario Galaxy. It renders multiple planet-like 
 * elements with subtle glow effects that respond to user interaction.
 * 
 * Features:
 * - Floating planets with subtle rotation and movement
 * - Starry background with depth and parallax effects
 * - Interactive elements that respond to cursor movement
 * - Optimized for performance and compatibility
 */

(function() {
  // Configuration options
  const config = {
    planetCount: 7,            // Number of planets to render
    starCount: 200,            // Number of background stars
    maxPlanetSize: 150,        // Maximum planet diameter (px)
    minPlanetSize: 30,         // Minimum planet diameter (px)
    glowIntensity: 0.7,        // Intensity of the glow effect (0-1)
    interactionDistance: 200,  // Distance for cursor interaction (px)
    rotationSpeed: 0.05,       // Base rotation speed for planets
    depthLayers: 3,            // Number of depth layers for parallax
    colorSchemes: [
      ['#8A2BE2', '#4B0082', '#9370DB'], // Purple scheme
      ['#1E90FF', '#4169E1', '#00BFFF'], // Blue scheme
      ['#FF4500', '#FF6347', '#FF7F50'], // Orange/red scheme
      ['#2E8B57', '#3CB371', '#00FA9A']  // Green scheme
    ]
  };
  
  // Main container for the galaxy
  let galaxyContainer;
  // Track mouse position
  let mouseX = 0;
  let mouseY = 0;
  // Track animation frame for cleanup
  let animationFrame;
  // Store planet elements and their properties
  let planets = [];
  // Store star elements and their properties
  let stars = [];
  
  // Initialize the galaxy effect
  function initGalaxy() {
    // Create container if it doesn't exist
    if (!document.getElementById('galaxy-background')) {
      galaxyContainer = document.createElement('div');
      galaxyContainer.id = 'galaxy-background';
      document.body.insertBefore(galaxyContainer, document.body.firstChild);
      
      // Add styles
      const style = document.createElement('style');
      style.textContent = `
        #galaxy-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
          background: linear-gradient(to bottom, #0B0B2B, #191970);
        }
        .galaxy-planet {
          position: absolute;
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
          transform-style: preserve-3d;
          will-change: transform;
          transition: box-shadow 0.3s ease;
        }
        .galaxy-planet::after {
          content: '';
          position: absolute;
          top: -20%;
          left: -20%;
          width: 140%;
          height: 140%;
          border-radius: 50%;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.5s ease;
          background: radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%);
        }
        .galaxy-planet.active::after {
          opacity: ${config.glowIntensity};
        }
        .galaxy-star {
          position: absolute;
          background-color: #FFF;
          border-radius: 50%;
          will-change: transform;
        }
      `;
      document.head.appendChild(style);
      
      // Create planets
      createPlanets();
      
      // Create stars
      createStars();
      
      // Add event listeners
      window.addEventListener('resize', handleResize);
      document.addEventListener('mousemove', handleMouseMove);
      
      // Start animation
      animate();
    }
  }
  
  // Create planet elements
  function createPlanets() {
    planets = [];
    
    for (let i = 0; i < config.planetCount; i++) {
      const planet = document.createElement('div');
      planet.className = 'galaxy-planet';
      
      // Random planet properties
      const size = Math.random() * (config.maxPlanetSize - config.minPlanetSize) + config.minPlanetSize;
      const colorScheme = config.colorSchemes[Math.floor(Math.random() * config.colorSchemes.length)];
      const mainColor = colorScheme[Math.floor(Math.random() * colorScheme.length)];
      const depth = Math.random() * config.depthLayers;
      
      // Generate a unique gradient for each planet
      const gradient = generatePlanetGradient(colorScheme);
      
      // Style the planet
      planet.style.width = `${size}px`;
      planet.style.height = `${size}px`;
      planet.style.background = gradient;
      
      // Set initial position
      const posX = Math.random() * window.innerWidth;
      const posY = Math.random() * window.innerHeight;
      
      // Set planet data
      const planetData = {
        element: planet,
        x: posX,
        y: posY,
        size: size,
        depth: depth,
        rotationSpeed: (Math.random() * 0.2 - 0.1) * config.rotationSpeed,
        orbitRadius: Math.random() * 30 + 10,
        orbitSpeed: Math.random() * 0.002 + 0.001,
        orbitAngle: Math.random() * Math.PI * 2,
        scale: 1 / (depth * 0.5 + 1),
        mainColor: mainColor
      };
      
      // Add to container and store reference
      planets.push(planetData);
      galaxyContainer.appendChild(planet);
      
      // Position the planet
      updatePlanetPosition(planetData);
    }
  }
  
  // Create star elements
  function createStars() {
    stars = [];
    
    for (let i = 0; i < config.starCount; i++) {
      const star = document.createElement('div');
      star.className = 'galaxy-star';
      
      // Random star properties
      const size = Math.random() * 2 + 1;
      const opacity = Math.random() * 0.7 + 0.3;
      const depth = Math.random() * config.depthLayers;
      
      // Style the star
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.opacity = opacity;
      
      // Set initial position
      const posX = Math.random() * window.innerWidth;
      const posY = Math.random() * window.innerHeight;
      
      // Set star data
      const starData = {
        element: star,
        x: posX,
        y: posY,
        size: size,
        depth: depth,
        scale: 1 / (depth * 0.5 + 1),
        twinkleSpeed: Math.random() * 0.01 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2
      };
      
      // Add to container and store reference
      stars.push(starData);
      galaxyContainer.appendChild(star);
      
      // Position the star
      updateStarPosition(starData);
    }
  }
  
  // Generate a unique gradient for each planet
  function generatePlanetGradient(colorScheme) {
    const angle = Math.floor(Math.random() * 360);
    const color1 = colorScheme[Math.floor(Math.random() * colorScheme.length)];
    const color2 = colorScheme[Math.floor(Math.random() * colorScheme.length)];
    
    // Add some texture to make it more planet-like
    if (Math.random() > 0.5) {
      return `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, ${color1} 0%, ${color2} 100%)`;
    } else {
      return `linear-gradient(${angle}deg, ${color1} 0%, ${color2} 100%)`;
    }
  }
  
  // Update planet position
  function updatePlanetPosition(planet) {
    const element = planet.element;
    
    // Calculate position with orbit
    const orbitX = Math.cos(planet.orbitAngle) * planet.orbitRadius;
    const orbitY = Math.sin(planet.orbitAngle) * planet.orbitRadius;
    
    // Apply position
    element.style.transform = `
      translate3d(${planet.x + orbitX}px, ${planet.y + orbitY}px, 0)
      scale(${planet.scale})
      rotate(${planet.orbitAngle * 20}deg)
    `;
  }
  
  // Update star position
  function updateStarPosition(star) {
    const element = star.element;
    
    // Apply position with parallax effect
    element.style.transform = `
      translate3d(
        ${star.x + (mouseX * star.depth * -0.02)}px, 
        ${star.y + (mouseY * star.depth * -0.02)}px, 
        0
      )
      scale(${star.scale})
    `;
    
    // Twinkle effect
    const twinkle = Math.sin(Date.now() * star.twinkleSpeed + star.twinklePhase) * 0.3 + 0.7;
    element.style.opacity = twinkle;
  }
  
  // Handle window resize
  function handleResize() {
    // Update planet positions relative to new window size
    for (const planet of planets) {
      if (planet.x > window.innerWidth) {
        planet.x = window.innerWidth * (planet.x / (window.innerWidth + 200));
      }
      if (planet.y > window.innerHeight) {
        planet.y = window.innerHeight * (planet.y / (window.innerHeight + 200));
      }
    }
    
    // Update star positions
    for (const star of stars) {
      if (star.x > window.innerWidth) {
        star.x = window.innerWidth * (star.x / (window.innerWidth + 100));
      }
      if (star.y > window.innerHeight) {
        star.y = window.innerHeight * (star.y / (window.innerHeight + 100));
      }
    }
  }
  
  // Handle mouse movement
  function handleMouseMove(e) {
    // Get mouse position relative to the center of the screen
    mouseX = e.clientX - window.innerWidth / 2;
    mouseY = e.clientY - window.innerHeight / 2;
    
    // Check for planet interactions
    checkPlanetInteractions(e.clientX, e.clientY);
  }
  
  // Check if cursor is near a planet
  function checkPlanetInteractions(cursorX, cursorY) {
    for (const planet of planets) {
      const planetX = planet.x + Math.cos(planet.orbitAngle) * planet.orbitRadius;
      const planetY = planet.y + Math.sin(planet.orbitAngle) * planet.orbitRadius;
      
      // Calculate distance between cursor and planet
      const dx = cursorX - planetX;
      const dy = cursorY - planetY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // If cursor is close to the planet, add active class
      if (distance < config.interactionDistance) {
        const intensity = 1 - (distance / config.interactionDistance);
        planet.element.classList.add('active');
        planet.element.style.boxShadow = `0 0 ${30 * intensity}px ${intensity * 5}px ${planet.mainColor}`;
      } else {
        planet.element.classList.remove('active');
        planet.element.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.3)';
      }
    }
  }
  
  // Animation loop
  function animate() {
    // Update planets
    for (const planet of planets) {
      // Update orbit angle
      planet.orbitAngle += planet.orbitSpeed;
      
      // Update planet position
      updatePlanetPosition(planet);
    }
    
    // Update stars with subtle parallax
    for (const star of stars) {
      updateStarPosition(star);
    }
    
    // Continue animation
    animationFrame = requestAnimationFrame(animate);
  }
  
  // Clean up resources
  function destroyGalaxy() {
    if (galaxyContainer) {
      // Remove event listeners
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      
      // Cancel animation
      cancelAnimationFrame(animationFrame);
      
      // Remove container
      if (galaxyContainer.parentNode) {
        galaxyContainer.parentNode.removeChild(galaxyContainer);
      }
      
      galaxyContainer = null;
      planets = [];
      stars = [];
    }
  }
  
  // Public API
  window.galaxyBackground = {
    init: initGalaxy,
    destroy: destroyGalaxy,
    // Update configuration
    updateConfig: function(newConfig) {
      Object.assign(config, newConfig);
      destroyGalaxy();
      initGalaxy();
    }
  };
})();

// Initialize the galaxy background
document.addEventListener('DOMContentLoaded', function() {
  window.galaxyBackground.init();
});
