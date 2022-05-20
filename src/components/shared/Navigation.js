import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

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