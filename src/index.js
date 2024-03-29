
import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';


const root = createRoot(document.getElementById('root')); // Use createRoot to create a root instance

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);