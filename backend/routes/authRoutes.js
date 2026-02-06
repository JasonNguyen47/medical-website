const express = require("express");
const router = express.Router();
const path = require('path');
const { login, logout } = require("../controllers/authController");
const { readInput, authenticateUser } = require("../middleware/authMiddleware");
const PAGES_ROOT = path.join(__dirname, "../../frontend/pages");

router.get("/home", (req, res) => {
    res.sendFile(path.join(PAGES_ROOT, 'home.html'));
})

router.get("/login", (req, res) => {
    res.sendFile(path.join(PAGES_ROOT, "login.html"));
});

router.post("/loginUser", readInput, login);

router.post("/logoutUser", logout);

router.get("/dashboard", authenticateUser, (req, res) => {
    res.sendFile(path.join(PAGES_ROOT, "dashboard.html"));
});

router.get("/DoctorDashBoard", authenticateUser, (req, res) => {
    res.sendFile(path.join(PAGES_ROOT, "dashboardDoctor.html"));
})

router.get("/DoctorDashNurse", authenticateUser, (req, res) => {
    res.sendFile(path.join(PAGES_ROOT, "dashboardNurse.html"));
})

module.exports = router;