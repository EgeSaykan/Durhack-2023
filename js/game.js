
  const rocket = document.getElementById('rocket');
  const container = document.getElementById('image-container');
  const rocketWidth = rocket.offsetWidth;

  // Set the initial position of the rocket
  let rocketLeft = (container.offsetWidth - rocketWidth) / 2;
  let rocketVelocity = 0;
  const acceleration = 0.5;
  const friction = 0.02;

  // Function to update the rocket's position
  function updateRocketPosition() {
    rocket.style.left = rocketLeft + 'px';
  }

  // Function to update the rocket's velocity and position
  function updateRocket() {
    rocketLeft += rocketVelocity;
    rocketVelocity *= 1 - friction;
    updateRocketPosition();
    requestAnimationFrame(updateRocket);
  }

  // Event listener to capture arrow key presses
  window.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        rocketVelocity -= acceleration;
        break;
      case 'ArrowRight':
        rocketVelocity += acceleration;
        break;
    }
  });

  window.addEventListener('keyup', () => {
    // Apply friction when no arrow keys are pressed
    rocketVelocity *= 1 - friction;
  });

  // Start the animation loop
  updateRocket();