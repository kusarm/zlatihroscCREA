const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3005;

const server = http.createServer(app);

server.listen(port, '0.0.0.0');
console.log(`Started server. Listening on localhost:${port}`)