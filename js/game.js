
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

        window.addEventListener("keydown", (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    rocketLeft -= 10;
                    break;
                case "ArrowRight":
                    rocketLeft += 10;
                    break;
            }

            updateRocketPosition();
        });

        // To center the rocket initially:
        rocketLeft = (window.innerWidth - rocket.width) / 2;
        updateRocketPosition();