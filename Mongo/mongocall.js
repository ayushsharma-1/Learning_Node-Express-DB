const {MongoClient}= require('mongodb')
const url = 'mongodb+srv://ayush1:Psit2023@cluster0.ajuj1hz.mongodb.net/'
const client = new MongoClient(url)
async function mongodb(){
    var result=await client.connect();
   db=result.db('LearningDB');
   return db.collection('first');
}

module.exports = mongodb