# 炼化自己 · Refine Yourself — 项目深度分析

> 基于源码全量探索（77文件/50源文件/26组件/5 API路由）

## 基本信息
- **仓库**: kukik-s/refine-yourself（⚠️ 非 oldking-yes）
- **框架**: Next.js 16 (App Router) + TypeScript 5 strict
- **规模**: **77 文件** / 50 源文件 / 26 组件(.tsx) / 5 API 路由
- **数据库**: Supabase PostgreSQL + RLS 安全策略
- **AI**: DeepSeek API（原生 fetch，无 SDK）
- **部署**: Vercel（主）+ Zeabur（备）+ 独立域名 refineyourself.asia

## 真实项目规模

| 指标 | 数值 |
|------|------|
| 总文件数 | 77（排除 node_modules/.git/.next） |
| 源代码 | 50 个文件 |
| 组件 | 26 个 .tsx 文件 |
| API 路由 | 5 个 |
| 类型定义 | 3 个 |
| 预置角色数据 | 455 行（12 个名人角色） |
| 全局 CSS | 259 行（含 dark mode） |
| 部署脚本 | zeabur-deploy.mjs 159 行 |

## 功能全景（远比当前卡片丰富）

### 阶段 A — 人格提炼
- 上传 .txt 聊天记录（微信/WhatsApp/Telegram）
- 校验：仅 .txt / 10MB 上限 / 最少 50 字符
- DeepSeek 分析 → 五层人格结构
- **原始数据即用即弃，数据库只存 JSONB 人格文本**

### 阶段 B — 智能对话
- 生成 UUID 分享链接
- System prompt 注入五层人格 + few-shot 样本
- DeepSeek 按角色回复（1-3 句，拒绝暴露 AI 身份）
- 聊天历史仅存 browser localStorage

### 阶段 C — 预置角色广场
- **12 个名人角色**（Elon Musk / Steve Jobs / 罗翔 / 张雪峰 / Einstein / Taylor Swift / 诸葛亮 / 宫崎骏 / 李白 / 孙悟空 / 鲁迅 / 居里夫人）
- 每个角色完整五层人格 + 4 个 few-shot 样本

### 阶段 D — 社交分享
- 分享链接 + 管理令牌
- html-to-image 生成分享卡片（含 QR 码）
- Vercel OG Image：**11 种主题**（tech/minimal/scholar/bold/classic/artistic/ancient/nature/poet/mythic/default）
- 每个分身独立生成动态 OG 社交卡

## 架构

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root Layout
│   ├── page.tsx            # 首页(上传流程) 'use client'
│   ├── [id]/page.tsx       # 聊天页(服务端取数据)
│   └── explore/page.tsx    # 302 跳转
├── api/
│   ├── persona/            # POST(创建分身) GET DELETE
│   ├── chat/[id]/          # POST(数据库分身对话)
│   ├── chat/prebuilt/      # POST(预置角色对话)
│   └── og/                 # GET(OG Image 11主题)
├── components/             # 26 个组件
│   ├── landing/            # Hero, Upload, Processing, Result, Share, PrebuiltGrid
│   ├── chat/               # ChatInterface, Bubble, Input, TypingIndicator, PersonaHeader
│   └── shared/             # Header, Footer, CopyButton, ShareModal
├── lib/
│   ├── deepseek/           # client.ts, persona-prompt.ts, chat-prompt.ts
│   ├── chat-storage.ts     # localStorage 对话持久化
│   ├── validators.ts       # Zod 校验
│   └── utils.ts
├── types/                  # chat.ts, persona.ts, api.ts
├── data/
│   └── prebuilt-personas.ts # 455行 12个角色
└── hooks/
    └── use-in-view.ts
```

## DeepSeek 集成细节

| 场景 | Temperature | Max Tokens | 特殊配置 |
|------|-------------|-----------|---------|
| 人格提炼 | 0.8 | 4096 | JSON mode |
| 聊天回复 | 0.7 | 1024 | Few-shot 注入 |

**prompt 工程**：
- 人格提炼：专业语言风格分析专家角色 → 严格五层 JSON 输出 → 自动脱敏姓名/电话
- 聊天回复：身份 + 表达风格 + 行为规则 + 决策模式 + 4 个 few-shot 对话样本 → 7 条对话规则（语言匹配、简短自然、不暴露 AI 身份等）

## API 路由全貌

| 路由 | 方法 | 功能 |
|------|------|------|
| `/api/persona` | POST | multipart 上传 → Zod 校验 → DeepSeek 分析 → Supabase 写入 |
| `/api/persona/[id]` | GET | 获取公开信息（隐藏 admin_token） |
| `/api/persona/[id]` | DELETE | x-admin-token 验证后删除 |
| `/api/chat/[id]` | POST | 查 Supabase → 构建 prompt → DeepSeek 回复 → chat_count +1 |
| `/api/chat/prebuilt/[slug]` | POST | 预置角色纯推理对话（无需数据库） |
| `/api/og` | GET | Next.js ImageResponse 动态 OG Image 生成 |

## 技术亮点

1. **隐私优先**：原始数据即用即弃，不落数据库
2. **五层人格结构**：identity / rules / expression_style / decision_patterns / conversation_samples
3. **Few-shot 引擎**：对话样本作为 real few-shot 注入 prompt，直接影响生成风格
4. **新旧兼容**：`normalizeProfile()` 统一处理新旧格式
5. **12 个预置角色**：每个含完整五层结构 + 4 个定制样本
6. **OG Image 11 主题**：根据分身类型动态渲染社交分享卡
7. **双部署**：Vercel 主站 + Zeabur 备站 + 自定义域名
8. **dark mode**：CSS 变量驱动

## 当前作品集严重偏差

| 维度 | 当前错误 | 应修正 |
|------|---------|--------|
| 技术栈 | `['TypeScript', 'AI/LLM', 'Node.js']` | `['Next.js 16', 'TypeScript', 'DeepSeek API', 'Supabase', 'PostgreSQL', 'Tailwind CSS 4', 'shadcn/ui']` |
| 定位 | "实验项目" | **SaaS 产品**（77文件/5API/12预置角色/11种OG主题） |
| GitHub | `oldking-yes/refine-yourself` | ⚠️ 核实：实际仓库 `kukik-s/refine-yourself` |
| 域名 | refine-yourself.vercel.app | **refineyourself.asia** |
| 功能 | "特征提取+微调" | **完整SaaS：上传→AI分析→分享→对话** |

## 建议新文案

```
描述: 上传聊天记录 → AI 提炼人格 → 生成数字分身
      77文件 · 26组件 · 5 API · 12预置角色 · DeepSeek 驱动

THINKING: [定位: SaaS 产品]
完整的 AI 人格克隆 SaaS：上传 .txt 聊天记录 → DeepSeek 五层人格分析 →
生成可分享的数字分身链接 → 任何人可与分身进行角色对话。
预置 12 个知名人物角色（Elon Musk/罗翔/李白等）。
Next.js 16 Server Components + Supabase PostgreSQL + Tailwind CSS 4。
Vercel OG Image 11 种主题动态社交卡片渲染。
隐私优先设计：原始数据即用即弃，数据库仅存人格 JSONB 文本。
```

技术栈标注（8标签）：`Next.js 16`, `TypeScript`, `DeepSeek API`, `Supabase`, `PostgreSQL`, `Tailwind CSS 4`, `shadcn/ui`, `Vercel`

## 面试问答准备

Q: "人格克隆怎么做的？"
A: 上传聊天记录 → DeepSeek 语言分析 → 提炼五层人格（身份/行为规则/表达风格/决策模式/对话样本）→ 构建 system prompt → 用户对话时注入人设 + few-shot 样本。77 个源文件、5 个 API 路由、12 个预置角色。原始数据即用即弃。

Q: "为什么用 Supabase 而不是 MongoDB？"
A: 项目定位是轻量 SaaS，Supabase 免费 tier 足够支持 MVP。PostgreSQL + JSONB 兼具结构化查询和非结构化人格存储。RLS 策略实现零代码权限控制。
