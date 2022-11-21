import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain="dev-q73pdwrt1iut5600.us.auth0.com" clientId='hI0ZYSoIply6Rg4bX5IZof39crJRCFUA' redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);