import { Box, Container, Typography, IconButton, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FavoriteIcon from '@mui/icons-material/Favorite';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { githubUser } from '../data/repos';

function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 4, md: 5 },
        background: '#0a0a0a',
        borderTop: '1px solid rgba(201, 169, 78, 0.08)',
        position: 'relative',
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        {/* Back to top */}
        <IconButton
          onClick={scrollToTop}
          sx={{
            color: 'text.secondary',
            mb: 1.5,
            border: '1px solid rgba(255,255,255,0.08)',
            '&:hover': {
              color: 'primary.main',
              borderColor: 'primary.main',
              backgroundColor: 'rgba(196, 30, 58, 0.08)',
              transform: 'translateY(-3px)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <KeyboardArrowUpIcon />
        </IconButton>

        {/* Social icons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, mb: 1.5 }}>
          <Tooltip title="GitHub" arrow>
            <IconButton
              href={githubUser.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  color: 'primary.main',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <GitHubIcon sx={{ fontSize: 28 }} />
            </IconButton>
          </Tooltip>
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0.5,
            fontSize: '0.82rem',
          }}
        >
          Built with{' '}
          <FavoriteIcon
            sx={{
              fontSize: 15,
              color: '#c41e3a',
              animation: 'pulse 1.5s infinite',
            }}
          />{' '}
          · © {currentYear} {githubUser.username}
        </Typography>

        {/* Tech badge */}
        <Box
          sx={{
            mt: 1.5,
            display: 'flex',
            justifyContent: 'center',
            gap: 1,
            flexWrap: 'wrap',
          }}
        >
          {['Vite', 'React', 'MUI', 'Tailwind'].map((tech) => (
            <Typography
              key={tech}
              variant="caption"
              sx={{
                color: 'rgba(255,255,255,0.15)',
                fontSize: '0.65rem',
                letterSpacing: '0.05em',
                px: 1,
                py: 0.3,
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 1,
              }}
            >
              {tech}
            </Typography>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
