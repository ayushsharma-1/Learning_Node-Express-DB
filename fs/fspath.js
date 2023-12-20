const fs=  require('fs')
const path = require('path')
const pathDire = path.join(__dirname);
// console.warn(pathDire)
// for(i=0;i<5;i++)
// {
//     //fs.writeFileSync(pathDire+"hello"+i+".txt","a simple text file");
//     fs.writeFileSync(`${pathDire}hello${i}.txt`,"a simple text file");
// }
// console.log(pathDire)
fs.readdir(pathDire,(err,files)=>{
    // console.log(files)
    files.forEach((item)=>{
        console.log("file name is ",item)
    })
})