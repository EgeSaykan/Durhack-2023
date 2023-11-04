const rocket = document.getElementById('rocket');
const container = document.getElementById('image-container');
const rocketWidth = rocket.offsetWidth;

// Set the initial position of the rocket
let rocketLeft = (container.offsetWidth - rocketWidth) / 2;
let rocketVelocity = 0;
let acceleration = 0;
const friction = 0.08;

// Function to update the rocket's position
function updateRocketPosition() {
  rocket.style.left = rocketLeft + 'px';
}

// Scoring
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";

  
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

// Function to update the rocket's velocity and position
function updateRocket() {
    if (rocketVelocity > -20 & rocketVelocity < 20) {
        rocketVelocity += acceleration
    };
  rocketLeft += rocketVelocity;
  rocketVelocity *= 1 - friction;
  updateRocketPosition();
  requestAnimationFrame(updateRocket);
}

// Event listener to capture arrow key presses
window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowLeft':
      acceleration = -2;
      break;
    case 'ArrowRight':
      acceleration = 2;
      break;
  }
});

window.addEventListener('keyup', (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        acceleration = 0;
        break;
      case 'ArrowRight':
        acceleration = 0;
        break;
    }
  });

// Start the animation loop
updateRocket();