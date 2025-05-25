// src/pages/ResultsPage.jsx
import * as React from 'react';
import { useParams, useLocation, Link as RouterLink, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Sheet, Alert, Divider, CircularProgress } from '@mui/joy';
import { tests } from '../data/tests.js';  // Import tests data

function ResultsPage() {
    const { testId } = useParams();
    const location = useLocation();
    const navigate = useNavigate(); // Initialize useNavigate
    const { answers } = location.state || {};  // Get answers from navigation state
    
    const [calculatedResults, setCalculatedResults] = React.useState(null);
    const [loading, setLoading] = React.useState(true); // Add loading state
    const [error, setError] = React.useState('');   // Add error state
    
    const test = tests.find(t => t.id === testId);

    React.useEffect(() => {
        setLoading(true);
        setError('');

        if (!test) {
            setError('Test not found');
            setLoading(false);
            return;
        }

        if (!answers || Object.keys(answers).length === 0) {
            setError('It seems you navigated here without completing a test. Please take a test first.');
            setLoading(false);
            return;
        }

        // Calculate score based on the test's scoreCalculator function
        const results = test.scoreCalculator(answers);
        setCalculatedResults(results);
        setLoading(false);
    }, [testId, answers, test]);    // Depend on testId, answers, and test for re-evaluation

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 64px)' }}>
                <CircularProgress />
                <Typography sx={{ ml: 2 }}>Calculating results...</Typography>
            </Box>
        );
    }

    if (error) {
        return (
            <Alert color="warning" sx={{ maxWidth: '600px', mx: 'auto', mt: 4 }}>
                <Typography level="h4">Results Not Found</Typography>
                <Typography>{error}</Typography>
                <Button component={RouterLink} to="/tests" variant="solid" sx={{ mt: 2 }}>Go to Tests</Button>
            </Alert>
        );
    }

    if (!calculatedResults) {
        return (
            <Box sx={{ maxWidth: '600px', mx: 'auto', mt: 4, textAlign: 'center' }}>
                <Typography level="h3">No Results to Display</Typography>
                <Button component={RouterLink} to={`/tests/${testId}`} variant="solid" sx={{ mt: 2 }}>Start Test</Button>
            </Box>
        );
    }

    // --- Dynamic Results Display Based on Test ID ---
    const renderTestSpecificResults = () => {
        switch (testId) {
            case 'phq9':
            case 'gad7':
                const totalScore = calculatedResults.totalScore;
                const interpretationObj = test.scoring.find(s => totalScore >= s.range[0] && totalScore <= s.range[1]);
                const interpretationText = interpretationObj ? interpretationObj.interpretation : 'N/A';

                return (
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

                        {interpretationText && (
                            <Typography level="body-lg" sx={{ mb: 3, color: 'var(--joy-palette-text-primary)' }}>
                                Interpretation: <Typography component="span" sx={{ color: 'var(--joy-palette-primary-200)', fontWeight: 'bold' }}>{interpretationText}</Typography>
                            </Typography>
                        )}
                    </Sheet>     
                );
            
            case 'asrs-v1.1':
                const { partAPositiveFlags, partAScreenPositive, totalScore: asrsTotalScore } = calculatedResults;
                return (
                    <Sheet
                        variant="solid"
                        color={partAScreenPositive ? 'danger' : 'success'}  // Red if positive screen, green otherwise
                        sx={{ mt: 4, p: 3, borderRadius: 'md', textAlign: 'center' }}
                    >
                        <Typography level="h3" sx={{ mb: 1, color: 'white' }}>
                            {test.name} Screening Outcome
                        </Typography>
                        <Typography level="body-lg" sx={{ mb: 2, color: 'white' }}>
                            {partAScreenPositive ? (
                                <>
                                    Your Part A score of **{partAPositiveFlags} positive responses** suggests symptoms highly consistent with ADHD.
                                    <br />
                                    **This is a screening tool, not a diagnosis.** Please consult a healthcare professional for a formal evaluation.
                                </>
                            ) : (
                                <>
                                    Your Part A score of **{partAPositiveFlags} positive responses** suggests symptoms are not highly consistent with ADHD on this screening tool.
                                    <br />
                                    **This is a screening tool, not a diagnosis.** If you have concerns, please consult a healthcare professional.
                                </>
                            )}
                        </Typography>
                        <Typography level="body-sm" sx={{ color: 'white', opacity: 0.8 }}>
                            Total Score (all questions): {asrsTotalScore}
                        </Typography>
                    </Sheet>
                );
            
            default:
                return (
                    <Alert color="warning" sx={{ mt: 4, maxWidth: '600px', mx: 'auto' }}>
                        <Typography level="h4">Results Not Available</Typography>
                        <Typography>Interpretation for this test is not yet implemented.</Typography>
                    </Alert>
                );
        }
    };
    
    return (
        <Box sx={{ maxWidth: '800px', mx: 'auto', p: 2 }}>
            <Typography level="h2" component="h1" sx={{ mb: 4, textAlign: 'center', color: 'var(--joy-palette-primary-50)' }}>
                {test ? test.name : 'Test'} Results
            </Typography>

            {renderTestSpecificResults()}

            <Divider sx={{ my: 3, backgroundColor: 'var(--joy-palette-divider)' }} />

            <Typography level="body-sm" sx={{ color: 'var(--joy-palette-text-secondary)', fontStyle: 'italic', mb: 3 }}>
                Disclaimer: This app is a self-evaluation tool and does not provide a diagnosis. Please consult a qualified mental health professional for diagnosis and treatment.
            </Typography>

            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
                <Button
                    component={RouterLink}
                    to="/tests"
                    variant="solid"
                    sx={{
                        mt: 2,
                        backgroundColor: 'var(--joy-palette-primary-50)',
                        color: 'var(--joy-palette-primary-900)',
                        '&:hover': {
                            backgroundColor: 'var(--joy-palette-primary-100)',
                        }
                    }}
                >
                    Take Another Test
                </Button>
                <Button
                    onClick={() => navigate(`tests/${testId}`)}
                    variant="outlined"
                    color="neutral"
                    sx={{ mt: 2 }}
                >
                    Re-take This Test
                </Button>
                <Button
                    component={RouterLink}
                    to="/"
                    variant="outlined"
                    color="neutral"
                    sx={{ mt: 2 }}
                >
                    Back to Home
                </Button>
            </Box>
        </Box>
    );
}

export default ResultsPage;