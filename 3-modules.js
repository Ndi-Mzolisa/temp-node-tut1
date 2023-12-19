// CommonJS - every file is a module(by default)
// Modules  - Encapsulated Code (Only share minimum)
// Module   - is synonimous with Package or Dependancy, which all refer to shareable capsules of code.


// Next use the Require function to access the exports from the 4-names.js module i.e show current file the path to the names module file using require
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-export-flavor')
require('./7-mind-grenade')                            // modules can be imported without assigning them to a variable using CONST, plus importing a mosule automaticaly invokes  its functionality

sayHi("Susan")
sayHi(names.john)
sayHi(names.peter)