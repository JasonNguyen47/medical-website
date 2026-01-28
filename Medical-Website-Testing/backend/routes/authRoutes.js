// Chaining together Functions
// The middile Man 

const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const path = require('path'); 
const SECRET_KEY = "supersecretkey";

const { login } = require("../controllers/authController");
const { validateLogin } = require("../validators/authValidator");
const { authenticate, removeAuthentication } = require("../middleware/authMiddleware");

router.post("/login", validateLogin, login);
router.post("/logout", removeAuthentication);
router.get("/home", authenticate, (req, res) => {
    // res.sendFile(path.join(__dirname, "..", "..", "public", "homePage.html"));
    res.send("Welcome " + req.user.userName);
});


module.exports = router;
