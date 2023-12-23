/*==Writeable====Readable====Duplex====transform===*/
const {createReadStream} = require('fs')
const stream = createReadStream('./fs/big.txt',{highWaterMark:9000,encoding:'utf8'})

stream.on('data',(result)=>{
    console.log(result)
})

stream.on('error',(err)=> console.log(err))