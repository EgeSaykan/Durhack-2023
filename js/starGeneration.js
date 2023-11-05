(function () {
  function Stars(numberOfStars, divID) {
    var chosenDiv = document.getElementById(divID);
    chosenDiv.style.display = "none";

    function randomFrom(array) {
      return array[Math.floor(Math.random() * array.length)];
    }

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

    chosenDiv.style.display = "block";

    // Function to generate new stars and replace the old ones
    function regenerateStars() {
      generateStars();
    }

    // Initial generation of stars
    generateStars();

    // Set an interval to regenerate stars every 15 seconds
    setInterval(function () {
      regenerateStars();
    }, 15000);
  }

  // Call the Stars function to populate the "stars-container" with stars
  Stars(300, "stars-container"); // Adjust the number of stars and divID as needed
})();
