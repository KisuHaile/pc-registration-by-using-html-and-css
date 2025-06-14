document.addEventListener("DOMContentLoaded", function () {
  
  console.log("script.js is loaded");
  const defaultUser = { username: "admin", password: "password" };
  
  let storedUser = localStorage.getItem("adminUser");
  if (!storedUser) {
    localStorage.setItem("adminUser", JSON.stringify(defaultUser));
    storedUser = JSON.stringify(defaultUser);
  }

  const validUser = JSON.parse(storedUser);
  
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (username === validUser.username && password === validUser.password) {
        localStorage.setItem("isLoggedIn", "true");
        alert("Login successful!");
        window.location.href = "Home.html";
      } else {
        alert("Invalid username or password");
      }
    });
  }

  
  const currentPage = window.location.pathname.split("/").pop();
  if (currentPage === "registred.html") {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      alert("You must log in first.");
      window.location.href = "index.html";
    }
  }
});