const { findById, createNewNote, validateNote } = require('../../lib/notes');
const { notes } = require('../../db/db');
const router = require('express').Router();
const fs = require("fs");
const path = require("path");

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();
  
    // if any data in req.body is incorrect, send 400 error back
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

router.delete('/notes/:id', (req, res) => {
    // find note's id
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    };
    // loop through notes and delete the note with the matching id
    for (var i = 0; i < notes.length; i++) {
        var obj = notes[i];
        if (result.id === obj.id) {
            notes.splice(i, 1);
        }
    };
    // write remaining notes back to db
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(notes, null, 2)
    );
});

module.exports  = router;