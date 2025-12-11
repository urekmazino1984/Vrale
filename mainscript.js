document.addEventListener("DOMContentLoaded", function () {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const navLinks = document.querySelectorAll(".main-nav a[href^='#'], .btn-primary[href^='#']");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (!targetId || !targetId.startsWith("#")) return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const headerOffset = document.querySelector(".site-header")?.offsetHeight || 0;
      const rect = target.getBoundingClientRect();
      const offsetTop = rect.top + window.pageYOffset - headerOffset - 10;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    });
  });
});
