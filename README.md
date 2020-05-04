# Switchblade auth

The authentication micro-service for switchblade micro-services

## Workflow

### Login workflow

![login workflow](https://i.imgur.com/gmcp3Vl.png)

### Authorization request workflow

![request workflow](https://i.imgur.com/Ma10tNk.png)

## Routes to-do

- `/authorize` - Authentication pop-up: accepts whitelisted callbacks url

- `/callback` - Callback: Redirected from discord oauth, redirect to last callback with switchblade token

- `/api/check` - Authorization check: Checks if the authorization is correct and returns auth status (id, access token, etc)

- `/api/refresh` - Authorization refresh; Receives a switchblade token and returns a new sb token with new accessToken

- `/api/@me` - Discord authorization test; Returns simple information about the user for testing purposes (or not)

## Other to-do's

- HTTPS only (cloudflare can redirect HTTP to HTTPS)

- **ENCODE ALL ACCESS_TOKEN BECAUSE THEY DONT NEED ANYTHING ELSE TO WORK**