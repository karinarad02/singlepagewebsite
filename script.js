function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");

  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");

    // Call showPopup here
    showPopup(true);

    // Create a new 'recommendation' element and set its value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    element.innerHTML = "<span>&#8220;</span>" + recommendation.value + "<span>&#8221;</span>";

    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element);

    // Reset the value of the textarea
    recommendation.value = "";

    // Auto-hide the popup after 3 seconds
    setTimeout(() => {
      showPopup(false);
    }, 3000);
  }
}

function showPopup(bool) {
  const popup = document.getElementById('popup');
  popup.style.visibility = bool ? 'visible' : 'hidden';
}
