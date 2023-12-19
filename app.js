// NPM -- a global command that comes with node (No need for seperate download) 
// npm --version (the command line to check the npm version on the terminal (windows terminal) or on the integrated terminal (E.g VS-Code built-in terminal))

// local dependency     - use it only in this particular project. Local variables are used more ferequently than global variables.
    // npm i/instal <packageNmae>  - command to instal a local dependancy/package/module

// global dependency    - use it in any project. With NPX, there is less need to set up global variables, therefore, global variables are used less frequently.
    // npm install -g <packageName>

// package.json - a manifest file that stores important information about project/package. There's a manual at automatic way to set up package.json file
    // Manual set-up -- (create package.json in the root, create properties etc.)
    // Auto set-up   --  npm init ---> (a step by step set-up, press enter to skip )
    // Auto set-up   --  npm init -y ---> (everything default - doess the same thing as 'npm init' but skips all the steps and leaves everything default)

// External modules like Bootstrap, Lodash and others are not built-in to node and need to be installed before you can access them. And some like Bootstrap have own Dependencies

const _ = require('lodash');
const items = [1, [2, [3, [4, [5, [6]]]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);