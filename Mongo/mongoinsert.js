const mongodb = require('./mongocall.js')
async function insert (){
    let db=await mongodb()
    db.insertOne({"name":"Bakri","name2":"Asmit","age":25})
    console.log("item inserted")
} 
insert()