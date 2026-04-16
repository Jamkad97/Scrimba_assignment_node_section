import http from 'node:http'
import { getDataFromDB } from './database/db.js'

const PORT = 8000

function sendJSON(res, statusCode, data) {
  res.setHeader('Content-Type', 'application/json')
  res.statusCode = statusCode
  res.end(JSON.stringify(data))
}
/*
Challenge:
  1. Create a utility function to make this code DRYer.
  2. Delete unnecessary code.
*/

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB()

  if (req.url === '/api' && req.method === 'GET') {
    return sendJSON(res, 200, destinations)
    }
  if (req.url.startsWith('/api/continent') && req.method === 'GET') {
    const continent = req.url.split('/').pop()
    const filtered = destinations.filter(
      d => d.continent.toLowerCase() === continent.toLowerCase()
    )
    return sendJSON(res, 200, filtered)
  }
  sendJSON(res, 404, {
    error: "not found",
    message: "The requested route does not exist"
  })
})
server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
