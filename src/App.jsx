// src/App.jsx
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/joy';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import TestListPage from './pages/TestListPage';
import TestPage from './pages/TestPage';
import ResultsPage from './pages/ResultsPage';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: 'var(--joy-palette-background-body)',
        }}
      >
        <Header />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tests" element={<TestListPage />} />
            <Route path="/tests/:testId" element={<TestPage />} />
            <Route path="/results/:testId" element={<ResultsPage />} />
            {/* Add more routes as you develop e.g., /login, /signup, /profile) */}
          </Routes>
        </Box>
        {/* You can add a Footer component here if neededd */}
      </Box>
    </Router>
  );
}

export default App;