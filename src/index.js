const express = require('express')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 80

const authorizeRoute = require('./routes/authorize.js')
const callbackRoute = require('./routes/callback.js')

// Routes
app.use(authorizeRoute())
app.use(callbackRoute())

// TODO: configure cors
app.use(cors())


app.all('/', (req, res) => {
  res.send(`<pre>
  Everything seems to be working.
  If you went here by mistake, go to <a href="https://switchblade.xyz">https://switchblade.xyz</a>
  </pre>`)
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})