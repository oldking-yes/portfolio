# 明日方舟人格测试 — 项目深度分析

> 基于源码全量扫描 — 19 源文件 · 20 道题 · 16 干员 · 18 组 CP · 3 平台分享卡

## 基本信息
- **仓库**: oldking-yes/arknights-personality-v2
- **框架**: React 19 + TypeScript + Vite + Tailwind CSS 4
- **版本**: 3.0.0
- **规模**: 19 源文件 + vitest 测试
- **部署**: GitHub Pages + PWA 离线安装
- **语言**: 中英双语（i18next）

## 源文件全貌

```
src/
├── App.tsx                    # 主流程: Intro → Quiz → Results
├── main.tsx                   # React入口
├── index.css                  # Tailwind
├── components/
│   ├── Intro.tsx              # 开场·源石频率校准
│   ├── Quiz.tsx               # 20题问答引擎（corruption效果+选项随机）
│   ├── Results.tsx            # 结果（雷达图+干员+排名+CP）
│   ├── RadarChart.tsx         # Chart.js 五维雷达图
│   └── ErrorBoundary.tsx      # 容错
├── data/
│   ├── questions.ts           # 20道沉浸式战术情境题
│   ├── types.ts               # 5维人格定义 + 干员/题目类型
│   ├── operators.ts           # 16位干员完整数据（coords/desc/epigraph/persona/soul/tags）
│   └── cp.ts                  # 18组CP配对（双语标签）
├── utils/
│   ├── matching.ts            # 欧氏距离匹配算法
│   ├── shareCards.ts          # 🔥642行分享卡片引擎
│   │   ├── WeChat 3:4 (800×1300)
│   │   ├── 小红书 1:1 (1080×1080)  
│   │   ├── B站 16:9 (1280×720)
│   │   ├── CP兼容度卡 (900×1200)
│   │   └── 罗德岛身份档案 (750×1334)
│   ├── storage.ts             # localStorage持久化
│   └── __tests__/
│       └── matching.test.ts   # vitest测试（4个describe）
├── i18n/
│   ├── zh.json                # 中文翻译
│   ├── en.json                # 英文翻译
│   └── index.ts               # i18next初始化
└── vite.config.ts             # Vite + PWA + Tailwind
```

## 题库规模

- **20 道战术情境题**（不是15道），每道 4 个选项
- 问题涵盖：明日方舟世界观深度剧情（斯卡蒂/伊莎玛拉、特蕾西娅/阿米娅、银灰/初雪、内卫/邪魔、浊心斯卡蒂等）
- 对话角色包括：德克萨斯、逻各斯、陈、银灰、塞雷娅、内卫、浊心斯卡蒂、特蕾西娅幻象、令、维什戴尔、华法林、能天使、阿米娅、PRTS
- **corruption 效果**：随着答题进度，文字出现「█」乱码特效（0→3级递增）
- 选项随机打乱：每道题的A/B/C/D选项顺序 shuffle，避免位置偏差

## 五维人格体系

| 维度 | 说明 |
|------|------|
| 战术思维 | 分析、规划、策略 |
| 情感方式 | 情感共鸣、人际理解 |
| 行动风格 | 主动 vs 谨慎、节奏感 |
| 秩序倾向 | 规则遵守、组织性 |
| 社交取向 | 合作倾向、表达方式 |

每题 4 个选项分别映射到 5 个维度，每个选项有维度值(0-4)和权重(val: 1-3)。20 题后每维累计分数 0-30，归一化为 0-10。

## 匹配算法

```
用户答题 → 每维累计得分[0-30]
  → 归一化 scores[i] * 10 / 9 → coords[0-10]
    → 与16位干员坐标对比（5维欧氏距离）
      → distance = √Σ(coords[i] - op.coords[i])²
        → compatibility = max(0, (1 - dist/√500) * 100)
          → 排序 → 最佳匹配 + Top 16 排名
```

含 vitest 单元测试（4 个 describe），测试覆盖：边界值、排序正确性、预归一化坐标。

## CP 兼容度系统

18 组预设 CP 配对，含中英双语标签：

| 配对 | 标签 |
|------|------|
| 德克萨斯 ↔ 拉普兰德 | 双狼 · Twin Wolves |
| 陈 ↔ 星熊 | 龙门搭档 · Lungmen Partners |
| 阿米娅 ↔ 特蕾西娅 | 王冠的传承 · Crown's Legacy |
| 博士 ↔ 普瑞赛斯 | 万年的约定 · A Ten-Thousand Year Promise |
| 斯卡蒂 ↔ 乌尔比安 | 深海猎人的羁绊 · Abyssal Hunter's Bond |
| ... 等等 | 共 18 组 |

CP 兼容度卡片：900×1200 竖版，双人雷达图 + 协同指数 + 关系评价文案。

## 分享卡片引擎（shareCards.ts 642 行）

### 三平台适配

| 平台 | 尺寸 | 设计特点 |
|------|------|---------|
| 微信 | 800×1300 | 六边形背景 + 头像 + 雷达图 + 排名列表 + QR |
| 小红书 | 1080×1080 | 大尺寸立绘水印 + 暗渐变遮罩 + 超大头像 |
| B站 | 1280×720 | 左右分栏（干员信息40% + 雷达图60%） |

### 罗德岛身份档案
- 750×1334 竖版手机壁纸
- 模拟罗德岛人事档案格式
- 含文件编号、安全等级、职阶徽章、5维条形图
- 罗德岛UI风格（网格背景 + 档案头部 + 底部归档标记）

### QR 码集成
- 自动调用 qrserver API 生成 QR
- 六边形框架装饰 + 圆角裁剪
- 暖白配色（E8E3D8 on 0D0F11）

### URL 分享
- `buildShareUrl(coords)` — 生成可分享链接
- `buildChallengeUrl(coords)` — 挑战模式链接
- `buildCompareUrl(u1, u2)` — 双人对比链接

## PWA 配置

```json
{
  "name": "罗德岛干员人格测试",
  "short_name": "R.I. Personality",
  "display": "standalone",
  "orientation": "portrait",
  "theme_color": "#0D0F11"
}
```

- Workbox 缓存策略：CacheFirst for images（30天过期）
- 自动更新注册模式
- SVG favicon（六边形符号⬡）

## 依赖清单

| 依赖 | 版本 | 用途 |
|------|------|------|
| react | 19.2 | 框架 |
| typescript | 5.x | 类型安全 |
| vite | 6.x | 构建工具 |
| tailwindcss | 4.3 | 样式 |
| framer-motion | 12.38 | 页面转场/按钮动画 |
| chart.js | 4.5 | 雷达图 |
| i18next | 26.2 | 中英双语 |
| vite-plugin-pwa | - | PWA离线 |
| vitest | - | 单元测试 |

## 当前作品集 vs 真实项目

| 维度 | 当前错误/缺失 | 应修正 |
|------|-------------|--------|
| 题目数 | 未提 | 20 道（非15道） |
| 技术栈 | 4个标签 | **9个**: React19, TS, Tailwind, Chart.js, Framer Motion, i18next, PWA, Vite, Vitest |
| 分享卡片 | 未提 | 🔥 **3平台（微信/小红书/B站）+ CP卡 + 身份档案** — 642行 Canvas 引擎 |
| CP系统 | 未提 | 18组配对 + 双语标签 + 兼容度计算 |
| PWA | 未提 | 离线安装，standalone模式 |
| 双语 | 未提 | i18next 完整中英文翻译 |
| 腐化效果 | 未提 | 答题过程文字渐变为「█」 |
| 选项随机 | 未提 | 每题 shuffle 避免位置偏差 |
| 测试 | 未提 | vitest 4组测试用例 |
| 版本 | 未提 | 3.0.0，持续迭代 |

## 建议新文案

```
描述: 沉浸式人格评测 × 明日方舟世界观
      20 道战术情境题 → 5 维人格图谱 → 16 位罗德岛干员匹配

THINKING: [定位: 产品级前端应用]
React 19 + TypeScript 构建的完整互动体验：
20道明日方舟深度剧情题，Framer Motion 动画 + corruption 乱码特效。
欧氏距离五维匹配算法 + Chart.js 雷达图可视化，含 vitest 单元测试。
642 行 Canvas 分享卡片引擎，支持微信/小红书/B站三平台排版，
CP 兼容度卡（18组配对+双语标签）+ 罗德岛身份档案壁纸。
i18next 中英双语 + PWA 离线安装，GitHub Pages 部署，v3.0 持续迭代。
```

技术栈标注（9标签）：`React 19`, `TypeScript`, `Tailwind CSS`, `Chart.js`, `Framer Motion`, `i18next`, `PWA`, `Vite`, `Vitest`
