const todoSchema = require('../model/todo')
module.exports={
    todos:async(req,res)=>{
        try {
            const {todo}=req.body
            await todoSchema.create({
             Todo:todo
            })
            res.json("todo added sucessfully")
            
        } catch (error) {
            console.log(error.message);
            
        }
      

    },
    
    todosview:async(req,res)=>{
        try {
            
            const todo=await todoSchema.find()
            res.json(todo)
            
        } catch (error) {
            json.status(error.message)
        }
        
    },
    





    }
   