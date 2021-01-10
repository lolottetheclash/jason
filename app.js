const app = require('./server.js');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server listening on Port ${PORT}, ${process.env.NODE_ENV}`)
);
