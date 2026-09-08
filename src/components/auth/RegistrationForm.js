import React, { useState, useCallback } from 'react'; 
import { useOktaAuth } from '@okta/okta-react';
import Reaptcha from 'reaptcha';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const RegistrationForm = () => {
  const { oktaAuth } = useOktaAuth();
  const [fields, setFields] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const [sessionToken, setSessionToken] = useState(null);

  const handleChange = useCallback((e) => {
    const { id, value } = e.target;
    setFields(prev => ({ ...prev, [id]: value }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    axios.post('/api/users', fields, {
      headers: { 'Accept': 'application/json' }
    })
    .then(() => {
      const signInFn = oktaAuth?.signInWithCredentials || oktaAuth?.signIn;
      if (signInFn) {
        return signInFn.call(oktaAuth, {
          username: fields.email,
          password: fields.password
        })
        .then(res => setSessionToken(res.sessionToken))
        .catch(err => {
          console.error("Okta sign-in error", err);
          setError("Registration successful, but auto-login failed. Please login manually.");
        });
      }
    })
    .catch(err => {
      const message = err.response?.data?.error || err.response?.data?.message || 
                     "Unable to complete registration. Please check your details and try again.";
      console.error("Registration error", message);
      setError(message);
    });
  };

  const key = process.env.REACT_APP_REAPTCHA_SITE_KEY || process.env.REACT_APP_REAPTCHA;

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
              <h3 className="fw-light my-2">Create Account</h3>
              <p className="text-muted small">Access Personalized Cloud Dashboard (PCD) features!</p>
            </div>

            <div className="card-body px-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <div className="input-group input-group-alternative">
                    <span className="input-group-text"><FontAwesomeIcon icon={faEnvelope} className="text-muted" /></span>
                    <input
                      className="form-control"
                      placeholder="Email Address"
                      type="email"
                      id="email"
                      value={fields.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-6 pe-1">
                    <div className="mb-3">
                      <input className="form-control" placeholder="First Name" type="text" id="firstName" value={fields.firstName} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="col-6 ps-1">
                    <div className="mb-3">
                      <input className="form-control" placeholder="Last Name" type="text" id="lastName" value={fields.lastName} onChange={handleChange} required />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="input-group input-group-alternative">
                    <span className="input-group-text"><FontAwesomeIcon icon={faLock} className="text-muted" /></span>
                    <input className="form-control" placeholder="Password" type="password" id="password" value={fields.password} onChange={handleChange} required />
                  </div>
                </div>

                <div className="d-flex justify-content-center mb-4">
                  {key ? <Reaptcha sitekey={key} /> : null}
                </div>

                <div className="text-center">
                  <button type="submit" id="submit" className="btn btn-warning w-100 shadow-sm py-2 fw-bold text-uppercase">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
