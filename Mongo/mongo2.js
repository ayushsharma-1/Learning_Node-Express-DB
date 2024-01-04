const mongodb = require('./mongodbtry')
console.log(__dirpath,'mongodbtry.js')
async function insert (){
    let db=await mongodb()
    db.insertOne({"name":"Bakri"})
    console.log("item inserted")
} 
insert()