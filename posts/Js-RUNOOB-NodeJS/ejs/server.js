// www.javascriptcn.com code example
const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

http.createServer(function (req, res) {
    fs.readFile('index.ejs', function (err, data) {
        if (err) {
            console.log(err);
            res.end();
            return;
        }
        const html = ejs.render(data.toString(), {title: 'Example of EJS Template'});
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(html);
        res.end();
    });
}).listen(8080);

console.log('Server running at http://localhost:8080/');