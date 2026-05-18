export interface Repo {
  name: string;
  displayName: string;
  description: string;
  language: string;
  stars: number;
  url: string;
  techStack: string[];
  icon: string;
  gradient: string;
  image?: string;
}

export const repos: Repo[] = [
  {
    name: 'heritage-crs-platform',
    displayName: '非遗文化传播平台',
    description:
      '基于 CRS 推荐系统的非遗文化传播平台——融合 AI 数字人「黑塔」对话、五级回退策略问答与知识图谱推荐解释生成。',
    language: 'Python',
    stars: 0,
    url: 'https://github.com/oldking-yes/heritage-crs-platform',
    techStack: ['Python', 'FastAPI', 'SQLAlchemy', '微信小程序'],
    icon: '🏛️',
    gradient: 'linear-gradient(135deg, #0c1929, #1a2a4a)',
    image: '/projects/heritage.png',
  },
  {
    name: 'arknights-personality-v2',
    displayName: '干员人格测试',
    description:
      'React + Tailwind 打造的明日方舟干员人格测试应用，通过趣味问答匹配你的干员人格。',
    language: 'TypeScript',
    stars: 1,
    url: 'https://github.com/oldking-yes/arknights-personality-v2',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    icon: '🎮',
    gradient: 'linear-gradient(135deg, #0c1929, #1a1a3a)',
    image: '/projects/arknight.png',
  },
  {
    name: 'refine-yourself',
    displayName: 'AI 人格克隆',
    description:
      '从聊天记录中克隆 AI 人格，利用对话数据训练个性化 AI 分身，探索 AI 与人格模拟技术。',
    language: 'TypeScript',
    stars: 0,
    url: 'https://github.com/oldking-yes/refine-yourself',
    techStack: ['TypeScript', 'AI/LLM', 'Node.js'],
    icon: '🤖',
    gradient: 'linear-gradient(135deg, #0c1929, #0a2a3a)',
  },
  {
    name: 'ink-studio',
    displayName: '墨水工作室',
    description:
      '创意数字工作室项目，聚焦前端交互技术与视觉表达。（项目描述待补充）',
    language: 'HTML',
    stars: 0,
    url: 'https://github.com/oldking-yes/ink-studio',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    icon: '🎨',
    gradient: 'linear-gradient(135deg, #0c1929, #2a1a1a)',
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
  displayName: '老王',
  avatarUrl: 'https://avatars.githubusercontent.com/u/54438040?v=4',
  bio: '全栈开发者，专注于非遗文化数字化与 AI 应用。用代码把传统带进未来。',
  githubUrl: 'https://github.com/oldking-yes',
  email: '2919178903@qq.com',
};
