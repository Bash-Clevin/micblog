const express = require('express')
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const port = 4000
const posts = {}

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.post('/posts', (req, res ) => {
    const id = randomBytes(4).toString('hex')
    // get title sent by user
    const { title } = req.body
    
    posts[id] = { id, title }

    res.status(201).send(posts[id]);
})

app.listen(port, () => {
    console.log(`posts listening on ${port}`)
})