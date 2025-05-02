document.addEventListener('DOMContentLoaded', function() {
  const body = document.body;
  body.classList.add('galaxy-body');
  
  const planetSystem = document.createElement('div');
  planetSystem.className = 'planet-system';
  
  // Create planets
  const planetData = [
    { 
      type: 'gas-giant ringed',
      size: 120,
      top: '15%', 
      left: '75%', 
      depth: -800,
      orbitAnimation: 'orbit-1', 
      orbitDuration: 120,
      orbitDistance: 50,
      spinAmount: 180,
      hasMoon: true
    },
    { 
      type: 'rocky', 
      size: 60, 
      top: '60%', 
      left: '20%', 
      depth: -500, 
      orbitAnimation: 'orbit-2',
      orbitDuration: 90,
      orbitDistance: 30,
      spinAmount: 90,
      hasMoon: false
    },
    { 
      type: 'earth-like', 
      size: 80, 
      top: '70%', 
      left: '65%', 
      depth: -600,
      orbitAnimation: 'orbit-3', 
      orbitDuration: 100,
      orbitDistance: 40,
      spinAmount: 120,
      hasMoon: true
    },
    { 
      type: 'ice', 
      size: 45, 
      top: '35%', 
      left: '30%', 
      depth: -400,
      orbitAnimation: 'orbit-2', 
      orbitDuration: 80,
      orbitDistance: 20,
      spinAmount: 60,
      hasMoon: false
    }
  ];
  
  planetData.forEach(data => {
    const planet = document.createElement('div');
    planet.className = `planet ${data.type}`;
    planet.style.width = `${data.size}px`;
    planet.style.height = `${data.size}px`;
    planet.style.top = data.top;
    planet.style.left = data.left;
    planet.style.transform = `translateZ(${data.depth}px)`;
    planet.style.setProperty('--planet-size', `${data.size}px`);
    planet.style.setProperty('--spin-amount', `${data.spinAmount}deg`);
    planet.style.setProperty('--orbit-distance', `${data.orbitDistance}px`);
    planet.style.animation = `${data.orbitAnimation} ${data.orbitDuration}s linear infinite`;
    
    if (data.hasMoon) {
      const moon = document.createElement('div');
      moon.className = 'moon';
      planet.appendChild(moon);
    }
    
    planetSystem.appendChild(planet);
  });
  
  body.appendChild(planetSystem);
  
  // Simple parallax effect on mouse move
  document.addEventListener('mousemove', function(e) {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    planetSystem.querySelectorAll('.planet').forEach(planet => {
      const depth = parseFloat(planet.style.transform.match(/translateZ\(([^)]+)\)/)[1]);
      const moveAmount = -depth / 100;
      
      planet.style.transform = `translateZ(${depth}px) translate(${moveX * moveAmount}px, ${moveY * moveAmount}px)`;
    });
  });
});