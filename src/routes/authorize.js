const express = require('express')
const router = express.Router()
const { clients } = require('../../config.json')
const { encodeQueryString } = require('../utils')

module.exports = () => {
  router.get('/authorize', async (req, res) => {
    const { client: clientId } = req.query
    if (!clientId || !clients[clientId]) 
      return res.json({ ok: false, message: 'Invalid client.' })
    
    const client = clients[clientId]

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

