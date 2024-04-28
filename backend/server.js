require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const foodCardRoutes = require("./routes/foodCardRoutes");

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());

app.use("/api/foods", foodCardRoutes);

mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
