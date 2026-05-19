import { Box, Container, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { education } from '../data/repos';

function Education(): JSX.Element {
  return (
    <Box component="section" id="education" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 5 }} className="reveal">
          <Typography
            variant="overline"
            sx={{ color: '#8ba8c0', fontSize: '0.75rem', letterSpacing: '0.12em', fontFamily: '"SF Mono", "Fira Code", monospace' }}
          >
            EDUCATION
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, fontWeight: 700, mt: 1 }}>
            教育背景
          </Typography>
        </Box>

        {education.map((edu, idx) => (
          <Box
            key={idx}
            className="reveal"
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              border: '1px solid rgba(143,164,184,0.10)',
              background: 'rgba(143,164,184,0.04)',
              backdropFilter: 'blur(12px)',
              display: 'flex',
              gap: 3,
              alignItems: 'flex-start',
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
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: 2,
                background: 'linear-gradient(135deg, rgba(143,164,184,0.20), rgba(168,188,200,0.10))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                color: '#8ba8c0',
              }}
            >
              <SchoolIcon sx={{ fontSize: 22 }} />
            </Box>
            <Box sx={{ position: 'relative', zIndex: 1, flex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2, mb: 0.5, flexWrap: 'wrap' }}>
                <Typography sx={{ fontSize: '1.1rem', fontWeight: 700, color: 'text.primary' }}>
                  {edu.school}
                </Typography>
                <Typography sx={{ color: '#8ba8c0', fontFamily: '"SF Mono", "Fira Code", monospace', fontSize: '0.75rem' }}>
                  {edu.period}
                </Typography>
              </Box>
              <Typography sx={{ color: '#8fa4b8', fontSize: '0.85rem', fontWeight: 600, mb: 1 }}>
                {edu.degree} · {edu.major}
              </Typography>
              {edu.description && (
                <Typography sx={{ color: 'text.secondary', fontSize: '0.82rem', lineHeight: 1.8 }}>
                  {edu.description}
                </Typography>
              )}
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
}

export default Education;
