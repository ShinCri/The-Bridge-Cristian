import http from 'http';
import sum from './suma.js';
import fs from 'fs';

http.createServer((req, res) => {
 fs.readFile('index.html', (error, data)=>{
 res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', });
 res.write(data);
 res.end('PATATA </br> La suma de 1+5 = ' + sum(1,5));
})
})
 .listen(8080);