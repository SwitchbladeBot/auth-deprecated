const express = require('express')
const router = express.Router()
const { clients } = require('../../config.json')
const { encodeQueryString } = require('../utils')

module.exports = () => {
  router.get('/callback', async (req, res) => {
    const { code: authCode, state } = req.query
    if (!authCode || !state) { return res.json({ ok: false, message: 'Missing arguments.' }) }

    const client = clients[state.replace('client-', '')]

    if (!client) { return res.json({ ok: false, message: 'Invalid client.' }) }

    const queryParams = {
      response_type: 'code',
      client_id: process.env.CLIENT_ID,
      scope: client.scopes.join(' '),
      state: `client-${clientId}`,
      redirect_uri: process.env.REDIRECT_URI
    }

    res.redirect(`https://discordapp.com/api/oauth2/authorize?${encodeQueryString(queryParams)}`)
  })

  return router
}
