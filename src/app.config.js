// App-specific configuration
// See README.md for guidance on variable usage.

export default {
  url: 'https://dev-276918.okta.com',
  issuer: 'https://dev-276918.okta.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: process.env.REACT_APP_AUTHPROVIDERCID
}