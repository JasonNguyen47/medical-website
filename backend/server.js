require("dotenv").config();
const express = require('express');
const path = require('path');
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.static(path.join(__dirname, "../frontend/public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(authRoutes);


const PORT = parseInt(process.env.PORT) || 5000;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

