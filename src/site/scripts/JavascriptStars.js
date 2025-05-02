document.addEventListener('DOMContentLoaded', function() {
  const starField = document.createElement('div');
  starField.className = 'star-field';
  document.body.appendChild(starField);
  
  // Create stars
  const starCount = window.innerWidth / 3; // Responsive star count
  
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Random size
    const size = Math.random();
    if (size < 0.6) {
      star.classList.add('small');
    } else if (size < 0.9) {
      star.classList.add('medium');
    } else {
      star.classList.add('large');
    }
    
    // Random position
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    
    // Random twinkle animation
    if (Math.random() > 0.7) {
      star.style.animation = `twinkle ${3 + Math.random() * 4}s infinite alternate`;
    }
    
    starField.appendChild(star);
  }
  
  // Parallax effect for stars
  document.addEventListener('mousemove', function(e) {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    starField.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});