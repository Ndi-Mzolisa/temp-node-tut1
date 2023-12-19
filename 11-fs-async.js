// Contined from the FS( File Systems) Module
    // The following example is of the Async method which is non-blocking. Unlike in the Sync method, the Async method uses similar syntax for the read and write methods, but has the 'Sync'suffix removed from the Async method.
    // Also notice that the read and write methods do not have Async as a prefix, but the absence of the Sync suffix is sufficient to make the method Async, because commonJS as well as nodeJS is by default Aync.
    // Lastly, the synchronous method needs to have a callback function after you specify, say a read or write function which is called to run the specified functions. 

// Here follows 2 specified 'file functions', a readFile and writeFile function!
const{ readFile, writeFile} = require('fs')
console.log('1st--start');

// Here follows 2 readFile and 1 writeFile callback functions (3 callbck ) for the above specified Async functions. The read callback takes 3 params - the File path (to read) plus an err and result param. It readFile callback also has to have an encoding spec (utf8) btwn path and other params to avoid having a buffer, but writeFile callbacks dont need encoding spec and they create a new file and specifies its name and location/path. 
readFile('./content/first.txt', 'utf8', (err, result) =>{
    if (err) {
        console.log(err);
        return
    } const first = result;
    readFile('./content/second.txt', 'utf8', (err, result ) =>{
        if (err) {
            console.log(err);
            return
        } const second = result;
        writeFile('./content/result-async-txt', `Here is the Async result: ${first}, ${second}`, (err, result) =>{
            if(err) {
                console.log(err)
                return
            }
            console.log('2nd--done with this task')
        })
    })
})
console.log('3rd--starting next Task');

/* Note that from above 3 callbacks, the first readFile callback fnction is executed right away and jumps out to line 29 containing the console.log, 
and then the code proceeds to the other callbacks. Because of the nonblocking nature of Async functions,
the following 2 nested callbacks (which take longer to execute) do not need to finsish executing inside the first callback before the code can jump to line 29. 
With sync, the code would have had to first execute the first callback 
and move down line by line to the nested callbacks and execute their code as well before going to line29 which would create a blockage in code execution.
In other words, with sync, you can start a task, off-load it and move to the following task way down in the code, before finishing the first task.
Plus, if the second task is shorter, it may finish executing before the first task, it does not wait for first task to finish--async eliminates that blockage.
--NOTE--As you can see, there are only 3 callback functions with very small task but the code is already messy even with sync. This can be resolved using promises (e.g. Await)
*/
