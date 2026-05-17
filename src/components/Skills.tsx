import { Box, Container, Typography, Chip } from '@mui/material';
import { skills } from '../data/repos';

// 按类别分组
const categories = [...new Set(skills.map((s) => s.category))];

function Skills(): JSX.Element {
  return (
    <Box
      component="section"
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #0a0a0a 0%, #0f0f1a 100%)',
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        {/* Section header */}
        <Typography
          variant="overline"
          sx={{
            color: 'secondary.main',
            letterSpacing: '0.15em',
            fontSize: '0.75rem',
            fontWeight: 600,
          }}
        >
          SKILLS
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 700,
            mt: 1,
            mb: 1,
          }}
        >
          技术栈
        </Typography>
        <Box
          sx={{
            width: 60,
            height: 3,
            background: 'linear-gradient(90deg, #c9a94e, #c41e3a)',
            mx: 'auto',
            mb: 6,
            borderRadius: 2,
          }}
        />

        {/* Skills by category */}
        {categories.map((category, catIndex) => (
          <Box key={category} sx={{ mb: catIndex < categories.length - 1 ? 5 : 0 }}>
            <Typography
              variant="overline"
              sx={{
                color: 'text.secondary',
                letterSpacing: '0.12em',
                fontSize: '0.7rem',
                mb: 2,
                display: 'block',
              }}
            >
              {category}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 1.5,
              }}
            >
              {skills
                .filter((s) => s.category === category)
                .map((skill, index) => (
                  <Chip
                    key={skill.name}
                    label={skill.name}
                    sx={{
                      px: 1.5,
                      py: 1.2,
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      backgroundColor: `${skill.color}15`,
                      color: skill.color,
                      border: `1px solid ${skill.color}30`,
                      borderRadius: '8px',
                      opacity: 0,
                      animation: `fadeInUp 0.4s ease-out ${0.05 * (catIndex * 6 + index)}s forwards`,
                      '&:hover': {
                        backgroundColor: `${skill.color}25`,
                        transform: 'translateY(-3px)',
                        boxShadow: `0 6px 20px ${skill.color}20`,
                      },
                      transition: 'all 0.25s ease',
                      height: 'auto',
                      '& .MuiChip-label': {
                        display: 'block',
                        py: 0.3,
                      },
                    }}
                    variant="outlined"
                  />
                ))}
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
}

export default Skills;
