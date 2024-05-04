const express = require('express');
const cors = require('cors');
const mysql = require('mysql2'); // Import mysql2
const app = express();
const PORT = process.env.PORT || 5000;

// Database connection configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'placementpro'
});

// Establish connection to the database
connection.connect(err => {
  if (err) {
    console.error('Error connecting to database:', err.stack);
    return;
  }
  console.log('Connected to database as id', connection.threadId);
});

app.use(express.json());
app.use(cors());

app.post('/lo', (req, res) => {
  const { username, password } = req.body;

  // Query the database to check if username and password are valid
  connection.query('SELECT * FROM student WHERE student_mail = ?', [username], (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }

    // Check if results array is not empty (i.e., user exists)
    if (results.length > 0) {
      // Extract the first result from the array
      const userData = results[0];

      // Compare the fetched data with the data from the request
      if (userData.student_pass === password) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(400).json({ message: 'Invalid username or password' });
      }
    } else {
      res.status(400).json({ message: 'Username not found' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
