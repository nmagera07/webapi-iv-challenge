const express = require('express')

const server = express()


server.get('/', (req, res) => {
    res.status(200).json({ message: 'hello you can see me now'})
})


module.exports = server