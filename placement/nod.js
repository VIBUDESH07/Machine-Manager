const express = require('express');
const twilio = require('twilio');

const app = express();
const port = process.env.PORT || 3000;

// Twilio credentials
const accountSid = 'AC912ec1f56edf82775d7262c6f203ba17';
const authToken = '9855c6710b4cedc4e97d025f0b4025ee';
const client = twilio(accountSid, authToken);

// Fixed Twilio phone number
const from = '+13342181938'; // Your Twilio phone number

// Fixed recipient Indian phone number
const to = '+919626513782'; // Replace with the recipient's Indian phone number

// Define the message as a constant
const message = "This is my new project";

// Send SMS when the server starts
client.messages
    .create({
        body: message,
        to,
        from
    })
    .then(message => console.log(`SMS sent: ${message.sid}`))
    .catch(error => console.error(`Error sending SMS: ${error.message}`));

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
