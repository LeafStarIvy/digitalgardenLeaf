(() => {
  const body = document.body;
  document.addEventListener('pointermove', e => {
    // moves ±10px at cursor extremes
    const x = (e.clientX / window.innerWidth  - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    body.style.setProperty('--particle-offset-x', `${x}px`);
    body.style.setProperty('--particle-offset-y', `${y}px`);
  });
})();
