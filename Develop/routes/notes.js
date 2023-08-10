const notes = require('express').Router();

//Import helper functions
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


// POST Route for notes
notes.post('/', (req, res) => {
    console.info(`${req.method} request received to add a tip`);
  
    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully`);
    } else {
      res.error('Error in adding note');
    }
});

module.exports = notes;