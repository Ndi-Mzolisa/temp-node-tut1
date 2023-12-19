//  BUILT-IN MODULES - Do not require us to set it up for exporting. They are are built=in to ode and we simply require/import them. E.G os-operating system

const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// check system uptime (how long the computer has been running) in seconds. Return it using log
console.log(`The system uptime is ${os.uptime()} seconds`)

// check the current Operating System
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)