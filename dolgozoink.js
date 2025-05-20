// Global variable to store all users
let allUsers = [];

// Function to fetch and display all employees when page loads
function getDummyJsonAPI() {
  fetch("https://dummyjson.com/users?limit=50")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      allUsers = data.users;
      displayUsers(allUsers);
    })
    .catch((error) => {
      document.getElementById("error-message").textContent = "Hiba az adatok lekérése közben!";
      document.getElementById("error-message").style.display = "block";
      console.error("API-hiba:", error);
    });
}

// Function to display users in a responsive grid layout
function displayUsers(users) {
  const container = document.getElementById("employees-container");
  container.innerHTML = ""; // Clear previous content
  
  if (users.length === 0) {
    document.getElementById("no-results").textContent = "Nincs találat a megadott vezetéknévre!";
    document.getElementById("no-results").style.display = "block";
    return;
  }
  
  document.getElementById("no-results").style.display = "none";
  
  // Create employee cards in a grid
  users.forEach((user) => {
    const card = document.createElement("div");
    card.className = "employee-card";
    
    card.innerHTML = `
      <div class="card-image">
        <img src="${user.image}" alt="${user.firstName} ${user.lastName}">
      </div>
      <div class="card-content">
        <h3>${user.firstName} ${user.lastName}</h3>
        <p><i class="fas fa-envelope"></i> ${user.email}</p>
        <p><i class="fas fa-phone"></i> ${user.phone}</p>
      </div>
    `;
    
    container.appendChild(card);
  });
}

// Function to search by last name
function searchByLastName() {
  const searchTerm = document.getElementById("search-input").value.trim().toLowerCase();
  
  if (!searchTerm) {
    alert("Kérjük adjon meg egy vezetéknevet!");
    return;
  }
  
  // Hide grid view and show table view
  document.getElementById("employees-container").style.display = "none";
  document.getElementById("search-results").style.display = "block";
  
  // Filter users by last name
  const results = allUsers.filter(user => 
    user.lastName.toLowerCase().includes(searchTerm)
  );
  
  displaySearchResults(results);
}

// Function to display search results in table format
function displaySearchResults(users) {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = ""; // Clear previous content
  
  if (users.length === 0) {
    document.getElementById("no-results").textContent = "Nincs találat a megadott vezetéknévre!";
    document.getElementById("no-results").style.display = "block";
    return;
  }
  
  document.getElementById("no-results").style.display = "none";
  
  users.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><img src="${user.image}" alt="${user.firstName} ${user.lastName}" class="table-image"></td>
      <td>${user.lastName}</td>
      <td>${user.firstName}</td>
      <td>${user.gender}</td>
      <td>${user.address.country}</td>
      <td>${user.email}</td>
      <td>${user.phone}</td>
      <td>${user.address.city}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Function to show all employees again
function showAllEmployees() {
  document.getElementById("search-input").value = "";
  document.getElementById("employees-container").style.display = "grid";
  document.getElementById("search-results").style.display = "none";
  document.getElementById("no-results").style.display = "none";
  displayUsers(allUsers);
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", () => {
  getDummyJsonAPI();
  
  // Set up event listeners
  document.getElementById("search-button").addEventListener("click", searchByLastName);
  document.getElementById("show-all-button").addEventListener("click", showAllEmployees);
});
