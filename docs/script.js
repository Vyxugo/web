const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const themeBtn = document.getElementById("themeBtn");
const html = document.documentElement;

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  const icon = menuToggle.querySelector("i");

  if (navMenu.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

themeBtn.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  const nextTheme = currentTheme === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);

  const icon = themeBtn.querySelector("i");

  if (nextTheme === "dark") {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
});

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  html.setAttribute("data-theme", savedTheme);

  const icon = themeBtn.querySelector("i");

  if (savedTheme === "light") {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
}

// ── Typing animation ──────────────────────────────────────
const typingEl = document.querySelector(".typing-text");

if (typingEl) {
  const fullText = typingEl.textContent.trim();
  typingEl.textContent = "";

  let i = 0;

  function typeChar() {
    if (i < fullText.length) {
      typingEl.textContent += fullText.charAt(i);
      i++;
      setTimeout(typeChar, 50); // cambia 50 para ajustar velocidad
    }
  }

  typeChar();
}