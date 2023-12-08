const http = require('http');

// 创建一个 HTTP 服务器
const server = http.createServer((req, res) => {
  // 处理请求
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from Node.js!');
});

// 监听端口
const PORT = 443;
server.listen(PORT, () => {
  console.log(`Server running at http://jazzy-cassata-bdf5f8.netlify.app:${PORT}/`);
});
