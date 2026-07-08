const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const children = entry.target.parentElement.querySelectorAll(".reveal");

      children.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add("active");
        }, index * 120);
      });
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const hero = document.querySelector(".hero-inner");

  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.15}px)`;
  }
});

const glow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});