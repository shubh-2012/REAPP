// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Sidebar Navigation
  const sidebarLinks = document.querySelectorAll("#sidebar .nav-link");
  const sections = document.querySelectorAll(".section-content");

  sidebarLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSection = this.getAttribute("data-section");

      // Hide all sections
      sections.forEach((section) => {
        section.style.display = "none";
      });

      // Show the target section
      document.getElementById(targetSection).style.display = "block";

      // Update active class
      sidebarLinks.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Rent Range Slider
  const rentRange = document.getElementById("rent-range");
  const rentValue = document.getElementById("rent-value");

  rentRange.addEventListener("input", function () {
    rentValue.textContent = `$0 - $${this.value}`;
  });

  // Property Listings (Dummy Data)
  const properties = [
    { type: "Apartment", rooms: 2, rent: 2000 },
    { type: "Flat", rooms: 3, rent: 3000 },
    { type: "Villa", rooms: 4, rent: 5000 },
  ];

  const propertyListings = document.getElementById("property-listings");

  function renderProperties(filteredProperties) {
    propertyListings.innerHTML = "";
    filteredProperties.forEach((property) => {
      const card = document.createElement("div");
      card.className = "col-md-4";
      card.innerHTML = `
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${property.type}</h5>
              <p class="card-text">${property.rooms} Bedroom</p>
              <p class="card-text">Rent: $${property.rent}</p>
            </div>
          </div>
        `;
      propertyListings.appendChild(card);
    });
  }

  // Apply Filters
  document
    .getElementById("apply-filters")
    .addEventListener("click", function () {
      const houseType = document.getElementById("house-type").value;
      const rooms = document.getElementById("rooms").value;
      const rent = rentRange.value;

      const filteredProperties = properties.filter((property) => {
        return (
          (houseType === "all" || property.type.toLowerCase() === houseType) &&
          (rooms === "all" || property.rooms === parseInt(rooms)) &&
          property.rent <= rent
        );
      });

      renderProperties(filteredProperties);
    });

  // Initial Render
  renderProperties(properties);
});
