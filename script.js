const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent =
    document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
const faders = document.querySelectorAll(".fade");

const appearOnScroll = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

faders.forEach(el => appearOnScroll.observe(el));

