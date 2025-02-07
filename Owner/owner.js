const tenants = [
  {
    id: 1,
    name: "Rajesh Kumar",
    phone: "+91 98765 43210",
    verified: true,
    lastRentPaidDate: "2023-09-25",
    moveInDate: "2023-01-15",
    paymentAgreementDueDate: "2023-10-01",
    address: "123 MG Road, Mumbai",
    status: "Paid", // Paid, Due, Late
    image: "/./Pic/user.jpg",
  },
  {
    id: 2,
    name: "Priya Sharma",
    phone: "+91 87654 32109",
    verified: false,
    lastRentPaidDate: "2023-08-30",
    moveInDate: "2023-03-10",
    paymentAgreementDueDate: "2023-09-01",
    address: "456 Park Street, Delhi",
    status: "Due", // Paid, Due, Late
    image: "/./Pic/user.jpg",
  },
  {
    id: 3,
    name: "Amit Patel",
    phone: "+91 76543 21098",
    verified: true,
    lastRentPaidDate: "2023-09-10",
    moveInDate: "2022-12-01",
    paymentAgreementDueDate: "2023-09-01",
    address: "789 Brigade Road, Bangalore",
    status: "Late", // Paid, Due, Late
    image: "/./Pic/user.jpg",
  },
  //   {
  //     id: 4,
  //     name: "Sneha Gupta",
  //     phone: "+91 65432 10987",
  //     verified: true,
  //     lastRentPaidDate: "2023-09-28",
  //     moveInDate: "2023-05-20",
  //     paymentAgreementDueDate: "2023-10-01",
  //     address: "321 Church Street, Chennai",
  //     status: "Paid", // Paid, Due, Late
  //     image: "/./Pic/user.jpg",
  //   },
  //   {
  //     id: 5,
  //     name: "Vikram Singh",
  //     phone: "+91 54321 09876",
  //     verified: false,
  //     lastRentPaidDate: "2023-07-15",
  //     moveInDate: "2023-02-05",
  //     paymentAgreementDueDate: "2023-08-01",
  //     address: "654 Marine Drive, Kolkata",
  //     status: "Late", // Paid, Due, Late
  //     image: "/./Pic/user.jpg",
  //   },
];

const highlightsSection = document.querySelector(".highlights");

tenants.forEach((tenant) => {
  const highlightItem = document.createElement("article");
  highlightItem.className = "highlights__item";
  highlightItem.innerHTML = `
      <img src="${
        tenant.image
      }" alt="Profile Picture" class="highlights__img" />
      <div class="highlights__text">
        <p class="highlights__text--primary">${tenant.name}</p>
        <p class="highlights__text--secondary">${tenant.address}</p>
      </div>
      <div class="highlights__text">
        <p class="highlights__text--primary ${
          tenant.status === "Due"
            ? "commons__orange"
            : tenant.status === "Paid"
            ? "commons__green"
            : "commons__red"
        }">${tenant.status}</p>
        <p class="highlights__text--secondary">Rent</p>
      </div>
    `;
  highlightsSection.appendChild(highlightItem);
});

const tableSection = document.querySelector(".div-table__main");

tenants.forEach((tenant) => {
  const tableRow = document.createElement("article");
  tableRow.className = "div-table__row";
  tableRow.innerHTML = `
      <img src="${tenant.image}" alt="Profile Picture" class="div-table__img" />
      <div class="div-table__text">
        <p class="div-table__text--primary div-table__text--left">${
          tenant.name
        }</p>
        <p class="div-table__text--secondary div-table__text--left">${
          tenant.address
        }</p>
      </div>
      <div class="div-table__text">
        <p class="div-table__text--primary div-table__text--center">${
          tenant.phone
        }</p>
        <p class="div-table__text--secondary div-table__text--center">Phone number</p>
      </div>
      <div class="div-table__text">
        <p class="div-table__text--primary div-table__text--center ${
          tenant.status === "Paid" ? "commons__green" : "commons__red"
        }">${tenant.status}</p>
        <p class="div-table__text--secondary div-table__text--center">Rent</p>
      </div>
      <div class="div-table__actions">
        <i class="material-icons">more_vert</i>
      </div>
    `;
  tableSection.appendChild(tableRow);
});

document.addEventListener("DOMContentLoaded", function () {
  // const tenants = [
  //   {
  //     id: 1,
  //     name: "Rajesh Kumar",
  //     phone: "+91 98765 43210",
  //     verified: true,
  //     lastRentPaidDate: "2023-09-25",
  //     moveInDate: "2023-01-15",
  //     paymentAgreementDueDate: "2023-10-01",
  //     address: "123 MG Road, Mumbai",
  //     status: "Paid",
  //     image: "rajesh.jpg"
  //   },
  //   // Add other tenants here...
  // ];

  const popup = document.getElementById("tenant-popup");
  const closePopup = document.querySelector(".close-popup");

  // Function to open the popup with tenant details
  function openPopup(tenant) {
    document.getElementById("popup-name").textContent = tenant.name;
    document.getElementById("popup-phone").textContent = tenant.phone;
    document.getElementById("popup-address").textContent = tenant.address;
    document.getElementById("popup-verified").textContent = tenant.verified
      ? "Yes"
      : "No";
    document.getElementById("popup-last-rent-paid").textContent =
      tenant.lastRentPaidDate;
    document.getElementById("popup-move-in").textContent = tenant.moveInDate;
    document.getElementById("popup-due-date").textContent =
      tenant.paymentAgreementDueDate;
    document.getElementById("popup-status").textContent = tenant.status;

    popup.style.display = "flex"; // Show the popup
  }

  // Function to close the popup
  function closePopupHandler() {
    popup.style.display = "none"; // Hide the popup
  }

  // Attach event listeners to "more_vert" buttons
  const moreVertButtons = document.querySelectorAll(
    ".div-table__actions .material-icons"
  );
  moreVertButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      openPopup(tenants[index]); // Open popup with corresponding tenant data
    });
  });

  // Close popup when the close button is clicked
  closePopup.addEventListener("click", closePopupHandler);

  // Close popup when clicking outside the popup content
  window.addEventListener("click", (event) => {
    if (event.target === popup) {
      closePopupHandler();
    }
  });
});
