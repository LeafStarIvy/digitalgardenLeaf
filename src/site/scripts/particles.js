// src/site/scripts/particles.js

tsParticles.load("tsparticles", {
  fpsLimit: 30,
  particles: {
    number: {
      value: 80,
      density: { enable: true, area: 800 }
    },
    color: { value: "#ffffff" },
    opacity: {
      value: 0.1,
      random: { enable: true, minimumValue: 0.05 },
      animation: { enable: true, speed: 0.2, minimumValue: 0.02, sync: false }
    },
    shape: { type: "circle" },
    size: {
      value: 1.5,
      random: { enable: true, minimumValue: 0.5 }
    },
    move: {
      enable: true,
      speed: 0.2,
      direction: "none",
      outModes: { default: "out" }
    },
    links: { enable: false }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      resize: true
    },
    modes: {
      repulse: { distance: 100, speed: 0.5 }
    }
  },
  detectRetina: true,
  fullScreen: { enable: false } // we’re using our own fixed div
});
