import { Box, Container, Typography, Chip } from '@mui/material';
import { skills } from '../data/repos';

const categoryOrder = ['框架', '语言', '后端', 'AI', '前端', '平台'];
const grouped = skills.reduce<Record<string, typeof skills>>((acc, skill) => {
  (acc[skill.category] ??= []).push(skill);
  return acc;
}, {});

function Skills(): JSX.Element {
  return (
    <Box component="section" id="skills" sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }} className="reveal">
          <Typography
            variant="overline"
            sx={{ color: '#8ba8c0', fontSize: '0.75rem', letterSpacing: '0.12em', fontFamily: '"SF Mono", "Fira Code", monospace' }}
          >
            SKILLS
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mt: 0.5 }}>
            技术栈
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {categoryOrder.map((cat) => (
            <Box key={cat}>
              <Typography
                sx={{
                  color: '#8ba8c0',
                  fontFamily: '"SF Mono", "Fira Code", monospace',
                  fontSize: '0.6rem',
                  letterSpacing: '0.1em',
                  mb: 1.2,
                }}
              >
                {cat}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {(grouped[cat] || []).map((skill) => (
                  <Chip
                    key={skill.name}
                    label={skill.name}
                    size="small"
                    sx={{
                      color: skill.color,
                      borderColor: `${skill.color}40`,
                      backgroundColor: `${skill.color}0a`,
                      fontWeight: 600,
                      fontSize: '0.75rem',
                      height: 32,
                      borderRadius: 2,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        borderColor: skill.color,
                        backgroundColor: `${skill.color}18`,
                      },
                    }}
                    variant="outlined"
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
