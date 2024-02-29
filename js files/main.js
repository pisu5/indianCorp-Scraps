
$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $(".navbar-collapse").toggleClass("show");
  });
});
      function showScrapDetails(scrapType) {
        // Hide all scrap details sections
        hideAllScrapDetails();

        // Show the details section corresponding to the clicked scrap type
        const detailsSection = document.getElementById(
          `${scrapType.toLowerCase()}Details`
        );
        detailsSection.style.display = "block";
      }

      function hideAllScrapDetails() {
        // Hide all scrap details sections
        const allDetailsSections = document.querySelectorAll(".scrap-details");
        allDetailsSections.forEach((section) => {
          section.style.display = "none";
        });
      }

      function hideScrapDetails() {
        // Hide the current scrap details section
        hideAllScrapDetails();
      }

      function raisePickupRequest(scrapType) {
        // Get the quantity input value
        const quantityInput = document.getElementById("quantity");
        const quantity = quantityInput.value;

        // Perform logic to raise a pickup request with scrapType and quantity
        // ...

        // Optional: Display a success message or perform additional actions
        alert(
          `Pickup request for ${quantity} kg of ${scrapType} raised successfully!`
        );
      }


let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  
  slides[currentSlide].style.display = 'none';
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}

// Optional: Auto-advance slides every 3 seconds
setInterval(() => {
  showSlide(currentSlide + 1);
}, 3000);

// Call the showSlide function to display the initial slide
showSlide(currentSlide);




