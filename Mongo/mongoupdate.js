const mongodb = require('./mongocall')

async function Update() {
    var db = await mongodb()
    db.updateOne({"age":25},{$set:{"name":"dandi"}})
    console.log("Update Done")
}

Update()
