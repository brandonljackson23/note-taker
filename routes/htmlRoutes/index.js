const path = require("path");
const router = require("express").Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

app.get('*', (req, res) => {
    res.redirect('/');
});

module.exports = router;