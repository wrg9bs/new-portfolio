import React from 'react';
import Particles from 'react-particles-js';

export default () => {
  return (
    <div className="particlesjs">
      <Particles
        params={{
          fullScreen: {
            enable: true,
            zIndex: 0,
          },
          particles: {
            number: {
              value: 500,
              density: {
                enable: true,
                value_area: 500,
              },
            },
            color: {
              value: ['#BD10E0', '#B8E986', '#50E3C2', '#FFD300', '#E86363'],
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#11ee00',
              },
            },
            opacity: {
              value: 0,
              random: false,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: 8.017060304327615,
              random: true,
              anim: {
                enable: true,
                speed: 12.181158184520175,
                size_min: 0.1,
                sync: true,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#fff',
              opacity: 0,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'bounce',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'bubble',
              },
              onclick: {
                enable: false,
                mode: 'bubble',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 40,
                size: 20,
                duration: 2,
                opacity: 10,
                speed: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
};
