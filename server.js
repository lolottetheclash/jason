const express = require('express');
const dotenv = require('dotenv');
const app = express();

// Loading environment variables
dotenv.config({ path: './config/config.env' });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`));
