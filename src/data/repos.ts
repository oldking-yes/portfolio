export interface Repo {
  name: string;
  displayName: string;
  description: string;
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
      '基于对话推荐引擎的全栈应用——融合 AI 对话、五级回退问答策略与知识图谱推荐解释生成，16 张数据表架构。',
    language: 'Python',
    stars: 0,
    url: 'https://github.com/oldking-yes/heritage-crs-platform',
    techStack: ['Python', 'FastAPI', 'SQLAlchemy', '微信小程序'],
    icon: '🏛️',
    gradient: 'linear-gradient(135deg, #0c1929, #1a2a4a)',
    image: '/projects/heritage.png',
    previewUrl: 'https://frontend-l76hlj7sd-kukik-s-projects.vercel.app',
  },
  {
    name: 'arknights-personality-v2',
    displayName: 'AI 人格测试引擎',
    description:
      'LLM 驱动的对话式人格评测应用，React + Tailwind 构建的交互问答与结果推理系统。',
    language: 'TypeScript',
    stars: 1,
    url: 'https://github.com/oldking-yes/arknights-personality-v2',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    icon: '🎮',
    gradient: 'linear-gradient(135deg, #0c1929, #1a1a3a)',
    image: '/projects/arknight.png',
    previewUrl: 'https://oldking-yes.github.io/arknights-personality-v2/',
  },
  {
    name: 'refine-yourself',
    displayName: 'AI 人格克隆',
    description:
      '对话数据驱动的 AI 人格克隆系统——从聊天记录提取特征并训练个性化 AI 分身。',
    language: 'TypeScript',
    stars: 0,
    url: 'https://github.com/oldking-yes/refine-yourself',
    techStack: ['TypeScript', 'AI/LLM', 'Node.js'],
    icon: '🤖',
    gradient: 'linear-gradient(135deg, #0c1929, #0a2a3a)',
    previewUrl: 'https://refine-yourself.vercel.app',
  },
  {
    name: 'ink-studio',
    displayName: '前端设计实验室',
    description:
      '前端交互与视觉表达实验项目，探索创意 Web 技术与 UI 动效。',
    language: 'HTML',
    stars: 0,
    url: 'https://github.com/oldking-yes/ink-studio',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    icon: '🎨',
    gradient: 'linear-gradient(135deg, #0c1929, #2a1a1a)',
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
