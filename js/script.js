const timeline = gsap.timeline({default: {ease: "power1-out"} });

timeline.to('.hide-text', {y: "0%", duration: 1, stagger: 0.275});
timeline.to('.slider', {y: "-100%", duration: 1.5, delay: 0.5});
timeline.to('.intro', {y: "-100%", duration: 1}, "-=1");
timeline.fromTo('nav', {opactiy: 0}, {opacity: 1, duration: 1});
timeline.fromTo('main', {opactiy: 0}, {opacity: 1, duration: 0.5, stagger: 0.2}, '-=1');