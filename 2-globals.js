// Globals - NO WINDOW! Node does not hsve access to the Window object because it dont run on the browser but on the server.

// __dirname  - path to the current directory
// __filename - file name (under the directory)
// require    - function to use modules (commonJS)
// module     - information about current module (file. Note! By default all commonJS files are modules)
// process    - information about the environment where the program is being executed



console.log(__dirname)

setInterval(() =>{
    console.log("Hello World!")
}, 2000)