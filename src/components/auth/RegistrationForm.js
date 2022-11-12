import React from 'react'; 
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';

import Reaptcha from 'reaptcha';

import AdSense from 'react-adsense';

import config from '../../app.config';

export default withAuth(class RegistrationForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      sessionToken: null,
      sessionReaptchaKey: ''
    };
    this.oktaAuth = new OktaAuth({ url: config.url });
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReaptcha = this.handleReaptcha.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);    
  }

  async checkAuthentication() {
    const sessionToken = await this.props.auth.getIdToken();
    if (sessionToken) {
      this.setState({ sessionToken });
    }
  }

  componentDidMount() {
    this.handleReaptcha();
    //.then(res => this.setState({ sessionReaptchaKey: res.sitekey }))
    //.catch(err => console.log(err));
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  handleFirstNameChange(e) {
    this.setState({firstName:e.target.value});
  }

  handleLastNameChange(e) {
    this.setState({ lastName: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch('/api/users', { 
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    }).then(user => {
      this.oktaAuth.signIn({
        username: this.state.email,
        password: this.state.password
      })
      .then(res => this.setState({
        sessionToken: res.sessionToken
      }));
    })
    .catch(err => console.log);
  }

  handleReaptcha(e) {
    //e.preventDefault();
    fetch('/reaptcha', {
      method: 'POST', 
      headers: {
        'Accept': 'application/text',
        'Content-Type': 'application/text',
      },
      body: 'reaptchav2',
      mode: 'cors'
    }).then(res => {
      this.setState({
        sessionReaptchaKey: res.siteKey
      });
      console.log(res);
    })
    .catch(err => console.log);
  }

  //handleReaptcha = async () => {
  //  const response = await fetch('/reaptcha');
  //  const body = await response.text;

    //if (response.status !== 200) {
    //  throw Error(body.message) 
    //}
  //  console.log(body);
  //  return body;
  //};

  render(){
    if (this.state.sessionToken) {
      this.props.auth.redirect({ sessionToken: this.state.sessionToken });
      return null;
    }

    let key = this.state.sessionReaptchaKey;
    if (!key) key = process.env.REACT_APP_REAPTCHA;

    return(
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
          <div className="form-element">
            <label>Email:</label>
            <input type="email" id="email" value={this.state.email} 
            onChange={this.handleEmailChange}/>
          </div>
          <div className="form-element">
            <label>First Name:</label>
            <input type="text" id="firstName" value={this.state.firstName} 
            onChange={this.handleFirstNameChange} />
          </div>
          <div className="form-element">
            <label>Last Name:</label>
            <input type="text" id="lastName" value={this.state.lastName} 
            onChange={this.handleLastNameChange} />
          </div>
          <div className="form-element">
            <label>Password:</label>
            <input type="password" id="password" value={this.state.password} 
            onChange={this.handlePasswordChange} />
          </div>
          <input type="submit" id="submit" value="Register"/>
        </form>
      </section>
    );
  }

});
