document.addEventListener("DOMContentLoaded", function () {
  // Function to fetch advice from the API
  function fetchAdvice() {
    fetch("https://api.example.com/advice", {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const advice = data.slip;
        const adviceIdElement = document.getElementById("advice-id");
        const adviceContentElement = document.getElementById("advice-content");

        // Assigning advice ID and content to HTML elements
        adviceIdElement.textContent = advice.id;
        adviceContentElement.textContent = advice.advice;
      })
      .catch((error) => {
        console.error("Error fetching advice:", error);
      });
  }

  // Initial call to fetch advice on page load
  fetchAdvice();

  // Adding click event listener to fetch advice when the button is clicked
  const fetchAdviceClick = document.getElementById("fetchAdvice");
  fetchAdviceClick.addEventListener("click", fetchAdvice);
});
