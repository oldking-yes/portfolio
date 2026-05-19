import { Box, Container, Typography, Chip } from '@mui/material';
import { skills } from '../data/repos';

const categoryOrder = ['框架', '语言', '后端', 'AI', '前端', '平台'];

const grouped = skills.reduce<Record<string, typeof skills>>((acc, skill) => {
  (acc[skill.category] ??= []).push(skill);
  return acc;
}, {});

function Skills(): JSX.Element {
  return (
    <Box component="section" id="skills" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }} className="reveal">
          <Typography variant="overline" sx={{ color: '#8ba8c0', fontSize: '0.75rem', letterSpacing: '0.12em', fontFamily: '"SF Mono", "Fira Code", monospace' }}>
            SKILLS
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, fontWeight: 700, mt: 1 }}>
            技术栈
          </Typography>
        </Box>

        <Box sx={{ maxWidth: 800, mx: 'auto', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {categoryOrder.map((cat) => (
            <Box key={cat}>
              <Typography sx={{ color: '#8ba8c0', fontFamily: '"SF Mono", "Fira Code", monospace', fontSize: '0.65rem', letterSpacing: '0.1em', mb: 1.5 }}>
                {cat}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {(grouped[cat] || []).map((skill) => (
                  <Chip
                    key={skill.name}
                    label={skill.name}
                    variant="outlined"
                    sx={{
                      color: skill.color,
                      borderColor: `${skill.color}30`,
                      backgroundColor: `${skill.color}08`,
                      fontWeight: 600,
                      fontSize: '0.78rem',
                      height: 32,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        borderColor: skill.color,
                        backgroundColor: `${skill.color}14`,
                        transform: 'translateY(-1px)',
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Skills;
