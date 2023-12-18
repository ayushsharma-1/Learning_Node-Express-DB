const os = require('os')
const { uptime } = require('process')

// const{} = require('os')  another method

//info about current user
const user = os.userInfo()
console.log(user)


//method returns the system uptime in seconds
console.log(`The system is Uptime ${os.uptime()} secondds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
}
console.log(currentOS)