import ScrollReveal from 'scrollreveal';

export default function RevealOnScroll() {
  const sr = ScrollReveal();

  sr.reveal('.scale-up', {
    scale: 0.8,
    opacity: 0.2,
    viewFactor: 0.2,
    reset: true,
  });

  sr.reveal('.from-left', {
    duration: 800,
    origin: 'left',
    distance: '30px',
    opacity: 0.2,
    viewFactor: 0.2,
    reset: true,
  });

  sr.reveal('.from-right', {
    duration: 800,
    origin: 'right',
    distance: '30px',
    opacity: 0.2,
    viewFactor: 0.2,
    reset: true,
  });

  sr.reveal('.from-right-1200', {
    duration: 1200,
    origin: 'right',
    distance: '70px',
    opacity: 0.2,
    viewFactor: 0.2,
    reset: true,
  });

  sr.reveal('.from-bottom', {
    duration: 800,
    scale: 1,
    origin: 'bottom',
    distance: '30px',
    viewFactor: 0,
    reset: true,
  });

  sr.reveal('.from-bottom-900', {
    duration: 800,
    scale: 1,
    origin: 'bottom',
    distance: '70px',
    viewFactor: 0,
    reset: true,
  });

  sr.reveal('.from-top', {
    duration: 800,
    scale: 1,
    origin: 'top',
    distance: '30px',
    viewFactor: 0.2,
    reset: true,
  });

  sr.reveal('.from-top-1200', {
    duration: 1200,
    scale: 1,
    origin: 'top',
    distance: '70px',
    viewFactor: 0.2,
    reset: true,
  });
}
