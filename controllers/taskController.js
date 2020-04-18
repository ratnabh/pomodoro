const Task = require("../models/Task");
exports.addTask = (req, res, next) => {
  console.log(req.body);
  const taskName = req.body.taskName;
  const taskDescription = req.body.taskDescription;
  const taskCreator = req.body.taskCreator;
  const taskDuration = req.body.taskDuration;
  const task = new Task({
    taskName,
    taskDescription,
    taskCreator,
    dateInsertedAt:Date.now(),
    dateToBeDeleted:Date.now() + req.body.taskDuration * 60000
  });
  task
    .save()
    .then(result => {
      // console.log(result);
      console.log('Task Added !')
      res.send(result)
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({err,message:'Validation error'})
    });
};





exports.getTask = (req, res, next) => {
Task
    .find()
    .then(result => {
      console.log(result);
      res.send(result)
    })
    .catch(err => {
      console.log(err);
    });
};
