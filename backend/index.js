require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

const userRoutes = require("./routes/user");

app.use(express.json())
app.use(express.urlencoded())
app.use("/api/auth", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Failed to connect to MongoDB", error));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
