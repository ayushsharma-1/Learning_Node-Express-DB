const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://ayush1:Psit2023@cluster0.ajuj1hz.mongodb.net/';

const client = new MongoClient(url);

async function dbConnect(){
   var result=await client.connect();
   db=result.db('LearningDB');
   return db.collection('first');
}

const  main=async ()=>{
    console.log('main function called')
    var data =await dbConnect();
    const dataArray= await data.find().toArray();
    console.log(dataArray);
}
main();


// For individual

// const  main=async ()=>{
//     console.log('main function called')
//     var data =await dbConnect();
//     const dataArray= await data.find({"name":"Bakri"}).toArray();
//     console.log(dataArray);
// }
// main();