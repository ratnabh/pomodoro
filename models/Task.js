const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    taskName: {
      type: String,
      required: true,
    },
    taskDescription: {
      type: String,
      required: true,
    },
    taskCreator: {
      type: String,
      required: true,
    },
    dateInsertedAt:{
      type:Number,
      required:true
    },
    dateToBeDeleted:{
      type:Number,
      required:true
    }
  }
);

module.exports = mongoose.model("tasks", taskSchema);
