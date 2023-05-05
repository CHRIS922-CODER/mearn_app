var express = require("express");
var server = express();
var routes = require("./routes/routes");
var mongoose = require("mongoose");
const cors = require("cors");
mongoose.connect("mongodb+srv://youngkims:8MGNHO2o7asoCAYP@cluster900.w09bq8n.mongodb.net/",
{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });



server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(8000, function check(error) {
  if (error) {
    console.log("errorr");
  } else {
    console.log("startedddddd");
  }
});
