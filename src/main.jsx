// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssVarsProvider } from '@mui/joy/styles';
import { GlobalStyles } from '@mui/system';
import App from './App';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssVarsProvider theme={theme} defaultMode="dark">
      <GlobalStyles styles={{
        body: {
          margin: 0,
          padding: 0,
          backgroundColor: 'var(--joy-palette-background-body)',
          fontFamily: 'var(--joy-fontFamily-body)',
        },
        // Optional: Reset browser default styles
        'html, body #root': {
          height: '100%',
        },
        '#root': {
          display: 'flex',
          flexDirection: 'column',
        }
      }} />
      <App />
    </CssVarsProvider>
  </React.StrictMode>
);