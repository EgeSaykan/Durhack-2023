const rocket = document.getElementById("rocket");
        let rocketLeft = 0;

        function updateRocketPosition() {
            rocket.style.left = rocketLeft + "px";
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