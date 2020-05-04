const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const API_URL = 'https://discordapp.com/api/v6'

module.exports = () => {
  router.get('/check', async (req, res) => {
    const { authorization } = req.headers
    if (!authorization) return res.json({ ok: false, message: 'Invalid token.' })

    try {
      const data = jwt.verify(authorization, process.env.JWT_SIG)
      res.json({
        ok: true,
        ...data
      })
    } catch (e) {
      res.json({ ok: false, message: 'Invalid token.' })
    }
  })

  return router
}
