// Import mongoose
var mongoose = require("mongoose");

// Task schema
var taskSchema = mongoose.Schema({
    _id:{
      type:String,
    },
    taskDesc:{
      type:String,
      required:true
    },
    taskCompleted:{
      type:Number,
      default:false
    },
    userId:{
      type:Number,
      required:true
    }
 });

 // Export Log Schema
module.exports = mongoose.model('task', taskSchema);