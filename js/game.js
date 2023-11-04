const rocket = document.getElementById("rocket");
console.log("Start");

// Set the initial position of the rocket
let rocketLeft = 0;

// Function to update the rocket's position
function updateRocketPosition() {
  rocket.style.left = rocketLeft + "px";
}

// Event listener to capture arrow key presses
window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowLeft":
      rocketLeft -= 10;
      break;
    case "ArrowRight":
      rocketLeft += 10;
      break;
  }

  // Update the rocket's position
  updateRocketPosition();
});