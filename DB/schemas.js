var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
  taskName: String,
  description: String,
  dueDate: Date,
  createdDate: {type: Date, default: Date.now}
})