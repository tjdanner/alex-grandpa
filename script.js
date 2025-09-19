document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".modern-form");
  const lastSection = document.querySelector(".banner--bottom");

  if (form && lastSection) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      // Clear all input and textarea values inside the form
      form.querySelectorAll("input, textarea").forEach((el) => {
        if (el.type !== "hidden") el.value = "";
      });
      lastSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  document
    .querySelectorAll(".fade-right, .fade-up, .fade-left, .fade-up-alt")
    .forEach((el) => {
      new IntersectionObserver(([entry], observer) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.disconnect();
        }
      }).observe(el);
    });
});
