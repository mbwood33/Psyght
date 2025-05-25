// src/pages/HomePage.jsx
import * as React from 'react';
import { Box, Typography,  Button } from '@mui/joy';
import { Link } from 'react-router-dom';

import PsyghtLogo from '/psyght_logo_cropped.png';

function HomePage() {
    return (
        <Box
            sx={{
                textAlign: 'center',
                py: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 4,
                px: 2,
                maxWidth: '800px',
                mx: 'auto',
            }}
        >
            <img
                src={PsyghtLogo}
                alt="Psyght Logo"
                style={{ height: '400px', marginBottom: '24px' }}
            />
            <Typography level="h1" sx={{ color: 'var(--joy-palette-primary-50)' }}>
                Welcome to Psyght
            </Typography>
            <Typography level="body-lg" sx={{ color: 'var(--joy-palette-text-primary)' }}>
                Your personal psychological self-evaluation tool. Explore a range of psychometric tests to gain insights into your mental well-being.
            </Typography>
            <Button
                component={Link}
                to="/tests"
                variant="solid"
                size="lg"
                sx={{ 
                    mt: 3,
                    backgroundColor: 'var(--joy-palette-primary-50)',
                    color: 'var(--joy-palette-neutral-900)',
                    '&:hover': {
                        backgroundColor: 'var(--joy-palette-primary-100)',
                    }
                }}
            >
                Explore Tests
            </Button>
            <Typography level="body-sm" sx={{ color: 'var(--joy-palette-text-secondary)', mt: 4 }}>
                Disclaimer: Psyght is intended for self-evaluation purposes only and does not provide medical diagnoses. Always consult a qualified mental health professsional for diagnosis and treatment.
            </Typography>
        </Box>
    );
}

export default HomePage;