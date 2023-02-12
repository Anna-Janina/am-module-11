// Dependencies
const express = require('express');
const path = require('path');

// Server routes
const htmlRoutes = require('./Develop/routes/api-routes');
const apiRoutes = require('./Develop/routes/api-routes');
const { clog } = require('./Develop/routes/index');
const app = express();

// Create port
const PORT = 3008;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Get all files from the 'public' folder
app.use(express.static('public'));
// Api routes
app.use('/api', apiRoutes);
// Html routes
app.use('/', htmlRoutes);

// Listener
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);