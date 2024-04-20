const mongodb = require('./dynamic.js');

async function insert() {
    let db=await mongodb.dbConnect();
    console.log(db)
    const temp = await db.insertOne({"Name":"Asmit","Username":"asmit123","Email":"asmit@123","state":"Up","pincode":"284001"})
    console.log("Item inserted");
    // console.log(temp)
}
insert()
