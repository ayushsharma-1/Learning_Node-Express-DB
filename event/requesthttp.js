const http = require('http')
const server = http.createServer()

server.on('request',(req,res)=>{
    res.end('Welcome')
}).listen(5000)