const express = require("express");
const path = require("path");

console.log("Starting Express server...");

const app = express();
const PORT = process.env.PORT || 3000;

const buildPath = path.join(__dirname, "build");

app.use(express.static(buildPath));

// Fallback for client-side routing
app.use((req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on ${PORT}`);
});
