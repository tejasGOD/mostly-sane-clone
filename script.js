document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.createElement("button");
  themeToggleButton.classList.add("theme-toggle");
  themeToggleButton.innerText = "Toggle Theme";
  document.body.appendChild(themeToggleButton);

  // Check for saved user preference, if any, on page load
  const currentTheme = localStorage.getItem("theme") || "light";
  document.body.classList.add(currentTheme);

  // Update the toggle button text based on the current theme
  updateToggleButtonText(currentTheme);

  // Add event listener to the toggle button
  themeToggleButton.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("light")
      ? "dark"
      : "light";
    document.body.classList.remove("light", "dark");
    document.body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme); // Save the user's preference
    updateToggleButtonText(newTheme);
  });

  function updateToggleButtonText(theme) {
    themeToggleButton.innerText =
      theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode";
  }
});

// Hover effect for titles
document.querySelectorAll(".tit").forEach((element) => {
  element.addEventListener("mouseover", () => {
    const nextElement = element.nextElementSibling;
    if (nextElement) {
      nextElement.style.display = "block";
    }
  });
  element.addEventListener("mouseleave", () => {
    const nextElement = element.nextElementSibling;
    if (nextElement) {
      nextElement.style.display = "none";
    }
  });
});

// Display additional information under titles
document.querySelectorAll(".tit").forEach((element) => {
  const nextBee = element.nextElementSibling;
  if (nextBee) {
    nextBee.firstChild.innerHTML = element.innerHTML + " by ";
  }
});
