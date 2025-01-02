// Store DOM elements
const navDialog = document.getElementById("nav-dialog");
const skillsList = document.getElementById("skills-list");
const htmlElement = document.documentElement;

// Navigation menu handler
function handleMenu() {
  if (navDialog) {
    navDialog.classList.toggle("hidden");
  }
}

// Theme toggle function
function toggleTheme() {
  try {
    const isDark = htmlElement.classList.contains("dark");
    htmlElement.classList.toggle("dark", !isDark);
    localStorage.setItem("theme", isDark ? "light" : "dark");
  } catch (error) {
    console.error("Error toggling theme:", error);
  }
}

// Consolidated DOM Content Loaded event
document.addEventListener("DOMContentLoaded", () => {
  // Theme initialization
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    htmlElement.classList.add("dark");
  }

  // Intersection Observer setup
  const createObserver = (options, callback) => {
    return new IntersectionObserver(callback, options);
  };

  // Projects observer
  const projectsObserver = createObserver(
    { threshold: 0.2, rootMargin: "0px" },
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.hasAttribute("data-project")) {
            const index = Array.from(
              entry.target.parentElement.children,
            ).indexOf(entry.target);
            setTimeout(() => {
              entry.target.classList.add("slide-in");
              entry.target.classList.remove("hidden-element");
            }, index * 200);
          } else {
            entry.target.classList.add("fade-in");
            entry.target.classList.remove("hidden-element");
          }
          projectsObserver.unobserve(entry.target);
        }
      });
    },
  );

  // Skills observer
  const skillsObserver = createObserver(
    { threshold: 0.1, rootMargin: "0px" },
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skills = entry.target.querySelectorAll(".skill");
          skills.forEach((skill, index) => {
            setTimeout(() => {
              skill.classList.add("pop-in");
              skill.classList.remove("hidden-skill");
            }, index * 100);
          });
          skillsObserver.unobserve(entry.target);
        }
      });
    },
  );

  // Initialize observers
  document.querySelectorAll(".hidden-element").forEach((element) => {
    projectsObserver.observe(element);
  });

  if (skillsList) {
    skillsObserver.observe(skillsList);
  }
});

// Optional: Add cleanup for theme preference media query
const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
darkModeMediaQuery.addListener((e) => {
  if (!localStorage.getItem("theme")) {
    htmlElement.classList.toggle("dark", e.matches);
  }
});
