
function validateLogin(req, res, next) {
    if (req.body.userName == "Jason") {
        console.log("From auth, name is Jason invalid")
        return res.status(400).json({ error: "Username require"});
    }
    console.log("From authValidator, name is not Jason valid")
    next();
}

module.exports = { validateLogin };