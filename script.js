// Simulated user database
const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    // Add more users as needed
];

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;

    // Check if the username and password match a user in the database
    const user = users.find(u => u.username === loginUsername && u.password === loginPassword);

    if (user) {
        // Redirect to the login success page or perform any other actions you need
        alert("Login successful!");
        window.location.href = "login_success.html";
    } else {
        // Redirect to the invalid password page or display an error message
        alert("Invalid username or password. Please try again.");
    }
});

document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const signupUsername = document.getElementById("signupUsername").value;
    const signupPassword = document.getElementById("signupPassword").value;

    // Check if the username already exists in the database
    const existingUser = users.find(u => u.username === signupUsername);

    if (existingUser) {
        // Redirect to a page indicating that the username is already taken
        alert("Username is already taken. Please choose another.");
    } else {
        // Add the new user to the database (in a real application, you would send this data to a server)
        users.push({ username: signupUsername, password: signupPassword });

        // Redirect to the login page or perform any other actions you need
        alert("Registration successful! You can now log in.");
        window.location.href = "index.html";
    }
});
