async function getUserFromDatabase(req, res, next) {
    // Query would run here and we would get the list of users from the database
    req.userData = [
        "Luke", "Leia", "Han", "Chewbacca", "Rey"
    ];
    next();
}

module.exports = { getUserFromDatabase };