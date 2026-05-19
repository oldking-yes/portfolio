import { Box, Container, Typography, Chip, Tooltip } from '@mui/material';
import { skills, type Proficiency } from '../data/repos';

const categoryOrder = ['框架', '语言', '后端', 'AI', '前端', '平台'];

const proficiencyLabel: Record<Proficiency, string> = {
  expert: '精通',
  advanced: '熟练',
  intermediate: '熟悉',
};

const proficiencyWidth: Record<Proficiency, string> = {
  expert: '100%',
  advanced: '60%',
  intermediate: '33%',
};

const proficiencyColor: Record<Proficiency, string> = {
  expert: '#8fa4b8',
  advanced: '#6b8498',
  intermediate: '#4a5e6e',
};

const grouped = skills.reduce<Record<string, typeof skills>>((acc, skill) => {
  (acc[skill.category] ??= []).push(skill);
  return acc;
}, {});

function Skills(): JSX.Element {
  return (
    <Box component="section" id="skills" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 6 }} className="reveal">
          <Typography variant="overline" sx={{ color: '#8ba8c0', fontSize: '0.75rem', letterSpacing: '0.12em', fontFamily: '"SF Mono", "Fira Code", monospace' }}>
            SKILLS
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, fontWeight: 700, mt: 1 }}>
            技术栈
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {categoryOrder.map((cat) => (
            <Box key={cat}>
              <Typography sx={{ color: '#8ba8c0', fontFamily: '"SF Mono", "Fira Code", monospace', fontSize: '0.65rem', letterSpacing: '0.1em', mb: 1.5 }}>
                {cat}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8 }}>
                {(grouped[cat] || []).map((skill) => (
                  <Tooltip key={skill.name} title={`${proficiencyLabel[skill.proficiency]}`} placement="left" arrow>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        p: '6px 10px',
                        borderRadius: 2,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(143,164,184,0.06)',
                        },
                      }}
                    >
                      <Chip
                        label={skill.name}
                        variant="outlined"
                        size="small"
                        sx={{
                          color: skill.color,
                          borderColor: `${skill.color}30`,
                          backgroundColor: `${skill.color}08`,
                          fontWeight: 600,
                          fontSize: '0.78rem',
                          height: 30,
                          minWidth: 130,
                          flexShrink: 0,
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            borderColor: skill.color,
                            backgroundColor: `${skill.color}14`,
                          },
                        }}
                      />
                      {/* Proficiency bar */}
                      <Box sx={{ flex: 1, minWidth: 60 }}>
                        <Box
                          sx={{
                            height: 5,
                            borderRadius: 3,
                            backgroundColor: 'rgba(143,164,184,0.10)',
                            overflow: 'hidden',
                          }}
                        >
                          <Box
                            sx={{
                              height: '100%',
                              width: proficiencyWidth[skill.proficiency],
                              borderRadius: 3,
                              background: `linear-gradient(90deg, ${proficiencyColor[skill.proficiency]}, ${proficiencyColor[skill.proficiency]}cc)`,
                              transition: 'width 1s ease-out',
                            }}
                          />
                        </Box>
                      </Box>
                      <Typography
                        sx={{
                          color: proficiencyColor[skill.proficiency],
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          width: 32,
                          flexShrink: 0,
                          textAlign: 'right',
                        }}
                      >
                        {proficiencyLabel[skill.proficiency]}
                      </Typography>
                    </Box>
                  </Tooltip>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Legend */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 5 }} className="reveal">
          {(Object.entries(proficiencyLabel) as [Proficiency, string][]).map(([key, label]) => (
            <Box key={key} sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor: proficiencyColor[key],
                }}
              />
              <Typography sx={{ color: 'text.secondary', fontSize: '0.72rem' }}>{label}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Skills;
