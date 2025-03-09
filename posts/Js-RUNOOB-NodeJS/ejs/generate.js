const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

let filePath = 'index.ejs';
let information = {title: 'Example of EJS Template'};

if (fs.existsSync(filePath)) {
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) { console.log('读取文件错误:', err); return; }
        
        var ejs_string = data;
        var template = ejs.compile(ejs_string);
        
        try {
            var html = template(information);
        } catch (compilationError) {
            console.log('模板编译错误:', compilationError);
            return;
        }
        
        var outputFilePath = path.join("public", path.basename(filePath, '.ejs') + '.html');
        
        const outputDir = path.dirname(outputFilePath);
        
        if (!fs.existsSync(outputDir)){
            fs.mkdirSync(outputDir, { recursive: true });
        }
        
        fs.writeFile(outputFilePath, html, function(err) {
            if (err) { console.log('写入文件错误:', err); return; }
            console.log('文件写入成功:', outputFilePath);
        });  
    });
} else {
    console.log('文件不存在:', filePath);
}
