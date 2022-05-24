import React from 'react';
import { withAuth } from '@okta/okta-react';

// TODO: Add complete support for Standard and Premium NPM module loading to provide Pro features
// See https://github.com/HolimaX/React/issues/8 ( EDU-1 )
// See https://stackoverflow.com/questions/47444672/how-do-i-access-a-modules-method-in-react-from-another-module
export function componentIdentityDescriptionAH(REACT_APP_COMPONENT_VERSION, REACT_APP_COMPONENT_NAME) {
  const VERSION = REACT_APP_COMPONENT_VERSION
  const COMPONENT = REACT_APP_COMPONENT_NAME
  return "<div>"+VERSION+"</div>"+"<div>"+COMPONENT+"</div><div><p>This functionality is not yet supported!</p></div>"
}

export default withAuth(class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
    this.getCurrentUser = this.getCurrentUser.bind(this);
  }

  async getCurrentUser() {
    this.props.auth.getUser()
      .then(user => this.setState({user}));
  }

  componentDidMount() {
    this.getCurrentUser();
  }

  render() {
    if (!this.state.user) return null;
    return (
      <section className="user-profile">
        <h1>User Profile</h1>
        <div>
          <label>Name:</label>
          <span>{this.state.user.name}</span>
          <p>Supported / Enabled Tools:</p>
          <li>
            <ul>HealthDash - Health dashboard at <a href='https://www.myclouddashboard.healthdash.lv?user={this.state.user.name}'>{this.state.user.name}</a></ul>
            <ul>SystemDash - Platform dashboard (provisioning, visualization) at <a href='https://www.myclouddashboard.healthdash.lv?monitor={this.state.user.name}'>{this.state.user.name}</a></ul>
          </li>
        </div>
      </section>
    )
  }
});