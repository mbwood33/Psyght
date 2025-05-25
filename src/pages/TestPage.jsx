// src/pages/TestPage.jsx
import * as React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Sheet, RadioGroup, Radio, FormControl, FormLabel, CircularProgress, Alert } from '@mui/joy';
import { tests } from '../data/tests.js'; // Import your tests data

function TestPage() {
    const { testId } = useParams();
    const navigate = useNavigate();
    const test = tests.find((t) => t.id === testId);

    const [answers, setAnswers] = React.useState({});
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(false);    // For future async operations like saving

    React.useEffect(() => {
        // Optionally load saved answers here if using local storage or Firebase
        // For now, it starts fresh
        setAnswers({});
        setError('');
    }, [testId]);

    const handleAnswerChange = (questionId, value) => {
        setAnswers((prev) => ({
            ...prev,
            [questionId]: parseInt(value, 10),  // Ensure value is an integer
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');

        // Check if all questions are answered
        const allAnswered = test.questions.every(q => answers.hasOwnProperty(q.id));
        if (!allAnswered) {
            setError('Please answer all questions before submitting.');
            return;
        }

        setLoading(true);
        // Simulate API call or complex calculation
        setTimeout(() => {
            // In a real app, you'd calculate the score here
            // For now, we'll pass the answers to the results page
            navigate(`/results/${testId}`, { state: { answers } });
            setLoading(false);
        }, 500);    // Simulate network delay
    };

    if (!test) {
        return (
            <Alert color="danger" sx={{ maxWidth: '600px', mx: 'auto', mt: 4 }}>
                <Typography level="h4">Test Not Found</Typography>
                <Typography>The test you are looking for does not exist.</Typography>
                <Button component={Link} to="/tests" variant="solid" sx={{ mt: 2 }}>Back to Tests</Button>
            </Alert>
        );
    }

    return (
        <Box sx={{ maxWidth: '800px', mx: 'auto', p: 2 }}>
            <Typography level="h2" component="h1" sx={{ mb: 2, textAlign: 'center', color: 'var(--joy-palette-primary-50)' }}>
                {test.name}
            </Typography>
            <Typography level="body-lg" sx={{ mb: 3, textAlign: 'center', color: 'var(--joy-palette-text-secondary)' }}>
                {test.instructions}
            </Typography>

            <Sheet
                variant="outlined"
                sx={{
                    borderRadius: 'lg',
                    p: 3,
                    backgroundColor: 'var(--joy-palette-background-surface)',
                    border: '1px solid var(--joy-palette-divider)'
                }}
            >
                <form onSubmit={handleSubmit}>
                    {test.questions.map((question, index) => (
                        <FormControl key={question.id} sx={{ mb: 4 }}>
                            <FormLabel sx={{ mb: 1, fontSize: 'lg', color: 'var(--joy-palette-text-primary)' }}>
                                {index + 1}. {question.text}
                            </FormLabel>
                            <RadioGroup
                                orientation="vertical"
                                name={`question-${question.id}`}
                                value={answers[question.id] !== undefined ? answers[question.id].toString() : ''}
                                onChange={(event) => handleAnswerChange(question.id, event.target.value)}
                            >
                                {question.options.map(option => (
                                    <Radio
                                        key={option.value}
                                        value={option.value.toString()}
                                        label={option.label}
                                        size="lg"
                                        sx={{
                                            '& .MuiRadio-label': {
                                                color: 'var(--joy-palette-text-secondary',  // Option text color
                                            }
                                        }}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    ))}

                    {error && (
                        <Alert color="danger" sx={{ mb: 3 }}>
                            {error}
                        </Alert>
                    )}

                    <Button
                        type="submit"
                        variant="solid"
                        size="lg"
                        disabled={loading}
                        endDecorator={loading && <CircularProgress size="sm" sx={{ color: 'var(--joy-palette-text-primary)' }} />}
                        sx={{
                            width: '100%',
                            backgroundColor: 'var(--joy-palette-primary-50)',
                            color: 'var(--joy-palette-neutral-900)',
                            '&:hover': {
                                backgroundColor: 'var(--joy-palette-primary-100)',
                            }
                        }}
                    >
                        {loading ? 'Submitting...' : 'Submit Test'}
                    </Button>
                </form>
            </Sheet>
        </Box>
    );
}

export default TestPage;