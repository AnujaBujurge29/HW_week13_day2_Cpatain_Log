// Add dotenv
require("dotenv").config();

// Imports or Dependencies Load Express
const express = require("express");
const app = express();

// Method Override
const methodOverride = require("method-override");

// Controllers
const logsController = require("./controllers/logs");

// Mongoose info
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});
// Middleware
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

app.use("/logs", logsController);

// Listen
app.listen(process.env.PORT, () => {
  console.log(`Port: ${process.env.PORT}`);
});
