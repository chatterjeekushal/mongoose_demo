
import mongoose from "mongoose";




const TodoSchema = new mongoose.Schema({
    

    title:String,
    decs:String,
    isDone:Boolean,
    days:Number,


  });



  export const Todo = mongoose.model('Todo', TodoSchema);