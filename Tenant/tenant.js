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
  // const properties = [
  //   { type: "Apartment", rooms: 2, rent: 2000 },
  //   { type: "Flat", rooms: 3, rent: 3000 },
  //   { type: "Villa", rooms: 4, rent: 5000 },
  // ];

  const propertyListings = document.getElementById("property-listings");

  // function renderProperties(filteredProperties) {
  //   propertyListings.innerHTML = "";
  //   filteredProperties.forEach((property) => {
  //     const card = document.createElement("div");
  //     card.className = "col-md-4";
  //     card.innerHTML = `
  //         <div class="card">
  //           <div class="card-body">
  //             <h5 class="card-title">${property.type}</h5>
  //             <p class="card-text">${property.rooms} Bedroom</p>
  //             <p class="card-text">Rent: $${property.rent}</p>
  //           </div>
  //         </div>
  //       `;
  //     propertyListings.appendChild(card);
  //   });
  // }

  const properties = [
    {
      type: "Apartment",
      rooms: 3,
      rent: 5000,
      location: "Downtown",
      image: "/./Pic/villa.jpg",
      amenities: ["Pool", "Gym", "Parking"],
    },
    {
      type: "Flat",
      rooms: 2,
      rent: 2000,
      location: "Downtown",
      image: "/./Pic/villa.jpg",
      amenities: ["Pool", "Gym", "Parking"],
    },
    {
      type: "Villa",
      rooms: 4,
      rent: 7000,
      location: "Downtown",
      image: "/./Pic/villa.jpg",
      amenities: ["Pool", "Gym", "Parking"],
    },
    // {
    //   type: "Apartment",
    //   rooms: 4,
    //   rent: 9000,
    //   location: "Downtown",
    //   image: "Pic/apartment.jpg",
    //   amenities: ["Pool", "Gym", "Parking"],
    // },
    // Add more properties
  ];

  function renderProperties(filteredProperties) {
    propertyListings.innerHTML = "";
    filteredProperties.forEach((property) => {
      const card = document.createElement("div");
      card.className = "col-md-4";
      card.innerHTML = `
        <div class="card">
          <img src="${property.image}" class="card-img-top" alt="${
        property.type
      }">
          <div class="card-body">
            <h5 class="card-title">${property.type}</h5>
            <p class="card-text">${property.rooms} Bedroom</p>
            <p class="card-text">Rent: $${property.rent}</p>
            <p class="card-text">Location: ${property.location}</p>
            <p class="card-text">Amenities: ${property.amenities.join(", ")}</p>
          </div>
        </div>
      `;
      propertyListings.appendChild(card);
    });
  }

  async function fetchProperties() {
    try {
      const response = await fetch("https://api.example.com/properties");
      const data = await response.json();
      renderProperties(data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  }

  fetchProperties();

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

function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `alert alert-${type} fixed-top`;
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 10000);
}

showNotification("Your rent is due in 3 days.", "warning");
