const jwt = require("jsonwebtoken");

const SECRET_KEY = "supersecretkey";

function authenticate(req, res, next) {
    console.log(`Hello From authMiddleware`);

    const token = req .cookies.token;

    console.log(`From Middleware: ${token}`);

   

    if (!token) {
        return res.sendStatus(401).json({ error: "No Token Provided"});
    } 


    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch {
        return res.sendStatus(403);
    }

    
}

function removeAuthentication(req, res, next) {
    console.log("Removing Authentication");
    res.clearCookie("token");
    res.json({ success: true });
}


module.exports = { authenticate, removeAuthentication };