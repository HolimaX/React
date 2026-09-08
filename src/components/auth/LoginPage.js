import React from 'react';
import { Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import { useOktaAuth } from '@okta/okta-react';

const LoginPage = ({ baseUrl }) => {
  const { authState, oktaAuth } = useOktaAuth();

  if (!oktaAuth) {
    return (
      <div className="p-5 text-center">
        <h1>Login Unavailable</h1>
        <p>Authentication service is not configured in this environment.</p>
      </div>
    );
  }

  if (authState?.isAuthenticated) {
    return <Navigate to="/profile" replace />;
  }

  return <LoginForm baseUrl={baseUrl} />;
};

export default LoginPage;