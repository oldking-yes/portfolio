import { Box, Container, Typography, Avatar, Button, Chip, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { githubUser, repos } from '../data/repos';

function Hero(): JSX.Element {
  const langCount = new Set(repos.map((r) => r.language)).size;

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background:
          'linear-gradient(180deg, #0a0a0a 0%, #0f0f1a 40%, #12121a 60%, #0a0a0a 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'radial-gradient(circle at 30% 25%, rgba(196, 30, 58, 0.10) 0%, transparent 60%), radial-gradient(circle at 70% 75%, rgba(6, 182, 212, 0.06) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(201, 169, 78, 0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      {/* Decorative lines */}
      <Box
        sx={{
          position: 'absolute',
          top: '12%',
          left: '4%',
          width: '140px',
          height: '2px',
          background:
            'linear-gradient(90deg, transparent, rgba(201, 169, 78, 0.25), transparent)',
          transform: 'rotate(-12deg)',
          display: { xs: 'none', md: 'block' },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '18%',
          right: '6%',
          width: '100px',
          height: '2px',
          background:
            'linear-gradient(90deg, transparent, rgba(196, 30, 58, 0.2), transparent)',
          transform: 'rotate(18deg)',
          display: { xs: 'none', md: 'block' },
        }}
      />

      <Container maxWidth="sm" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Avatar */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 3,
            animation: 'fadeIn 1s ease-out forwards',
          }}
        >
          <Avatar
            src={githubUser.avatarUrl}
            alt={githubUser.username}
            sx={{
              width: { xs: 120, sm: 150, md: 170 },
              height: { xs: 120, sm: 150, md: 170 },
              border: '3px solid rgba(201, 169, 78, 0.3)',
              boxShadow:
                '0 0 60px rgba(196, 30, 58, 0.15), 0 0 120px rgba(201, 169, 78, 0.05)',
              transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow:
                  '0 0 80px rgba(196, 30, 58, 0.25), 0 0 160px rgba(201, 169, 78, 0.1)',
              },
            }}
          />
        </Box>

        {/* Username */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
            fontWeight: 800,
            background: 'linear-gradient(135deg, #e5e5e5 0%, #c9a94e 50%, #e63946 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 0.5,
            letterSpacing: '-0.03em',
            animation: 'fadeInUp 0.8s ease-out 0.15s forwards',
            opacity: 0,
          }}
        >
          {githubUser.displayName}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: 'text.secondary',
            fontWeight: 400,
            mb: 1,
            fontSize: { xs: '0.9rem', sm: '1.1rem' },
            animation: 'fadeInUp 0.8s ease-out 0.25s forwards',
            opacity: 0,
            letterSpacing: '0.05em',
          }}
        >
          @{githubUser.username}
        </Typography>

        {/* Bio */}
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            maxWidth: 520,
            mx: 'auto',
            mb: 2.5,
            fontSize: { xs: '0.95rem', sm: '1.05rem' },
            lineHeight: 1.8,
            animation: 'fadeInUp 0.8s ease-out 0.35s forwards',
            opacity: 0,
          }}
        >
          {githubUser.bio}
        </Typography>

        {/* Tags row */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 1,
            mb: 3,
            animation: 'fadeInUp 0.8s ease-out 0.45s forwards',
            opacity: 0,
          }}
        >
          {githubUser.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                borderColor: 'rgba(255,255,255,0.12)',
                fontSize: '0.75rem',
                fontWeight: 500,
                '&:hover': {
                  borderColor: 'secondary.main',
                  color: 'secondary.main',
                },
              }}
              variant="outlined"
            />
          ))}
        </Box>

        {/* Stats row */}
        <Stack
          direction="row"
          spacing={4}
          justifyContent="center"
          sx={{
            mb: 3.5,
            animation: 'fadeInUp 0.8s ease-out 0.55s forwards',
            opacity: 0,
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
              {repos.length}
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              开源项目
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h5" sx={{ fontWeight: 700, color: 'secondary.main' }}>
              {langCount}
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              编程语言
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h5" sx={{ fontWeight: 700, color: '#06b6d4' }}>
              2019
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              GitHub 起始
            </Typography>
          </Box>
        </Stack>

        {/* CTA buttons */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            flexWrap: 'wrap',
            animation: 'fadeInUp 0.8s ease-out 0.65s forwards',
            opacity: 0,
          }}
        >
          <Button
            variant="contained"
            size="large"
            startIcon={<GitHubIcon />}
            href={githubUser.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: 'primary.main',
              px: 4,
              '&:hover': {
                backgroundColor: 'primary.dark',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 24px rgba(196, 30, 58, 0.3)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            GitHub 主页
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={<AutoStoriesIcon />}
            href="#projects"
            sx={{
              borderColor: 'rgba(201, 169, 78, 0.4)',
              color: 'secondary.main',
              px: 4,
              '&:hover': {
                borderColor: 'secondary.main',
                backgroundColor: 'rgba(201, 169, 78, 0.08)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            浏览项目
          </Button>
        </Box>
      </Container>

      {/* Scroll indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 36,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0.5,
          color: 'text.secondary',
          animation: 'fadeIn 1s ease-out 1.5s forwards',
          opacity: 0,
        }}
      >
        <Typography variant="caption" sx={{ fontSize: '0.7rem', letterSpacing: '0.15em' }}>
          SCROLL
        </Typography>
        <KeyboardDoubleArrowDownIcon
          sx={{
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(8px)' },
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default Hero;
