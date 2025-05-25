// src/pages/ResultsPage.jsx
import * as React from 'react';
import { useParams, useLocation, Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Button, Sheet, Alert, Divider } from '@mui/joy';
import { tests } from '../data/tests.js';  // Import tests data

function ResultsPage() {
    const { testId } = useParams();
    const location = useLocation();
    const { answers } = location.state || {};  // Get answers from navigation state
    
    const test = tests.find(t => t.id === testId);

    // Calculate score based on the test's scoreCalculator function
    const totalScore = test && answers ? test.scoreCalculator(answers) : null;

    // Determine interpretation
    const interpretation = test && totalScore != null
        ? test.scoring.find(s => totalScore >= s.range[0] && totalScore <= s.range[1])?.interpretation
        : null;
    
    if (!test || !answers || totalScore === null) {
        return (
            <Alert color="warning" sx={{ maxWidth: '600px', mx: 'auto', mt: 4 }}>
                <Typography level="h4">Results Not Found</Typography>
                <Typography>It seems you navigated here without completing a test. Please take a test first.</Typography>
                <Button component={RouterLink} to="/tests" variant="solid" sx={{ mt: 2 }}>Go to Tests</Button>
            </Alert>
        );
    }

    return (
        <Box sx={{ maxWidth: '800px', mx: 'auto', p: 2 }}>
            <Typography level="h2" component="h1" sx={{ mb: 4, textAlign: 'center', color: 'var(--joy-palette-primary-50)' }}>
                {test.name} Results
            </Typography>

            <Sheet
                variant="outlined"
                sx={{
                    borderRadius: 'lg',
                    p: 3,
                    backgroundColor: 'var(--joy-palette-background-surface)',
                    border: '1px solid var(--joy-palette-divider)',
                    textAlign: 'center',
                }}
            >
                <Typography level="h3" sx={{ mb: 2, color: 'var(--joy-palette-primary-100)' }}>
                    Your Score: <Typography component="span" sx={{ color: 'var(--joy-palette-primary-50)', fontWeight: 'bold', fontSize: '2em' }}>{totalScore}</Typography>
                </Typography>

                {interpretation && (
                    <Typography level="body-lg" sx={{ mb: 3, color: 'var(--joy-palette-text-primary)' }}>
                        Interpretation: <Typography component="span" sx={{ color: 'var(--joy-palette-primary-200)', fontWeight: 'bold' }}>{interpretation}</Typography>
                    </Typography>
                )}

                <Divider sx={{ my: 3, backgroundColor: 'var(--joy-palette-divider)' }} />

                <Typography level="body-sm" sx={{ color: 'var(--joy-palette-text-secondary)', fontStyle: 'italic', mb: 3 }}>
                    Disclaimer: This app is a self-evaluation tool and does not provide a diagnosis. Please consult a qualified mental health professional for diagnosis and treatment.
                </Typography>

                <Button
                    component={RouterLink}
                    to="/tests"
                    variant="solid"
                    sx={{
                        mt: 2,
                        backgroundColor: 'var(--joy-palette-primary-50)',
                        color: 'var(--joy-palette-neutral-900)',
                        '&:hover': {
                            backgroundColor: 'var(--joy-palette-primary-100)',
                        }
                    }}
                >
                    Take Another Test
                </Button>
            </Sheet>
        </Box>
    );
}

export default ResultsPage;