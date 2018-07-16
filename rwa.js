/*var fs = require('fs');
var content = fs.readFileSync('test.txt', 'utf-8' );
console.log (content); *///\r\n

var fs = require ('fs');

var content = 'Hello World!';
fs.writeFileSync ('test.txt', content, function (err, content) {
	//console.log (content);
});

var fs = require('fs');
var content = fs.readFileSync('test.txt', 'utf-8' );
console.log (content);

var fs = require ('fs');

var content = '\r\nHello World!-2';
fs.appendFileSync ('test.txt', content, function (err, content) {
	//console.log (content);
});