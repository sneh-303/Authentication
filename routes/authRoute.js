const express = require('express');
const router = express.Router(); // Make sure this is BEFORE using `router`

const authMiddleware = require('../middleware/auth');
const { register, login, profile } = require('../controllers/authController');

// Routes
router.post('/register', register);
router.post('/login', login);
router.get('/profile', authMiddleware, profile);

module.exports = router;
