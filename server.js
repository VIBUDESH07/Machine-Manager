const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000; // Choose any port you like

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // Here you can implement your login logic
  // For demonstration, let's just send a success response if the username and password are not empty
  if (username && password) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(400).json({ message: 'Username and password are required' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running`);
});
