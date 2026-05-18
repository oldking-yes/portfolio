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
      '基于 ASK-REC 引擎的多轮对话推荐，五级回退策略（本地→API→LLM）确保回答覆盖率。Neo4j 知识图谱 200+ 节点增强推荐解释，16 张数据表实现用户-内容-交互完整闭环。独立完成从数据库建模到小程序前端的全链路。',
    language: 'Python',
    stars: 0,
    url: 'https://github.com/oldking-yes/heritage-crs-platform',
    techStack: ['Python', 'FastAPI', 'SQLAlchemy', '微信小程序'],
    icon: '🏛️',
    gradient: 'linear-gradient(135deg, #0c1929, #1a2a4a)',
    image: '/projects/项目截图/CRS推荐系统平台.png',
    previewUrl: 'https://frontend-l76hlj7sd-kukik-s-projects.vercel.app',
  },
  {
    name: 'arknights-personality-v2',
    displayName: 'AI 人格测试引擎',
    description:
      'LLM 驱动的对话式人格评测系统——自定义问答引擎实现多轮交互推理，React + TypeScript 构建响应式前端，已部署上线。',
    rationale:
      '自定义对话引擎通过状态机管理问答流程，组件化架构将题目、选项、计分、结果拆分为独立模块。Tailwind CSS 移动端适配，Vite 首屏 1.2s，已部署上线并支持一键分享结果。',
    language: 'TypeScript',
    stars: 1,
    url: 'https://github.com/oldking-yes/arknights-personality-v2',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    icon: '🎮',
    gradient: 'linear-gradient(135deg, #0c1929, #1a1a3a)',
    image: '/projects/项目截图/明日方舟人格测试.png',
    previewUrl: 'https://oldking-yes.github.io/arknights-personality-v2/',
  },
  {
    name: 'refine-yourself',
    displayName: 'AI 人格克隆',
    description:
      '从聊天记录提取语言特征、训练个性化 AI 分身的实验项目——验证数据驱动人格建模的技术可行性。',
    rationale:
      '构建对话数据预处理流水线（清洗→分词→特征提取→向量化），LLM 微调实现性格一致的 AI 代理。Prompt Engineering 约束输出风格，验证了"少量数据复刻人格"的可行性，部署至 refineyourself.asia。',
    language: 'TypeScript',
    stars: 0,
    url: 'https://github.com/oldking-yes/refine-yourself',
    techStack: ['TypeScript', 'AI/LLM', 'Node.js'],
    icon: '🤖',
    gradient: 'linear-gradient(135deg, #0c1929, #0a2a3a)',
    image: '/projects/项目截图/炼化自己.png',
    previewUrl: 'https://refineyourself.asia/',
  },
  {
    name: 'ink-studio',
    displayName: '前端设计实验室',
    description:
      '前端交互与视觉实验项目——纯原生 HTML/CSS/JS 探索创意 Web 技术的表现力边界。',
    rationale:
      '零框架依赖下实践完整的前端创意流程：CSS 3D 画廊、Canvas 粒子系统、Scroll-driven 视差叙事。每个实验独立验证一项技术假设，培养对浏览器渲染、性能优化和细节控制的深度理解。',
    language: 'HTML',
    stars: 0,
    url: 'https://github.com/oldking-yes/ink-studio',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    icon: '🎨',
    gradient: 'linear-gradient(135deg, #0c1929, #2a1a1a)',
    image: '/projects/项目截图/前端设计实验室.png',
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
