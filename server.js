const express = require('express');
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const { notes } = require('./db/db');
const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static('public'));
// port
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});