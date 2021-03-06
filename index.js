require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')

const server = express()

const PORT = process.env.PORT || 9000

server.use(express.json())
server.use(cors())
server.use(express.static(path.join(__dirname, 'client/build'))) // static assets

server.get('/', (req, res) => {
    // sending back index.html
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

server.get('/api', (req, res) => {
    res.json({ message: 'api is working'})
})

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
})

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})