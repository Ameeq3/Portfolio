'use client';

import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import TranslateIcon from '@mui/icons-material/Translate';
import { staggerContainer, staggerItem, fadeUp } from '../lib/motionVariants';

const viewport = { once: true, margin: '-60px' } as const;
const languages = ['English', 'Malayalam', 'Tamil'];

export default function LanguagesSection() {
  return (
    <Box component="section" sx={{ py: 8, backgroundColor: 'background.paper' }}>
      <Container maxWidth="sm">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', justifyContent: 'center', mb: 4 }}>
            <TranslateIcon sx={{ color: 'primary.main' }} />
            <Typography variant="h3" sx={{ color: 'text.primary' }}>
              Languages
            </Typography>
          </Stack>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 16 }}
        >
          {languages.map((lang) => (
            <motion.div key={lang} variants={staggerItem}>
              <Chip
                label={lang}
                variant="outlined"
                sx={{
                  borderColor: 'primary.main',
                  color: 'primary.light',
                  px: 1,
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                    color: 'primary.contrastText',
                  },
                  transition: 'all 0.2s ease',
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Box>
  );
}
