document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute("href"));
      section.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Form submission handling
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // Add your form submission logic here
      alert("Thank you for your message! I will get back to you soon.");
      contactForm.reset();
    });
  }

  // Add animation to skill bars on scroll
  const skillBars = document.querySelectorAll(".progress");
  const animateSkills = () => {
    skillBars.forEach((bar) => {
      const rect = bar.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        bar.style.width = bar.parentElement.getAttribute("data-progress") + "%";
      }
    });
  };

  window.addEventListener("scroll", animateSkills);
  animateSkills(); // Initial check
});
