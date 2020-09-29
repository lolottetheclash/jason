const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const users = require('./routes/users');
const path = require('path');

const app = express();

// Loading environment variables
dotenv.config({ path: './config.env' });

// Connect to db
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch(err => console.log(err.reason));

// Parse URL
app.use(express.json());

// Import routes
app.use('/api/users', users);

// Serve static assets if env = production
if (process.env.NODE_ENV === 'production') {
  // Set the static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`));
