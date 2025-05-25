// src/data/tests.js

export const tests = [
    {
        id: 'phq9',
        name: 'Patient Health Questionnaire (PHQ-9)',
        shortName: 'PHQ-9',
        description: 'The PHQ-9 is a 9-item self-report measure used to screen for and assess the sevrity of depression over the past two weeks. It is widely used in clinical practice and research.',
        instructions: 'Over the last 2 weeks, how often have you been bothered by any of the following problems?',
        questions: [
            {
                id: 'q1',
                text: 'Little interest or pleasure in doing things?',
                options: [
                    { label: 'Not at all', value: 0 },
                    { label: 'Serveral days', value: 1 },
                    { label: 'More than half the days', value: 2 },
                    { label: 'Nearly every day', value: 3 },
                ],
            },
            {
                id: 'q2',
                text: 'Feeling down, depressed, or hopeless?',
                options: [
                    { label: 'Not at all', value: 0 },
                    { label: 'Serveral days', value: 1 },
                    { label: 'More than half the days', value: 2 },
                    { label: 'Nearly every day', value: 3 },
                ],
            },
            {
                id: 'q3',
                text: 'Trouble falling or staying asleep, or sleeping too much?',
                options: [
                    { label: 'Not at all', value: 0 },
                    { label: 'Serveral days', value: 1 },
                    { label: 'More than half the days', value: 2 },
                    { label: 'Nearly every day', value: 3 },
                ],
            },
            {
                id: 'q4',
                text: 'Feeling tired or having little energy?',
                options: [
                    { label: 'Not at all', value: 0 },
                    { label: 'Serveral days', value: 1 },
                    { label: 'More than half the days', value: 2 },
                    { label: 'Nearly every day', value: 3 },
                ],
            },
            {
                id: 'q5',
                text: 'Poor appetite or overeating?',
                options: [
                    { label: 'Not at all', value: 0 },
                    { label: 'Serveral days', value: 1 },
                    { label: 'More than half the days', value: 2 },
                    { label: 'Nearly every day', value: 3 },
                ],
            },
            {
                id: 'q6',
                text: 'Feeling bad about yourself - or that you are a failure or have let yourself or your family down?',
                options: [
                    { label: 'Not at all', value: 0 },
                    { label: 'Serveral days', value: 1 },
                    { label: 'More than half the days', value: 2 },
                    { label: 'Nearly every day', value: 3 },
                ],
            },
            {
                id: 'q7',
                text: 'Trouble concentrating on things, such as reading the newspaper or watching television?',
                options: [
                    { label: 'Not at all', value: 0 },
                    { label: 'Serveral days', value: 1 },
                    { label: 'More than half the days', value: 2 },
                    { label: 'Nearly every day', value: 3 },
                ],
            },
            {
                id: 'q8',
                text: 'Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?',
                options: [
                    { label: 'Not at all', value: 0 },
                    { label: 'Serveral days', value: 1 },
                    { label: 'More than half the days', value: 2 },
                    { label: 'Nearly every day', value: 3 },
                ],
            },
            {
                id: 'q9',
                text: 'Thoughts that you would be better off dead, or of hurting yourself?',
                options: [
                    { label: 'Not at all', value: 0 },
                    { label: 'Serveral days', value: 1 },
                    { label: 'More than half the days', value: 2 },
                    { label: 'Nearly every day', value: 3 },
                ],
            },
        ],
        // Function to calculate the score for this specific test
        scoreCalculator: (answers) => {
            let totalScore = 0;
            // Loop through all questions defined for this test and sum their answers
            tests.find(t => t.id === 'phq9').questions.forEach(q => {
                if (answers.hasOwnProperty(q.id)) {
                    totalScore += answers[q.id];
                }
            });
            return totalScore;
        },
        // Interpretation ranges for the PHQ-9
        scoring: [
            { range: [0, 4], interpretation: 'Minimal depression (no treatment indicated).' },
            { range: [5, 9], interpretation: 'Mild depression (watchful waiting; repeated PHQ-9; provide psychoeducation; consider "low intensity" psychosocial interventions).' },
            { range: [10, 14], interpretation: 'Moderate depression (consider referral to mental health specialist; individual psychotherapy; pharmacotherapy).' },
            { range: [15, 19], interpretation: 'Severe depression (active treatment with pharmacotherapy and/or psychotherapy).' },
            { range: [20, 27], interpretation: 'Extremely severe depression (immediate initiation of pharmacotherapy and/or psychotherapy; consider psychiatric consultation).' },
        ],
    },
    // You can add more tests here following the same structure.
    // Example for GAD-7 (Generalized Anxiety Disorder 7-item scale):
    {
        id: 'gad7',
        name: 'Generalized Anxiety Disorder 7-item Scale',
        shortName: 'GAD-7',
        description: 'The GAD-7 is a 7-item self-report measure used to screen for and assess the severity of generalized anxiety disorder (GAD) over the past two weeks.',
        instructions: 'Over the last 2 weeks, how often have you been bothered by any of the following problems?',
        questions: [
            {
                id: 'q1',
                text: 'Feeling nervous, anxious, or on edge?',
                options: [
                    { label: 'Not at all', value: 0 },
                    { label: 'Serveral days', value: 1 },
                    { label: 'More than half the days', value: 2 },
                    { label: 'Nearly every day', value: 3 },
                ],
            },
            {
                id: 'q2',
                text: 'Not being able to stop or control worrying?',
                options: [
                    { label: 'Not at all', value: 0 },
                    { label: 'Serveral days', value: 1 },
                    { label: 'More than half the days', value: 2 },
                    { label: 'Nearly every day', value: 3 },
                ],
            },
            {
                id: 'q3',
                text: 'Worrying too much about different things?',
                options: [
                    { label: 'Not at all', value: 0 },
                    { label: 'Serveral days', value: 1 },
                    { label: 'More than half the days', value: 2 },
                    { label: 'Nearly every day', value: 3 },
                ],
            },
            {
                id: 'q4',
                text: 'Trouble relaxing?',
                options: [
                    { label: 'Not at all', value: 0 },
                    { label: 'Serveral days', value: 1 },
                    { label: 'More than half the days', value: 2 },
                    { label: 'Nearly every day', value: 3 },
                ],
            },
            {
                id: 'q5',
                text: 'Being so restless that it is hard to sit still?',
                options: [
                    { label: 'Not at all', value: 0 },
                    { label: 'Serveral days', value: 1 },
                    { label: 'More than half the days', value: 2 },
                    { label: 'Nearly every day', value: 3 },
                ],
            },
            {
                id: 'q6',
                text: 'Becoming easily annoyed or irritable?',
                options: [
                    { label: 'Not at all', value: 0 },
                    { label: 'Serveral days', value: 1 },
                    { label: 'More than half the days', value: 2 },
                    { label: 'Nearly every day', value: 3 },
                ],
            },
            {
                id: 'q7',
                text: 'Feeling afraid as if something awful might happen?',
                options: [
                    { label: 'Not at all', value: 0 },
                    { label: 'Serveral days', value: 1 },
                    { label: 'More than half the days', value: 2 },
                    { label: 'Nearly every day', value: 3 },
                ],
            },
        ],
        scoreCalculator: (answers) => {
            let totalScore = 0;
            tests.find(t => t.id === 'gad7').questions.forEach(q => {
                if (answers.hasOwnProperty(q.id)) {
                totalScore += answers[q.id];
                }
            });
            return totalScore;
        },
        scoring: [
            { range: [0, 4], interpretation: 'Minimal anxiety' },
            { range: [5, 9], interpretation: 'Mild anxiety' },
            { range: [10, 14], interpretation: 'Moderate anxiety' },
            { range: [15, 21], interpretation: 'Severe anxiety' },
        ],
    },
];
