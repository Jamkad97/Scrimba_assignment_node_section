import http from 'node:http'
import { getDataFromDB } from './database/db.js'
 
const PORT = 8000

const server = http.createServer(async (req, res) => {
const destinations = await getDataFromDB()
/*
Challenge:
  1. Store our data in a const ‘destinations’.
  2. When a GET request is received to the ‘/api' endpoint, send our JSON stringified data.
    Think: What changes will you need to make to get this to work?
*/

if (req.method === 'GET' && req.url === '/api') {
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(destinations))
  return
}

  res.statusCode = 404
  res.end('Not Found')
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
