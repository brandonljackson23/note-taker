const fs = require("fs");
const path = require("path");

// locate the note by its id
function findById(id, notesObj) {
    const result = notesObj.filter(note => note.id === id)[0];
    return result;
}

// save note to array
function createNewNote(body, notesObj) {
    const note = body;
    notesObj.push(note);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(notesObj, null, 2)
    );
    return note;
}

// validate that title and body are strings
function validateNote(notesObj) {
    if (!notesObj.title || typeof notesObj.title !== 'string') {
        return false;
    }
    if (!notesObj.text || typeof notesObj.text !== 'string') {
        return false;
    }
    return true;
}

module.exports = {
    findById,
    createNewNote,
    validateNote
};