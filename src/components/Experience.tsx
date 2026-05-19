import { Box, Container, Typography, Chip } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import { experiences } from '../data/repos';

function Experience(): JSX.Element {
  return (
    <Box component="section" id="experience" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 5 }} className="reveal">
          <Typography
            variant="overline"
            sx={{ color: '#8ba8c0', fontSize: '0.75rem', letterSpacing: '0.12em', fontFamily: '"SF Mono", "Fira Code", monospace' }}
          >
            EXPERIENCE
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, fontWeight: 700, mt: 1 }}>
            项目经历
          </Typography>
        </Box>

        <Box sx={{ position: 'relative' }}>
          {/* Timeline line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 24, md: 32 },
              top: 0,
              bottom: 0,
              width: 1,
              background: 'linear-gradient(180deg, rgba(143,164,184,0.20), rgba(143,164,184,0.05), rgba(143,164,184,0.20))',
            }}
          />

          {experiences.map((exp, idx) => (
            <Box
              key={idx}
              className="reveal"
              sx={{
                position: 'relative',
                pl: { xs: 7, md: 9 },
                pb: idx < experiences.length - 1 ? 6 : 0,
              }}
            >
              {/* Timeline dot */}
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: 17, md: 25 },
                  top: 4,
                  width: 15,
                  height: 15,
                  borderRadius: '50%',
                  border: '2px solid rgba(143,164,184,0.35)',
                  background: 'rgba(143,164,184,0.15)',
                  backdropFilter: 'blur(4px)',
                }}
              />

              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  border: '1px solid rgba(143,164,184,0.10)',
                  background: 'rgba(143,164,184,0.04)',
                  backdropFilter: 'blur(12px)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '30%',
                    left: '40%',
                    width: '200%',
                    height: '200%',
                    background: 'radial-gradient(circle at center, rgba(160,216,240,0.04) 0%, transparent 60%)',
                    pointerEvents: 'none',
                  },
                }}
              >
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5, flexWrap: 'wrap' }}>
                    <WorkIcon sx={{ fontSize: 18, color: '#8ba8c0' }} />
                    <Typography sx={{ fontSize: '1.05rem', fontWeight: 700, color: 'text.primary' }}>
                      {exp.role}
                    </Typography>
                    <Typography sx={{ color: '#8ba8c0', fontFamily: '"SF Mono", "Fira Code", monospace', fontSize: '0.75rem' }}>
                      @ {exp.company}
                    </Typography>
                  </Box>
                  <Typography sx={{ color: '#8ba8c0', fontFamily: '"SF Mono", "Fira Code", monospace', fontSize: '0.7rem', mb: 1.5 }}>
                    {exp.period}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem', lineHeight: 1.8, mb: 2 }}>
                    {exp.description}
                  </Typography>
                  {exp.techStack && (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                      {exp.techStack.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(143,164,184,0.08)',
                            color: '#a0b8cc',
                            border: '1px solid rgba(143,164,184,0.15)',
                            fontWeight: 600,
                            fontSize: '0.7rem',
                            height: 24,
                          }}
                        />
                      ))}
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Experience;
