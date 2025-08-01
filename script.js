function formatTime(date) {
  return date.toLocaleTimeString("en-US", { hour12: false });
}

setInterval(() => {
  const alt = Math.floor(Math.random() * 300) + " km";
  const speed = Math.floor(Math.random() * 8000) + " m/s";
  const apo = Math.floor(Math.random() * 400) + " km";
  const peri = Math.floor(Math.random() * 300) + " km";
  const time = formatTime(new Date());

  document.getElementById("altitude").innerText = alt;
  document.getElementById("speed").innerText = speed;
  document.getElementById("apo").innerText = apo;
  document.getElementById("peri").innerText = peri;
  document.getElementById("mission-time").innerText = "T+ " + time;
}, 2000);

// Fuel
const fuelSlider = document.getElementById("fuel-slider");
const fuelDisplay = document.getElementById("fuel");
fuelSlider.addEventListener("input", () => {
  fuelDisplay.innerText = fuelSlider.value + "%";
  fuelDisplay.style.color = fuelSlider.value < 20 ? "#ff4c4c" : "#66ff61";
});

// Throttle
const throttleSlider = document.getElementById("throttle-slider");
const throttleDisplay = document.getElementById("throttle-status");

throttleSlider.addEventListener("input", () => {
  const val = throttleSlider.value;
  if (val == 0) {
    throttleDisplay.innerText = "Idle";
  } else if (val < 50) {
    throttleDisplay.innerText = "Cruise";
  } else {
    throttleDisplay.innerText = "Full Burn";
  }
});

// Theme
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// Fullscreen
document.getElementById("fullscreen").addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});
