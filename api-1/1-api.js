// const http = require('http')
// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-Type':'application\json'})
//     res.write({name:'Ayush Sharma',email:'arunrudra1010@gmail.com'})
//     res.write(JSON.stringify({name:'Ayush Sharma',email:'arunrudra1010@gmail.com'}))
//     res.end()
// }).listen(5000)
const http = require('http');
const responseData = require('./data')
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // Convert the object to a JSON string m!
    // const responseData = { name: 'Ayush Sharma', email: 'ayusharunrudra101010@gmail.com' };
    const jsonString = JSON.stringify(responseData);

    // Write the JSON string to the response
    res.write(jsonString);

    // End the response
    res.end();
}).listen(5000);
