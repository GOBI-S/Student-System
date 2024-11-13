// server/app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // For parsing JSON data in requests

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Student Management System');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
