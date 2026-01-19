const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");


const app = express();
connectDB();

app.use(cors());
app.use(express.json());



app.use("/api/students", require("./routes/studentRoutes"));


app.get("/", (req, res) => {
  res.send("School Management System API Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
