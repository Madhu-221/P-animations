// // Text Animation
// gsap.registerPlugin(SplitText);
// const split = new SplitText(".text");
// gsap.set(split.chars, {
//   transformOrigin: "center center -100px",
//   backfaceVisibility: "hidden"
// });

// // gsap.to triggers animations
// gsap.to(
//   split.chars,
//   3,
//   {
//     rotationX: "360",
//     stagger: 0.1,
//     repeat: -1
//   }
// );


// Home page one image bigger animation
jQuery(document).ready(function($) {
    const kryptozTarget = $('.sticky-k__item[sticky-target="kryptoz"]');
    const kryptozOverlay = $(
      '.sticky-k__item[sticky-target="kryptoz"] .overlay-dark'
    );
    const kryptozGradient = $(
      '.sticky-k__item[sticky-target="kryptoz"] .overlay-gradient'
    );
    const kryptozSiblings = $(".sticky-k__item.is-sibling");
    const kryptozSiblingImages = $(".sticky-k__item.is-sibling .img-fill");

    let kryptozTl = gsap.timeline({
      scrollTrigger: {
        trigger: kryptozTarget,
        start: "center 60%",
        endTrigger: ".kryptoz-text__w",
        end: "top 70%",
        scrub: 1,
      },
    });

    kryptozTl
      .to(kryptozTarget, { width: "102vw", height: "105vh", duration: 18 }) 
      .from(kryptozOverlay, { opacity: 0, duration: 1 }, 0) 
      .from(kryptozGradient, { scaleY: 0, duration: 1 }, "<25%") 
      .to(kryptozSiblings, { width: "31em", height: "43em", duration: 2 }, 0) 
      .to(kryptozSiblingImages, { scale: 0.8, duration: 1 }, 0) 
      .to(".h-reg", { opacity: 1, duration: 14 }); 
  });



// Stacking function

gsap.registerPlugin(ScrollTrigger);
const scrubValue = 0.5;
const stackingContainer = document.querySelector('.stacking-container');
const wrapper = document.querySelector('.wrapper');
const textBox = document.querySelector('.text-wrap');

const scrollBar = gsap.to('.scrollbar', {
  x: () => window.innerWidth - (150 + 20),
  ease: 'none'
});

ScrollTrigger.create({
  trigger: '.stacking-container',
  start: 'top top',
  end: () => stackingContainer.scrollWidth - window.innerWidth,
  pin: true,
  anticipatePin: 1,
  scrub: scrubValue,
  animation: scrollBar,
  invalidateOnRefresh: true
});

let thumbNails = gsap.utils.toArray('.thumbnail');

thumbNails.forEach((thumb, i) => {
  const xValue = -(i * (thumb.offsetWidth + 5)) + 10;
  gsap.to(thumb, {
    x: xValue,
    ease: 'none',
    scrollTrigger: {
      trigger: wrapper,
      start: 'top top',
      scrub: scrubValue,
      invalidateOnRefresh: true,
      end: () => stackingContainer.scrollWidth - (i * (thumb.offsetWidth + 5)) - window.innerWidth,
    }
  });
});

// Hide .text-wrap initially
textBox.style.display = 'none';

// Create a ScrollTrigger to show .text-wrap when reaching the end of .wrapper
// ScrollTrigger.create({
//   trigger: wrapper,
//   start: 'top bottom',
//   onEnter: () => {
//     textBox.style.display = 'block'; 
//   },
//   onLeaveBack: () => {
//     textBox.style.display = 'none'; 
//   },
// });
