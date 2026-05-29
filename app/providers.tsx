'use client';

import { useState, useMemo, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createAppTheme } from './theme';
import ColorModeContext from './ColorModeContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const saved = localStorage.getItem('colorMode') as 'dark' | 'light' | null;
    if (saved) setMode(saved);
  }, []);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => {
          const next = prev === 'dark' ? 'light' : 'dark';
          localStorage.setItem('colorMode', next);
          return next;
        });
      },
    }),
    []
  );

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
