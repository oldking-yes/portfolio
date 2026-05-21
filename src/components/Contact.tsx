import { Box, Container, Typography, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { githubUser } from '../data/repos';

function Contact(): JSX.Element {
  return (
    <Box component="section" id="contact" sx={{ py: { xs: 6, md: 10 }, textAlign: 'center' }}>
      <Container maxWidth="sm">
        <Box className="reveal">
          <Typography
            variant="overline"
            sx={{ color: '#8ba8c0', fontSize: '0.75rem', letterSpacing: '0.12em', fontFamily: '"SF Mono", "Fira Code", monospace' }}
          >
            CONTACT
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mt: 0.5, mb: 3 }}>
            联系我
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 400, mx: 'auto', mb: 5, fontSize: '0.88rem', lineHeight: 1.8 }}>
            {githubUser.jobTarget}
          </Typography>

          {/* Card */}
          <Box
            sx={{
              p: { xs: 4, md: 5 },
              borderRadius: 4,
              border: '1px solid rgba(143,164,184,0.10)',
              background: 'rgba(143,164,184,0.04)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              flexDirection: 'column',
              gap: 2.5,
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '30%',
                left: '20%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle at center, rgba(126,200,232,0.05) 0%, transparent 60%)',
                pointerEvents: 'none',
              },
            }}
          >
            <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              {/* Resume download — BIG primary CTA */}
              <Button
                variant="contained"
                size="large"
                fullWidth
                startIcon={<PictureAsPdfIcon />}
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download
                sx={{
                  py: 2,
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #8fa4b8, #a8bcc8)',
                  color: '#0a0a0a',
                  borderRadius: 2,
                  letterSpacing: '0.02em',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #a0b8cc, #b8d0dc)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 28px rgba(143, 164, 184, 0.35)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                下载简历 (PDF)
              </Button>

              <Button
                variant="outlined" size="large" fullWidth
                startIcon={<GitHubIcon />}
                href={githubUser.githubUrl} target="_blank" rel="noopener noreferrer"
                sx={{
                  py: 1.5, fontSize: '0.82rem', fontWeight: 600,
                  borderColor: 'rgba(255,255,255,0.06)', color: 'text.primary', borderRadius: 2,
                  fontFamily: '"SF Mono", "Fira Code", monospace',
                  '&:hover': { borderColor: '#8fa4b8', backgroundColor: 'rgba(143, 164, 184, 0.06)', transform: 'translateY(-2px)' },
                  transition: 'all 0.3s ease',
                }}
              >
                {githubUser.githubUrl}
              </Button>
              <Button
                variant="outlined" size="large" fullWidth
                startIcon={<EmailIcon />}
                href={`mailto:${githubUser.email}`}
                sx={{
                  py: 1.5, fontSize: '0.82rem', fontWeight: 600,
                  borderColor: 'rgba(255,255,255,0.06)', color: 'text.primary', borderRadius: 2,
                  fontFamily: '"SF Mono", "Fira Code", monospace',
                  '&:hover': { borderColor: '#8ba8c0', backgroundColor: 'rgba(139, 168, 192, 0.06)', color: '#8ba8c0', transform: 'translateY(-2px)' },
                  transition: 'all 0.3s ease',
                }}
              >
                {githubUser.email}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Contact;
