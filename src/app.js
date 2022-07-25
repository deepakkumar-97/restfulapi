const express = require("express");
require("./db/conn")
const Student = require("./model/students")
const app = express();
const port = process.env.port || 3000

app.use(express.json())


// create new record

app.post("/student",(req,res) => {
    console.log(req.body)
    const user = new Student(req.body)
    user.save().then(() =>{
        res.status(201).send(user)
    }).catch((e) =>{
        res.status(400).send(e)
    })
});

// read the data of registered students

// app.get("/student", async(req,res) => {

//      try{
//         const stdata = await Student.find()
//         res.send(stdata)
//      }catch(e){
//         res.send(e)
//      }

// })

// get the indivisual student data

// app.get("/student/:id", async(req,res) => {

//     try{
//         const _id = req.params.id
//         const stdata1 = await Student.findById(_id)
//         res.send(stdata1)
//     }catch(e){
//         res.send(e)
//     }
// })


// update the student by its id

// app.patch("/student/:id", async(req,res) => {

//     try{
//         const _id = req.params.id
//         console.log(_id)
//         const stupdate = await Student.findByIdAndUpdate(_id, req.body,{new: true})
//         res.send(stupdate)
//         console.log(stupdate)
//     }catch(e){
//         res.status(400).send(e)
//     }
// })

// Delete the students by its id

// app.delete("/student/:id", async(req,res) => {

//     try{
//         const _id = req.params.id
//         const stdelete = await Student.findByIdAndDelete(_id)
//         res.send(stdelete)
//     }catch(e){
//         res.status(500).send(e)
//     }
// })



app.listen(port,() =>{
    console.log(`listening to port no ${port}`);
});