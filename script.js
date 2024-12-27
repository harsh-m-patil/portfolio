const navDialog = document.getElementById("nav-dialog");
function handleMenu() {
  navDialog.classList.toggle("hidden");
}

function toggleTheme() {
  // Check if dark mode is enabled
  if (document.documentElement.classList.contains("dark")) {
    // Switch to light mode
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    // Switch to dark mode
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}

// On page load, check localStorage for theme preference
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add("dark");
  }
});
