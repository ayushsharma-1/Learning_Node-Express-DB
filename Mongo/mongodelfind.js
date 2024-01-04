const mongodb = require('./mongocall.js')


async function find() {
    let db=await mongodb()
    const temp = await db.find({"age":25}).toArray()
    console.log("Item founded")
    console.log(temp)
}
find()


// async function deletes() {
//     let db=await mongodb()
//     db.deleteOne({"name":"Bakri"})
//     console.log("Item Deleted")
// }
// deletes()

