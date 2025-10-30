# 财富心理测试 - 项目设计文档

## 项目概述

这是一个基于 Next.js 的现代化 Web 应用模板项目，用于开发财富心理测试应用。

## 技术栈

### 核心框架
- **Next.js**: 16.0.0 (App Router)
- **React**: 19.2.0
- **TypeScript**: ^5

### 样式方案
- **Tailwind CSS**: ^4.0 (最新版本)
- **PostCSS**: 使用 @tailwindcss/postcss 插件
- **字体**: Geist Sans 和 Geist Mono (Google Fonts)

### 开发工具
- **ESLint**: ^9 配合 eslint-config-next
- **TypeScript**: 严格模式启用
- **类型定义**: @types/node, @types/react, @types/react-dom

## 目录结构

```
wealth-psychology-test/
├── app/                          # Next.js App Router 目录
│   ├── favicon.ico              # 网站图标
│   ├── globals.css              # 全局样式文件
│   ├── layout.tsx               # 根布局组件
│   └── page.tsx                 # 首页组件
├── public/                       # 静态资源目录
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── node_modules/                 # 依赖包
├── eslint.config.mjs            # ESLint 配置
├── next.config.ts               # Next.js 配置
├── next-env.d.ts                # Next.js TypeScript 类型声明
├── postcss.config.mjs           # PostCSS 配置
├── tsconfig.json                # TypeScript 配置
├── package.json                 # 项目依赖管理
├── package-lock.json            # 锁定依赖版本
└── README.md                    # 项目说明文档
```

## 关键配置说明

### TypeScript 配置 (tsconfig.json)
- **编译目标**: ES2017
- **严格模式**: 已启用 (strict: true)
- **路径别名**: `@/*` 映射到项目根目录
- **模块解析**: bundler 模式
- **JSX**: react-jsx 运行时

### 样式配置
- **CSS 方案**: Tailwind CSS 4.0
- **主题变量**:
  - `--background`: 背景色 (支持深色模式)
  - `--foreground`: 前景色 (支持深色模式)
  - `--font-geist-sans`: 无衬线字体
  - `--font-geist-mono`: 等宽字体

### Next.js 特性
- **App Router**: 使用最新的 App Router 架构
- **服务端组件**: 默认支持 React Server Components
- **图片优化**: 使用 Next.js Image 组件
- **字体优化**: 自动优化 Google Fonts (Geist)
- **深色模式**: 支持系统偏好的深色模式

## 开发脚本

```bash
# 开发模式 (热重载)
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint
```

## 布局结构

### 根布局 (app/layout.tsx)
- 定义全局 HTML 结构
- 配置 Geist 字体家族
- 设置元数据 (title, description)
- 应用全局样式

### 首页 (app/page.tsx)
- 响应式布局设计
- 深色模式支持
- Flexbox 布局系统
- 预设了基础 UI 组件示例

## 设计特点

### 响应式设计
- 移动优先 (mobile-first)
- 使用 Tailwind 响应式断点 (sm, md, lg 等)
- 支持多种屏幕尺寸

### 主题系统
- CSS 变量驱动的主题
- 自动适配系统深色模式
- 可扩展的颜色体系

### 性能优化
- Next.js 自动代码分割
- 图片优化 (next/image)
- 字体优化和预加载
- 增量静态生成 (ISG)

## 下一步开发建议

针对财富心理测试应用，建议添加：

1. **组件目录**: 创建 `app/components/` 存放可复用组件
2. **测试模块**: 创建 `app/test/` 或 `app/quiz/` 存放测试逻辑
3. **数据管理**: 创建 `app/lib/` 存放数据处理和工具函数
4. **类型定义**: 创建 `app/types/` 存放 TypeScript 类型定义
5. **API 路由**: 创建 `app/api/` 存放后端 API 接口
6. **状态管理**: 考虑引入 Zustand 或 Jotai (轻量级状态管理)
7. **数据持久化**: 考虑使用 localStorage 或数据库集成
8. **动画效果**: 可引入 Framer Motion 增强交互体验

## 注意事项

- 使用 Next.js 16 最新特性，注意查阅官方文档
- Tailwind CSS 4.0 相比 v3 有重大变化，使用新的配置语法
- React 19 引入了新的特性，注意兼容性
- 严格模式下 TypeScript 类型检查更严格，需注意类型定义
- 使用 ESLint Next.js 配置保证代码质量

## 参考资源

- [Next.js 官方文档](https://nextjs.org/docs)
- [Tailwind CSS v4 文档](https://tailwindcss.com)
- [React 19 文档](https://react.dev)
- [TypeScript 手册](https://www.typescriptlang.org/docs)

