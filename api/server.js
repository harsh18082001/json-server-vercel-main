// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const auth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('db.json')

// Uncomment to allow write operations
// const fs = require('fs')
// const path = require('path')
// const filePath = path.join('db.json')
// const data = fs.readFileSync(filePath, "utf-8");
// const db = JSON.parse(data);
// const router = jsonServer.router(db)

// Comment out to allow write operations
// Add this before server.use(router)
// server.use(jsonServer.rewriter({}))

server.db = router.db;
const middlewares = jsonServer.defaults()
server.use(middlewares)
server.use(auth);
server.use(router)
server.listen(8000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
