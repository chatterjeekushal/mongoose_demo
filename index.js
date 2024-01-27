

import mongoose from "mongoose";

import express from "express"

import { Todo } from "./models/Todo.js";

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/todo')

}

main()


const app = express()
const port = 3000

app.get('/', async (req, res) => {

    const todo = new Todo({ title: "kushal", decs: "my todo", isDone: false,days:6 });

   await todo.save()

    res.send('Hello World!')

//     await Todo.insertMany([{

//         title:"gourov",
//         decs:"my day todo",
//         isDone:false,
//         days:7
//     },{

//         title:"rakash",
//         desc:"my last todo",
//         isDone:true,
//         days:10
//     }])

})



app.get('/about', async (req,res)=>{

    let todo= await Todo.findOne({})

    res.json({title:"rana",decs:"mytodo",isDone:false,days:"7"})
})





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})