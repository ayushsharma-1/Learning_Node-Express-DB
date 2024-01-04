const {MongoClient}= require('mongodb')
const url = 'mongodb+srv://myAtlasDBUser:Psit2023@myatlasclusteredu.axdczvt.mongodb.net/LearningDB/first?retryWrites=true&w=majority'
const client = new MongoClient(url)
async function mongodb(){
    db=await client.connect()
    console.log(db)
}

module.exports = mongodb