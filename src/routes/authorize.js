const express = require('express')
const router = express.Router()

module.exports = () => {
  router.get('/authorize', async (_, res) => {
    res.json({ ok: 'maybe' })
  })

  return router
}

