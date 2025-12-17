import ScrollReveal from 'scrollreveal';

export default function initScrollReveal() {
  if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 200,
      easing: 'ease',
      reset: false,
    });

    // Reveal elements
    sr.reveal('#home .relative', { delay: 300 });
    sr.reveal('#about .grid > div', { delay: 400 });
    sr.reveal('#skills .grid > div', { interval: 200 });
    sr.reveal('#contact .max-w-2xl', { delay: 300 });
  }
}