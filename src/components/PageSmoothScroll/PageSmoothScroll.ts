import LocomotiveScroll from 'locomotive-scroll';

export default function PageSmoothScroll() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
  });
}
