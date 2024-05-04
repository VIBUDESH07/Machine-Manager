const express = require('express');
const cors = require('cors');
const mysql = require('mysql2'); // Import mysql2
const app = express();
const PORT = process.env.PORT || 5000;
let globaluser='';
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
 

  connection.query('SELECT * FROM students ',(error, results, fields) => {
   

    if (results.length > 0) {
      const userData = results[0];
      if (userData.student_pass) {
        // Send student details along with the success message
        res.status(200).json({ message: 'Login successful', student: userData });
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
