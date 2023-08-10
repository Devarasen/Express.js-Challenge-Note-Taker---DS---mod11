const express = require('express');

// Import our modular routers for /notes
const notesRouter = require('./notes');

const api = express.Router();

api.use('/notes', notesRouter);

module.exports = api;