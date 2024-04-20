require('dotenv').config()
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express();
app.use(bodyParser.json());

//it will take url from evn file 
const db_url=process.env.MONGODB_URL;

//ENV used because if 3000 is busy it will automatically take another free server
const port = 3000 ;

//Schema defining of objects 
const taskSchema = new mongoose.Schema({
    title:String,
    description:String,
    dueDate:Date,
    completed:Boolean,
});  // if missing work fine if extra then throw an error

//Model(mongo will take name and make a collection)
const taskModel = new mongoose.model("Task",taskSchema);

// Route to create a new task
// Route to create a new task
app.post("/tasks", async (req, res) => {
    const { title, description, dueDate, completed } = req.body;
    try {
        const isCompleted = Boolean(completed);
        const newTask = await taskModel.create({
            title,
            description,
            dueDate,
            completed: isCompleted,
        });
        
        res.status(201).json(newTask);
    } catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


// Route to get all tasks
app.get("/tasks", async (req, res) => {
    const tasks = await taskModel.find();
    res.send(tasks);
});

// Route to get a specific task
app.get("/tasks/:id", async (req, res) => {
    //find by id
    const task= await taskModel.findById(req.params.id);
    if(!task){
        return res.status(404).json({message:"Not Found"});
    }
    const taskData ={
        id:task._id,
        title:task.title,
    }
    res.json(taskData);
});

// Route to update a task
app.patch("/tasks/:id", async (req, res) => {
    const { title, description, dueDate, completed } = req.body;

    try {
        const isCompleted = Boolean(completed);
    // Find the task by ID and update its fields
        const updatedTask = await taskModel.findByIdAndUpdate(req.params.id, {
            title,
            description,
            dueDate,
            completed: isCompleted, // Assign the converted value
        }, { new: true }); // Return the updated task
        if (!updatedTask) {
            return res.status(404).json({ error: "Task not found" });
        }
        res.json(updatedTask);
    } catch (error) {
        console.error("Error updating task:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


// Route to delete a task
app.delete("/tasks/:id", async (req, res) => {
    try {
        await taskModel.findByIdAndDelete(req.params.id);
        res.json({ message: "Task Deleted!" });
    } catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

//Listening
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log(mongoose.connect(db_url))
});