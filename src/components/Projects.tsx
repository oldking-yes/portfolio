import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Grid2 as Grid,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import StarIcon from '@mui/icons-material/Star';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { repos } from '../data/repos';

/** Format a date string into a relative "X time ago" style */
function formatTimeAgo(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 1) return '今天';
  if (diffDays < 7) return `${diffDays} 天前`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} 周前`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} 个月前`;
  return `${Math.floor(diffDays / 365)} 年前`;
}

function Projects(): JSX.Element {
  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #0f0f1a 0%, #0a0a0a 100%)',
      }}
    >
      <Container maxWidth="lg">
        {/* Section header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="overline"
            sx={{
              color: 'secondary.main',
              letterSpacing: '0.15em',
              fontSize: '0.75rem',
              fontWeight: 600,
            }}
          >
            PROJECTS
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 700,
              mt: 1,
            }}
          >
            开源项目
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 3,
              background: 'linear-gradient(90deg, #c41e3a, #c9a94e)',
              mx: 'auto',
              mt: 2,
              borderRadius: 2,
            }}
          />
        </Box>

        {/* Project cards grid */}
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {repos.map((repo, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={repo.name}>
              <Card
                className="card-hover"
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  opacity: 0,
                  animation: `fadeInUp 0.6s ease-out ${0.12 * (index + 1)}s forwards`,
                  borderColor: 'rgba(201, 169, 78, 0.08)',
                  overflow: 'hidden',
                  borderRadius: 3,
                  '&:hover': {
                    borderColor: 'rgba(201, 169, 78, 0.25)',
                    '& .card-visual': {
                      transform: 'scale(1.05)',
                    },
                    '& .card-visual-overlay': {
                      opacity: 1,
                    },
                  },
                }}
              >
                {/* Visual thumbnail area */}
                <Box
                  className="card-visual"
                  sx={{
                    height: { xs: 140, md: 170 },
                    background: `linear-gradient(135deg, ${repo.themeColor}30, ${repo.themeColor}10)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    transition: 'transform 0.4s ease',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      background: `radial-gradient(circle at 70% 30%, ${repo.themeColor}20, transparent 70%)`,
                    },
                  }}
                >
                  {/* Decorative grid dots */}
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      opacity: 0.06,
                      backgroundImage: `radial-gradient(circle, ${repo.themeColor} 1px, transparent 1px)`,
                      backgroundSize: '24px 24px',
                    }}
                  />
                  {/* Icon */}
                  <Typography
                    sx={{
                      fontSize: { xs: '3.5rem', md: '4.5rem' },
                      lineHeight: 1,
                      position: 'relative',
                      zIndex: 1,
                      filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))',
                      animation: `fadeIn 0.8s ease-out ${0.2 * (index + 1)}s forwards`,
                    }}
                  >
                    {repo.icon}
                  </Typography>
                </Box>

                <CardContent sx={{ flex: 1, p: { xs: 2.5, md: 3 }, pb: 1 }}>
                  {/* Name + stars row */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      mb: 1,
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: { xs: '1rem', md: '1.15rem' },
                        fontWeight: 700,
                        fontFamily: 'monospace',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {repo.displayName}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.3, ml: 1, flexShrink: 0 }}>
                      <StarIcon sx={{ fontSize: 15, color: 'secondary.main' }} />
                      <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                        {repo.stars}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      mb: 2,
                      fontSize: '0.82rem',
                      lineHeight: 1.7,
                      minHeight: { xs: 'auto', md: 44 },
                    }}
                  >
                    {repo.description}
                  </Typography>

                  {/* Tech stack chips */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                    {repo.techStack.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          height: 24,
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          bgcolor: 'rgba(255,255,255,0.04)',
                          color: 'rgba(255,255,255,0.7)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          '&:hover': {
                            bgcolor: `${repo.themeColor}20`,
                            color: repo.themeColor,
                            borderColor: `${repo.themeColor}40`,
                          },
                          transition: 'all 0.2s ease',
                        }}
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </CardContent>

                <CardActions
                  sx={{
                    px: { xs: 2.5, md: 3 },
                    pb: { xs: 2.5, md: 3 },
                    pt: 0.5,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {/* Date */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <CalendarTodayIcon sx={{ fontSize: 12, color: 'text.secondary' }} />
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.7rem' }}>
                      {formatTimeAgo(repo.updatedAt)}
                    </Typography>
                  </Box>

                  {/* Actions */}
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      size="small"
                      startIcon={<GitHubIcon />}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        minWidth: 0,
                        fontSize: '0.75rem',
                        color: 'rgba(255,255,255,0.6)',
                        borderColor: 'rgba(255,255,255,0.1)',
                        py: 0.3,
                        '&:hover': {
                          color: 'primary.main',
                          borderColor: 'primary.main',
                          backgroundColor: 'rgba(196, 30, 58, 0.08)',
                        },
                      }}
                      variant="outlined"
                    >
                      源码
                    </Button>
                    {repo.previewUrl && (
                      <Button
                        size="small"
                        startIcon={<OpenInNewIcon />}
                        href={repo.previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          minWidth: 0,
                          fontSize: '0.75rem',
                          color: 'secondary.main',
                          borderColor: 'rgba(201, 169, 78, 0.3)',
                          py: 0.3,
                          '&:hover': {
                            borderColor: 'secondary.main',
                            backgroundColor: 'rgba(201, 169, 78, 0.08)',
                          },
                        }}
                        variant="outlined"
                      >
                        Demo
                      </Button>
                    )}
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
