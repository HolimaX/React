import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';

export function componentIdentityDescriptionAH(REACT_APP_COMPONENT_VERSION, REACT_APP_COMPONENT_NAME) {
  return `<div>${REACT_APP_COMPONENT_VERSION}</div><div>${REACT_APP_COMPONENT_NAME}</div><div><p>This functionality is not yet supported!</p></div>`;
}

const ProfilePage = ({ healthCards = [] }) => {
  const { oktaAuth, authState } = useOktaAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (authState?.isAuthenticated && oktaAuth?.getUser) {
      oktaAuth.getUser().then(setUser).catch(err => console.error("Error fetching user profile:", err));
    }
  }, [authState, oktaAuth]);

  if (!user) return null;

  // Strict check: only users with explicit PRO or PREMIUM tier assigned via Android app onboarding are entitled
  const isPro = user?.tier === 'PRO' || user?.tier === 'PREMIUM';

  return (
    <div className="profile-wrapper container py-5 mt-5">
      <section className="pro-appreciation">
        {isPro && (
          <div className="alert alert-warning shadow-sm mb-4">
            <h4 className="fw-bold">Welcome, Valued Customer!</h4>
            <p className="mb-0">Your account is enabled for Personalized Cloud Dashboard (PCD) integration features.</p>
          </div>
        )}
      </section>

      <div className="card shadow-sm border-0 rounded-3 mb-4">
        <div className="card-header bg-white border-bottom-0 pt-4">
          <h3 className="fw-light mb-1">User Profile</h3>
          <p className="text-muted small">Personalized account overview and configuration settings</p>
        </div>
        <div className="card-body px-4">
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <strong>Name:</strong>
              <span>{user.name || 'N/A'}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <strong>Email / Account:</strong>
              <span>{user.email || 'N/A'}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <strong>Locale:</strong>
              <span>{user.locale || 'en_US'}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <strong>Access Tier:</strong>
              <span className="badge bg-warning text-dark">{user.tier || (isPro ? 'PRO / PREMIUM' : 'STANDARD')}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <strong>Sync Status:</strong>
              <span className="text-success fw-bold">Active</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="card shadow-sm border-0 rounded-3 mb-4">
        <div className="card-header bg-white border-bottom-0 pt-4">
          <h4 className="fw-light mb-1">Your Cloud Dashboard Cards</h4>
          <p className="text-muted small">Processed telemetry cards and synchronized targets</p>
        </div>
        <div className="card-body px-4">
          {healthCards && healthCards.length > 0 ? (
            healthCards.map(card => (
              <div className="border rounded p-3 mb-2 shadow-sm" key={card.id}>
                <div className="d-flex justify-content-between align-items-center">
                  <strong>{card.title}</strong>
                  <span className="badge bg-info text-dark">
                    Source: {card.meta?.dataSource || 'Sync Target'}
                  </span>
                </div>
                <p className="mb-1 mt-2">{card.summary}</p>
              </div>
            ))
          ) : (
            <p className="text-muted font-italic mb-0">
              No custom telemetry cards configured yet. Synchronize your mobile app or external integrations to view cards here.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;