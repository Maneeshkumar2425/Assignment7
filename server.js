document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  // Simulate login check (no real authentication)
  if (email && pass) {
    fetchUsers();
  } else {
    alert("Please enter valid login details.");
  }
});

function fetchUsers() {
  const userContainer = document.getElementById("user-data");
  userContainer.innerHTML = "<p>Loading users...</p>";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      if (!res.ok) throw new Error("Network error");
      return res.json();
    })
    .then((data) => {
      userContainer.innerHTML = "";
      data.forEach((user) => {
        const card = document.createElement("div");
        card.className = "user-card";
        card.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>City:</strong> ${user.address.city}</p>
        `;
        userContainer.appendChild(card);
      });
    })
    .catch((err) => {
      userContainer.innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
    });
}
