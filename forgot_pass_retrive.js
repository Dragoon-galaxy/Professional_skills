document.getElementById("forgotPasswordForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const resetUsername = document.getElementById("resetUsername").value;

    // Check if the username exists in the database (simulated database)
    const user = users.find(u => u.username === resetUsername);

    if (user) {
        // In a real application, you would send a password reset link to the user's email.
        // For this example, we'll simulate it with an alert.
        alert("A password reset link has been sent to your email.");
    } else {
        // Redirect to a page indicating that the username does not exist
        alert("Username not found. Please check the username and try again.");
    }
});
