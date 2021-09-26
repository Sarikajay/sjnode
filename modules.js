
const names = require('./name')
const sayhi =require('./util')
const newname = require('./alter')
sayhi(names.john)
sayhi(names.ram)

require('./add')
                                     


const os = require('os')
const user =os.userInfo()
console.log(user)
console.log(`sys time is ${os.uptime()}`)

const currentos ={
    name:os.type(),
    release: os.release(),
    mem:os.totalmem(),
    free:os.freemem()
}
console.log(currentos)