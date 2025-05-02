.galaxy-spiral-js {
    Add this JavaScript to generate the spiral:
    
    document.addEventListener('DOMContentLoaded', function() {
      const spiral = document.querySelector('.galaxy-spiral');
      if (!spiral) return;
      
      const totalStars = 600;
      const armCount = 5;
      const armAngle = (2 * Math.PI) / armCount;
      
      for (let i = 0; i < totalStars; i++) {
        const star = document.createElement('div');
        star.className = 'spiral-star';
        
        // Calculate spiral position
        const armIndex = i % armCount;
        const distanceFromCenter = 10 + (i / totalStars) * 180;
        const rotationAngle = (i / totalStars) * 15 * Math.PI + armIndex * armAngle;
        
        // Set star size (larger toward center)
        const starSize = Math.max(1, 4 * (1 - i / totalStars));
        star.style.width = starSize + 'px';
        star.style.height = starSize + 'px';
        
        // Set position
        const x = Math.cos(rotationAngle) * distanceFromCenter;
        const y = Math.sin(rotationAngle) * distanceFromCenter;
        const z = (Math.random() - 0.5) * 20;
        
        star.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
        
        // Set color (blue to purple to pink)
        const hue = 240 + (armIndex * 30);
        const color = `hsl(${hue}, 80%, 70%)`;
        star.style.backgroundColor = color;
        star.style.boxShadow = `0 0 4px 1px ${color}`;
        
        // Vary opacity
        star.style.opacity = 0.1 + Math.random() * 0.9;
        
        spiral.appendChild(star);
      }
    });
