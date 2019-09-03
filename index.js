const http = require('http');
const chalk = require("chalk");

const server = http.createServer((request, response) => {
    response.writeHead(200);
    response.end(chalk.blue(Lisa), chalk.red(Andrea), chalk.green(Kim), chalk.yellow(Ashleigh));
});

server.listen(3000);
console.log('Server address: http://localhost:3000');

