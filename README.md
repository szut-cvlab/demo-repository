![Auto Assign](https://github.com/szut-cvlab/szut-cvlab.github.io/actions/workflows/auto-assign.yml/badge.svg)

![Deploy to GitHub Pages](https://github.com/szut-cvlab/szut-cvlab.github.io/actions/workflows/deploy.yml/badge.svg)

# 视觉与低空智能实验室主页

苏州工学院 · 视觉与低空智能实验室（SZUT-CVLab）官方网站，基于 [Astro](https://astro.build) 构建，部署于 GitHub Pages。

## 项目简介

本仓库是实验室的公开主页，展示研究方向、学术成果、科研项目、开源项目、团队成员与实验室动态。
内容采用 **Markdown 驱动**，每类内容对应一份 `.md` 数据文件，新增内容 = 在该文件的 frontmatter 里加一个条目块。

## 技术架构

| 维度 | 选型 |
| --- | --- |
| 框架 | Astro 5（静态站点生成器，零运行时 JS） |
| 样式 | Tailwind CSS v4（`@tailwindcss/vite`） |
| 内容 | Astro Content Collections（Markdown + 类型校验） |
| 部署 | GitHub Pages，经官方 Actions 自动构建发布 |

- 页面为纯静态 HTML，加载快、易 SEO；
- 所有站点文案与数据都在 `src/` 内，结构清晰、易扩展；
- 推送到 `main` 分支即自动构建并发布，无需手动操作。

## 目录结构

```
.
├── astro.config.mjs          # Astro 配置（站点地址、Tailwind 插件）
├── package.json              # 依赖与脚本
├── tsconfig.json
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro  # 全局布局：坐标条 + 吸顶导航 + 页脚
│   ├── pages/                # 路由页面（每个 .astro 对应一个 URL）
│   │   ├── index.astro       # 首页（聚合各板块节选）
│   │   ├── research.astro    # 研究方向
│   │   ├── publications.astro# 学术成果
│   │   ├── grants.astro      # 科研项目
│   │   ├── projects.astro    # 开源项目
│   │   ├── people.astro      # 团队成员
│   │   └── news.astro        # 实验室动态
│   ├── components/
│   │   ├── SecHead.astro     # 板块标题（编号 / 中文题 / 英文题）
│   │   └── MapPlate.astro    # 首屏等高线测绘图版（FIG.01）
│   ├── lib/
│   │   └── linkify.ts        # 纯文本 URL 自动转链接
│   ├── content/              # ★ 内容数据（单文件模式，后续只改这里）
│   │   ├── research/research.md           # 研究方向 items[]
│   │   ├── publications/publications.md   # 学术成果 groups[]
│   │   ├── grants/grants.md               # 科研项目 items[]
│   │   ├── projects/projects.md           # 开源项目 items[]
│   │   ├── people/people.md               # 团队成员 items[]
│   │   └── news/news.md                   # 实验室动态 items[]
│   ├── content.config.ts     # 内容集合的字段定义（schema）
│   └── styles/global.css     # 全局样式入口
├── design/                   # 品牌资产：Logo 母版 + 设计说明（不参与构建）
└── .github/workflows/
    ├── deploy.yml            # 合并到 main → 自动构建并发布到 GitHub Pages
    └── auto-assign.yml       # PR 自动指派 reviewer
```

## 本地开发

```bash
npm install      # 安装依赖（首次）
npm run dev      # 本地预览，默认 http://localhost:4321
npm run build    # 构建静态站点到 dist/
npm run preview  # 预览构建产物
```

## 后续填充内容

所有内容都在 `src/content/` 下，每个集合一份 Markdown 文件，**新增内容 = 在对应文件的 frontmatter 里加一个条目块**：

| 内容 | 操作 |
| --- | --- |
| 研究方向 | `src/content/research/research.md`，`items` 里每个块 = 一个方向（`title / desc`），独立页面 `/research/` |
| 学术成果 | `src/content/publications/publications.md`，按 `groups`（期刊论文 / 会议论文 / 发明专利 / 学术奖励）维护条目，引用原文照录 |
| 科研项目 | `src/content/grants/grants.md`，`items` 里每个块 = 一个课题（来源/类别/编号/名称/起止/经费/状态/角色），`status: 在研` 或 `结题`，独立页面 `/grants/` |
| 开源项目 | `src/content/projects/projects.md`，`items` 里每个块 = 一个仓库（`name / url / language / desc`），独立页面 `/projects/` |
| 团队成员 | `src/content/people/people.md`，`items` 里每个块 = 一位成员（`name / role / url / email / bio`） |
| 实验室动态 | `src/content/news/news.md`，`items` 里每个块 = 一条动态（`title / date / desc`），按日期倒序 |

字段含义见 `src/content.config.ts`。

> 页面级文案：首页 Hero 简介在 `src/pages/index.astro`，导航栏 / 坐标条 / 页脚在 `src/layouts/BaseLayout.astro`。

## 开发和部署

**本地开发**：在 `dev`（或任意功能分支）上开发，详见上方「本地开发」命令；

**合并部署**：将分支提 PR 合并到 `main` 分支，触发 `deploy.yml` 自动构建并发布（合并到 main 等价于一次 push 到 main）。

**首次启用**：
1. 仓库 **Settings → Pages → Source** 选择 **GitHub Actions**；
2. 将代码合并 / 推送到 `main` 分支，`deploy.yml` 会自动把 `dist/` 发布到 GitHub Pages。

**可选加固（分支保护）**：公开仓库在 GitHub Free 下即可免费开启 `main` 分支保护规则，建议按以下勾选，进一步保证线上只来自 PR 合并（不开启也不影响部署）：

| 选项 | 设置 | 说明 |
| --- | --- | --- |
| Require a pull request before merging | ✅ 勾选 | 禁止直接 push 到 main，强制走 PR |
| Require approvals | ⬜ 不勾 | 小团队无人审批，避免卡住自己；多人协作可设 1 |
| **Do not allow bypassing the above settings** | ✅ 勾选 | 让规则也对 owner 生效，防手滑直推 |
| Allow force pushes | ⬜ 不勾 | 防止强推改写 main 历史 |
| Allow deletions | ⬜ 不勾 | 防止误删 main 分支 |

站点地址：https://szut-cvlab.github.io
