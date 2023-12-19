const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}

// Next use the Exports object to share the sayHi function to make it accessible from utils.js module/file to other files.

module.exports = sayHi