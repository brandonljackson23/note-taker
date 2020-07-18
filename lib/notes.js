const fs = require("fs");
const path = require("path");

// locate the note by its id
function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
}

// save note to array
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, "../data/notes.json"),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}

// validate that title and body are strings
function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!animal.body || typeof animal.body !== 'string') {
        return false;
    }
    return true;
}

module.exports = {
    findById,
    createNewNote,
    validateNote
};