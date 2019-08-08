const express = require('express')

const server = express()

const users = [
    {
        user1: 'user1'
    },
    {
        user2: 'user2'
    },
    {
        user3: 'user3'
    },

]


server.get('/', (req, res) => {
    res.status(200).json(users)
})


module.exports = server