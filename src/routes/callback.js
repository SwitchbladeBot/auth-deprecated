const express = require('express')
const router = express.Router()
const { clients } = require('../../config.json')
const { encodeQueryString } = require('../utils')
const fetch = require('node-fetch')
const path = require('path')
const jwt = require('jsonwebtoken')

const API_URL = 'https://discordapp.com/api/v6'

module.exports = () => {
  router.get('/callback', async (req, res) => {
    const { code: authCode, state } = req.query
    if (!authCode || !state) { return res.json({ ok: false, message: 'Missing arguments.' }) }

    const client = clients[state.replace('client-', '')]

    if (!client) { return res.json({ ok: false, message: 'Invalid client.' }) }

    const params = {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      grant_type: 'authorization_code',
      code: authCode,
      redirect_uri: process.env.REDIRECT_URI,
      scope: client.scopes.join(' ')
    }

    const result = await fetch(`${API_URL}/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: encodeQueryString(params)
    }).then(r => r.json())

    if (result.error)
      return res.sendFile(path.resolve(__dirname, '../views', 'error.html'))

    const token = jwt.sign({
      accessToken: result.access_token,
      refreshToken: result.refresh_token,
      client: state.replace('client-', '')
    }, process.env.JWT_SIG)

    res.redirect(`${client.callback}?token=${token}`)

  })

  return router
}
