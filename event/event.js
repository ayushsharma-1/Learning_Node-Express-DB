const EventEmitter = require('events');
const customEmitter = new EventEmitter
customEmitter.on('response',()=>{
    console.log(`Custom event response called with user ${user} with id: ${id}`)
})

customEmitter.on('response',()=>{
    console.log("Some other event response called")
})

customEmitter.emit('response')
