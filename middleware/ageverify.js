const express = require('express')
const app = express()
const port = 4500

const reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send("Please provide age")
    }
    else if(req.query.age<18){
        res.end('You cannot this page You are Below 18')
    }
    else {
        next();
    }
}
app.use(reqFilter)


app.get('/', (req, res) => {
    res.send('Weclome babes')
})
app.get('/user', (req, res) => {
    res.send('Users Page')
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
