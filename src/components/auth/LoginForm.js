import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const LoginForm = () => {
  const { oktaAuth } = useOktaAuth();
  const [sessionToken, setSessionToken] = useState(null);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (oktaAuth?.signInWithCredentials) {
      oktaAuth.signInWithCredentials({
        username,
        password
      })
        .then(res => setSessionToken(res.sessionToken))
        .catch(err => {
          setError(err.message || 'Login failed. Please verify your credentials.');
          console.error('Okta Sign-In Error:', err);
        });
    } else if (oktaAuth?.signIn) {
      oktaAuth.signIn({
        username,
        password
      })
        .then(res => setSessionToken(res.sessionToken))
        .catch(err => {
          setError(err.message || 'Login failed. Please verify your credentials.');
          console.error('Okta Sign-In Error:', err);
        });
    }
  };

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  if (sessionToken) {
    if (oktaAuth?.signInWithRedirect) {
      oktaAuth.signInWithRedirect({ sessionToken });
    }
    return null;
  }

  return (
    <div className="bg-light py-5 min-vh-100 mt-5">
      {error && (
        <div className="alert alert-warning alert-dismissible fade show shadow-sm" role="alert">
          <strong>Notice:</strong> {error}
          <button type="button" className="btn-close" onClick={() => setError(null)} aria-label="Close"></button>
        </div>
      )}
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-5">
          <div className="card shadow-sm border-0 rounded-3">
            <div className="card-header bg-white border-bottom-0 pt-4 text-center">
              <div className="text-warning mb-2 display-4">
                <FontAwesomeIcon icon={faBeer} />
              </div>
              <h3 className="fw-light my-2">Account Login</h3>
              <p className="text-muted small">Access Personalized Cloud Dashboard (PCD) features!</p>
            </div>

            <div className="card-body px-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label small text-muted">Username:</label>
                  <div className="input-group input-group-alternative">
                    <span className="input-group-text"><FontAwesomeIcon icon={faEnvelope} className="text-muted" /></span>
                    <input
                      className="form-control"
                      placeholder="Username or Email"
                      type="text"
                      id="username"
                      value={username}
                      onChange={handleUsernameChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="form-label small text-muted">Password:</label>
                  <div className="input-group input-group-alternative">
                    <span className="input-group-text"><FontAwesomeIcon icon={faLock} className="text-muted" /></span>
                    <input
                      className="form-control"
                      placeholder="Password"
                      type="password"
                      id="password"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                    />
                  </div>
                </div>

                <div className="text-center mb-3">
                  <button type="submit" id="submit" className="btn btn-warning w-100 shadow-sm py-2 fw-bold text-uppercase">
                    Login
                  </button>
                </div>

                <div className="text-center mt-3">
                  <p className="small text-muted mb-0">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-warning fw-bold">Register here</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;