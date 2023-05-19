const jsonserver = require("json-server")
const cors = require("cors")
const path = require("path")

const server = jsonserver.create()
const router = jsonserver.router(path.join(__dirname,'db.json'))
const middlewares = jsonserver.defaults()

server.use(cors())
server.use(jsonserver.bodyParser)
server.use(middlewares)
server.use(router)

const PORT = 8000

server.listen(PORT,()=>{
    console.log(`JSON SERVER IS RUNNING`);
})