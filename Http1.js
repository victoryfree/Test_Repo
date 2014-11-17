// http 모듈을 로드
var http = require('http');

// http 서버를 생성
http.createServer(function (req, res) {
	// body...
	// 컨텐츠 헤더
	res.writeHead(200, {'content-type': 'text/plain'});

	res.end('Hello, World!\n');
}).listen(8124);

console.log('Server running on 8124');