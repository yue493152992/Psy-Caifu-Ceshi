# GitHub 上传指南

## 📦 哪些文件会上传？

### ✅ 会上传的文件（源代码和配置文件）
- ✅ `app/` - 所有页面和组件代码
- ✅ `lib/` - 数据和工具函数
- ✅ `public/` - 静态资源（图片、图标等）
- ✅ `package.json` - 项目依赖配置
- ✅ `package-lock.json` - 依赖锁定文件（确保版本一致）
- ✅ `tsconfig.json` - TypeScript 配置
- ✅ `next.config.ts` - Next.js 配置
- ✅ `eslint.config.mjs` - ESLint 配置
- ✅ `postcss.config.mjs` - PostCSS 配置
- ✅ `tailwind.config.*` - Tailwind CSS 配置（如果有）
- ✅ `README.md` - 项目说明文档
- ✅ `.gitignore` - Git 忽略规则
- ✅ `.gitattributes` - Git 属性配置
- ✅ `vercel.json` - Vercel 部署配置
- ✅ `docs/`, `design/` - 文档和设计文件
- ✅ `*.md` - 所有 Markdown 文档

### ❌ 不会上传的文件（已被 .gitignore 忽略）
- ❌ `node_modules/` - 依赖包（太大，其他人可以通过 `npm install` 安装）
- ❌ `.next/` - Next.js 构建输出
- ❌ `out/` - 静态导出输出
- ❌ `.env*` - 环境变量文件（可能包含敏感信息）
- ❌ `.vercel/` - Vercel 配置（本地部署信息）
- ❌ `*.tsbuildinfo` - TypeScript 构建信息
- ❌ `next-env.d.ts` - Next.js 自动生成的类型文件
- ❌ 日志文件（`*.log`）
- ❌ `.DS_Store` - macOS 系统文件

## ⚠️ 重要提示

1. **敏感信息**：确保 `.env` 文件不会被上传（已在 .gitignore 中）
2. **依赖包**：`node_modules` 不会被上传，其他人克隆后运行 `npm install` 即可
3. **构建产物**：`.next` 和 `out` 文件夹不会被上传，构建时自动生成

## 📊 文件大小对比

- 上传大小：约 1-5 MB（只包含源代码）
- 不包含 `node_modules`：节省数百 MB
- 不包含构建产物：节省几十 MB

---

## 前提条件
