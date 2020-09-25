const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const users = require('./routes/users');

const app = express();

// Loading environment variables
dotenv.config({ path: './config/config.env' });

// Connect to db
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Parse URL
app.use(express.json());

// Import routes
app.use('/api/users', users);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`));
