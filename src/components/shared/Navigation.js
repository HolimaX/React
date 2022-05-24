import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

// TODO: Add complete support for Standard and Premium NPM module loading to provide Pro features
// See https://github.com/HolimaX/React/issues/8 ( EDU-1 )
// See https://stackoverflow.com/questions/47444672/how-do-i-access-a-modules-method-in-react-from-another-module
export function componentIdentityDescriptionAH(REACT_APP_COMPONENT_VERSION, REACT_APP_COMPONENT_NAME) {
  const VERSION = REACT_APP_COMPONENT_VERSION
  const COMPONENT = REACT_APP_COMPONENT_NAME
  return "<div>"+VERSION+"</div>"+"<div>"+COMPONENT+"</div><div><p>This functionality is not yet supported!</p></div>"
}

export default withAuth(class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  render() {
    if (this.state.authenticated === null) return null;
    const authNav = this.state.authenticated ?
      <div className="auth-nav">
        <li><a href="javascript:void(0)" onClick={() => this.props.auth.logout()}>Logout</a></li>
        <li><Link to="/profile">Profile</Link></li>
      </div> :
      <div className="auth-nav">
        <li><a href="javascript:void(0)" onClick={() => this.props.auth.login()}>Login</a></li>
        <li><Link to="/register">Register</Link></li>
      </div>;
    return (
      <nav>
        <ul>
          {authNav}
        </ul>
      </nav>
    )
  }
});

// Node.js syntax: export navigation class to allow custom use
//module.exports.createCoreNavigationPage = withAuth(Navigation);