const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

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

// Custom CORS middleware
const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Update with your React app's URL
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  // Allow preflight requests to continue
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
};

// Use custom CORS middleware
app.use(allowCrossDomain);

// Login endpoint
app.post('/lo', (req, res) => {
  const { username, password } = req.body; // Destructure username and password from req.body

  // Check if username and password are provided
  if (!username || !password) {
    return res.status(400).json({ message: 'Username or password is missing in the request body' });
  }

  // Query the database to retrieve user data based on the provided username
  connection.query('SELECT * FROM students WHERE student_mail = ?', [username], (error, results, fields) => {
    if (error) {
      console.error('Error querying database:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (results.length > 0) {
      const userData = results[0];
      const storedPassword = userData.student_pass;

      // Compare the provided password with the stored password
      if (password === storedPassword) {
        console.log('SUccess');
        return res.status(200).json({ message: 'Login successful', student: userData });
      } else {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  });
});

// Get student data endpoint
app.get('/student/:id', (req, res) => {
  const studentId = req.params.id;

  // Query the database to fetch student data by ID
  connection.query('SELECT * FROM students WHERE student_id = ?', [studentId], (error, results, fields) => {
    if (error) {
      console.error('Error querying database:', error);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }

    if (results.length > 0) {
      const studentData = results[0];
      res.status(200).json(studentData);
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
