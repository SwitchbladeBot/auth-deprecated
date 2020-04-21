const express = require('express')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 80

// Routes
// TODO


// TODO: configure cors
app.use(cors())


app.get('/', (req, res) => {
  res(`<pre>
  Everything seems to be working.
  If you went here by mistake
  </pre>`)
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})