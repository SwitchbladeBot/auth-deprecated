const path = require('path')
const express = require('express')
const app = express()

app.get('/', async (req, res) => {
  res.sendFile(path.resolve(__dirname, './', 'example.html'))
})

app.get('/callback', async (req, res) => {
  res.sendFile(path.resolve(__dirname, './', 'callback.html'))
})

const PORT = 9826

app.listen(PORT, () => {
  console.log(`Listening example on port ${PORT}`)
})
