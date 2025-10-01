import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HelmetProvider } from "react-helmet-async";

// Find the root div from public/index.html
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

// Render the app
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
