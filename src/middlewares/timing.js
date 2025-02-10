// Create a timing function
const timing = (req, res, next) => {
    req.startTime = Date.now();
    next();
    // const end = Date.now();
    // console.log(`Request took ${end - start} ms`);
}

module.exports = { timing };