'use client';

import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { staggerContainer, staggerItem } from '../lib/motionVariants';

const viewport = { once: true, margin: '-60px' } as const;

const educationList = [
  { degree: 'Bachelor of Computer Applications', institution: 'University of Calicut', period: '2020 – 2023', highlight: true },
  { degree: 'Higher Secondary (HSC)', institution: 'D.H.O.H.S.S Pookkarathara', period: '2018 – 2020', highlight: false },
  { degree: 'SSLC', institution: 'D.H.O.H.S.S Pookkarathara', period: '2018', highlight: false },
];

export default function Education() {
  return (
    <Box id="education" component="section" sx={{ py: 12, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
          <motion.div variants={staggerItem}>
            <Typography variant="h6" sx={{ color: 'secondary.main', mb: 2, textAlign: 'center' }}>
              Academic Background
            </Typography>
          </motion.div>
          <motion.div variants={staggerItem}>
            <Typography variant="h2" sx={{ color: 'text.primary', mb: 8, textAlign: 'center' }}>
              Education
            </Typography>
          </motion.div>
        </motion.div>

        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
            {educationList.map((edu, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                <motion.div variants={staggerItem} style={{ height: '100%' }}>
                  <Card
                    sx={{
                      height: '100%',
                      backgroundColor: 'background.paper',
                      border: '1px solid',
                      borderColor: edu.highlight ? 'secondary.dark' : 'divider',
                      cursor: 'default',
                      transition: 'border-color 0.3s ease, transform 0.3s ease',
                      '&:hover': {
                        borderColor: 'secondary.main',
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: 2,
                          backgroundColor: edu.highlight ? 'secondary.dark' : 'action.selected',
                          display: 'inline-flex',
                          mb: 2,
                        }}
                      >
                        <SchoolIcon
                          sx={{
                            color: edu.highlight ? 'secondary.contrastText' : 'text.secondary',
                            fontSize: '1.4rem',
                          }}
                        />
                      </Box>

                      <Typography variant="h5" sx={{ color: 'text.primary', mb: 1 }}>
                        {edu.degree}
                      </Typography>

                      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                        {edu.institution}
                      </Typography>

                      <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
                        <CalendarTodayIcon sx={{ color: 'text.disabled', fontSize: '0.8rem' }} />
                        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                          {edu.period}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
