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

  // ===== Navbar hide/show on scroll =====
  const header = document.getElementById("main-header");
  let lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      header.style.top = "-100px"; // scrolling down -> hide navbar
    } else {
      header.style.top = "0"; // scrolling up -> show navbar
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
});

});
