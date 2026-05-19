# 四项目逐项技术栈审查 — 对标鱼皮标准

## 鱼皮的「完整项目」标准

从他公开的项目和教程中推断，一个"面试级"的项目应该覆盖：

```
前端框架 + 构建工具 + UI库 + 状态管理 + 测试
后端框架 + ORM + 数据库 + 缓存 + AI/LLM
部署 + CI/CD + 监控 + 文档 + 截图
```

---

## 🏛️ CRS 推荐系统平台

### 实际技术栈（14 项）
```
前端: React 19, TypeScript, Vite, Tailwind CSS
小程序: 微信原生
后端: Python, FastAPI, SQLAlchemy, Uvicorn
数据库: SQLite, PostgreSQL
AI: 豆包LLM, TTS, 本地KB检索
图谱: Neo4j
部署: Vercel
```

### 鱼皮标准对照

| 维度 | 你有吗 | 鱼皮标准 | 差距 |
|------|:---:|------|------|
| 前端框架 | ✅ React 19 | Vue 3 / React | 一致 |
| UI 组件库 | ❌ | Ant Design | 手写 Tailwind，无组件库经验 |
| 状态管理 | ⚠️ zustand | Pinia / Redux | 用了但 README 未提 |
| 微服务/RPC | ❌ | Dubbo | 单体架构，无微服务经验 |
| 缓存 | ❌ | Redis + Caffeine | 无缓存层 |
| 搜索引擎 | ❌ | Elasticsearch | 无全文搜索 |
| 消息队列 | ❌ | Kafka/RabbitMQ | 无异步消息 |
| 监控 | ❌ | Prometheus + Grafana | 无生产监控 |
| CI/CD | ⚠️ | GitHub Actions | Vercel 自动部署，但无 Pipeline badge |
| 容器化 | ❌ | Docker | 无 Dockerfile |
| 测试 | ❌ | JUnit/Vitest | 零测试文件 |
| 截图/GIF | ❌ | 有 | README 无截图 |

### 你的隐藏优势（鱼皮没有的）
- **知识图谱**：Neo4j 200+ 节点 — 鱼皮没有任何项目用图数据库
- **双前端**：小程序 + React SPA — 展示跨平台架构能力
- **CRS 推荐引擎**：8 个专门模块 — 比通用的 LangChain4j 更聚焦特定领域
- **内容治理流水线**：采集→清洗→评分→审核 — 完整的 Data Pipeline 经验

### 建议补充
1. 后端加 Redis 缓存层（哪怕只缓存推荐结果）
2. 加 docker-compose.yml 一键启动全部服务
3. README 放一张系统截图/架构图

---

## 🎮 AI 人格测试引擎

### 实际技术栈（11 项）
```
React 19, TypeScript, Vite, Tailwind CSS 4
Chart.js, Framer Motion, i18next
PWA (vite-plugin-pwa), Vitest
Canvas 2D (分享卡片引擎 642 行)
GitHub Pages, GitHub Actions
```

### 鱼皮标准对照

| 维度 | 你有吗 | 鱼皮标准 | 差距 |
|------|:---:|------|------|
| 前端框架 | ✅ React 19 | Vue 3 / React | 一致 |
| 类型安全 | ✅ TypeScript | TypeScript | 一致 |
| 动画库 | ✅ Framer Motion | — | 你有他没 |
| 图表 | ✅ Chart.js | — | 你有他没 |
| 国际化 | ✅ i18next | — | 你有他没 |
| 单元测试 | ✅ Vitest | JUnit | 一致 |
| PWA | ✅ 离线安装 | — | 你有他没 |
| Badge | ✅ 4 个 | 多个 | 一致 |
| CI/CD | ✅ GitHub Actions | — | 一致 |
| 截图/GIF | ❌ | 有 | 缺截图 |
| 面试题 | ❌ | 1 万+ 题库 | 你是产品不是题库 |

### 你的隐藏优势
- **Canvas 分享引擎 642 行**：从零手写微信/小红书/B站三平台排版 — 鱼皮靠组件库，你手写引擎
- **PWA 离线**：鱼皮的项目都不支持离线
- **中英双语**：i18next 完整翻译 — 鱼皮项目都只有中文

### 建议补充
1. README 放 GIF 动图（录屏答题 → 结果 → 分享卡片 → CP 卡）
2. 加 Playwright E2E 测试（你已经装了 Playwright）

---

## 🤖 AI 人格克隆

### 实际技术栈（12 项）
```
Next.js 16, TypeScript, Tailwind CSS 4
shadcn/ui, base-ui, Lucide
Supabase PostgreSQL, RLS
DeepSeek API (原生 fetch)
Vercel, Vercel OG Image
Zod 校验, ESLint
```

### 鱼皮标准对照

| 维度 | 你有吗 | 鱼皮标准 | 差距 |
|------|:---:|------|------|
| 全栈框架 | ✅ Next.js 16 | Spring Boot | 一致但不同方向 |
| Server Components | ✅ | — | 你有他没 |
| UI 组件库 | ✅ shadcn/ui + base-ui | Ant Design | 一致的现代组件 |
| 数据库 | ✅ Supabase PG | MySQL | 但你有 RLS 安全策略 |
| ORM | ❌ | Sequelize | 直接 SQL + supabase-js |
| 缓存 | ❌ | Redis | 无缓存 |
| API 文档 | ✅ | — | README 有 4 端点文档 |
| OG Image | ✅ 11 主题 | — | 鱼皮无 |
| 隐私设计 | ✅ 原始数据即弃 | — | 产品意识加分 |
| Badge | ❌ | 有 | 缺 |
| 截图 | ❌ | 有 | 缺 |

### 你的隐藏优势
- **Vercel OG Image 11 种主题**：动态社交分享卡 — 这是前端深度展示
- **隐私优先设计**：产品意识，不是技术展示
- **预置 12 个角色**：455 行数据，精心设计的 prompt 和 few-shot 样本

### 建议补充
1. 加 Badge（Next.js/Tailwind/Supabase）
2. 加架构图（目前只有目录树，画个 ASCII 架构图）
3. 🔴 修复 README Clone URL（kukik-s → oldking-yes）

---

## 🎨 墨韵 · AI 水墨

### 实际技术栈（8 项）
```
SVG, Canvas 2D, Web Audio API
CSS Animation, 5 主题系统
DeepSeek API (Cloudflare Worker 代理)
GitHub Pages, Cloudflare Workers
```

### 鱼皮标准对照

| 维度 | 你有吗 | 鱼皮标准 | 差距 |
|------|:---:|------|------|
| 框架 | ❌ 零框架 | Vue/React | 独特定位，非缺点 |
| 构建工具 | ❌ 零构建 | Vite/Webpack | 同上 |
| AI 集成 | ✅ DeepSeek | LangChain4j | 方向不同 |
| Serverless | ✅ Cloudflare Worker | 腾讯云函数 | 一致 |
| Badge | ❌ | 有 | 缺 |
| 项目结构 | ❌ 未列 | 完整目录树 | README 没写 |
| API 文档 | ❌ | 有 | Worker 端点没文档化 |
| 截图 | ❌ | 有 | 水墨项目没图 = 白做 |
| 测试 | ❌ | 有 | 无 |

### 你的隐藏优势
- **单文件 2508 行自包含**：零依赖打造完整产品 — 这是极致工程约束下的创作力
- **题诗作画 + 音景融合**：CSS/SVG/Canvas/WebAudio 四轨并行 — 鱼皮所有项目都没这个量级的创意技术密度
- **5 主题设计系统**：CSS 变量驱动的主题切换 — 这是前端架构思维

### 建议补充（最多差的项目）
1. 🔴 README 加 screenshot/GIF — 水墨项目没有视觉截图等于什么都没展示
2. 🔴 Worker API 文档化（端点、入参、出参、错误码）
3. 🟡 加项目结构说明（哪怕简单列出文件树）
4. 🟡 加 Badge

---

## 汇总：你的技术密度 vs 鱼皮

| 技术维度 | heritage | arknights | refine | ink | 鱼皮平均 |
|---------|:---:|:---:|:---:|:---:|:---:|
| 前端框架 | ✅ | ✅ | ✅ | — | ✅ |
| 后端框架 | ✅ | — | ✅ | ✅ | ✅ |
| 数据库 | ✅ | — | ✅ | — | ✅ |
| AI/LLM | ✅✅ | — | ✅ | ✅ | ✅ |
| 知识图谱 | ✅ | — | — | — | ❌ |
| 测试 | ❌ | ✅ | ❌ | ❌ | ✅ |
| 缓存 | ❌ | — | ❌ | — | ✅ |
| 监控 | ❌ | — | — | — | ✅ |
| Docker | ❌ | — | — | — | ✅ |
| Badge | ❌ | ✅ | ❌ | ❌ | ✅ |
| 截图 | ❌ | ❌ | ❌ | ❌ | ✅ |
| CI/CD | ⚠️ | ✅ | ⚠️ | — | ✅ |
| PWA | — | ✅ | — | — | ❌ |
| i18n | — | ✅ | — | — | ❌ |
| Canvas 引擎 | — | ✅ | — | ✅ | ❌ |

---

## 全局补强优先级

| 优先级 | 项目 | 动作 | 影响 |
|:---:|------|------|------|
| P0 | refine | 修 Clone URL | 面试官 clone 失败 = 直接 pass |
| P0 | ink | 加截图/GIF | 没图等于没做 |
| P1 | heritage | 加 docker-compose + Redis | 展示运维意识 |
| P1 | 全部 | 统一 Badge | 视觉专业度 |
| P2 | heritage + refine | 加测试 | 面试官可能问 |
| P2 | ink | Worker API 文档 | 展示 API 设计能力 |
