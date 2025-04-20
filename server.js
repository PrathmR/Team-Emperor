const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// Dummy credentials
const VALID_EMAIL = "user@example.com";
const VALID_PASSWORD = "password123";

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // Serve static files from root directory

// Serve login.html by default
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

// Handle login form
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === VALID_EMAIL && password === VALID_PASSWORD) {
    res.redirect("/Hero2/index.html"); // Adjust path if needed
  } else {
    res.redirect("/?error=1");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
