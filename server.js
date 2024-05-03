const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors()); // Enable CORS

app.post('/lo', (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(400).json({ message: 'Username and password are required' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
