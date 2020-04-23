const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

module.exports = () => {
  router.get('/check', async (req, res) => {
    const { authorization } = req.headers
    if (!authorization) { return res.json({ ok: false, message: 'Invalid token.' }) }

    res.json({
      ok: jwt.verify(authorization)
    })
  })

  return router
}
