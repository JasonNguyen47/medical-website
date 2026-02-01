
function readInput(req, res, next) {
    const userName = req.body.userName;
    const passWord = req.body.passWord;
    console.log(`User Name: ${userName}`);
    console.log(`Password: ${passWord}`);
    next(); 
}

module.exports = { readInput }