document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Simulated login check for demo
    if (email === "parent@example.com" && password === "password123") {
        alert("Login successful!");
        window.location.href = "parent_dashboard.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
});