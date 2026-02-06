const jwt = require("jsonwebtoken");

function login(req, res) {
    
    const { userName, passWord } = req.body;


    if (userName == "Jason") {
        res.status(401).json({ error: "Not valid Name"});
    } else {
        const token = jwt.sign(
            { userName, role: "nurse"},
            process.env.jwtKey,
            { expiresIn: "1h"}
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: false, // only when in Production
            sameSite: "strict"
        })
        res.status(200).json({ success: true, position: "nurse"});
    }
}

function logout(req, res) {
    token = req.cookies.token;
    
    if (!token) {
        return res.status(200).json({ success: false, message: "No User Loggined"});
    } else {
        res.clearCookie("token");
        res.status(200).json({ success: true });
    }
}



module.exports = { login, logout };