// Local
const secret = "SUPER SECRET"
// Share (i.e make global so john and peter are accessible in all the .js files. Note, you need to use exports which is an object inside module. check this by console.log(module))
const john = "John"
const peter = "Peter"

module.exports = { john, peter }