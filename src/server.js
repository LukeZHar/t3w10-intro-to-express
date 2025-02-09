const express = require('express');

const router = require("../routes/users");

// Instance of the express for configuration

const app = express();
// Our URL: localhost:PORTNUMBER/url_name
app.get("/", (req, res) => {
    // Function logic executed
    // res.send("<h1>Hello from express backend</h1>");
    // res.sendStatus(201);
    res.status(201).send("<h1>Hello from express backend</h1>");
    // res.download("./src/index.js");
});

app.post("/", (req, res) => {
    // Function logic executed
    res.json({
        message: "POST Request made!"
    });
})

app.use("/users", router);

module.exports = app;