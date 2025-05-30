const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();
const app = express();

connectDB();
// middleware

app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoute'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));