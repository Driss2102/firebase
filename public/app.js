document.addEventListener("DOMContentLoaded", function () {
  const welcomeContainer = document.querySelector(".welcome-container");
  const heading = document.getElementById("welcome-heading");
  const paragraph = document.querySelector(".welcome-container p");

  // Fade in the welcome container
  setTimeout(() => {
    welcomeContainer.style.opacity = "1";
  }, 500);

  // Animate heading and paragraph
  setTimeout(() => {
    heading.style.opacity = "1";
    heading.style.transform = "translateY(0)";
  }, 1000);

  setTimeout(() => {
    paragraph.style.opacity = "1";
    paragraph.style.transform = "translateY(0)";
  }, 1500);
});
