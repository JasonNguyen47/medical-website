const express = require("express");
const router = express.Router();
const path = require('path');
const { login } = require(path.join(__dirname, "..", "controllers", "authController.js"));


router.get("/home", (req, res) => {
    res.send(path.join(__dirname, '..', '..', 'frontend', 'pages', 'home.html'))
})

router.get("/login", login);

router.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'pages', 'dashBoard.html'));
})

module.exports = router;