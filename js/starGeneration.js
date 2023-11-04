(function () {
  function StarsAndMeteors(numberOfStars, numberOfMeteors, divID) {
      var chosenDiv = document.getElementById(divID);
      chosenDiv.style.display = "none";
      chosenDiv.innerHTML = "";

      function randomFrom(array) {
          return array[Math.floor(Math.random() * array.length)];
      }

      var bigRange = Array.apply(null, Array(100)).map(function (_, i) {
          return i;
      });

      var text = "";

      for (var j = 0; j < numberOfMeteors; j++) {
          var meteorRight = randomFrom(bigRange);
          var meteorTop = randomFrom(bigRange);
          text +=
              "<div class='meteors' style='right:" +
              meteorRight +
              "%; top: " +
              meteorTop +
              "%;'></div>";
      }

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
      chosenDiv.style.display = "block";
  }

  // Call the StarsAndMeteors function to populate the "stars-container" with stars and meteors
  StarsAndMeteors(300, 5, "stars-container"); // Adjust the number of stars and meteors as needed
})();