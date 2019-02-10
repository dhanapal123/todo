// Import Express
var express = require('express');
// Import Body Parser
var bodyParser = require('body-parser');

var methodOverride = require('method-override');

// Import Mongoose
const mongoose = require('mongoose');

var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());

// Connecting to the database
mongoose.Promise = global.Promise;
let hostUrl = "mongodb://dhana:dhana1988@ds129045.mlab.com:29045/todo-list";
mongoose.connect(hostUrl,{useMongoClient: true})
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

// Set Prot number
app.listen(4000, function() {
console.log('listening on 4000')
});

//Enable cros
app.use(function(req, res, next) {
 
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","*");
  next();
});

// Define Root Path documents
var task = require('./routes/task.routes');
app.use('/task', task);
