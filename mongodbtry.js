const {MongoClient}= require('mongodb')
const url = 'mongodb+srv://myAtlasDBUser:Psit2023@myatlasclusteredu.axdczvt.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(url)
function mongodb(){
    db=client.connect()
    console.log(db)
}