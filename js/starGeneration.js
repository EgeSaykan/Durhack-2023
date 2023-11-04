(function () {
  function StarsAndMeteors(numberOfStars, numberOfMeteors, divID) {
    var chosenDiv = document.getElementById(divID);
    chosenDiv.style.display = "none";

    function randomFrom(array) {
      return array[Math.floor(Math.random() * array.length)];
    }

    var meteors = [];
    var maxMeteors = numberOfMeteors;
    var meteorWidth = 20;

    function generateStars() {
      var bigRange = Array.apply(null, Array(100)).map(function (_, i) {
        return i;
      });
      var text = "";

      for (var i = 0; i < numberOfStars; i++) {
        var smallRange = Array.apply(null, Array(3)).map(function (_, i) {
          return i;
        });
        var tenRange = Array.apply(null, Array(5)).map(function (_, i) {
          return i;
        });
        var starTwinkleStage = randomFrom(tenRange);
        var top = randomFrom(bigRange);
        var right = randomFrom(bigRange);
        var width = randomFrom(smallRange);
        text +=
          "<div class='stars' style='top:" +
          top +
          "%; right: " +
          right +
          "%; width:" +
          width +
          "px; height:" +
          width +
          "px;";
        text += "box-shadow: 0px 0px 1vw rgba(255, 255, 255, 0.2);'></div>";
      }

      chosenDiv.innerHTML = text;
    }

    function clearStars() {
      chosenDiv.innerHTML = "";
    }

    function generateNewStars() {
      clearStars();
      generateStars();
    }

    function createMeteor() {
      var bigRange = Array.apply(null, Array(100)).map(function (_, i) {
        return i;
      });

      var meteorRight = randomFrom(bigRange);
      var meteorTop = 0;
      var meteor = document.createElement("div");
      meteor.className = "meteors";
      meteor.style.right = meteorRight + "%";
      meteor.style.top = meteorTop + "%";
      chosenDiv.appendChild(meteor);
      meteors.push(meteor);

      // Remove meteors when there are more than maxMeteors on the screen
      if (meteors.length > maxMeteors) {
        var removedMeteor = meteors.shift();
        chosenDiv.removeChild(removedMeteor);
      }
    }

    function moveMeteors() {
      for (var i = meteors.length - 1; i >= 0; i--) {
        var meteor = meteors[i];
        var top = parseFloat(meteor.style.top);
        if (top >= 100) {
          // Remove the meteor when it reaches the bottom
          chosenDiv.removeChild(meteor);
          meteors.splice(i, 1);
        } else {
          top += 1; // Adjust the speed of meteor fall
          meteor.style.top = top + "%";
        }
      }
    }

    // Initial generation of stars and meteors
    generateStars();
    createMeteor();

    // Set an interval to clear and generate new stars every 15 seconds
    setInterval(function () {
      generateNewStars();
    }, 15000);

    // Set an interval to create meteors
    setInterval(function () {
      createMeteor();
    }, 1000);

    // Set an interval to move meteors
    setInterval(function () {
      moveMeteors();
    }, 50); // Adjust the interval for meteor movement

    chosenDiv.style.display = "block";
  }

  // Call the StarsAndMeteors function to populate the "stars-container" with stars and meteors
  StarsAndMeteors(300, 5, "stars-container"); // Adjust the number of stars and meteors as needed
})();
