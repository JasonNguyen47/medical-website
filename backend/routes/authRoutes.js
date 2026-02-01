const express = require("express");
const router = express.Router();
const path = require('path');
const { login } = require("../controllers/authController");
const { readInput } = require("../middleware/authMiddleware");


router.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'pages', 'home.html'))
})

router.get("/login", login);

router.post("/loginUser", readInput, (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'pages', 'dashBoard.html'));
})

router.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'pages', 'dashBoard.html'));
})

module.exports = router;