gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".slide").forEach(section => {
  gsap.from(section.children, {
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: 0.15,
    scrollTrigger: {
      trigger: section,
      start: "top 70%"
    }
  });
});
