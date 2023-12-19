// The HTTP Module -- Built-in to node and accessible using require method (Without needing us to first create and export in a seperate origin file)
const http = require('http');

// Once we import the 'http' module from node, we have access to all its methods.
            // E.g next we create a server using the 'createServer' method/function with takes 2 params( Request(from a user in a browser) & Result (from a server)) which are both objects
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is About section with our short history')
    }
    res.end(`
        <h1>Ooops</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href = "/">back to HomePage</a>
    `)
})

            // then listen to requests on the server at port:5000. Note that running this file at the terminal does not exit like running all previous files because we are running the server and the server is always listening for requests.
server.listen(5000)
