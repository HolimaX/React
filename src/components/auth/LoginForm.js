import React from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { withOktaAuth } from '@okta/okta-react';
import ReactGA from 'react-ga4';

import Reaptcha from 'reaptcha';

import AdSense from 'react-adsense';

export default withOktaAuth(class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToken: null,
      error: null,
      username: '',
      password: '',
      sessionReaptchaKey: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.onVerify = this.onVerify.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    
    if (process.env.REACT_APP_GA_MEASUREMENT_ID) {
      ReactGA.event({
        category: "auth",
        action: "login_attempt",
      });
    }

    this.props.oktaAuth.signIn({
      username: this.state.username,
      password: this.state.password
    })
      .then(res => this.setState({
        sessionToken: res.sessionToken
      }))
      .catch(err => {
        this.setState({error: err.message});
        console.error('Login error:', err);
      });
  }

  onVerify(token) {
    console.log('Login Reaptcha verified');
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    if (this.state.sessionToken) {
      this.props.oktaAuth.signInWithRedirect({ sessionToken: this.state.sessionToken });
      return null;
    }

    const errorMessage = this.state.error ? 
    <span className="error-message">{this.state.error}</span> : 
    null;

    //const key = "6LfJNvwfAAAAAHXAguVbaOQrcBVnCADSH1QBS0hm"
    let key = this.state.sessionReaptchaKey;
    if (!key) key = process.env.REACT_APP_REAPTCHA; 
    const enableAds = process.env.REACT_APP_ENABLE_ADS === 'true';
    
    return (
      <section>
        {enableAds && (
          <AdSense.Google
            client='ca-pub-2835578352930332'
            slot='7806394673'
            style={{ display: 'block' }}
            format='auto'
            responsive='true'
            layoutKey='-gw-1+2a-9x+5c'
          />
        )}
        <Reaptcha sitekey={key} onVerify={this.onVerify} />
        &nbsp;
        <form onSubmit={this.handleSubmit}>
          {errorMessage}
          <div className="form-element">
            <label>Username:</label>
            <input
              id="username" type="text"
              value={this.state.username}
              onChange={this.handleUsernameChange} />
          </div>

          <div className="form-element">
            <label>Password:</label>
            <input
              id="password" type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange} />
          </div>
          <input id="submit" type="submit" value="Submit" />
        </form>
      </section>
    );
  }
});