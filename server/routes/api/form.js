const express = require('express');
const router = express.Router();
const forms = require('../../../models/forms'); // Adjusted import path

// @route   POST api/signin
// @desc    Sign in a user
// @access  Public
router.post('/', (req, res) => {
  const { username, email, password } = req.body;

  // Create a new user instance
  const newUser = new forms({
    username,
    email,
    password
  });

  // Save the new user to the database
  newUser.save()
    .then(savedUser => {
      res.status(201).json({ success: true, message: 'User successfully signed up', user: savedUser });
    })
    .catch(err => {
      res.status(500).json({ error: 'Failed to save user to the database' });
    });
});

module.exports = router;
