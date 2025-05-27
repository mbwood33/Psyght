// src/data/tests.js
// Test questions and answers for:
// * PHQ-9
// * GAD-7
// * ASRS-v1.1

export const tests = [
    // PHQ-9 (Patient Health Questionnaire):
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
    // GAD-7 (Generalized Anxiety Disorder 7-item scale):
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
    // ASRS-v1.1 (Adult ADHD Self-Report Scale):
    {
        id: 'asrs-v1.1',
        name: 'ASRS-v1.1 (Adult ADHD Self-Report Scale)',
        shortName: 'ASRS-v1.1',
        description: 'This screening tool helps adults screen themselves for symptoms consistent with Attention-Deficit/Hyperactivity Disorder (ADHD).',
        instructions: 'Please rate how often you experience the following symptoms over the past 6 months.',
        questions: [
            // Part A Questions (Questions 1-6) - Crucial for screening
            {
                id: 'asrs-1',
                part: 'A', // Custom property for ASRS scoring
                text: 'How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?',
                options: [
                    { label: 'Never', value: 0 },
                    { label: 'Rarely', value: 1 },
                    { label: 'Sometimes', value: 2 },
                    { label: 'Often', value: 3 },
                    { label: 'Very Often', value: 4 },
                ],
            },
            {
                id: 'asrs-2',
                part: 'A',
                text: 'How often do you have difficulty getting things in order when you have a task that requires organization?',
                options: [
                    { label: 'Never', value: 0 },
                    { label: 'Rarely', value: 1 },
                    { label: 'Sometimes', value: 2 },
                    { label: 'Often', value: 3 },
                    { label: 'Very Often', value: 4 },
                ],
            },
            {
                id: 'asrs-3',
                part: 'A',
                text: 'How often do you have problems remembering appointments or obligations?',
                options: [
                    { label: 'Never', value: 0 },
                    { label: 'Rarely', value: 1 },
                    { label: 'Sometimes', value: 2 },
                    { label: 'Often', value: 3 },
                    { label: 'Very Often', value: 4 },
                ],
            },
            {
                id: 'asrs-4',
                part: 'A',
                text: 'How often do you avoid or put off starting tasks that require a lot of mental effort?',
                options: [
                    { label: 'Never', value: 0 },
                    { label: 'Rarely', value: 1 },
                    { label: 'Sometimes', value: 2 },
                    { label: 'Often', value: 3 },
                    { label: 'Very Often', value: 4 },
                ],
            },
            {
                id: 'asrs-5',
                part: 'A',
                text: 'How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?',
                options: [
                    { label: 'Never', value: 0 },
                    { label: 'Rarely', value: 1 },
                    { label: 'Sometimes', value: 2 },
                    { label: 'Often', value: 3 },
                    { label: 'Very Often', value: 4 },
                ],
            },
            {
                id: 'asrs-6',
                part: 'A',
                text: 'How often do you feel overly active and compelled to do things, like you are driven by a motor?',
                options: [
                    { label: 'Never', value: 0 },
                    { label: 'Rarely', value: 1 },
                    { label: 'Sometimes', value: 2 },
                    { label: 'Often', value: 3 },
                    { label: 'Very Often', value: 4 },
                ],
            },

            // Part B Questions (Questions 7-18)
            {
                id: 'asrs-7',
                part: 'B',
                text: 'How often do you make careless mistakes when you pay attention to details?',
                options: [
                    { label: 'Never', value: 0 },
                    { label: 'Rarely', value: 1 },
                    { label: 'Sometimes', value: 2 },
                    { label: 'Often', value: 3 },
                    { label: 'Very Often', value: 4 },
                ],
            },
            {
                id: 'asrs-8',
                part: 'B',
                text: 'How often do you have difficulty keeping your attention when you are doing boring or repetitive tasks?',
                options: [
                    { label: 'Never', value: 0 },
                    { label: 'Rarely', value: 1 },
                    { label: 'Sometimes', value: 2 },
                    { label: 'Often', value: 3 },
                    { label: 'Very Often', value: 4 },
                ],
            },
            {
                id: 'asrs-9',
                part: 'B',
                text: 'How often do you have difficulty concentrating on what people are saying to you, even when they are speaking directly to you?',
                options: [
                    { label: 'Never', value: 0 },
                    { label: 'Rarely', value: 1 },
                    { label: 'Sometimes', value: 2 },
                    { label: 'Often', value: 3 },
                    { label: 'Very Often', value: 4 },
                ],
            },
            {
                id: 'asrs-10',
                part: 'B',
                text: 'How often do you misplace or have difficulty finding things at home or at work?',
                options: [
                    { label: 'Never', value: 0 },
                    { label: 'Rarely', value: 1 },
                    { label: 'Sometimes', value: 2 },
                    { label: 'Often', value: 3 },
                    { label: 'Very Often', value: 4 },
                ],
            },
            {
                id: 'asrs-11',
                part: 'B',
                text: 'How often are you distracted by activity or noise around you?',
                options: [
                    { label: 'Never', value: 0 },
                    { label: 'Rarely', value: 1 },
                    { label: 'Sometimes', value: 2 },
                    { label: 'Often', value: 3 },
                    { label: 'Very Often', value: 4 },
                ],
            },
            {
                id: 'asrs-12',
                part: 'B',
                text: 'How often do you leave your seat in meetings or other situations where you are expected to remain seated?',
                options: [
                    { label: 'Never', value: 0 },
                    { label: 'Rarely', value: 1 },
                    { label: 'Sometimes', value: 2 },
                    { label: 'Often', value: 3 },
                    { label: 'Very Often', value: 4 },
                ],
            },
            {
                id: 'asrs-13',
                part: 'B',
                text: 'How often do you feel restless or fidgety?',
                options: [
                    { label: 'Never', value: 0 },
                    { label: 'Rarely', value: 1 },
                    { label: 'Sometimes', value: 2 },
                    { label: 'Often', value: 3 },
                    { label: 'Very Often', value: 4 },
                ],
            },
            {
                id: 'asrs-14',
                part: 'B',
                text: 'How often do you have difficulty unwinding and relaxing when you have time to yourself?',
                options: [
                    { label: 'Never', value: 0 },
                    { label: 'Rarely', value: 1 },
                    { label: 'Sometimes', value: 2 },
                    { label: 'Often', value: 3 },
                    { label: 'Very Often', value: 4 },
                ],
            },
            {
                id: 'asrs-15',
                part: 'B',
                text: 'How often do you interrupt others when they are busy?',
                options: [
                    { label: 'Never', value: 0 },
                    { label: 'Rarely', value: 1 },
                    { label: 'Sometimes', value: 2 },
                    { label: 'Often', value: 3 },
                    { label: 'Very Often', value: 4 },
                ],
            },
            {
                id: 'asrs-16',
                part: 'B',
                text: 'How often do you find yourself talking too much?',
                options: [
                    { label: 'Never', value: 0 },
                    { label: 'Rarely', value: 1 },
                    { label: 'Sometimes', value: 2 },
                    { label: 'Often', value: 3 },
                    { label: 'Very Often', value: 4 },
                ],
            },
            {
                id: 'asrs-17',
                part: 'B',
                text: 'When you are in a conversation, how often do you finish people\'s sentences for them?',
                options: [
                    { label: 'Never', value: 0 },
                    { label: 'Rarely', value: 1 },
                    { label: 'Sometimes', value: 2 },
                    { label: 'Often', value: 3 },
                    { label: 'Very Often', value: 4 },
                ],
            },
            {
                id: 'asrs-18',
                part: 'B',
                text: 'How often do you have difficulty waiting your turn in situations when turn taking is required?',
                options: [
                    { label: 'Never', value: 0 },
                    { label: 'Rarely', value: 1 },
                    { label: 'Sometimes', value: 2 },
                    { label: 'Often', value: 3 },
                    { label: 'Very Often', value: 4 },
                ],
            },
        ],
        scoreCalculator: (answers) => {
            let partAPositiveFlags = 0;
            let totalScore = 0;

            const asrsTest = tests.find(t => t.id === 'asrs-v1.1');
            if (!asrsTest) return { partAPositiveFlags: 0, totalScore: 0, partAScreenPositive: false };

            asrsTest.questions.forEach((q) => {
                const selectedValue = answers[q.id];
                if (selectedValue !== undefined) {
                    const score = selectedValue; // The value from options is already the score
                    totalScore += score;

                    // Check for Part A positive flags based on ASRS-v1.1 scoring criteria
                    if (q.part === 'A') {
                        // Q1-Q4: "Often" (value 3) or "Very Often" (value 4)
                        if (['asrs-1', 'asrs-2', 'asrs-3', 'asrs-4'].includes(q.id) && score >= 3) {
                            partAPositiveFlags++;
                        }
                        // Q5-Q6: "Sometimes" (value 2), "Often" (value 3), or "Very Often" (value 4)
                        else if (['asrs-5', 'asrs-6'].includes(q.id) && score >= 2) {
                            partAPositiveFlags++;
                        }
                    }
                }
            });

            const partAScreenPositive = partAPositiveFlags >= 4; // ASRS screening criteria

            return {
                partAPositiveFlags,
                totalScore,
                partAScreenPositive,
            };
        },
        // ASRS-v1.1 does not have a simple linear "scoring" array like PHQ-9/GAD-7 for total score interpretation.
        // Its primary interpretation is the Part A screening.
        // We can add a placeholder or remove if not needed for generic display.
        scoring: [],    // ASRS interpretation is handled by its specific calculator
    },
    // MDQ (Mood Disorder Questionnaire):
    {
        id: 'mdq',
        name: 'Mood Disorder Questionnaire',
        shortName: 'MDQ',
        description: 'The MDQ is a self-report screening tool for bipolar disorder. It assesses whether you have experienced symptoms of mania or hypomania, how disruptive they have been, and if there is a family history of bipolar disorder.',
        instructions: 'Please answer the following questions based on your experiences.', // General instruction
        questions: [
            // Part 1: Yes/No questions (score 1 for Yes, 0 for No)
            {
                id: 'mdq-q1',
                text: 'Has there ever been a period of time when you were not your usual self and ... you felt so good or so high that other people thought you were not your usual self or you were so high that you got into trouble?',
                options: [
                    { label: 'No', value: 0 },
                    { label: 'Yes', value: 1 },
                ],
            },
            {
                id: 'mdq-q2',
                text: '... you were so irritable that you shouted at people or started arguments or fights?',
                options: [
                    { label: 'No', value: 0 },
                    { label: 'Yes', value: 1 },
                ],
            },
            {
                id: 'mdq-q3',
                text: '... you felt much more self-confident than usual?',
                options: [
                    { label: 'No', value: 0 },
                    { label: 'Yes', value: 1 },
                ],
            },
            {
                id: 'mdq-q4',
                text: '... you needed less sleep than usual (e.g., felt rested after 3 hours sleep or less) ?',
                options: [
                    { label: 'No', value: 0 },
                    { label: 'Yes', value: 1 },
                ],
            },
            {
                id: 'mdq-q5',
                text: '... you were more talkative or spoke faster than usual?',
                options: [
                    { label: 'No', value: 0 },
                    { label: 'Yes', value: 1 },
                ],
            },
            {
                id: 'mdq-q6',
                text: '... thoughts raced through your head or you couldn\'t slow your mind down?',
                options: [
                    { label: 'No', value: 0 },
                    { label: 'Yes', value: 1 },
                ],
            },
            {
                id: 'mdq-q7',
                text: '... you were so easily distracted by things around you that you had trouble concentrating or staying on track?',
                options: [
                    { label: 'No', value: 0 },
                    { label: 'Yes', value: 1 },
                ],
            },
            {
                id: 'mdq-q8',
                text: '... you had more energy than usual?',
                options: [
                    { label: 'No', value: 0 },
                    { label: 'Yes', value: 1 },
                ],
            },
            {
                id: 'mdq-q9',
                text: '... you were much more active than usual (e.g., started many new projects)?',
                options: [
                    { label: 'No', value: 0 },
                    { label: 'Yes', value: 1 },
                ],
            },
            {
                id: 'mdq-q10',
                text: '... you were more social or outgoing than usual (e.g., telephoned friends in the middle of the night)?',
                options: [
                    { label: 'No', value: 0 },
                    { label: 'Yes', value: 1 },
                ],
            },
            {
                id: 'mdq-q11',
                text: '... you were unusually interested in sex or had more sex than usual?',
                options: [
                    { label: 'No', value: 0 },
                    { label: 'Yes', value: 1 },
                ],
            },
            {
                id: 'mdq-q12',
                text: '... you spent money irresponsibly?',
                options: [
                    { label: 'No', value: 0 },
                    { label: 'Yes', value: 1 },
                ],
            },
            {
                id: 'mdq-q13',
                text: '... you were unusually good at something (e.g., sports, art, music, or business)?',
                options: [
                    { label: 'No', value: 0 },
                    { label: 'Yes', value: 1 },
                ],
            },
            // Part 2: Functional Impairment
            {
                id: 'mdq-q14',
                text: 'How much problems has any of these problems caused you?',
                options: [
                    { label: 'No problem', value: 0 },
                    { label: 'Minor problem', value: 1 },
                    { label: 'Moderate problem', value: 2 },
                    { label: 'Serious problem', value: 3 },
                ],
            },
            // Part 3: Family History
            {
                id: 'mdq-q15',
                text: 'Have any of your relatives (parents, grandparents, siblings, children, aunts, or uncles) had manic-depressive illness or bipolar disorder?',
                options: [
                    { label: 'No', value: 0 },
                    { label: 'Yes', value: 1 },
                ],
            },
        ],
        scoreCalculator: (answers) => {
            let part1YesCount = 0;
            const mdqTest = tests.find(t => t.id === 'mdq');

            // Calculate Part 1 'Yes' count (questions mdq-q1 to mdq-q13)
            for (let i = 1; i <= 13; i++) {
                const qId = `mdq-q${i}`;
                if (answers.hasOwnProperty(qId) && answers[qId] === 1) { // 1 for Yes
                    part1YesCount++;
                }
            }

            // Get Part 2 severity (question mdq-q14)
            const part2Severity = answers['mdq-q14'] !== undefined ? answers['mdq-q14'] : null;

            // Get Part 3 family history (question mdq-q15)
            const part3FamilyHistory = answers['mdq-q15'] !== undefined ? answers['mdq-q15'] : null;

            // Determine if MDQ is positive based on scoring criteria
            const isMDQPositive = (
                part1YesCount >= 7 && // At least 7 'Yes' responses in Part 1
                (part2Severity === 2 || part2Severity === 3) && // Moderate (2) or Serious (3) problem in Part 2
                part3FamilyHistory === 1 // 'Yes' in Part 3
            );

            return {
                part1YesCount,
                part2Severity,
                part3FamilyHistory,
                isMDQPositive,
            };
        },
        scoring: [], // MDQ interpretation is handled by its specific calculator
    },
];