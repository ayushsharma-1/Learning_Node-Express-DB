const express = require('express')
const app = express();
app.get("",(req,res)=>{
    // console.log("data sent by browser==>>")
    res.send("Hello,"+req.query.name)
});

app.get('/about',(req,res)=>{
    res.send('Hello, this is a about Page')
});

app.get('/help',(req,res)=>{
    res.send('Hello, this is a help Page')
});



app.listen(5000)