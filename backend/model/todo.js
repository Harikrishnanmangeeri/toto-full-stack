const  mongoose = require('mongoose')



const todoschema = new mongoose.Schema({
    Todo:{
        type:String,
        
    }
    
})
module.exports=mongoose.model("todo",todoschema)