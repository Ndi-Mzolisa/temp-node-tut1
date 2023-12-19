// The FS (File Systems) Module

// FYI - the Sync method is different from the Async method in that Sync is blocking while Async is non-blocking!
// FYI - the fs, os, path, http and other built-in node modules are internal modules and don't need to be installed first. You simply use require to call them

// Please conside the following 2 methods which have different syntax but yield the same results using the readFileSync method.

/*
 first Method
const{readFileSync} = require('fs')

 second Method, exactly same as the first 1
const fs = require('fs')
fs.readFileSync 
*/

const{ readFileSync, writeFileSync} = require('fs')
console.log('1st--start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}` )

// Note, the previous writeFileSync method will create new file in specified folder/file and overwrite existing content inside the file if the filename already exists
// Following example uses 'flag append'so as to append the new content instead overwriting and replacing existing content

writeFileSync('./content/result-sync.txt', ` Here is New Result with appended content: ${first}, ${second}`,{flag: 'a'} )
console.log('2nd--Done with this task');
console.log('3rd--Staring the next one');

