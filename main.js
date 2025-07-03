// main.js

document.addEventListener("DOMContentLoaded", () => {
  // ===== Slide-in animation for skill items =====
  const skills = document.querySelectorAll('.skill');

  const observerOptions = {
    threshold: 0.2,
  };

  const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  skills.forEach(skill => {
    skill.style.animationPlayState = 'paused';
    skillObserver.observe(skill);
  });

  // ===== More functions can go here later =====
});
