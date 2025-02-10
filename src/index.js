const { app } = require("./server");

// define a default port number
const PORT = process.env.PORT ?? 3300;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
