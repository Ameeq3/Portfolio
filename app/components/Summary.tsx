'use client';

import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { fadeUp, staggerContainer, staggerItem } from '../lib/motionVariants';

const viewport = { once: true, margin: '-60px' } as const;

export default function Summary() {
  return (
    <Box
      id="summary"
      component="section"
      sx={{
        py: 12,
        background: (theme) =>
          `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
      }}
    >
      <Container maxWidth="md">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
          <motion.div variants={staggerItem}>
            <Typography variant="h6" sx={{ color: 'primary.main', mb: 2, textAlign: 'center' }}>
              About Me
            </Typography>
          </motion.div>

          <motion.div variants={staggerItem}>
            <Typography variant="h2" sx={{ color: 'text.primary', mb: 6, textAlign: 'center' }}>
              Professional Summary
            </Typography>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <Divider sx={{ mb: 6 }} />
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} transition={{ delay: 0.1 }}>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', lineHeight: 2, textAlign: 'center', maxWidth: 780, mx: 'auto' }}
          >
            Results-driven Frontend Developer with{' '}
            <Typography component="span" variant="body1" sx={{ color: 'primary.light' }}>
              2+ years of experience
            </Typography>{' '}
            delivering scalable, production-grade features for an enterprise healthcare management system
            used across multiple hospital modules. Deep expertise in{' '}
            <Typography component="span" variant="body1" sx={{ color: 'secondary.light' }}>
              React.js, Next.js, and TypeScript
            </Typography>
            , with hands-on experience building complex UI systems including dynamic form engines,
            real-time data flows, PDF generation pipelines, and cross-platform mobile apps (React Native,
            Expo, Flutter). A fast and self-directed learner who quickly researches and masters new
            technologies — demonstrated by independently picking up Flutter, React Native, and healthcare
            domain knowledge on the job. Thrives in{' '}
            <Typography component="span" variant="body1" sx={{ color: 'primary.light' }}>
              Agile environments
            </Typography>
            , collaborating closely with backend developers, product managers, and healthcare stakeholders
            to deliver clean, maintainable solutions.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}
