var http = require('http');
// 원하는 url과 필요한 경로 및 옵션
var options = {
	host: 'localhost',
	port: 8124,
	path: '/?file=secondary',
	method: 'GET'
};

var processPublicTimeline = function(response) {
	//  종료되었으면 데이터를 파일에 쓴다
	console.log('finished request');
};

for (var i = 0; i < 2000; i++) {
	// 요청을 보낸 후 종료하고 연결을 닫는다
	http.request(options, processPublicTimeline).end();

}