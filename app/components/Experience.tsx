'use client';

import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { alpha } from '@mui/material/styles';
import { staggerContainer, staggerItem } from '../lib/motionVariants';

const viewport = { once: true, margin: '-60px' } as const;

const experiences = [
  {
    company: 'Aster DM Healthcare',
    role: 'Senior Associate IT | Frontend Developer',
    location: 'Dubai, UAE',
    period: 'Nov 2024 – Present',
    current: true,
    techStack: ['React.js', 'Next.js', 'TypeScript', 'Material UI', 'React Query', 'Axios', 'Azure'],
    highlights: [
      'Developed and maintained Alif, an enterprise healthcare management system, across modules including EHR, Front Office, Billing, Laboratory, Radiology, and Nursing.',
      'Engineered a dynamic prescriptions module featuring brand/generic medicine toggle, tapering date logic, allergy detection chips, favorites autopopulation, and encounter-scoped PDF generation.',
      'Built the VitalSignsForm with a template-driven dynamic schema, formula field calculations, conditional SpO2 fields, range validation, and per-module autopopulation (EHR, Nursing, Radiology).',
      'Delivered the AI Screening feature — nursing data entry form, doctor grading drawer with IntersectionObserver mini-nav, and a printable AI clinical summary page.',
      'Implemented Front Office episode/encounter management with subrow pagination, eligibility check polling, and a CORS proxy via Next.js API routes.',
      'Integrated UAE Emirates ID reader with form autopopulation, phone conflict resolution dialog, and partial PATCH payload tracking via modifiedFields.',
      'Led development of an in-house React Native (Expo) patient-facing mobile app, architecting core screens, navigation structure, and API integration.',
      'Delivered Billing enhancements: multi-payment mode, invoice PDF, facilityRegulatoryCode across tables, and advance payment fixes.',
      'Integrated Azure REST APIs with Axios and React Query; resolved stale cache bugs and reduced redundant API calls via module-level caching hooks.',
      'Participated in Agile sprint planning, stakeholder demos, and collaborated closely with backend developers and product managers.',
    ],
  },
  {
    company: 'CamerinFolks Pvt. Ltd',
    role: 'Flutter Developer Intern',
    location: 'Kerala, India',
    period: 'Oct 2023 – Apr 2024',
    current: false,
    techStack: ['Flutter', 'Dart'],
    highlights: [
      'Collaborated with senior developers to design, develop, and maintain cross-platform mobile applications using Flutter and Dart.',
      'Translated UI/UX mockups and wireframes into functional interfaces using Flutter widgets within Agile cross-functional teams.',
    ],
  },
];

export default function Experience() {
  return (
    <Box
      id="experience"
      component="section"
      sx={{
        py: 12,
        background: (theme) =>
          `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
      }}
    >
      <Container maxWidth="lg">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
          <motion.div variants={staggerItem}>
            <Typography variant="h6" sx={{ color: 'primary.main', mb: 2, textAlign: 'center' }}>
              Career
            </Typography>
          </motion.div>
          <motion.div variants={staggerItem}>
            <Typography variant="h2" sx={{ color: 'text.primary', mb: 8, textAlign: 'center' }}>
              Work Experience
            </Typography>
          </motion.div>
        </motion.div>

        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <Stack spacing={4}>
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card
                  sx={{
                    backgroundColor: 'background.paper',
                    border: '1px solid',
                    borderColor: exp.current ? 'primary.dark' : 'divider',
                    position: 'relative',
                    overflow: 'visible',
                  }}
                >
                  {exp.current && (
                    <Chip
                      label="Current"
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: -12,
                        right: 24,
                        backgroundColor: 'primary.main',
                        color: 'primary.contrastText',
                      }}
                    />
                  )}

                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Stack
                      direction={{ xs: 'column', sm: 'row' }}
                      spacing={2}
                      sx={{ mb: 1, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' } }}
                    >
                      <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                        <Box
                          sx={{
                            p: 1,
                            borderRadius: 2,
                            backgroundColor: exp.current ? 'primary.dark' : 'action.selected',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <WorkIcon sx={{ color: exp.current ? 'primary.contrastText' : 'text.secondary', fontSize: '1.1rem' }} />
                        </Box>
                        <Box>
                          <Typography variant="h4" sx={{ color: 'text.primary' }}>
                            {exp.company}
                          </Typography>
                          <Typography variant="subtitle2" sx={{ color: 'primary.light' }}>
                            {exp.role}
                          </Typography>
                        </Box>
                      </Stack>

                      <Stack spacing={0.5} sx={{ alignItems: { xs: 'flex-start', sm: 'flex-end' } }}>
                        <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
                          <CalendarTodayIcon sx={{ color: 'text.disabled', fontSize: '0.85rem' }} />
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {exp.period}
                          </Typography>
                        </Stack>
                        <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
                          <LocationOnIcon sx={{ color: 'text.disabled', fontSize: '0.85rem' }} />
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {exp.location}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>

                    <Divider sx={{ my: 2.5 }} />

                    <Box component="ul" sx={{ pl: 2.5, mb: 3, '& li': { mb: 1 } }}>
                      {exp.highlights.map((point, i) => (
                        <Typography
                          key={i}
                          component="li"
                          variant="body2"
                          sx={{ color: 'text.secondary', lineHeight: 1.75 }}
                        >
                          {point}
                        </Typography>
                      ))}
                    </Box>

                    <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
                      {exp.techStack.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.094),
                            color: 'primary.light',
                            border: '1px solid',
                            borderColor: (theme) => alpha(theme.palette.primary.main, 0.19),
                          }}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}
