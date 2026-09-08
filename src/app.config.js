// App-specific configuration
// Configured via environment variables for public CD integrators.

const appConfig = {
  url: process.env.REACT_APP_OKTA_URL || 'https://dev-example.okta.com',
  issuer: process.env.REACT_APP_OKTA_ISSUER || 'https://dev-example.okta.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: process.env.REACT_APP_AUTHPROVIDERCID || '',
  recaptcha_site_key: process.env.REACT_APP_REAPTCHA_SITE_KEY || process.env.REACT_APP_REAPTCHA || ''
};

export default appConfig;