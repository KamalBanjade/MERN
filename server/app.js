const express = require('express');
const connectDB = require('../config/db');
const signinRoutes = require('./routes/api/signin'); // Import the sign-in routes

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.get('/', (req, res) => res.send('Hello world!'));
app.use('/api/signin', signinRoutes); // Use the sign-in routes at /api/signin

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
