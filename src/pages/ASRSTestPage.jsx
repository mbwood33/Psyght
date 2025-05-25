// src/pages/ASRSTestPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Typography,
    Button,
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    Sheet,
    List,
    ListItem,
} from '@mui/joy';
import asrsQuestions, { asrsPartACutoffs } from '../data/asrsQuestions';    // Import questions and cutoffs

function ASRSTestPage() {
    const navigate = useNavigate();
    const [answers, setAnswers] = useState({}); // Stores {questionId: selectedValue}
    const [submitted, setSubmitted] = useState(false);  // To show results after submission

    const handleAnswerChange = (questionId, value) => {
        setAnswers((prev) => ({
            ...prev,
            [questionId]: value,
        }));
    };

    const calculateResults = () => {
        let partAPositiveFlags = 0;
        let totalScore = 0;

        asrsQuestions.forEach((q) => {
            const selectedValue = answers[q.id];
            if (selectedValue !== undefined) {
                const score = q.scoring[selectedValue];
                totalScore += score;

                // Check for Part A positive flags
                if (q.part === 'A') {
                    const cutoff = asrsPartACutoffs[q.id];
                    if (cutoff) {
                        // For questions 1-4 (score >= 3), for 5-6 (score >= 2)
                        if (score >= cutoff.minScore) {
                            partAPositiveFlags++;
                        }
                    }
                }
            }
        });

        return { partAPositiveFlags, totalScore };
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Basic validation: Check if all questions are answered
        if (Object.keys(answers).length !== asrsQuestions.length) {
            alert('Please answer all questions before submitting.');
            return;
        }
        setSubmitted(true);
        // In a real app, you'd save results to backend and navigate to a dedicated results page
        // For now, we'll display them directly on this page.
    };

    const { partAPositiveFlags, totalScore } = submitted ? calculateResults() : { partAPositiveFlags: 0, totalScore: 0};
    const partAScreenPositive = partAPositiveFlags >= 4;    // ASRS screening criteria

    return (
        <Box
            sx={{
                maxWidth: '800px',
                mx: 'auto',
                p: 4,
            }}
        >
            <Typography level="h2" sx={{ mb: 2 }}>
                ASRS-v1.1 Self-Report Scale
            </Typography>
        </Box>
    )
}