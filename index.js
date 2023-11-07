const path = require("path");

const dotenv = require("dotenv").config();

const express = require("express");
const cors = require("cors");
const router = require("./routes/userRoutes");
const Dbconnection = require("./config/Dbconnection");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

Dbconnection();
app.use("/api", router);

// serve frontend

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "./", "frontend", "build", "index.html")
    );
  });
} else {
  app.get("/", (req, res) => {
    res.send("Please set to production mode");
  });
}

// app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
