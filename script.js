document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".site-menu");
  const nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => document.body.classList.toggle("light"));
  }
  const glow = document.querySelector(".cursor-glow");
  document.addEventListener("pointermove", e => {
    if (glow) { glow.style.left = `${e.clientX}px`; glow.style.top = `${e.clientY}px`; }
  });
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
});
