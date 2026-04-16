import http from 'node:http'

const PORT = 8000

const server = http.createServer((req, res) => {
/*
Challenge: 
1. Check the ‘method’ property on the req object.
   Only serve our string if it’s ‘GET’.
*/

if (req.method === 'GET' && req.url === '/api') {
  res.end('this is from the server')
} else {
  res.statusCodee = 404
  res.end('Not Found')
}
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
