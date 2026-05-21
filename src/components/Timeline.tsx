import { Box, Container, Typography, Chip } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import { education, experiences } from '../data/repos';

function Timeline(): JSX.Element {
  return (
    <Box component="section" id="timeline" sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }} className="reveal">
          <Typography
            variant="overline"
            sx={{ color: '#8ba8c0', fontSize: '0.75rem', letterSpacing: '0.12em', fontFamily: '"SF Mono", "Fira Code", monospace' }}
          >
            BACKGROUND
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mt: 0.5 }}>
            教育背景 / 项目经历
          </Typography>
        </Box>

        {/* Stack: education first, then experience */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 5 } }}>

          {/* === Education Card === */}
          <Box className="reveal">
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                border: '1px solid rgba(143,164,184,0.10)',
                background: 'rgba(143,164,184,0.04)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2.5 }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, rgba(139,168,192,0.20), rgba(139,168,192,0.08))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: '#8ba8c0',
                  }}
                >
                  <SchoolIcon sx={{ fontSize: 22 }} />
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2, mb: 0.5, flexWrap: 'wrap' }}>
                    <Typography sx={{ fontSize: '1.05rem', fontWeight: 700, color: 'text.primary' }}>
                      {education[0].school}
                    </Typography>
                    <Typography sx={{ color: '#8ba8c0', fontFamily: '"SF Mono", "Fira Code", monospace', fontSize: '0.72rem' }}>
                      {education[0].period}
                    </Typography>
                  </Box>
                  <Typography sx={{ color: '#8fa4b8', fontSize: '0.85rem', fontWeight: 600, mb: 1 }}>
                    {education[0].degree} · {education[0].major}
                  </Typography>
                  {education[0].description && (
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.8rem', lineHeight: 1.8 }}>
                      {education[0].description}
                    </Typography>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>

          {/* === Experience Card === */}
          <Box className="reveal">
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                border: '1px solid rgba(143,164,184,0.10)',
                background: 'rgba(143,164,184,0.04)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2.5 }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, rgba(139,168,192,0.20), rgba(139,168,192,0.08))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: '#8ba8c0',
                  }}
                >
                  <CodeIcon sx={{ fontSize: 22 }} />
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2, mb: 0.5, flexWrap: 'wrap' }}>
                    <Typography sx={{ fontSize: '1.05rem', fontWeight: 700, color: 'text.primary' }}>
                      {experiences[0].role}
                    </Typography>
                    <Typography sx={{ color: '#8ba8c0', fontFamily: '"SF Mono", "Fira Code", monospace', fontSize: '0.72rem' }}>
                      {experiences[0].period}
                    </Typography>
                  </Box>
                  <Typography sx={{ color: '#8fa4b8', fontSize: '0.85rem', fontWeight: 600, mb: 1 }}>
                    {experiences[0].company}
                  </Typography>
                  {experiences[0].description && (
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.8rem', lineHeight: 1.8, mb: 2 }}>
                      {experiences[0].description}
                    </Typography>
                  )}
                  {experiences[0].techStack && (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                      {experiences[0].techStack.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(143,164,184,0.08)',
                            color: '#a0b8cc',
                            border: '1px solid rgba(143,164,184,0.15)',
                            fontWeight: 600,
                            fontSize: '0.65rem',
                            height: 22,
                          }}
                        />
                      ))}
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>

        </Box>
      </Container>
    </Box>
  );
}

export default Timeline;
