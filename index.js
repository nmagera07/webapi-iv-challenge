require('dotenv').config()

const server = require('./server')

const port = process.env.PORT || 8006

server.listen(port, () => {
    console.log(`Hello welcome to the API on ${port}.`)
})
