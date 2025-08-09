const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from backend server");
});

app.get("/api/messages", (req, res) => {
  res.json([
    { id: 1, text: "Welcome to the backend API!" },
    { id: 2, text: "This data is coming from Express." },
    { id: 3, text: "You can fetch this in the frontend later." },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
