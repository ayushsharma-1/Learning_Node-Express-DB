const{ writeFileSync } = require('fs')
for(let i=0;i<100000;i++){
    writeFileSync('./fs/big.txt',`Hello Bois${i}\n`,{flag:'a'})
}