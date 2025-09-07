// Dark/Light Mode Toggle for DevHive

const toggleButton = document.createElement("button");
toggleButton.innerText = "🌙 Toggle Dark/Light";
toggleButton.className = "dark-toggle";
document.body.prepend(toggleButton);

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});