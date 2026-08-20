const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('PulseDesk Staging Environment Version 1');
});

server.listen(3000);
