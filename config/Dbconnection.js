const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const uri = process.env.MONGODB_CONNECTION;

const Dbconnection = async () => {
  await mongoose
    .connect(uri)
    .then(() => console.log("database connected....."))
    .catch((err) => console.log(err));
};
module.exports = Dbconnection;
