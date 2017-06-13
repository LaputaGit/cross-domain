/**
 * 用node搭建的服务器
 */
const http = require('http');
const server = http.createServer();
const fs = require('fs');

const body = 'hello';

let sendData = (file, req, res) => {
	// 将需要返回的文件写入
	fs.readFile(file, (err, data) => {
		if (err) {
			console.log(err);
			res.writeHead(404, {
				'content-type': 'text/plain'
			}, res.end('page is missing ...'))
		} else {
			console.log('response已返回')
			res.statusCode = 200;
			res.statusMessage = 'ceshi';
			res.setHeader('Content-type', 'text/html');

			// 服务器端处理跨域
			// 1是Access-Control-Allow-Origin 允许的域
			res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:8080");
			// 2是Access-Control-Allow-Headers 允许的header类型
	    	res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
			// 3是Access-Control-Allow-Methods 允许的请求方法
	 	   	res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
			// 这三项都可以设置为"*"表示接受任意类型的请求
			
			res.end(data);

			// 下面的配置同样可以实现返回
			// res.writeHead(200, {
			// 	'content-type': 'text/html',
			// }, res.end(data))
		}
	})
}

server.on('request', (req, res) => {
	console.log('接收到请求');
	// console.log(req);
	// console.log(req);
	sendData(__dirname + '/index.html', req, res);

	// 为了试验超时设定
	// setTimeout(()=> {
	// 	sendData(__dirname + '/index.html', req, res);
	// }, 2000)
})

server.listen(8083, () => {
	console.log('server is listening on 8083...')
})