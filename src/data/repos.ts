export interface Repo {
  name: string;
  displayName: string;
  description: string;
  language: string;
  stars: number;
  updatedAt: string;
  url: string;
  techStack: string[];
  themeColor: string;
  icon: string;
  previewUrl?: string;
}

export const repos: Repo[] = [
  {
    name: 'arknight-personality-v2',
    displayName: '干员人格测试',
    description:
      '基于 React + Tailwind 的明日方舟干员人格测试应用，通过趣味问答匹配你的干员人格。',
    language: 'TypeScript',
    stars: 1,
    updatedAt: '2026-05-16',
    url: 'https://github.com/oldking-yes/arknight-personality-v2',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    themeColor: '#667eea',
    icon: '🎮',
  },
  {
    name: 'heritage-crs-platform',
    displayName: '非遗文化平台',
    description:
      '基于 CRS 推荐系统的非遗文化传播平台——毕业设计项目，融合 AI 数字人与知识图谱技术。',
    language: 'Python',
    stars: 0,
    updatedAt: '2026-05-16',
    url: 'https://github.com/oldking-yes/heritage-crs-platform',
    techStack: ['Python', 'FastAPI', 'SQLAlchemy', 'WeChat Mini Program'],
    themeColor: '#c41e3a',
    icon: '🏛️',
  },
  {
    name: 'refine-yourself',
    displayName: 'AI 人格克隆',
    description:
      '从聊天记录中克隆 AI 人格，利用对话数据训练个性化 AI 分身，探索 AI 与人格模拟的前沿技术。',
    language: 'TypeScript',
    stars: 0,
    updatedAt: '2026-05-17',
    url: 'https://github.com/oldking-yes/refine-yourself',
    techStack: ['TypeScript', 'AI/LLM', 'Node.js'],
    themeColor: '#06b6d4',
    icon: '🤖',
  },
  {
    name: 'ink-studio',
    displayName: '墨水工作室',
    description:
      '创意数字工作室项目，聚焦前端交互技术与视觉表达。（项目描述待补充）',
    language: 'HTML',
    stars: 0,
    updatedAt: '2026-05-17',
    url: 'https://github.com/oldking-yes/ink-studio',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    themeColor: '#f59e0b',
    icon: '🎨',
  },
];

export interface Skill {
  name: string;
  category: string;
  color: string;
}

export const skills: Skill[] = [
  { name: 'React', category: '前端', color: '#61dafb' },
  { name: 'TypeScript', category: '语言', color: '#3178c6' },
  { name: 'Python', category: '语言', color: '#3572a5' },
  { name: 'FastAPI', category: '后端', color: '#009688' },
  { name: 'Tailwind CSS', category: '前端', color: '#06b6d4' },
  { name: 'SQLAlchemy', category: '后端', color: '#d33682' },
  { name: 'Node.js', category: '后端', color: '#339933' },
  { name: 'HTML/CSS', category: '前端', color: '#e34c26' },
  { name: '微信小程序', category: '前端', color: '#07c160' },
  { name: 'Vite', category: '工具', color: '#646cff' },
];

export const githubUser = {
  username: 'oldking-yes',
  displayName: '老王',
  avatarUrl: 'https://avatars.githubusercontent.com/u/54438040?v=4',
  bio: '全栈开发者 · 非遗文化数字化 · AI 人格探索 · 游戏爱好者',
  githubUrl: 'https://github.com/oldking-yes',
  createdAt: '2019-08',
  tags: ['全栈开发', '非遗文化', 'AI 探索', '游戏开发'],
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/oldking-yes', icon: 'github' },
  ],
};
