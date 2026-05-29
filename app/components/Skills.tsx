'use client';

import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import BrushIcon from '@mui/icons-material/Brush';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import PeopleIcon from '@mui/icons-material/People';
import { alpha } from '@mui/material/styles';
import theme from '../theme';
import { staggerContainer, staggerItem } from '../lib/motionVariants';

const viewport = { once: true, margin: '-60px' } as const;

const skillCategories = [
  { title: 'Languages', icon: <CodeIcon />, skills: ['JavaScript', 'TypeScript', 'Dart'], color: 'primary' as const },
  { title: 'Web Frameworks', icon: <WebIcon />, skills: ['React.js', 'Next.js (SSR & CSR)'], color: 'secondary' as const },
  { title: 'Mobile', icon: <PhoneIphoneIcon />, skills: ['React Native', 'Expo', 'Flutter'], color: 'primary' as const },
  { title: 'UI & Styling', icon: <BrushIcon />, skills: ['Material UI', 'HTML', 'CSS'], color: 'secondary' as const },
  { title: 'Data & Integration', icon: <StorageIcon />, skills: ['Axios', 'React Query', 'REST APIs', 'Azure'], color: 'primary' as const },
  { title: 'Tools', icon: <BuildIcon />, skills: ['Git', 'Testing & Debugging'], color: 'secondary' as const },
  {
    title: 'Soft Skills',
    icon: <PeopleIcon />,
    skills: ['Quick Learner', 'Self-Directed Research', 'Adaptable', 'Critical Thinking', 'Team Collaboration'],
    color: 'primary' as const,
  },
];

export default function Skills() {
  return (
    <Box id="skills" component="section" sx={{ py: 12, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
          <motion.div variants={staggerItem}>
            <Typography variant="h6" sx={{ color: 'secondary.main', mb: 2, textAlign: 'center' }}>
              What I Work With
            </Typography>
          </motion.div>
          <motion.div variants={staggerItem}>
            <Typography variant="h2" sx={{ color: 'text.primary', mb: 8, textAlign: 'center' }}>
              Technical Skills
            </Typography>
          </motion.div>
        </motion.div>

        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <Grid container spacing={3}>
            {skillCategories.map((category) => (
              <Grid key={category.title} size={{ xs: 12, sm: 6, md: 4 }}>
                <motion.div variants={staggerItem} style={{ height: '100%' }}>
                  <Card
                    sx={{
                      height: '100%',
                      backgroundColor: 'background.default',
                      border: '1px solid',
                      borderColor: 'divider',
                      cursor: 'default',
                      transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
                      '&:hover': {
                        borderColor: `${category.color}.main`,
                        transform: 'translateY(-4px)',
                        boxShadow: `0 20px 40px ${alpha(
                          category.color === 'primary' ? theme.palette.primary.dark : theme.palette.secondary.dark,
                          0.2
                        )}`,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', mb: 2.5 }}>
                        <Box sx={{ color: `${category.color}.main` }}>{category.icon}</Box>
                        <Typography variant="h5" sx={{ color: 'text.primary' }}>
                          {category.title}
                        </Typography>
                      </Stack>

                      <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
                        {category.skills.map((skill) => (
                          <Chip
                            key={skill}
                            label={skill}
                            size="small"
                            variant="outlined"
                            sx={{
                              borderColor: `${category.color}.dark`,
                              color: `${category.color}.light`,
                              cursor: 'pointer',
                              '&:hover': {
                                backgroundColor: `${category.color}.dark`,
                                color: 'primary.contrastText',
                              },
                              transition: 'all 0.2s ease',
                            }}
                          />
                        ))}
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
