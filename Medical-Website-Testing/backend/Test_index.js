const express = require("express");
const authRoutes = require("./routes/authRoutes");
const path = require('path'); 
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(authRoutes);

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`server is Running on ${PORT}`);
})

app.get("/", (req, res) => {
    res.sendStatus(200);
});

app.get("/loginPage", (req, res) =>{
    res.sendFile(path.join(__dirname, `..`, "public", "loginPage.html"));
})

app.get("/webpage", (req, res) =>{
    res.sendFile(path.join(__dirname, `..`, "public", "webpage.html"));
})


/*
app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "homePage.html"));
})


app.get("/protection", (req, res) => {
    console.log("/protection is used");
    console.log("Token Header", req.headers.authorization);
    res.sendStatus(200);
})

*/