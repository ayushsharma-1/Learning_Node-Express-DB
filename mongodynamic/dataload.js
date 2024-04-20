const mongodb = require('./dynamic.js');

async function find() {
    let db=await mongodb.dbConnect();
    const temp = await db.find({"Name":"Asmit"}).toArray()
    console.log("Item founded")
    console.log(temp)
}
find()
