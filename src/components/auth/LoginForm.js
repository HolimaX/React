import React from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';

import Reaptcha from 'reaptcha';

import AdSense from 'react-adsense';

export default withAuth(class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToken: null,
      error: null,
      username: '',
      password: ''
    }

    this.oktaAuth = new OktaAuth({ url: props.baseUrl });

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.oktaAuth.signIn({
      username: this.state.username,
      password: this.state.password
    })
      .then(res => this.setState({
        sessionToken: res.sessionToken
      }))
      .catch(err => {
        this.setState({error: err.message});
        console.log(err.statusCode + ' error', err)
      });
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    if (this.state.sessionToken) {
      this.props.auth.redirect({ sessionToken: this.state.sessionToken });
      return null;
    }

    const errorMessage = this.state.error ? 
    <span className="error-message">{this.state.error}</span> : 
    null;

    //const key = "6LfJNvwfAAAAAHXAguVbaOQrcBVnCADSH1QBS0hm"
    let key = this.state.sessionReaptchaKey;
    if (!key) key = process.env.REACT_APP_REAPTCHA; 
    
    return (
      <section>
        <AdSense.Google
          client='ca-pub-2835578352930332'
          slot='7806394673'
          style={{ display: 'block' }}
          format='auto'
          responsive='true'
          layoutKey='-gw-1+2a-9x+5c'
        />
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