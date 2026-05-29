'use client';

import { useState, useEffect, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { alpha, useTheme } from '@mui/material/styles';
import ColorModeContext from '../ColorModeContext';

const navLinks = [
  { label: 'About', href: '#summary' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { toggleColorMode } = useContext(ColorModeContext);
  const muiTheme = useTheme();
  const isDark = muiTheme.palette.mode === 'dark';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setDrawerOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: (theme) =>
            scrolled ? alpha(theme.palette.background.default, 0.85) : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid' : 'none',
          borderColor: 'divider',
          transition: 'all 0.3s ease',
        }}
      >
        <Toolbar sx={{ px: { xs: 3, md: 6 }, py: 1 }}>
          <Typography
            variant="h5"
            sx={{ flexGrow: 1, cursor: 'pointer', color: 'primary.main', letterSpacing: '-0.02em' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Ameeq
            <Typography component="span" variant="h5" sx={{ color: 'secondary.main' }}>
              .
            </Typography>
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.light', backgroundColor: 'transparent' },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          <Tooltip title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
            <IconButton
              onClick={toggleColorMode}
              sx={{
                color: 'text.secondary',
                ml: 1,
                '&:hover': { color: 'primary.light' },
              }}
            >
              {isDark ? <WbSunnyIcon /> : <DarkModeIcon />}
            </IconButton>
          </Tooltip>

          <IconButton
            sx={{ display: { xs: 'flex', md: 'none' }, color: 'text.primary', ml: 0.5 }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: {
            sx: { backgroundColor: 'background.paper', width: 260, pt: 2 },
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, pb: 1 }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'text.secondary' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.label} disablePadding>
              <ListItemButton
                onClick={() => handleNavClick(link.href)}
                sx={{ px: 3, py: 1.5, '&:hover': { backgroundColor: 'action.hover' } }}
              >
                <ListItemText
                  primary={link.label}
                  slotProps={{ primary: { sx: { color: 'text.primary' } } }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
