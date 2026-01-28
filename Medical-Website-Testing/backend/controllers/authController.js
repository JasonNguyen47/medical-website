
const path = require('path'); 
const jwt = require("jsonwebtoken");

const SECRET_KEY = "supersecretkey";

function login(req, res) {
    const { userName, passWord } = req.body;
    console.log(`From authController.js, UserName: ${userName}, Password: ${passWord}`);

    if (userName == "Kenny" && passWord == "123") {
        const token = jwt.sign(
            { userName, role: "doctor"},
            SECRET_KEY,
            { expiresIn: "1h" }
        );
        console.log(`Token: ${token}`);
        // res.json({ token });

        res.cookie("token", token, {
            httpOnly: true,
            secure: false, // True when in Production
            sameSite: "strict"
        });
        console.log("FROM AUTHCONTOLLER SUCCESS");
        res.status(200).json({ success: true });

    } else {
        console.log("FROM AUTHCONTOLLER ERROR");
        return res.status(401).json({ error: "Not Valid Login"})
    }

    
    //const fileName = path.join(__dirname, "..", "..", "public", "homePage.html");
    // console.log(`file name: ${fileName}`);
    // res.sendFile(path.join(__dirname, "..", "..", "public", "homePage.html"));
}

module.exports = { login };