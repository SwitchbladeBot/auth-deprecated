const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const API_URL = 'https://discordapp.com/api/v6'

module.exports = () => {
  router.get('/check', async (req, res) => {
    const { authorization } = req.headers
    if (!authorization) return res.json({ ok: false, message: 'Invalid token.' })

    const data = jwt.verify(authorization, process.env.JWT_SIG)
    if (!data) return res.json({ ok: false, message: 'Invalid token.' })
    res.json({
      ok: true,
      ...data
    })
  })

  router.get('/users/@me', async (req, res) => {
    const { authorization } = req.headers
    if (!authorization) return res.json({ ok: false, message: 'Invalid token.' })

    const data = jwt.verify(authorization, process.env.JWT_SIG)
    if (!data) return res.json({ ok: false, message: 'Invalid token.' })
    
    const result = await fetch(`${API_URL}/users/@me`, {
      headers: {
        authorization: data.accessToken
      }
    }).then(r => r.json())
    res.json(result)
  })

  return router
}
