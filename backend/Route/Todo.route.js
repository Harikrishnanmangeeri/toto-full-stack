const express = require("express")
const TodoRoute = express.Router()
const controller = require('../controller/TodoController')

TodoRoute.post('/todo/todos',controller.todos)
TodoRoute.get('/todo/todos',controller.todosview)
// TodoRoute.delete('/todo/todos',controller.todosdelete)
// TodoRoute.put('/todo/todos',controller.todosedit)


module.exports=TodoRoute