function pageScroll() {
  window.scrollBy(0, 10); // horizontal and vertical scroll increments
  scrolldelay = setTimeout("pageScroll()", 100); // scrolls every 100 milliseconds
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    clearTimeout(scrolldelay);
    scrolldelay = setTimeout("PageUp()", 2000);
  }
}

function PageUp() {
  window.scrollTo(0, 0);
  setTimeout(function () {
    pageScroll();
  }, 600);
}

const contentContainer = document.getElementById("content-container");

contentContainer.addEventListener("scroll", () => {
  // Check if the user has scrolled to the bottom (adjust the threshold as needed)
  if (
    contentContainer.scrollTop + contentContainer.clientHeight >=
    contentContainer.scrollHeight - 100
  ) {
    // Append more content
    const newContent = document.createElement("p");
    newContent.textContent = "Additional Content";
    contentContainer.appendChild(newContent);
  }
});
