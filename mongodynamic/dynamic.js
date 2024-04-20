const {MongoClient}=require('mongodb');

const url="mongodb://localhost:27017";
const client=new MongoClient(url);
 
const dbConnect=async ()=>{
    var cliennt=await client.connect();
    console.log("connected to the database");
    const collection=cliennt.db("LeaningDB").collection("first");
    return collection;
}
module.exports={dbConnect};
