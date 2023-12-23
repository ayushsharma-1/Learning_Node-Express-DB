const fs = require('fs')
const path = require('path')
const dir =path.join(__dirname);
const filePath = `${dir}/apple.txt`;

/*==============write============== */

// fs.writeFileSync(filePath,'This is a fruit')

/*==============Read============== */

// fs.readFile(filePath,(err,item)=>{
//     console.log(item)
// })    This will give buffer
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item)
// })

/*==============Append============== */

// fs.appendFile(filePath,' and file is apple.txt',(err)=>{
//     if(!err) console.log("file is updated")
// })

/*==============Rename============== */

// fs.rename(filePath,`${dir}/fruit.txt`,(err)=>{
//     if(!err) console.log("file is updated")
// })

/*==============Delete============== */

// fs.unlinkSync(`${dir}/fruit.txt`)