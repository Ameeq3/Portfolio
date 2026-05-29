'use client';

import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DownloadIcon from '@mui/icons-material/Download';
import { alpha } from '@mui/material/styles';
import theme from '../theme';
import { EASE_OUT } from '../lib/motionVariants';

const { primary, secondary } = theme.palette;

const contactLinks = [
  { icon: <EmailIcon />, label: 'kvameeq123@gmail.com', href: 'mailto:kvameeq123@gmail.com', tooltip: 'Send email' },
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://linkedin.com/in/ameeq-kv', tooltip: 'LinkedIn profile' },
  { icon: <GitHubIcon />, label: 'GitHub', href: 'https://github.com/Ameeq3', tooltip: 'GitHub profile' },
  { icon: <PhoneIcon />, label: '+971-50-225-1239', href: 'tel:+971502251239', tooltip: 'Call' },
];

function item(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: EASE_OUT },
  };
}

export default function Hero() {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: `radial-gradient(ellipse 80% 60% at 50% -10%, ${alpha(primary.dark, 0.2)} 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, ${alpha(secondary.dark, 0.13)} 0%, transparent 60%)`,
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', py: 16 }}>

          <motion.div {...item(0)}>
            <Chip
              label="Available for opportunities"
              size="small"
              sx={{
                mb: 4,
                backgroundColor: alpha(primary.main, 0.13),
                color: 'primary.light',
                border: '1px solid',
                borderColor: alpha(primary.main, 0.26),
              }}
            />
          </motion.div>

          <motion.div {...item(0.1)}>
            <Typography
              variant="h1"
              sx={{
                background: (theme) =>
                  `linear-gradient(135deg, ${theme.palette.text.primary} 30%, ${theme.palette.primary.light} 70%, ${theme.palette.secondary.light} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                mb: 2,
              }}
            >
              Ameeq K.V
            </Typography>
          </motion.div>

          <motion.div {...item(0.22)}>
            <Typography variant="h4" sx={{ color: 'text.secondary', mb: 2 }}>
              Frontend Software Developer
            </Typography>
          </motion.div>

          <motion.div {...item(0.32)}>
            <Stack direction="row" spacing={0.75} sx={{ mb: 5, alignItems: 'center', justifyContent: 'center' }}>
              <LocationOnIcon sx={{ color: 'secondary.main', fontSize: '1.1rem' }} />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Dubai, UAE
              </Typography>
            </Stack>
          </motion.div>

          <motion.div {...item(0.42)}>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto', mb: 5, lineHeight: 1.8 }}
            >
              React.js · Next.js · TypeScript · React Native · Flutter
            </Typography>
          </motion.div>

          <motion.div {...item(0.52)}>
            <Stack direction="row" spacing={1} sx={{ mb: 6, gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
              {contactLinks.map((link) => (
                <Tooltip key={link.label} title={link.tooltip} placement="top">
                  <IconButton
                    component="a"
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    sx={{
                      color: 'text.secondary',
                      border: '1px solid',
                      borderColor: 'divider',
                      '&:hover': {
                        color: 'primary.light',
                        borderColor: 'primary.main',
                        backgroundColor: alpha(primary.main, 0.08),
                      },
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {link.icon}
                  </IconButton>
                </Tooltip>
              ))}
            </Stack>
          </motion.div>

          <motion.div {...item(0.62)}>
            <Button
              variant="outlined"
              size="large"
              href="/Ameeq_Resume.pdf"
              download="Ameeq_KV_Resume.pdf"
              startIcon={<DownloadIcon />}
              sx={{
                borderColor: 'primary.main',
                color: 'primary.light',
                px: 4,
                py: 1.25,
                '&:hover': {
                  backgroundColor: alpha(primary.main, 0.08),
                  borderColor: 'primary.light',
                },
                transition: 'all 0.2s ease',
              }}
            >
              Download Resume
            </Button>
          </motion.div>

        </Box>
      </Container>

      <Box
        sx={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
            '50%': { transform: 'translateX(-50%) translateY(8px)' },
          },
        }}
      >
        <KeyboardArrowDownIcon sx={{ color: 'text.disabled' }} />
      </Box>
    </Box>
  );
}
