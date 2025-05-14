document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "student@example.com" && password === "password123") {
    window.location.href = "student_dashboard.html";
  } else {
    alert("Invalid credentials. Please try again.");
  }
});