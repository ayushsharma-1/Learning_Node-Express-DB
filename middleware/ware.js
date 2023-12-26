const express = require('express')
const app = express()
const port = 4500

const reqFilter=(req,res,next)=>{
    console.log('reqFilter');
    next();
}

app.use(reqFilter)


app.get('/',(req,res)=>{
    res.send('Weclome babes')
})
app.get('/user',(req,res)=>{
    res.send('Users Page')
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });