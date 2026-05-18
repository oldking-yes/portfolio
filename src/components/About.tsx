import { Box, Container, Typography, Grid2 as Grid } from '@mui/material';

const directions = [
  {
    num: '01',
    title: '全栈开发',
    desc: '从微信小程序到 FastAPI 后端，独立完成从数据库设计到前端交互的全链路开发。',
  },
  {
    num: '02',
    title: '非遗文化数字化',
    desc: '构建 CRS 推荐系统驱动的非遗文化传播平台，融合 AI 数字人与知识图谱技术。',
  },
  {
    num: '03',
    title: 'AI 应用探索',
    desc: '研究 AI 数字人对话、五级回退策略问答与 LLM 人格克隆等前沿方向。',
  },
];

function About(): JSX.Element {
  return (
    <Box component="section" id="about" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left: Intro */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box className="reveal">
              <Typography
                variant="overline"
                sx={{ color: '#7ec8e8', fontSize: '0.75rem', letterSpacing: '0.12em', fontFamily: '"SF Mono", "Fira Code", monospace', mb: 1, display: 'block' }}
              >
                ABOUT
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.8rem', md: '2.5rem' },
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                用技术
                <Box component="span" sx={{ background: 'linear-gradient(135deg, #c8a96e, #7ec8e8)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {' '}传承文化
                </Box>
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '0.92rem', lineHeight: 1.9, mb: 2 }}>
                你好，我是老王。一名热爱技术的全栈开发者，专注于用数字化手段保护和传播中国非物质文化遗产。
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '0.92rem', lineHeight: 1.9 }}>
                从微信小程序到 AI 对话系统，从数据库设计到推荐算法——我享受从零到一构建完整产品的过程。
              </Typography>
            </Box>
          </Grid>

          {/* Right: Bento Grid */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
              {/* Stats card — glow behind */}
              <Box
                className="glass-hover"
                sx={{
                  gridColumn: { sm: 'span 2' },
                  p: 3,
                  borderRadius: 3,
                  border: '1px solid rgba(200,169,110,0.06)',
                  background: 'rgba(200,169,110,0.03)',
                  backdropFilter: 'blur(12px)',
                  display: 'flex',
                  gap: 3,
                  flexWrap: 'wrap',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '30%',
                    left: '40%',
                    width: '200%',
                    height: '200%',
                    background: 'radial-gradient(circle at center, rgba(126,200,232,0.06) 0%, transparent 60%)',
                    pointerEvents: 'none',
                  },
                }}
              >
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.7rem', fontFamily: '"SF Mono", "Fira Code", monospace' }}>
                    GitHub 注册
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#7ec8e8' }}>
                    2019.08
                  </Typography>
                </Box>
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.7rem', fontFamily: '"SF Mono", "Fira Code", monospace' }}>
                    开源项目
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#7ec8e8' }}>
                    4 个
                  </Typography>
                </Box>
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.7rem', fontFamily: '"SF Mono", "Fira Code", monospace' }}>
                    技术领域
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#7ec8e8' }}>
                    全栈·AI·文化
                  </Typography>
                </Box>
              </Box>

              {/* Direction cards — each with subtle glow */}
              {directions.map((dir) => (
                <Box
                  key={dir.title}
                  className="glass-hover"
                  sx={{
                    p: 2.5,
                    borderRadius: 3,
                    border: '1px solid rgba(200,169,110,0.06)',
                    background: 'rgba(200,169,110,0.03)',
                    backdropFilter: 'blur(12px)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: '150%',
                      height: '150%',
                      transform: 'translate(-50%, -50%)',
                      background: 'radial-gradient(circle at center, rgba(126,200,232,0.04) 0%, transparent 60%)',
                      opacity: 0,
                      transition: 'opacity 0.5s ease',
                      pointerEvents: 'none',
                    },
                    '&:hover::before': { opacity: 1 },
                  }}
                >
                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography variant="body2" sx={{ color: '#7ec8e8', fontFamily: 'monospace', fontSize: '0.75rem', mb: 1 }}>
                      {dir.num}
                    </Typography>
                    <Typography variant="h4" sx={{ fontSize: '1rem', fontWeight: 600, mb: 1, color: 'text.primary' }}>
                      {dir.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.8rem', lineHeight: 1.7 }}>
                      {dir.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
