const http = require('http');
const host = "localhost";
const port = 3000;
const server = http.createServer((req,res) => {
    res.end("Hello from server");
}) ;
server.listen(port , host, (err) =>{
    if (err) {
        console.log("Server connection failed", err)

    }
    else {
        console.log(`Server running at port: ${port}` )
    }
})