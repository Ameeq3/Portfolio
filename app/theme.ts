import { createTheme, PaletteMode } from '@mui/material/styles';

export function createAppTheme(mode: PaletteMode) {
  const isDark = mode === 'dark';

  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#6366F1',
        light: '#818CF8',
        dark: '#4F46E5',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#06B6D4',
        light: '#22D3EE',
        dark: '#0891B2',
        contrastText: '#FFFFFF',
      },
      background: {
        default: isDark ? '#060714' : '#F1F5F9',
        paper: isDark ? '#0F1225' : '#FFFFFF',
      },
      text: {
        primary: isDark ? '#E2E8F0' : '#0F172A',
        secondary: isDark ? '#94A3B8' : '#64748B',
        disabled: isDark ? '#475569' : '#94A3B8',
      },
      divider: isDark ? 'rgba(148, 163, 184, 0.12)' : 'rgba(15, 23, 42, 0.08)',
      success: { main: '#10B981' },
      error: { main: '#EF4444' },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: { fontSize: '3.75rem', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' },
      h2: { fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.01em' },
      h3: { fontSize: '1.875rem', fontWeight: 700, lineHeight: 1.35 },
      h4: { fontSize: '1.4rem', fontWeight: 600, lineHeight: 1.45 },
      h5: { fontSize: '1.15rem', fontWeight: 600, lineHeight: 1.5 },
      h6: { fontSize: '0.95rem', fontWeight: 600, lineHeight: 1.5, letterSpacing: '0.08em', textTransform: 'uppercase' },
      subtitle1: { fontSize: '1.25rem', fontWeight: 400, lineHeight: 1.6 },
      subtitle2: { fontSize: '0.95rem', fontWeight: 500, lineHeight: 1.55 },
      body1: { fontSize: '1rem', lineHeight: 1.75 },
      body2: { fontSize: '0.875rem', lineHeight: 1.65 },
      caption: { fontSize: '0.775rem', lineHeight: 1.5, letterSpacing: '0.04em' },
      overline: { fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' },
    },
    shape: { borderRadius: 12 },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: { scrollBehavior: 'smooth' },
          '::-webkit-scrollbar': { width: '6px' },
          '::-webkit-scrollbar-track': { background: isDark ? '#060714' : '#F1F5F9' },
          '::-webkit-scrollbar-thumb': { background: '#4F46E5', borderRadius: '3px' },
        },
      },
      MuiAppBar: { styleOverrides: { root: { backgroundImage: 'none' } } },
      MuiCard: { styleOverrides: { root: { backgroundImage: 'none', borderRadius: 16 } } },
      MuiChip: { styleOverrides: { root: { borderRadius: 8, fontWeight: 500 } } },
      MuiButton: { styleOverrides: { root: { textTransform: 'none', fontWeight: 600, borderRadius: 10 } } },
      MuiDivider: { styleOverrides: { root: { borderColor: isDark ? 'rgba(148, 163, 184, 0.12)' : 'rgba(15, 23, 42, 0.08)' } } },
    },
  });
}

// Default dark theme — used by Server Components that import theme directly
const theme = createAppTheme('dark');
export default theme;
