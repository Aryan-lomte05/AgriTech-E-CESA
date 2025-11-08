import React from 'react';
import ReactDOM from 'react-dom/client';  // Note the '/client' import
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext'; // Ensure the path is correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
