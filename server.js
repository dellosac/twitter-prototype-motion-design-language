const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Path to your React build folder
const buildPath = path.join(__dirname, "build");

// Serve static files from the React app
app.use(express.static(buildPath));

// For any request that doesn't match a static file,
// send back React's index.html (for client-side routing)
app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});
