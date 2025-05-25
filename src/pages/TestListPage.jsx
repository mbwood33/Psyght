// src/pages/TestListPage.jsx
import * as React from 'react';
import { Box, Typography, List, ListItem, ListItemButton, Sheet, Divider } from '@mui/joy';
import { Link } from 'react-router-dom';
import { tests } from '../data/tests.js';

function TestListPage() {
    return (
        <Box sx={{ maxWidth: '800px', mx: 'auto', p: 2 }}>
            <Typography level="h2" component="h1" sx={{ mb: 4, textAlign: 'center', color: 'var(--joy-palette-primary-100)' }}>
                Available Psychometric Tests
            </Typography>
            <Sheet
                variant="outlined"
                sx={{
                    borderRadius: 'lg',
                    overflow: 'hidden',
                    backgroundColor: 'var(--joy-palette-background-surface)',
                    border: '1px solid var(--joy-palette-divider)'
                }}
            >
                <List
                    aria-labelledby="test-list-label"
                    sx={{
                        '--ListItem-paddingX': '1rem',
                        '--ListItem-paddingY': '1rem',
                    }}
                >
                    {tests.map((test, index) => (
                        <React.Fragment key={test.id}>
                            <ListItem>
                                <ListItemButton
                                    component={Link}
                                    to={`/tests/${test.id}`}
                                    sx={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        gap: 0.5,
                                        p: 2,
                                        borderRadius: 'md',
                                        '&:hover': {
                                            backgroundColor: 'var(--joy-palette-primary-900)',
                                        },
                                    }}
                                >
                                    <Typography level="h3" sx={{ color: 'var(--joy-palette-primary-50)' }}>
                                        {test.name} ({test.shortName})
                                    </Typography>
                                    <Typography level="body-sm" sx={{ color: 'var(--joy-palette-text-secondary)' }}>
                                        {test.description}
                                    </Typography>
                                </ListItemButton>
                            </ListItem>
                            {index < tests.length - 1 && <Divider component="li" sx={{ '--Divider-thickness': '1px', backgroundColor: 'var(--joy-palette-divider)' }} />}
                        </React.Fragment>
                    ))}
                </List>
            </Sheet>
        </Box>
    );
}

export default TestListPage;