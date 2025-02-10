const express = require('express');

const router = require("../routes/users");

const {logger} = require("./middlewares/logger")

const {timing} = require("./middlewares/timing")

// Instance of the express for configuration
const app = express();

// Configure  the app instance for using JSON body data - Parse JSON payloads
app.use(express.json());

// How to use a middleware
// instance.verb(routePath, middleware, finalMiddleware)

// One way to use a middleware: This middleware gets implemented for all routes that are created using app instance 
app.use(timing);

// Our URL: localhost:PORTNUMBER/url_name
// Second way to use a middleware
// app.get("/", 
//     (req, res, next) => {
//         console.log(`${req.method} ${req.url}`);
//         // Pass the control to the next middleware
//         next();
//     }, 
//     (req, res, next) => {
//         req.startTime = Date.now();
//         next();
//     }, 
//     (req, res) => {
//     // Function logic executed
//     // res.send("<h1>Hello from express backend</h1>");
//     // res.sendStatus(201);
//     const responseTime = Date.now() - req.startTime;
//     res.status(201).send(`<h1>Hello from express backend</h1><p>Response time: ${responseTime}ms</p>`);
//     // res.download("./src/index.js");
// });

// Third way to use a middleware
// app.get("/", logger, timing, (req, res) => {
//     // Function logic executed
//     // res.send("<h1>Hello from express backend</h1>");
//     // res.sendStatus(201);
//     const responseTime = Date.now() - req.startTime;
//     res.status(201).send(`<h1>Hello from express backend</h1><p>Response time: ${responseTime}ms</p>`);
//     // res.download("./src/index.js");
// });

app.get("/", (req, res) => {
    // Function logic executed
    // res.send("<h1>Hello from express backend</h1>");
    // res.sendStatus(201);
    const responseTime = Date.now() - req.startTime;
    res.status(201).send(`<h1>Hello from express backend</h1><p>Response time: ${responseTime}ms</p>`);
    // res.download("./src/index.js");
});

app.post("/", (req, res) => {
    // Function logic executed
    res.json({
        message: "POST Request made!"
    });
})

app.use("/users", logger, router);

module.exports = { app };