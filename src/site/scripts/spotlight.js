document.addEventListener('DOMContentLoaded', () => {
  // Create spotlight element
  const spotlight = document.createElement('div');
  spotlight.className = 'spotlight-effect';
  document.body.appendChild(spotlight);
  
  // Update spotlight position on mouse move
  document.addEventListener('mousemove', (e) => {
    spotlight.style.setProperty('--x', `${e.clientX}px`);
    spotlight.style.setProperty('--y', `${e.clientY}px`);
  });
});