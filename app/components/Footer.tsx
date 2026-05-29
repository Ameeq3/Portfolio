'use client';

import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import { staggerContainer, staggerItem, fadeUp } from '../lib/motionVariants';

const viewport = { once: true, margin: '-60px' } as const;

const socialLinks = [
  { icon: <EmailIcon />, href: 'mailto:kvameeq123@gmail.com', label: 'Email' },
  { icon: <LinkedInIcon />, href: 'https://linkedin.com/in/ameeq-kv', label: 'LinkedIn' },
  { icon: <GitHubIcon />, href: 'https://github.com/Ameeq3', label: 'GitHub' },
  { icon: <PhoneIcon />, href: 'tel:+971502251239', label: 'Phone' },
];

export default function Footer() {
  return (
    <Box
      id="contact"
      component="footer"
      sx={{
        py: 10,
        background: (theme) =>
          `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
      }}
    >
      <Container maxWidth="md">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
          <motion.div variants={staggerItem}>
            <Typography variant="h6" sx={{ color: 'secondary.main', mb: 2, textAlign: 'center' }}>
              Get In Touch
            </Typography>
          </motion.div>

          <motion.div variants={staggerItem}>
            <Typography variant="h2" sx={{ color: 'text.primary', mb: 3, textAlign: 'center' }}>
              Let&apos;s Connect
            </Typography>
          </motion.div>

          <motion.div variants={staggerItem}>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 480, mx: 'auto', mb: 4, textAlign: 'center' }}>
              I&apos;m open to new opportunities and collaborations. Whether you have a question or just
              want to say hi — feel free to reach out!
            </Typography>
          </motion.div>

          <motion.div variants={staggerItem} style={{ textAlign: 'center', marginBottom: 48 }}>
            <Button
              variant="contained"
              size="large"
              href="mailto:kvameeq123@gmail.com"
              startIcon={<EmailIcon />}
              sx={{
                backgroundColor: 'primary.main',
                '&:hover': { backgroundColor: 'primary.dark' },
                px: 4,
                py: 1.5,
              }}
            >
              Say Hello
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 48 }}
        >
          {socialLinks.map((link) => (
            <motion.div key={link.label} variants={staggerItem}>
              <IconButton
                component="a"
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
                sx={{
                  color: 'text.secondary',
                  border: '1px solid',
                  borderColor: 'divider',
                  '&:hover': { color: 'primary.light', borderColor: 'primary.main' },
                  transition: 'all 0.2s ease',
                }}
              >
                {link.icon}
              </IconButton>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <Divider sx={{ mb: 4 }} />
          <Typography variant="body2" sx={{ color: 'text.disabled', textAlign: 'center' }}>
            © {new Date().getFullYear()} Ameeq K.V · Built with Next.js & Material UI
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}
