// src/components/Header.jsx
import * as React from 'react';
import { Typography, Button, Box, Sheet, useTheme } from '@mui/joy';
import { Link } from 'react-router-dom';

function Header() {
    const theme = useTheme();

    return (
        <Sheet
            component="header"
            sx={{
                backgroundColor: 'var(--joy-palette-background-surface)',
                borderBottom: '1px solid var(--joy-palette-divider)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: { xs: 2, sm: 4 },
                py: 1.5,
                minHeight: '64px',
            }}
        >
            <Typography level="h1" component="div" sx={{ fontSize: '1.5rem', color: 'var(--joy-palette-primary-50)' }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Psyght
                </Link>
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Button component={Link} to="/tests" variant="text" sx={{ color: 'var(--joy-palette-text-primary)', '&:hover': { backgroundColor: 'var(--joy-palette-primary-900)' } }}>
                    Tests
                </Button>
                {/* Example: Add Login/Signup buttons */}
                <Button
                    variant="solid"
                    sx={{
                        backgroundColor: 'var(--joy-palette-primary-500)',  // Main purple from palette
                        '&:hover': {
                            backgroundColor: theme.palette.primary[600],    // Darker purple on hover
                        }
                    }}
                >
                    Log In
                </Button>
                <Button
                    variant="outlined"
                    sx={{
                        borderColor: 'var(--joy-palette-primary-50)',   // Bright green/aqua border
                        color: 'var(--joy-palette-primary-50)',         // Bright green/aqua text
                        '&:hover': {
                            backgroundColor: 'var(--joy-palette-primary-900)',  // Dark background on hover
                        }
                    }}
                >
                    Sign Up
                </Button>
            </Box>
        </Sheet>
    );
}

export default Header;