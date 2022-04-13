const darkBtn = document.getElementById("dark-btn");
darkBtn.addEventListener("click", function() {
  const bodyColor = document.getElementById("corpo");
  bodyColor.classList.toggle("dark-btn-mode");
  if (bodyColor.classList.contains("dark-btn-mode")) {
  darkBtn.innerHTML = "Dark Mode";
  } else {
  darkBtn.innerHTML = "Light Mode";
  }
})