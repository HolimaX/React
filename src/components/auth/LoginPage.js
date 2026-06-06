import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import { withOktaAuth } from '@okta/okta-react';

export default withOktaAuth(class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = this.checkAuthentication.bind(this);
  }

  async checkAuthentication() {
    const authenticated = this.props.authState && this.props.authState.isAuthenticated;
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }
  componentDidMount() {
    this.checkAuthentication();
  }
  componentDidUpdate() {
    this.checkAuthentication();
  }

  render() {
    // Redirect or show message if Okta instance is missing
    if (!this.props.oktaAuth) {
      return <div className="p-5"><h1>Login Unavailable</h1><p>Authentication service is not configured in this environment.</p></div>;
    }

    if (this.state.authenticated === null) return null;
    return this.state.authenticated ?
      <Redirect to={{ pathname: '/profile' }} /> :
      <LoginForm baseUrl={this.props.baseUrl} />;
  }
});