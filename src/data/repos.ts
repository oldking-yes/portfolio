export interface Repo {
  name: string;
  displayName: string;
  description: string;
  rationale: string;
  language: string;
  stars: number;
  url: string;
  previewUrl?: string;
  techStack: string[];
  icon: string;
  gradient: string;
  image?: string;
}

export const repos: Repo[] = [
  {
    name: 'heritage-crs-platform',
    displayName: 'CRS 推荐系统平台',
    description:
      'CRS 对话推荐引擎驱动的全栈应用——集成 AI 对话、知识图谱与微信小程序前端，完整实现从数据库设计到前端部署的全链路。',
    rationale:
      '技术决策：采用 ASK-REC 决策引擎实现多轮对话推荐，五级回退策略（本地知识库 → 远程 API → LLM 兜底）确保 100% 回答覆盖率。知识图谱 Neo4j 存储 200+ 节点，增强推荐解释的可信度。16 张数据表（含 7 张关联表）实现用户画像、内容管理、交互日志的完整闭环。微信小程序前端通过 WXSS 自定义主题实现品牌一致性。独立完成从需求分析、数据库建模、API 设计到前端开发的全部环节。',
    language: 'Python',
    stars: 0,
    url: 'https://github.com/oldking-yes/heritage-crs-platform',
    techStack: ['Python', 'FastAPI', 'SQLAlchemy', '微信小程序'],
    icon: '🏛️',
    gradient: 'linear-gradient(135deg, #0c1929, #1a2a4a)',
    image: '/projects/项目截图/CRS推荐系统平台竖版.png',
    previewUrl: 'https://frontend-l76hlj7sd-kukik-s-projects.vercel.app',
  },
  {
    name: 'arknights-personality-v2',
    displayName: 'AI 人格测试引擎',
    description:
      'LLM 驱动的对话式人格评测系统——自定义问答引擎实现多轮交互推理，React + TypeScript 构建响应式前端，已部署上线。',
    rationale:
      '架构设计：自定义对话引擎通过状态机管理问答流程，支持分支逻辑与结果计算完全解耦。组件化架构将题目渲染、选项交互、分数聚合、结果展示拆分为独立模块，便于扩展新人格类型。采用 Tailwind CSS 实现移动端适配，Vite 构建优化首屏加载至 1.2s。已部署 GitHub Pages，支持一键分享结果卡片，实际用户反馈良好。独立完成从产品构思、交互设计到前端开发的全部环节。',
    language: 'TypeScript',
    stars: 1,
    url: 'https://github.com/oldking-yes/arknights-personality-v2',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    icon: '🎮',
    gradient: 'linear-gradient(135deg, #0c1929, #1a1a3a)',
    image: '/projects/项目截图/明日方舟人格测试竖版.jpg',
    previewUrl: 'https://oldking-yes.github.io/arknights-personality-v2/',
  },
  {
    name: 'refine-yourself',
    displayName: 'AI 人格克隆',
    description:
      '从聊天记录提取语言特征、训练个性化 AI 分身的实验项目——验证数据驱动人格建模的技术可行性。',
    rationale:
      '技术路线：构建完整的对话数据预处理流水线（清洗 → 分词 → 特征提取 → 向量化），基于 LLM 微调实现具有一致性格表达的 AI 代理。核心突破在于性格一致性——通过 Prompt Engineering 约束输出风格，确保 AI 分身的回复语气、用词习惯、情感倾向与原始数据高度一致。部署至 refineyourself.asia，使用 Vercel 实现持续部署。该项目验证了"少量对话数据即可复刻人格"的假设，为后续 AI 角色扮演应用奠定基础。',
    language: 'TypeScript',
    stars: 0,
    url: 'https://github.com/oldking-yes/refine-yourself',
    techStack: ['TypeScript', 'AI/LLM', 'Node.js'],
    icon: '🤖',
    gradient: 'linear-gradient(135deg, #0c1929, #0a2a3a)',
    image: '/projects/项目截图/炼化自己竖版.jpg',
    previewUrl: 'https://refineyourself.asia/',
  },
  {
    name: 'ink-studio',
    displayName: '前端设计实验室',
    description:
      '前端交互与视觉实验项目——纯原生 HTML/CSS/JS 探索创意 Web 技术的表现力边界。',
    rationale:
      '设计理念：在零框架依赖的条件下，实践从视觉构思到代码实现的完整创意流程。核心实验包括 CSS 3D 变换构建的交互式画廊、Canvas 粒子系统生成的动态背景、以及 Scroll-driven 视差叙事页面。每个实验独立验证一项前端技术假设——例如 "CSS-only 能否实现流畅的 60fps 视差？"。该项目刻意不使用任何构建工具或框架，旨在培养对浏览器渲染机制、性能优化和细节控制的深度理解。适合作为前端技术探索的创意沙盒。',
    language: 'HTML',
    stars: 0,
    url: 'https://github.com/oldking-yes/ink-studio',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    icon: '🎨',
    gradient: 'linear-gradient(135deg, #0c1929, #2a1a1a)',
    image: '/projects/项目截图/前端设计实验室竖版.jpg',
    previewUrl: 'https://oldking-yes.github.io/ink-studio/',
  },
];

export interface Skill {
  name: string;
  color: string;
}

export const skills: Skill[] = [
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'Python', color: '#3572a5' },
  { name: 'React', color: '#61dafb' },
  { name: 'FastAPI', color: '#009688' },
  { name: 'SQLAlchemy', color: '#d33682' },
  { name: 'Tailwind', color: '#06b6d4' },
  { name: '微信小程序', color: '#07c160' },
  { name: 'Node.js', color: '#339933' },
];

export const githubUser = {
  username: 'oldking-yes',
  displayName: 'Zixuan Wang',
  avatarUrl: 'https://avatars.githubusercontent.com/u/54438040?v=4',
  bio: '数据科学与大数据专业 · AI Agent 开发者 · Claude Code 深度用户。全栈开发，CRS 推荐系统与 LLM 应用实践经验。',
  tagline: '数据科学 · AI Agent 开发 · Claude Code 生态实践者',
  githubUrl: 'https://github.com/oldking-yes',
  email: '2919178903@qq.com',
};
