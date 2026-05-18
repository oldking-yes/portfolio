import { useRef, useEffect, useState, useCallback } from 'react';
import { Box, Container, Typography, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { repos } from '../data/repos';

function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL ?? '/';
  return `${base}${path.startsWith('/') ? path.slice(1) : path}`;
}

// Infinite loop: prepend last, append first
const n = repos.length;
const loopRepos = [repos[n - 1], ...repos, repos[0]];

function Projects(): JSX.Element {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [realIndex, setRealIndex] = useState(0);
  const jumping = useRef(false);

  const snapTo = useCallback((realIdx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollIdx = realIdx + 1; // +1 for the prepended clone
    jumping.current = true;
    el.scrollTo({ left: scrollIdx * el.clientWidth, behavior: 'instant' as ScrollBehavior });
    setRealIndex(realIdx);
    setTimeout(() => { jumping.current = false; }, 100);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Start at first real item (index 1 in loopRepos)
    el.scrollTo({ left: el.clientWidth, behavior: 'instant' as ScrollBehavior });

    const handleScroll = () => {
      if (jumping.current) return;
      const w = el.clientWidth;
      const idx = Math.round(el.scrollLeft / w);

      if (idx === 0) {
        snapTo(n - 1); // jumped to clone of last → real last
      } else if (idx === n + 1) {
        snapTo(0); // jumped to clone of first → real first
      } else {
        setRealIndex(idx - 1);
      }
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [snapTo]);

  return (
    <Box component="section" id="projects" sx={{ py: { xs: 8, md: 14 } }}>
      <Container maxWidth="lg">
        {/* Section header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }} className="reveal">
          <Typography variant="overline" sx={{ color: '#8ba8c0', fontSize: '0.75rem', letterSpacing: '0.12em', fontFamily: '"SF Mono", "Fira Code", monospace' }}>
            PROJECTS
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, fontWeight: 700, mt: 1 }}>
            开源项目
          </Typography>
        </Box>

        {/* Scroll-snap carousel */}
        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            '&::-webkit-scrollbar': { display: 'none' },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            mx: 'calc(-50vw + 50%)',
            px: { xs: 'calc(50vw - 170px)', md: 'calc(50vw - 420px)' },
            gap: { xs: 2, md: 3 },
            pb: 2,
          }}
        >
          {loopRepos.map((repo, i) => (
            <Box
              key={`${repo.name}-${i}`}
              component="a"
              href={repo.previewUrl || repo.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                flex: '0 0 auto',
                width: { xs: 'calc(100vw - 48px)', sm: 500, md: 680 },
                scrollSnapAlign: 'center',
                textDecoration: 'none',
                borderRadius: 3,
                border: '1px solid rgba(143,164,184,0.08)',
                background: 'rgba(143,164,184,0.03)',
                backdropFilter: 'blur(12px)',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  borderColor: 'rgba(143,164,184,0.22)',
                },
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(ellipse at 50% 0%, rgba(160,216,240,0.04) 0%, transparent 60%)',
                  pointerEvents: 'none',
                  zIndex: 1,
                },
              }}
            >
              {/* Screenshot */}
              {repo.image ? (
                <Box
                  component="img"
                  src={assetUrl(repo.image)}
                  alt={repo.displayName}
                  sx={{
                    width: '100%',
                    height: { xs: 180, sm: 220, md: 280 },
                    objectFit: 'cover',
                    objectPosition: 'top',
                    display: 'block',
                  }}
                />
              ) : (
                <Box
                  sx={{
                    height: { xs: 140, sm: 180, md: 220 },
                    background: repo.gradient,
                  }}
                />
              )}

              {/* Card body */}
              <Box sx={{ p: { xs: 2.5, md: 4 }, position: 'relative', zIndex: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  <GitHubIcon sx={{ fontSize: 18, color: '#8ba8c0', flexShrink: 0 }} />
                  <Box>
                    <Typography sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, fontWeight: 700, color: '#e8e0d0' }}>
                      {repo.displayName}
                    </Typography>
                    <Typography sx={{ color: '#8ba8c0', fontFamily: '"SF Mono", "Fira Code", monospace', fontSize: '0.65rem' }}>
                      {repo.name}
                    </Typography>
                  </Box>
                </Box>

                <Typography sx={{ color: 'text.secondary', mb: 2.5, fontSize: '0.85rem', lineHeight: 1.7 }}>
                  {repo.description}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                  {repo.techStack.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(143, 164, 184, 0.08)',
                        color: '#a8bcc8',
                        border: '1px solid rgba(143, 164, 184, 0.14)',
                        fontSize: '0.68rem',
                        fontWeight: 600,
                        height: 24,
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Progress indicator */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, mt: 3 }}>
          {repos.map((_, i) => (
            <Box
              key={i}
              onClick={() => snapTo(i)}
              sx={{
                width: i === realIndex ? 24 : 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: i === realIndex ? '#8ba8c0' : 'rgba(255,255,255,0.12)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Projects;
