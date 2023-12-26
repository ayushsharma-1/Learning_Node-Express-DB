const express = require('express')
const app = express()
const port = 4500


const reqFilter = require('./middleware')


app.get('/', (req, res) => {
    res.send('Weclome babes')
})
app.get('/about', (req, res) => {
    res.send('Weclome babes to about Page')
})
app.get('/user',reqFilter , (req, res) => {
    res.send('Users Page')
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
