# Switchblade auth

The authentication micro-service for switchblade micro-services

## Workflow

### Login workflow

![login workflow](https://i.imgur.com/v8hMoWM.png)

### Authorization request workflow

![request workflow](https://i.imgur.com/qVV6J1B.png)

## Routes to-do

- `/authorize` - Authentication pop-up: accepts whitelisted callbacks url

- `/callback` - Callback: Redirected from discord oauth, redirect to last callback with switchblade token

- `/api/@me` - Authorization check: Checks if the authorization is correct and returns auth status (id, access token, etc)

## Other to-do's

- HTTPS only (cloudflare can redirect HTTP to HTTPS)