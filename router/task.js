const express=require('express')
const taskController=require('../controllers/taskController')
const router=express.Router()
const path=require('path')
router.post('/add_task',taskController.addTask)
router.get('/get_task',taskController.getTask)

module.exports=router