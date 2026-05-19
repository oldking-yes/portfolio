# 鱼皮 vs 你的技术栈对比分析

## 鱼皮三大代表项目

### yu-ai-code-mother（AI 零代码生成平台）1.7k ⭐
| 层 | 技术 |
|----|------|
| 前端 | Vue 3, TypeScript |
| 后端 | **Spring Boot 3** + Java 82% |
| 微服务 | Spring Cloud Alibaba, **Dubbo RPC** |
| AI | **LangChain4j**, **LangGraph4j**, Tool Calling |
| 数据库 | MySQL, Redis, Caffeine |
| 监控 | **Prometheus + Grafana**, ARMS |
| 部署 | Nginx, SSE 流式 |

### mianshiya（面试刷题平台）5.4k ⭐
| 层 | 技术 |
|----|------|
| 前端 | **React**, Umi, Ant Design Pro, TypeScript, Less, Webpack |
| 后端 | Node.js, **Express**, 腾讯云云开发 |
| 数据库 | MongoDB, Redis, **Elasticsearch** |
| 部署 | Docker, Nginx, CDN, 微信云托管 |

### yuindex（极客浏览器主页）2.1k ⭐
| 层 | 技术 |
|----|------|
| 前端 | Vue 3, Vite, TypeScript, Ant Design Vue, Pinia |
| 后端 | Node.js, Express, Sequelize, MySQL, Redis |
| 部署 | Docker |

---

## 你的四个项目技术栈

| 层 | heritage | arknights | refine | ink |
|----|----------|-----------|--------|-----|
| 前端 | React 19 + TS | React 19 + TS | Next.js 16 | SVG + Canvas |
| 小程序 | 微信原生 | — | — | — |
| 后端 | FastAPI | — | Next.js API | Cloudflare Worker |
| AI | **豆包LLM** + TTS | — | **DeepSeek** | **DeepSeek** |
| 推荐 | CRS 引擎 | 欧氏距离 | — | — |
| 图谱 | **Neo4j** | — | — | — |
| DB | SQLAlchemy + SQLite/PG | — | **Supabase PG** | — |
| 测试 | — | **Vitest** | — | — |
| 部署 | Vercel | GH Pages + PWA | Vercel | GH Pages + CF |

---

## 核心差异

### 1. 后端语言栈

| 鱼皮 | 你 |
|------|-----|
| **Java / Spring Boot**（企业级） | **Python / FastAPI**（轻量快速） |
| Dubbo RPC 微服务 | 单体/Serverless |
| 腾讯云全家桶 | Vercel + Cloudflare + Supabase |

**评价**：鱼皮走的是大厂路线（阿里系微服务），你走的是独立开发者/创业路线（现代轻栈）。两种都对，但目标公司不同。如果投字节/腾讯，鱼皮的栈更匹配；如果投 AI 创业公司，你的栈更有说服力。

### 2. AI 集成深度

| 维度 | 鱼皮 | 你 |
|------|------|------|
| AI 框架 | LangChain4j + LangGraph4j | 原生 fetch + prompt engineering |
| 模型 | DeepSeek（兼容多模型） | **豆包 + DeepSeek** |
| AI 产品 | 1 个（代码生成） | **4 个**（推荐/对话/人格克隆/AI水墨） |
| Agent 能力 | LangGraph4j 工作流 | ASK-REC 决策引擎 |
| 知识图谱 | 无 | **Neo4j 200+ 节点** |

**评价**：鱼皮有更强的 AI 工程框架经验（LangChain4j/LangGraph4j），但你的 AI 产品化经验更广——4 个项目覆盖了推荐、对话、人格建模、创意生成四个场景。这是你的核心差异化优势。

### 3. 部署架构

| 鱼皮 | 你 |
|------|-----|
| Docker + Nginx + 云托管 | **Vercel + Cloudflare Workers + GitHub Pages** |
| Prometheus 监控 | 无生产监控 |
| Elasticsearch 搜索 | 无搜索引擎 |

**评价**：鱼皮有完整的生产运维意识（监控/报警/日志），你目前更偏开发体验优化（自动部署/边缘计算）。这不是技术差距，而是你还没遇到"项目上线后服务崩了"的痛——工作后会补上。

### 4. 前端风格

| 鱼皮 | 你 |
|------|-----|
| Ant Design（企业级组件库） | Tailwind CSS（原子化手写） |
| Vue / React 各用各的 | 统一 React/Next.js |
| 组件复用（Ant Design Pro 整套） | 手写设计系统（theme变量+CSS动画） |

**评价**：鱼皮的前端"快"（靠组件库快速搭建），你的前端"精"（手写动画引擎、分享卡片 Canvas）。鱼皮的写法更适合大团队协作，你的写法更能展示对前端的深度掌控。

---

## 你的优势 vs 鱼皮

| 你在哪些方面超过他 | 他在哪些方面值得你学 |
|-------------------|-------------------|
| **AI 产品广度**：4 个 AI 项目 vs 1 个 | **运维意识**：Prometheus/Docker/ELK |
| **知识图谱**：Neo4j 实战 | **微服务**：Dubbo RPC 经验 |
| **多模型融合**：豆包+DeepSeek | **搜索引擎**：Elasticsearch |
| **前端创意**：Canvas/WebAudio/SVG | **团队协作**：组件库/规范/Ant Design |
| **跨平台**：小程序+Web+SPA | **面试题积累**：1 万+题库 |

---

## 对标建议

1. **如果面试 AI 创业公司**：你的栈就是最佳答案——FastAPI + DeepSeek + Supabase + Vercel，和他们用的完全一致
2. **如果要补的**：加一个 Elasticsearch 或向量数据库到某个项目（哪怕只是实验），在自我介绍时提一句"对搜索/召回有认知"
3. **不要学的**：鱼皮的 Java/Spring Boot 栈——那是另一个方向，你不需要转向
4. **可以学的**：鱼皮每个项目都有「保姆级教程」+「简历写法」+「面试题解」——你也可以在 arknights 或 refine 的 README 结尾加一段「面试官可能问什么」
