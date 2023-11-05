const container = document.getElementById('image-container');
const meteors = Array.from(document.getElementsByClassName("meteors"));

function areMeteorsCollidingWithObject(meteors, object) {
    const objectRect = object.getBoundingClientRect();
  
    for (const meteor of meteors) {
      const meteorRect = meteor.getBoundingClientRect();
  
      console.log(meteorRect.left)
  
      if (
        ((meteorRect.left > objectRect.left && meteorRect.left < objectRect.right) ||
        (meteorRect.right < objectRect.right && meteorRect.right > objectRect.left)) 
        &&
        ((meteorRect.bottom < objectRect.top && meteorRect.bottom > objectRect.bottom) ||
        (meteorRect.top < objectRect.top && meteorRect.top > objectRect.bottom))
      ) {
        // Collision detected
        return true;
      }
    }
  
    // No collision detected
    return false;
  }
  
  setInterval(function () {
    if (areMeteorsCollidingWithObject(meteors, container)) {
      console.log("Meteor collided with the ship");
    } else {
      console.log("No collision detected");
    }
  }, 100); // Check for collisions every 100 milliseconds (adjust the interval as needed)
  