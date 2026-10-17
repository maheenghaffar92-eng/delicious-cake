// SELECT the elements (ids must match index.html exactly)
const menuBtn = document.querySelector("#menuBtn");
const nav = document.querySelector("#mainNav");
const themeBtn = document.querySelector("#themeBtn");

// ---------- Feature A: mobile menu ----------
// LISTEN for a click on the button
menuBtn.addEventListener("click", () => {
  // CHANGE: add the class "open" if it is missing, remove it if it is there
  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", isOpen);   // helps screen readers
});

// Bonus: close the menu when a link is tapped
const navLinks = document.querySelectorAll("#mainNav a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", false);
  });
});

// ---------- Feature B: dark mode ----------
// The site starts dark (<body class="dark">), so the button offers "Light mode".
function setTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  themeBtn.textContent = isDark ? "Light mode" : "Dark mode";
}

themeBtn.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark");
  setTheme(isDark);

  // Bonus: remember the choice for next visit
  try {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  } catch (error) {
    console.log("Could not save theme:", error);
  }
});

// Bonus: restore the saved choice when the page loads
try {
  if (localStorage.getItem("theme") === "light") {
    setTheme(false);
  }
} catch (error) {
  console.log("Could not read saved theme:", error);
}