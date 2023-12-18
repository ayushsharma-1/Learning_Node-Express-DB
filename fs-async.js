// const { readFileSync , writeFileSync, readFile } = require('fs');

// readFile('./fs-sync/first.txt',(err,result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(result)
// })
// This will creating buffer so add utf8

const { readFileSync , writeFileSync, readFile, writeFile } = require('fs');
console.log('start')
readFile('./fs-sync/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    // console.log(result)
    const first = result
    readFile('./fs-sync/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }

        const second = result
        writeFile('./fs-sync/result-sync.txt',`Here is the result: ${first},${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
            console.log('here dont with')
        })
    })
})