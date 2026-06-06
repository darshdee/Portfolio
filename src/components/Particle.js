import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      style={{ pointerEvents: "none" }}
      params={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1400,
            },
          },
          color: {
            value: ["#8b5cf6", "#a78bfa", "#7c3aed", "#c4b5fd"],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.65,
            random: true,
            anim: {
              enable: true,
              speed: 0.35,
              opacity_min: 0.2,
              sync: false,
            },
          },
          size: {
            value: 2.8,
            random: true,
            anim: {
              enable: false,
            },
          },
          line_linked: {
            enable: false,
            color: "#8b5cf6",
          },
          move: {
            enable: true,
            speed: 0.35,
            random: true,
            direction: "none",
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
            },
            onclick: {
              enable: false,
            },
            resize: true,
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
