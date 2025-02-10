const checkIfAdmin = (req, res, next) => {

    if (req.body.isAdmin == "true") {
        req.auth = {
            isAdmin: true
        };
        req.isAdmin = true;
    } else {
        res.status(403).json({
            message: "You are not authorised user!"
        })
    }
    // Move to the next middleware
    next();
}

module.exports = { checkIfAdmin }