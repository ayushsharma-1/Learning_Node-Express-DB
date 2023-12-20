const fs= require('fs')

const input = process.argv;

if(input[2]=='add')
{
    fs.writeFileSync(input[3],input[4])

}
else if(input[2]=='remove')
{
    fs.unlinkSync(input[3])
}
else
console.log('invalid output')


//node fs.js remove orange.txt
//node fs.js add orange.txt  'this is color and fruit'