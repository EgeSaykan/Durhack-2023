const container = document.getElementById('image-container');

// Set the initial position of the rocket
let rocketLeft = (screen.width - container.offsetWidth) / 2;
let rocketVelocity = 0;
let acceleration = 0;
const friction = 0.08;

// Function to update the rocket's position
function updateRocketPosition() {
  container.style.left = rocketLeft + 'px';
}

// Function to update the rocket's velocity and position
function updateRocket() {
  if (rocketVelocity > -20 & rocketVelocity < 20) {
    rocketVelocity += acceleration
  };
  rocketLeft += rocketVelocity;
  rocketVelocity *= 1 - friction;
  rotateRocket(rocketVelocity);
  updateRocketPosition();
  requestAnimationFrame(updateRocket);
}

function rotateRocket(velocity) {
  const rotationAngle = Math.atan(velocity / 100) * (180 / Math.PI); // Convert radians to degrees
  container.style.transform = `rotate(${rotationAngle}deg)`;
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