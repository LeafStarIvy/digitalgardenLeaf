/**
 * INTERACTIVE CONSTELLATION BACKGROUND
 * Creates a responsive constellation effect that reacts to cursor movement
 * and creates dynamic connections between stars.
 */

document.addEventListener('DOMContentLoaded', function() {
  // Create the canvas container
  const constellationContainer = document.createElement('div');
  constellationContainer.className = 'constellation-background';
  document.body.appendChild(constellationContainer);
  
  // Create the canvas element
  const canvas = document.createElement('canvas');
  canvas.id = 'constellation-canvas';
  constellationContainer.appendChild(canvas);
  
  // Get the canvas context
  const ctx = canvas.getContext('2d');
  
  // Set canvas dimensions
  function setCanvasDimensions() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  // Initialize canvas size
  setCanvasDimensions();
  
  // Update canvas size on window resize
  window.addEventListener('resize', setCanvasDimensions);
  
  // Mouse position tracking
  let mouse = {
    x: undefined,
    y: undefined,
    radius: 150 // Mouse influence radius
  };
  
  // Track mouse movement
  window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
  });
  
  // Star class
  class Star {
    constructor(x, y, radius, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.originalX = x;
      this.originalY = y;
      this.velocity = {
        x: (Math.random() - 0.5) * 0.3,
        y: (Math.random() - 0.5) * 0.3
      };
      this.opacity = Math.random() * 0.8 + 0.2;
      this.glowIntensity = Math.random() * 0.1 + 0.05;
      this.pulseSpeed = Math.random() * 0.02 + 0.01;
      this.pulsePhase = Math.random() * Math.PI * 2;
    }
    
    // Update star position and appearance
    update() {
      // Apply slight movement
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      
      // Contain within bounds with a soft edge
      const softEdge = 50;
      if (this.x > canvas.width + softEdge) this.x = -softEdge;
      if (this.x < -softEdge) this.x = canvas.width + softEdge;
      if (this.y > canvas.height + softEdge) this.y = -softEdge;
      if (this.y < -softEdge) this.y = canvas.height + softEdge;
      
      // Mouse interaction
      if (mouse.x !== undefined && mouse.y !== undefined) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Move stars away from mouse cursor with subtle gravitational effect
        if (distance < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - distance) / mouse.radius * 2;
          
          // Apply subtle gravitational pull or push
          this.x -= Math.cos(angle) * force;
          this.y -= Math.sin(angle) * force;
        }
      }
      
      // Pulsating effect
      this.pulsePhase += this.pulseSpeed;
      const pulseFactor = (Math.sin(this.pulsePhase) + 1) * 0.5;
      
      // Draw the star
      this.draw(pulseFactor);
    }
    
    // Draw the star with glow effect
    draw(pulseFactor) {
      // Base star
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius * (1 + pulseFactor * 0.3), 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity * (0.7 + pulseFactor * 0.3);
      ctx.fill();
      
      // Outer glow
      const gradient = ctx.createRadialGradient(
        this.x, this.y, this.radius * 0.7,
        this.x, this.y, this.radius * 4 * (1 + pulseFactor)
      );
      gradient.addColorStop(0, this.color);
      gradient.addColorStop(1, 'transparent');
      
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius * 4 * (1 + pulseFactor), 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.globalAlpha = this.glowIntensity * (0.5 + pulseFactor * 0.5);
      ctx.fill();
      
      // Reset global alpha
      ctx.globalAlpha = 1;
    }
  }
  
  // Stars array
  let stars = [];
  
  // Generate stars based on screen size
  function createStars() {
    // Clear existing stars
    stars = [];
    
    // Calculate number of stars based on screen size
    const area = canvas.width * canvas.height;
    const starCount = Math.floor(area / 12000); // Adjust density here
    
    // Get computed CSS variables for colors
    const computedStyle = getComputedStyle(document.documentElement);
    const colorPool = [
      computedStyle.getPropertyValue('--aurora-teal-300').trim() || '#38BDF8',
      computedStyle.getPropertyValue('--aurora-cyan-300').trim() || '#22D3EE',
      computedStyle.getPropertyValue('--aurora-purple-300').trim() || '#A78BFA',
      computedStyle.getPropertyValue('--aurora-pink-300').trim() || '#F0ABFC',
      computedStyle.getPropertyValue('--text-primary').trim() || '#BAE6FD'
    ];
    
    // Create stars
    for (let i = 0; i < starCount; i++) {
      const radius = Math.random() * 1.5 + 0.5;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const color = colorPool[Math.floor(Math.random() * colorPool.length)];
      
      stars.push(new Star(x, y, radius, color));
    }
  }
  
  // Create initial stars
  createStars();
  
  // Regenerate stars on window resize
  window.addEventListener('resize', createStars);
  
  // Connect stars with lines if they're close enough
  function connectStars() {
    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        const dx = stars[i].x - stars[j].x;
        const dy = stars[i].y - stars[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Connect stars that are close enough
        if (distance < 100) {
          // Calculate line opacity based on distance
          const opacity = 1 - (distance / 100);
          
          // Determine if this connection is close to mouse cursor
          let mouseInfluence = 0;
          if (mouse.x !== undefined && mouse.y !== undefined) {
            const midX = (stars[i].x + stars[j].x) / 2;
            const midY = (stars[i].y + stars[j].y) / 2;
            const mouseDx = mouse.x - midX;
            const mouseDy = mouse.y - midY;
            const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
            
            // Calculate influence factor
            if (mouseDistance < mouse.radius * 1.5) {
              mouseInfluence = 1 - (mouseDistance / (mouse.radius * 1.5));
            }
          }
          
          // Draw connection line
          ctx.beginPath();
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(stars[j].x, stars[j].y);
          
          // Create gradient color for the line based on the two stars
          const gradient = ctx.createLinearGradient(
            stars[i].x, stars[i].y,
            stars[j].x, stars[j].y
          );
          gradient.addColorStop(0, stars[i].color);
          gradient.addColorStop(1, stars[j].color);
          
          // Apply mouse influence to line width and opacity
          const baseWidth = 0.3;
          const maxWidth = 2;
          const lineWidth = baseWidth + (maxWidth - baseWidth) * mouseInfluence;
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = lineWidth;
          ctx.globalAlpha = opacity * (0.2 + mouseInfluence * 0.8);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    }
  }
  
  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    
    // Clear canvas with semi-transparent background for trails
    ctx.fillStyle = 'rgba(1, 5, 8, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw star connections
    connectStars();
    
    // Update all stars
    stars.forEach(star => star.update());
  }
  
  // Start animation
  animate();
  
  // Optional: Add scroll interaction
  window.addEventListener('scroll', function() {
    // Parallax effect on stars based on scroll position
    const scrollY = window.scrollY;
    stars.forEach(star => {
      star.y = star.originalY - (scrollY * 0.03 * Math.random());
    });
  });
});
