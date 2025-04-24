// Simple dust particle effect for Obsidian Digital Garden
document.addEventListener("DOMContentLoaded", function() {
  // Create a canvas element for the particles
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none'; // Allows clicking through the canvas
  canvas.style.zIndex = '0'; // Place behind content
  
  // Insert the canvas as the first element in the body
  document.body.insertBefore(canvas, document.body.firstChild);
  
  // Get the 2D drawing context
  const ctx = canvas.getContext('2d');
  
  // Resize canvas to match window size
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  // Call resize initially and on window resize
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // Particle class
  class Particle {
    constructor() {
      this.reset();
    }
    
    reset() {
      // Position randomly on the screen
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      
      // Random size (small)
      this.size = Math.random() * 3 + 1;
      
      // Random velocity (slow movement)
      this.vx = Math.random() * 0.2 - 0.1;
      this.vy = Math.random() * 0.2 - 0.1;
      
      // Set a random opacity for dust-like effect
      this.opacity = Math.random() * 0.5 + 0.1;
    }
    
    update() {
      // Move the particle
      this.x += this.vx;
      this.y += this.vy;
      
      // If particle moves off-screen, reset it
      if (this.x < 0 || this.x > canvas.width || 
          this.y < 0 || this.y > canvas.height) {
        this.reset();
      }
    }
    
    draw() {
      // Save current context state
      ctx.save();
      
      // Set fill style to white with particle's opacity
      ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
      
      // Draw the particle as a circle
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Restore context state
      ctx.restore();
    }
  }
  
  // Create an array to hold particles
  const particles = [];
  const particleCount = 50; // Adjust number of particles
  
  // Initialize particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
  
  // Animation loop
  function animate() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw each particle
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });
    
    // Continue the animation loop
    requestAnimationFrame(animate);
  }
  
  // Start the animation
  animate();
});
