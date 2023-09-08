const express = require('express')
const app= express()
const cors = require('cors')
const mongoose = require('mongoose')
const todo = require('./Route/Todo.route')
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json())
mongoose.connect('mongodb+srv://hkmangeeri:WHVAKCZWZ9mA7VgN@todo.6gyoudb.mongodb.net/todo?retryWrites=true&w=majority')

app.use("/api",todo) 

app.listen(9000,()=>{
    console.log("server on")
}
)
//WHVAKCZWZ9mA7VgN