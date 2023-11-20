document.addEventListener("DOMContentLoaded", function () {
  // Initial call to fetch advice on page load
  fetchAdvice();
});

// Function to fetch advice from the API
function fetchAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const advice = data.slip;
      const adviceIdElement = document.getElementById("advice-number");
      const adviceContentElement = document.getElementById("advice-content");

      // Assigning advice ID and content to HTML elements
      adviceIdElement.textContent = advice.id;
      adviceContentElement.textContent = advice.advice;
    })
    .catch((error) => {
      console.error("Error fetching advice:", error);
    });
}
