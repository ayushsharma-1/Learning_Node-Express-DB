const mongodb = require('./mongocall.js')
async function insert (){
    let db=await mongodb()
    db.insertOne({"name":"Bakri"})
    console.log("item inserted")
} 
insert()