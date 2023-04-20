import {runRequestService} from "./services/requestService";
import * as net from 'net';
import * as fs from 'fs';


runRequestService();
const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        const request = data.toString();
        const url = request.split(' ')[1];

        if (url === '/') {
            const files = fs.readdirSync('./data');
            const response = `HTTP/1.1 200 OK\n` +
                `Content-Type: text/html\n\n` +
                `<!DOCTYPE html>` +
                `<html>` +
                `<head>` +
                `<link rel="stylesheet" type="text/css" href="/styles/main.css">` +
                `</head>` +
                `<body><ul>${files.map((file) => `<li><a href="${file}">${file}</a></li>`).join('')}</ul></body>` +
                `</body>`;

            socket.write(response);
            socket.end();
        }else if (url === '/styles/main.css') {
          fs.readFile('./styles/main.css', 'utf-8', (err, data) => {
            if (err) console.log(err);
            const response = 'HTTP/1.1 200 OK\n' +
              'Content-Type: text/css\n\n' +
              data;
            socket.write(response);
            socket.end();
          });
        }
        else if (url.includes('news')){
            const fileName = url.substring(1);
            fs.readFile(`data/${fileName}`, 'utf-8', (err, data) => {
                if (err) console.log(err);
                const jsonData = JSON.parse(data);
                const response = `HTTP/1.1 200 OK\n` +
                    `Content-Type: text/html\n\n` +
                    `<!DOCTYPE html>` +
                    `<html>` +
                    `<head>` +
                    `<meta charset="UTF-8">` +
                    `<link rel="stylesheet" type="text/css" href="/styles/main.css">` +
                    `</head>` +
                    `<body>`+
                    `<h1>${fileName}</h1>` +
                    `<h2>Title: ${jsonData['title']}</h2>` +
                    `<img src="${jsonData['image']}" alt="">` +
                    `<div>To see more information, go to <a href="${jsonData['link']}">Link</a></div>` +
                    `<a href="/"><input type="button" value="Go Back"></a>`

                socket.write(response);
                socket.end();
            });
        }
    });
});

const port = 8080;
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

