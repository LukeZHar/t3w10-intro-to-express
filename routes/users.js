const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    // Function logic executed
    res.json({
        message: "JSON response sent!"
    });
});

router.get("/new", (req, res) => {
    // Function logic executed
    res.json({
        message: "New user details"
    });
});

// Chain all the requests with the same URL pattern 
router.route("/:id")
.get((req, res) => {
    // Function logic executed
    // To fetch the query parameters: req.params.id
    res.json({
        message: `Getting a specific user detail with id: ${req.params.id}`
    });
})
.patch((req, res) => {
    // Function logic executed
    res.json({
        message: `Editing a specific user detail with id: ${req.params.id}`
    });
})
.put((req, res) => {
    // Function logic executed
    // To fetch the query parameters: req.params.id
    res.json({
        message: `Changing a specific user detail with id: ${req.params.id}`
    });
})
.delete((req, res) => {
    // Function logic executed
    // To fetch the query parameters: req.params.id
    res.json({
        message: `Deleting a specific user detail with id: ${req.params.id}`
    });
});

// router.get("/:id", (req, res) => {
//     // Function logic executed
//     // To fetch the query parameters: req.params.id
//     res.json({
//         message: `Getting a specific user detail with id: ${req.params.id}`
//     });
// });

// router.patch("/:id", (req, res) => {
//     // Function logic executed
//     res.json({
//         message: `Editing a specific user detail with id: ${req.params.id}`
//     });
// });

// router.put("/:id", (req, res) => {
//     // Function logic executed
//     // To fetch the query parameters: req.params.id
//     res.json({
//         message: `Changing a specific user detail with id: ${req.params.id}`
//     });
// });

// router.delete("/:id", (req, res) => {
//     // Function logic executed
//     // To fetch the query parameters: req.params.id
//     res.json({
//         message: `Deleting a specific user detail with id: ${req.params.id}`
//     });
// });

module.exports = router;