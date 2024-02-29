const categorySelect = document.getElementById("category-select");
const detailsImage = document.getElementById("details-image");
const detailsText = document.getElementById("details-text");
const relatedBoxesContainer = document.getElementById("related-boxes");

function fetchDetails(category) {
  // Replace this with your actual data fetching logic
  // For now, using placeholder data
  const categoryData = {
    imageSrc: "https://via.placeholder.com/150", // Placeholder image URL
    text: `Details about ${category}.`,
    relatedBoxes: [
      { variety: "Variety 1", price: "1.50" },
      { variety: "Variety 2", price: "2.00" },
      { variety: "Variety 3", price: "1.75" },
      // Add more related box data as needed
    ],
  };

  // Update selected category details
  detailsImage.src = categoryData.imageSrc;
  detailsText.textContent = categoryData.text;

  // Update related boxes
  updateRelatedBoxes(categoryData.relatedBoxes);
}

function updateRelatedBoxes(relatedBoxes) {
  // Clear existing related boxes
  relatedBoxesContainer.innerHTML = "";

  // Create and append new related boxes
  relatedBoxes.forEach((box) => {
    const relatedBoxElement = document.createElement("div");
    relatedBoxElement.classList.add("related-box");
    relatedBoxElement.innerHTML = `<p>${box.variety}</p><p>${box.price} per kg</p>`;
    relatedBoxesContainer.appendChild(relatedBoxElement);
  });
}

// Set initial details for 'All'
fetchDetails("All");

// Event listener for category selection
categorySelect.addEventListener("change", function () {
  const selectedCategory = this.value;
  fetchDetails(selectedCategory);
});
