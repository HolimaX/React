import React from 'react'; 
import OktaAuth from '@okta/okta-auth-js';
import { withOktaAuth } from '@okta/okta-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactGA from 'react-ga4';

import Reaptcha from 'reaptcha';

import AdSense from 'react-adsense';

import config from '../../app.config';

export default withOktaAuth(class RegistrationForm extends React.Component{
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
    this.checkAuthentication = this.checkAuthentication.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReaptcha = this.handleReaptcha.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.onVerify = this.onVerify.bind(this);
  }

  async checkAuthentication() {
    const sessionToken = this.props.authState && this.props.authState.idToken;
    if (sessionToken) {
      this.setState({ sessionToken });
    }
  }

  componentDidMount() {
    this.checkAuthentication();
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
    
    if (process.env.REACT_APP_GA_MEASUREMENT_ID) {
      ReactGA.event({
        category: "auth",
        action: "registration_attempt",
      });
    }

    fetch('/api/users', {
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    })
    .then(res => {
      if (!res.ok) throw new Error('Registration API unreachable');
      return res.json();
    })
    .then(() => {
      return this.props.oktaAuth.signIn({
        username: this.state.email,
        password: this.state.password
      });
    })
    .then(res => this.setState({
      sessionToken: res.sessionToken
    }))
    .catch(err => console.error('Registration/Login Error:', err));
  }

  onVerify(token) {
    console.log('Reaptcha verified:', token);
  }

  handleReaptcha(e) {
    fetch('/reaptcha', {
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type: 'reaptchav2' })
    })
    .then(res => {
      if (!res.ok) throw new Error('Backend unreachable');
      return res.json();
    })
    .then(data => {
      if (data && data.siteKey) {
        this.setState({ sessionReaptchaKey: data.siteKey });
      }
    })
    .catch(err => console.warn('Reaptcha metadata lookup skipped (Local Dev Mode):', err.message));
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
      this.props.oktaAuth.signInWithRedirect({ sessionToken: this.state.sessionToken });
      return null;
    }

    let key = this.state.sessionReaptchaKey;
    if (!key) key = process.env.REACT_APP_REAPTCHA;
    const enableAds = process.env.REACT_APP_ENABLE_ADS === 'true';

    return(
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-5">
            <div className="card shadow-sm border-0 rounded-lg">
              <div className="card-header text-center bg-white border-0 pt-4">
                <div className="display-4 text-warning mb-2">
                  <FontAwesomeIcon icon="beer" />
                </div>
                <h3 className="font-weight-light my-2">Create Account</h3>
                <p className="text-muted small">Join the Cloud Dashboard</p>
              </div>
              
              <div className="card-body px-4">
                {enableAds && (
                  <AdSense.Google
                    client='ca-pub-2835578352930332'
                    slot='7806394673'
                    style={{ display: 'block', marginBottom: '20px' }}
                    format='auto'
                    responsive='true'
                  />
                )}

                <form onSubmit={this.handleSubmit}>
                  <div className="form-group mb-3">
                    <div className="input-group input-group-alternative">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><FontAwesomeIcon icon="envelope" className="text-muted" /></span>
                      </div>
                      <input 
                        className="form-control" 
                        placeholder="Email Address" 
                        type="email" 
                        id="email" 
                        value={this.state.email} 
                        onChange={this.handleEmailChange}
                        required 
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6 pr-1">
                      <div className="form-group mb-3">
                        <input 
                          className="form-control" 
                          placeholder="First Name" 
                          type="text" 
                          id="firstName" 
                          value={this.state.firstName} 
                          onChange={this.handleFirstNameChange} 
                        />
                      </div>
                    </div>
                    <div className="col-6 pl-1">
                      <div className="form-group mb-3">
                        <input 
                          className="form-control" 
                          placeholder="Last Name" 
                          type="text" 
                          id="lastName" 
                          value={this.state.lastName} 
                          onChange={this.handleLastNameChange} 
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group mb-4">
                    <div className="input-group input-group-alternative">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><FontAwesomeIcon icon="lock" className="text-muted" /></span>
                      </div>
                      <input 
                        className="form-control" 
                        placeholder="Password" 
                        type="password" 
                        id="password" 
                        value={this.state.password} 
                        onChange={this.handlePasswordChange}
                        required 
                      />
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mb-4">
                    <Reaptcha sitekey={key} onVerify={this.onVerify} />
                  </div>

                  <div className="text-center">
                    <button type="submit" id="submit" className="btn btn-warning btn-block shadow-sm py-2 font-weight-bold text-uppercase">
                      Register
                    </button>
                  </div>
                </form>
              </div>
              
              <div className="card-footer text-center bg-light border-0 py-3">
                <small className="text-muted">Part of the HolimaX Product Ecosystem | 2026</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
