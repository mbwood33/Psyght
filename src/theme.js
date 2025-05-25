// src/theme.js
import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
    colorSchemes: {
        dark: {
            palette: {
                // Bright colors
                primary: {
                    50: '#E8E5F7',   // Very light purple (for other elements, like h1 if you want light purple)
                    100: '#C1B9EB',
                    200: '#998CE0',
                    300: '#7160D4',
                    400: '#5F4ABF',
                    500: '#524094',   // Your main primary purple
                    600: '#413376',
                    700: '#302658',
                    800: '#1F193B',
                    900: '#0E0D1E',   // Very dark purple
                },
                accent: {
                    500: '01EFAC',  // Brightest green/aqua for accent
                    900: '005E5A',  // Darker shade for hover/contrast
                },
                customGradient: {
                    start: '#01EFAC',   // Bright green/aqua
                    end: '#562A83',     // Dark purple
                    hoverStart: '#01CBAE',  // Slightly darker green/aqua for hover
                    hoverEnd: '#483984',    // Slightly lighter purple for hover (adjust as needed...)
                },
                // Very dark gray for general background
                background: {
                    body: '#121212',    // Very dark gray for the entire page background
                    surface: '#1A1A1A', // Slightly lighter dark gray for cards, sheets, etc.
                    popup: '#202020',   // Even lighter for modals, tooltips
                },
                text: {
                    primary: '#E0E0E0',     // Light gray for primary text on dark background
                    secondary: '#A0A0A0',   // Slightly darker gray for secondary text
                    tertiary: '#707070',    // Even darker for subtle text
                },
                divider: '#333333',     // Dark gray for dividers
                neutral: {
                    // Neutral colors for things like borders, disabled states
                    plainColor: '#A0A0A0',
                    plainHoverBg: '#2A2A2A',
                    plainActiveBg: '#3A3A3A',
                    outlinedBorder: '#505050',
                    outlinedHoverBg: '#2A2A2A',
                    outlinedActiveBg: '#3A3A3A',
                    softBg: '#2A2A2A',
                    softHoverBg: '#3A3A3A',
                    solidBg: '#505050',
                    solidHoverBg: '#606060',
                    solidActiveBg: '#707070',
                },
                // Add other colors if needed, e.g., success, danger, warning
                success: {
                    solidBg: '#01EFAC',     // Use your bright green for success
                    solidColor: '#121212',  // Dark text on bright background
                    solidHoverBg: '#01CBAE',
                },
                danger: {
                    solidBg: '#DC3545',     // Standard red for danger
                    solidColor: '#FFFFFF',
                    solidHoverBg: '#C82333',
                }
            },
        },
    },
    components: {
        JoyButton: {
            styleOverrides: {
                root: ({ ownerState, theme }) => ({
                    // Style for the 'Tests' button (text variant)
                    ...(ownerState.variant === 'solid' && ownerState.color === 'primary' &&{
                        color: theme.palette.text.primary,
                        '&:hover': {
                            backgroundColor: theme.palette.primary[900],    // Dark purple hover
                        },
                    }),

                    // Style for the 'Log In' button (solid primary with custom gradient)
                    // We specifically target ownerState.color === 'primary' here
                    ...(ownerState.variant === 'solid' && ownerState.color === 'primary' && {
                        // Apply custom gradient 
                        background: `linear-gradient(45deg, ${theme.palette.customGradient.start}, ${theme.palette.customGradient.end})`,
                        color: theme.palette.text.primary,  // Or theme.palette.primary.contrastText if it exists
                        '&:hover': {
                            backgroundColor: `linear-gradient(45deg, ${theme.palette.customGradient.hoverStart}, ${theme.palette.customGradient.hoverEnd})`,
                            color: theme.palette.text.primary,
                        },
                        borderRadius: '8px',
                    }),

                    // Style for the 'Sign Up' button (outlined accent)
                    ...(ownerState.variant === 'outlined' && ownerState.color === 'accent' && {
                        borderColor: theme.palette.aceent[500], // Bright green/aqua border
                        color: theme.palette.accent[500],   // Bright green/aqua text
                        '&:hover': {
                            backgroundColor: theme.pallete.accent[900], // Dark background on hover
                            color: theme.palette.text.primary,  // Text reverts to primary text color
                        },
                        borderRadius: '8px',
                    }),
                }),
            },
        },
        JoyTypography: {
            styleOverrides: {
                root: ({ ownerState, theme }) => ({
                    ...(ownerState.level === 'h1' && {
                        color: theme.palette.primary[50],
                        fontSize: '3rem',
                        fontWeight: 700,
                        letterSpacing: '-0.03em',
                    }),
                    ...(ownerState.level === 'h2' && {
                        color: theme.palette.primary[100],
                        fontSize: '2.2rem',
                        fontWeight: 600,
                    }),
                    ...(ownerState.level === 'h3' && {
                        color: theme.palette.primary[200],
                        fontSize: '1.8rem',
                        fontWeight: 500,
                    }),
                    ...(ownerState.level === 'body-lg' && {
                        color: theme.palette.text.primary,
                    }),
                }),
            },
        },
        JoyFormLabel: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.text.primary,
                })
            }
        },
        JoyRadio: {
            styleOverrides: {
                radio: ({ theme }) => ({
                    '--Radio-dotColor': theme.palette.accent[500], // Using accent for bright dot
                    '--Radio-color': theme.palette.neutral.outlinedBorder,
                    '&:hover': {
                        '--Radio-color': theme.palette.accent[500],
                    },
                }),
                label: ({ theme }) => ({
                    color: theme.palette.text.primary,
                })
            }
        },
        JoyCheckbox: {
            styleOverrides: {
                root: ({ theme }) => ({
                    '--Checkbox-checkedBg': theme.palette.accent[500],
                    '--Checkbox-checkedColor': theme.palette.text.primary,
                    '--Checkbox-color': theme.palette.neutral.outlinedBorder,
                    '&:hover': {
                        '--Checkbox-color': theme.palette.accent[500],
                    },
                }),
                label: ({ theme }) => ({
                    color: theme.palette.text.primary,
                })
            }
        },
        JoyLink: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.accent[500], // Bright links
                    TextDecoration: 'none',
                    '&:hover': {
                        textDecoration: 'underline',
                    },
                }),
            },
        },
        JoyInput: {
            styleOverrides: {
                root: ({ theme }) => ({
                    '--Input-focusedHighlight': theme.palette.accent[500],
                    backgroundColor: theme.palette.background.surface,
                    borderColor: theme.palette.divider,
                    color: theme.palette.text.primary,
                    '&:hover': {
                        borderColor: theme.palette.accent[500],
                    },
                    borderRadius: '8px',
                }),
            },
        },
        JoySheet: {
            styleOverrides: {
                root: ({ theme }) => ({
                    backgroundColor: theme.palette.background.surface,
                    borderRadius: '12px',
                }),
            },
        },
    },
    typography: {
        fontFamily: {
            body: 'Inter, sans-serif',  // Using Inter, which Joy UI often suggests
            display: 'Inter, sans-serif',
        },
    },
});

export default theme;