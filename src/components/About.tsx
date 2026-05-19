import { Box, Container, Typography, Grid2 as Grid } from '@mui/material';

const directions = [
  {
    num: '01',
    title: 'AI Agent 开发',
    desc: '熟悉 LangChain、ReAct 框架与 AI 编程工具链，具备 AI 应用从原型设计到生产落地的全链路能力。',
  },
  {
    num: '02',
    title: '全栈开发',
    desc: 'React + FastAPI + SQLAlchemy 全栈开发，微信小程序生态，从数据库到前端的端到端实现。',
  },
  {
    num: '03',
    title: '推荐系统与数据工程',
    desc: 'CRS 对话推荐引擎、知识图谱构建、五级回退策略问答——完整的数据驱动推荐系统实践经验。',
  },
];

function About(): JSX.Element {
  return (
    <Box component="section" id="about" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left: Intro */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box className="reveal">
              <Typography
                variant="overline"
                sx={{ color: '#8ba8c0', fontSize: '0.75rem', letterSpacing: '0.12em', fontFamily: '"SF Mono", "Fira Code", monospace', mb: 1, display: 'block' }}
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
                全栈构建
                <Box component="span" sx={{ background: 'linear-gradient(135deg, #8fa4b8, #a8bcc8)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {' '}· AI 驱动
                </Box>
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '0.92rem', lineHeight: 1.9, mb: 2 }}>
                数据科学与大数据专业，AI Agent 开发者。善于利用 Claude Code 等 AI 编程工具高效构建全栈应用。
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '0.92rem', lineHeight: 1.9, mb: 2 }}>
                从微信小程序到 AI 对话系统，从数据库设计到推荐算法——我享受从零到一构建完整产品的过程。毕业设计融合了 CRS 推荐系统、知识图谱与 LLM 对话引擎，是对推荐系统与 AI 应用的一次全栈实践。
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '0.92rem', lineHeight: 1.9 }}>
                熟悉 LangChain、ReAct 等 Agent 框架，具备 AI 应用从原型到落地的全链路开发能力。持续探索 AI Agent、LLM 应用与编程效率工具的创新边界。
              </Typography>
            </Box>
          </Grid>

          {/* Right: Direction cards */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
              {/* Featured card — spans full width */}
              <Box
                className="glass-hover"
                sx={{
                  gridColumn: { sm: 'span 2' },
                  p: 3,
                  borderRadius: 3,
                  border: '1px solid rgba(143,164,184,0.08)',
                  background: 'rgba(143,164,184,0.04)',
                  backdropFilter: 'blur(12px)',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '30%',
                    left: '40%',
                    width: '200%',
                    height: '200%',
                    background: 'radial-gradient(circle at center, rgba(160,216,240,0.05) 0%, transparent 60%)',
                    pointerEvents: 'none',
                  },
                }}
              >
                <Typography variant="body2" sx={{ position: 'relative', zIndex: 1, color: '#8ba8c0', fontFamily: '"SF Mono", "Fira Code", monospace', fontSize: '0.7rem', mb: 0.5 }}>
                  PHILOSOPHY
                </Typography>
                <Typography variant="h4" sx={{ position: 'relative', zIndex: 1, fontSize: '1rem', fontWeight: 600, color: 'text.primary', lineHeight: 1.7 }}>
                  用 AI 加速构建 · 追求全栈闭环 · 持续交付
                </Typography>
              </Box>

              {/* Direction cards */}
              {directions.map((dir) => (
                <Box
                  key={dir.title}
                  className="glass-hover"
                  sx={{
                    p: 2.5,
                    borderRadius: 3,
                    border: '1px solid rgba(143,164,184,0.08)',
                    background: 'rgba(143,164,184,0.04)',
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
                      background: 'radial-gradient(circle at center, rgba(160,216,240,0.04) 0%, transparent 60%)',
                      opacity: 0,
                      transition: 'opacity 0.5s ease',
                      pointerEvents: 'none',
                    },
                    '&:hover::before': { opacity: 1 },
                  }}
                >
                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography variant="body2" sx={{ color: '#8ba8c0', fontFamily: 'monospace', fontSize: '0.75rem', mb: 1 }}>
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
