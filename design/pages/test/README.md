# 测试页面设计文档

## 📍 页面定位

**路径**: `/test` (引导页) + `/test/step-1` + `/test/step-2`  
**阶段**: 阶段 0.5（方案 C - 快速 MVP + 迭代）  
**优先级**: 🔴 P0 - 核心页面  
**预估开发时间**: 6-8 小时

---

## 🎯 页面目标

### 核心目标
1. **引导用户完成测试** - 流畅的测试体验，完成率 > 80%
2. **建立信任感** - 通过4条小贴士让用户理解测试原理，消除疑虑
3. **保持直觉选择** - 避免过度思考，引导用户凭直觉选择
4. **流畅体验** - 测试过程简洁清晰，平均完成时间 < 2分钟

### 成功指标
- 测试完成率 > 80%
- 平均完成时间 < 2分钟
- 中途放弃率 < 15%
- 从首页到完成测试的转化率 > 50%

---

## 🎨 设计原则（延续首页风格）

### 视觉一致性
- ✅ **配色方案** - 延续紫蓝渐变背景 + 紫色主色
- ✅ **字体系统** - 使用 Geist Sans 字体
- ✅ **圆角和阴影** - rounded-2xl + shadow-lg
- ✅ **按钮样式** - 与首页CTA按钮一致

### 测试页特定原则
- ✅ **一次一题** - 避免选择压力，保持专注
- ✅ **清晰进度** - 让用户知道当前位置和剩余步骤
- ✅ **大按钮设计** - 尤其移动端，易于点击
- ✅ **视觉引导** - 通过图标和间距引导选择
- ❌ **不做复杂交互** - 避免拖拽、多选等复杂操作
- ❌ **不做文字说明过多** - 保持直觉性

---

## ✅ 最终决策方案（2025-10-27）

基于产品定位（正向赋能、温暖专业）和快速MVP原则，确定以下方案：

### 核心决策

#### 1. 页面流程：**三页式流程** ✅

```
引导页（/test）
  ↓ 点击"开始测试"
步骤1（/test/step-1）
  ↓ 选择后自动跳转
步骤2（/test/step-2）
  ↓ 选择后显示加载
结果页（/result）
```

**选择理由**：
- 引导页展示4条小贴士，建立信任
- 分步骤避免选择压力
- 流程清晰，易于理解

#### 2. 选项展示：**大卡片式，纵向排列** ✅

**选择理由**：
- 移动端友好，易于点击
- 图标大，视觉吸引力强
- 每个选项空间充足，不拥挤

#### 3. 进度指示：**步骤条 + 百分比** ✅

**显示方式**：`步骤 1/2` + 进度条（50%/100%）

**选择理由**：
- 清晰告知用户当前位置
- 给予心理预期（只需2步）
- 降低焦虑感

#### 4. 4条小贴士展示：**引导页卡片式** ✅

**位置**：引导页（/test）中心区域，4个卡片

**选择理由**：
- 专门页面强调重要性
- 不影响测试页面简洁性
- 用户可以认真阅读

---

## 📐 详细页面设计

---

## 页面 1：引导页 (`/test`)

### 页面目标
- 展示4条重要小贴士
- 建立测试的正确预期
- 消除用户疑虑，建立信任

### 布局结构

```
┌─────────────────────────────────────┐
│  [← 返回首页]                        │  ← 左上角返回链接
├─────────────────────────────────────┤
│                                     │
│  渐变背景 (from-violet-50)          │
│                                     │
│        💎                           │  ← 装饰图标
│                                     │
│     财富心理测试                     │  ← H1标题
│     探索你的财富潜力与卡点           │  ← 副标题
│                                     │
│   ━━━━━━━━━━━━━━━━━━━━━━━━━━       │  ← 分隔线
│                                     │
│   💡 测试前的重要小贴士               │  ← 小标题
│                                     │
│  ┌───────────────────────────┐     │
│  │ 1️⃣ 根据直觉、感觉选择      │  ← 卡片1
│  │                           │
│  │ 这份心理小测试，你是根据你的│
│  │ 直觉、感觉做出的选择，所以呢│
│  │ ，从心理学角度来讲，它便是你│
│  │ 潜意识有关自己与金钱财富的投│
│  │ 射，呈现的是你在潜意识层面的│
│  │ 一些财富心理情况。         │
│  └───────────────────────────┘
│                                     │
│  ┌───────────────────────────┐
│  │ 2️⃣ 摇摆的选项都可参考      │  ← 卡片2
│  │                           │
│  │ 有人可能会在某两个或者某几个│
│  │ 选项中摇摆过，最终选定某一个│
│  │ ，这种情况也许是这两个选项的│
│  │ 状态你或多或少都有，只是程度│
│  │ 不同，都可以作为参考。     │
│  └───────────────────────────┘
│                                     │
│  ┌───────────────────────────┐
│  │ 3️⃣ 选择代表此刻状态        │  ← 卡片3
│  │                           │
│  │ 这个选择不是一成不变的，有人│
│  │ 今天选和一年后再跟随直觉选，│
│  │ 选项会有变化，因为人是多么复│
│  │ 杂多么精妙的一个存在，我们的│
│  │ 心理状态也是一直在变化的，此│
│  │ 刻的选择只是代表你此时当下的│
│  │ 状态。                     │
│  └───────────────────────────┘
│                                     │
│  ┌───────────────────────────┐
│  │ 4️⃣ 没有好坏之分            │  ← 卡片4
│  │                           │
│  │ 选项没有高低好坏之分，每个特│
│  │ 点都有它的好处与卡点。如果你│
│  │ 觉得说中了你的特点和长处，那│
│  │ 么假如你愿意试试看，提升下"│
│  │ 卡点"的部分，是不是也同样会│
│  │ "说中""很准"，让你的财富状│
│  │ 况有一个很大的提升呢？     │
│  └───────────────────────────┘
│                                     │
│        [ 我已了解，开始测试 ]        │  ← 大按钮
│                                     │
│         ⏱️ 预计用时：1分钟           │  ← 辅助信息
│         📝 共 2 个问题              │
│                                     │
└─────────────────────────────────────┘
```

### 详细设计规范

#### 1. 整体容器
```css
容器：max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16
背景：bg-gradient-to-br from-violet-50 via-blue-50 to-purple-50
最小高度：min-h-screen
```

#### 2. 返回链接
```tsx
<Link href="/">
  ← 返回首页
</Link>

样式：
  text-sm text-zinc-600 hover:text-zinc-900
  transition-colors
  mb-8
```

#### 3. 顶部标题区
```tsx
装饰图标：
  text-5xl mb-4 (💎)

主标题（H1）：
  text-3xl sm:text-4xl font-bold text-zinc-900 mb-3
  "财富心理测试"

副标题：
  text-lg sm:text-xl text-zinc-600 mb-8
  "探索你的财富潜力与卡点"

分隔线：
  w-16 h-1 bg-violet-300 mx-auto mb-10
```

#### 4. 小贴士标题
```tsx
text-xl sm:text-2xl font-semibold text-zinc-900 mb-6
"💡 测试前的重要小贴士"
```

#### 5. 小贴士卡片
```tsx
单个卡片容器：
  bg-white/80 backdrop-blur-sm
  rounded-2xl p-6 sm:p-8
  shadow-md
  mb-4 sm:mb-6
  text-left

卡片标题（emoji + 文字）：
  text-base sm:text-lg font-semibold text-zinc-900 mb-3
  "1️⃣ 根据直觉、感觉选择"

卡片内容：
  text-sm sm:text-base text-zinc-600 leading-relaxed
```

#### 6. CTA按钮
```tsx
样式：
  w-full sm:w-auto px-8 py-4 text-lg font-semibold
  text-white bg-violet-600 hover:bg-violet-700
  rounded-full shadow-lg hover:shadow-xl
  transition-all duration-200 sm:hover:scale-105
  max-w-sm mx-auto
  
文案："我已了解，开始测试"
```

#### 7. 底部辅助信息
```tsx
容器：
  flex flex-col sm:flex-row gap-4 justify-center
  text-sm text-zinc-500 mt-6

单项：
  flex items-center gap-1
```

---

## 页面 2：步骤 1 (`/test/step-1`)

### 页面目标
- 用户选择代表"自己"的物品
- 清晰的进度指示
- 流畅的交互体验

### 布局结构

```
┌─────────────────────────────────────┐
│  步骤 1/2                  [× 退出] │  ← 顶部栏
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━    │
│  ████████████░░░░░░░░░░░░  50%    │  ← 进度条
├─────────────────────────────────────┤
│                                     │
│  渐变背景                            │
│                                     │
│      💭                             │  ← 问题图标
│                                     │
│   请凭直觉选择一个最能代表            │  ← 问题文案
│        "你自己"                      │
│       的物品                         │
│                                     │
│  ┌─────────────────────────────┐   │
│  │   🧸                         │  │  ← 选项1
│  │   布娃娃                      │  │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │   💎                         │  │  ← 选项2
│  │   珠宝                        │  │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │   📚                         │  │  ← 选项3
│  │   书                          │  │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │   📱                         │  │  ← 选项4
│  │   手机                        │  │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │   🦁                         │  │  ← 选项5
│  │   狮子                        │  │
│  └─────────────────────────────┘   │
│                                     │
└─────────────────────────────────────┘
```

### 详细设计规范

#### 1. 顶部进度栏
```tsx
容器：
  sticky top-0 z-10
  bg-white/90 backdrop-blur-sm
  border-b border-zinc-200
  px-4 sm:px-6 py-4

左侧文字：
  text-sm font-medium text-zinc-600
  "步骤 1/2"

右侧退出按钮：
  text-sm text-zinc-500 hover:text-zinc-900
  cursor-pointer
  "× 退出"

进度条容器：
  w-full h-2 bg-zinc-200 rounded-full overflow-hidden mt-2

进度条填充：
  h-full bg-violet-600 rounded-full
  transition-all duration-300
  width: 50% (步骤1) / 100% (步骤2)
```

#### 2. 问题区域
```tsx
容器：
  max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12
  text-center

问题图标：
  text-5xl sm:text-6xl mb-6
  "💭"

问题文案：
  text-2xl sm:text-3xl font-semibold text-zinc-900 mb-2
  leading-tight

强调文字（"你自己"）：
  text-violet-600 font-bold
  
说明文字：
  text-base sm:text-lg text-zinc-600 mb-10
```

#### 3. 选项卡片
```tsx
容器：
  w-full max-w-md mx-auto
  space-y-3 sm:space-y-4

单个选项卡片：
  bg-white rounded-2xl p-6 sm:p-8
  shadow-md hover:shadow-lg
  border-2 border-transparent
  transition-all duration-200
  cursor-pointer
  text-center
  
Hover状态：
  border-violet-200
  scale-105
  shadow-xl

选中状态（可选，如果需要确认步骤）：
  border-violet-600
  bg-violet-50

选项图标（emoji）：
  text-5xl sm:text-6xl mb-3

选项名称：
  text-xl sm:text-2xl font-semibold text-zinc-900
```

#### 4. 交互逻辑
```typescript
// 点击选项后的行为
onClick = () => {
  // 保存选择
  localStorage.setItem('selfChoice', 'doll')
  
  // 短暂视觉反馈（可选）
  setSelected('doll')
  
  // 延迟300ms后跳转到步骤2
  setTimeout(() => {
    router.push('/test/step-2')
  }, 300)
}
```

---

## 页面 3：步骤 2 (`/test/step-2`)

### 页面目标
- 用户选择代表"财富"的物品
- 与步骤1保持一致的体验
- 完成后跳转结果页

### 布局结构

与步骤1几乎相同，差异点：

```
顶部栏：步骤 2/2
进度条：100%
问题图标：💰 或 💎
问题文案："请凭直觉选择一个最能代表'财富'的物品"
强调文字："财富"
```

### 交互逻辑

```typescript
onClick = () => {
  // 保存选择
  const selfChoice = localStorage.getItem('selfChoice')
  const wealthChoice = selectedOption // 例如 'jewelry'
  
  // 组合结果ID
  const resultId = `${selfChoice}-${wealthChoice}`
  
  // 显示加载动画（可选）
  setLoading(true)
  
  // 跳转到结果页
  router.push(`/result/${resultId}`)
}
```

---

## 页面 4：退出确认弹窗（可选）

### 触发条件
点击顶部"× 退出"按钮

### 弹窗设计

```
┌─────────────────────────────────────┐
│        确认退出测试？                │
│                                     │
│   退出后您的选择将不会被保存         │
│                                     │
│  ┌──────────┐    ┌──────────┐     │
│  │ 继续测试  │    │ 确认退出  │     │
│  └──────────┘    └──────────┘     │
└─────────────────────────────────────┘
```

**样式**：
- 半透明黑色背景遮罩
- 白色圆角卡片居中
- 两个按钮：主按钮（继续）+ 次按钮（退出）

---

## 🎨 完整视觉设计规范

### 配色系统（延续首页）

```typescript
// 主色系
primary: {
  violet-600: '#7c3aed',  // 主按钮、进度条、强调色
  violet-700: '#6d28d9',  // Hover状态
  violet-50: '#faf5ff',   // 浅背景
}

// 背景渐变
background: 'bg-gradient-to-br from-violet-50 via-blue-50 to-purple-50'

// 卡片
card: {
  bg: 'bg-white/80' or 'bg-white',
  shadow: 'shadow-md hover:shadow-lg',
  border: 'border-2 border-transparent hover:border-violet-200',
}

// 文字
text: {
  primary: 'text-zinc-900',
  secondary: 'text-zinc-600',
  tertiary: 'text-zinc-500',
}
```

### 字体系统

```typescript
// 标题层级
h1: 'text-3xl sm:text-4xl font-bold'        // 引导页主标题
h2: 'text-2xl sm:text-3xl font-semibold'    // 问题文案
h3: 'text-xl sm:text-2xl font-semibold'     // 选项名称
h4: 'text-lg sm:text-xl font-medium'        // 小标题

// 正文
body: 'text-sm sm:text-base'                // 卡片内容
small: 'text-xs sm:text-sm'                 // 辅助信息
```

### 间距系统

```typescript
// 页面级
section: 'py-12 sm:py-16'                   // 区块垂直间距
container: 'px-4 sm:px-6'                   // 容器水平边距

// 元素级
card-gap: 'space-y-3 sm:space-y-4'          // 卡片间距
text-gap: 'mb-3 sm:mb-4'                    // 文字间距
icon-text: 'mb-3 sm:mb-4'                   // 图标和文字间距
```

### 圆角和阴影

```typescript
// 圆角
rounded-2xl: '16px'     // 卡片
rounded-full: '9999px'  // 按钮、进度条

// 阴影
shadow-md: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
shadow-lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
shadow-xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)'
```

---

## 💻 技术实现方案

### 文件结构

```
app/
├── test/
│   ├── page.tsx                # 引导页
│   ├── step-1/
│   │   └── page.tsx           # 步骤1
│   └── step-2/
│       └── page.tsx           # 步骤2
├── components/
│   └── test/
│       ├── ProgressBar.tsx    # 进度条组件（可选）
│       ├── OptionCard.tsx     # 选项卡片组件（可选）
│       └── ExitDialog.tsx     # 退出确认弹窗（可选）
└── lib/
    └── test-data.ts           # 测试数据和常量
```

### 数据结构

```typescript
// lib/test-data.ts

export type ItemType = 'doll' | 'jewelry' | 'book' | 'phone' | 'lion'

export interface TestOption {
  id: ItemType
  emoji: string
  name: string
  description?: string  // 可选，暂不展示
}

export const testOptions: TestOption[] = [
  { id: 'doll', emoji: '🧸', name: '布娃娃' },
  { id: 'jewelry', emoji: '💎', name: '珠宝' },
  { id: 'book', emoji: '📚', name: '书' },
  { id: 'phone', emoji: '📱', name: '手机' },
  { id: 'lion', emoji: '🦁', name: '狮子' },
]

export const tips = [
  {
    emoji: '1️⃣',
    title: '根据直觉、感觉选择',
    content: '这份心理小测试，你是根据你的直觉、感觉做出的选择，所以呢，从心理学角度来讲，它便是你潜意识有关自己与金钱财富的投射，呈现的是你在潜意识层面的一些财富心理情况。'
  },
  {
    emoji: '2️⃣',
    title: '摇摆的选项都可参考',
    content: '有人可能会在某两个或者某几个选项中摇摆过，最终选定某一个，这种情况也许是这两个选项的状态你或多或少都有，只是程度不同，都可以作为参考。'
  },
  {
    emoji: '3️⃣',
    title: '选择代表此刻状态',
    content: '这个选择不是一成不变的，有人今天选和一年后再跟随直觉选，选项会有变化，因为人是多么复杂多么精妙的一个存在，我们的心理状态也是一直在变化的，此刻的选择只是代表你此时当下的状态。'
  },
  {
    emoji: '4️⃣',
    title: '没有好坏之分',
    content: '选项没有高低好坏之分，每个特点都有它的好处与卡点。如果你觉得说中了你的特点和长处，那么假如你愿意试试看，提升下"卡点"的部分，是不是也同样会"说中""很准"，让你的财富状况有一个很大的提升呢？'
  },
]
```

### 状态管理方案

#### 方案 A：localStorage（推荐阶段0.5）

```typescript
// 优点：简单、无需额外依赖
// 缺点：刷新页面会丢失（可接受）

// 保存选择
localStorage.setItem('selfChoice', selectedOption)

// 读取选择
const selfChoice = localStorage.getItem('selfChoice')

// 清除选择（返回首页或重新测试时）
localStorage.removeItem('selfChoice')
localStorage.removeItem('wealthChoice')
```

#### 方案 B：URL参数（备选）

```typescript
// 步骤2的URL: /test/step-2?self=doll
// 结果页URL: /result/doll-jewelry

// 优点：可分享链接
// 缺点：URL稍复杂
```

### 组件实现示例

#### 引导页 (app/test/page.tsx)

```typescript
import Link from 'next/link'
import { tips } from '@/lib/test-data'

export default function TestIntroPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-purple-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* 返回链接 */}
        <Link 
          href="/"
          className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors mb-8 inline-block"
        >
          ← 返回首页
        </Link>

        {/* 标题区域 */}
        <div className="text-center mb-12">
          <div className="text-5xl mb-4">💎</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-3">
            财富心理测试
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 mb-8">
            探索你的财富潜力与卡点
          </p>
          <div className="w-16 h-1 bg-violet-300 mx-auto"></div>
        </div>

        {/* 小贴士 */}
        <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 mb-6 text-center">
          💡 测试前的重要小贴士
        </h2>

        <div className="space-y-4 sm:space-y-6 mb-12">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-md"
            >
              <h3 className="text-base sm:text-lg font-semibold text-zinc-900 mb-3">
                {tip.emoji} {tip.title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                {tip.content}
              </p>
            </div>
          ))}
        </div>

        {/* CTA按钮 */}
        <div className="text-center">
          <Link
            href="/test/step-1"
            className="inline-block w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-violet-600 hover:bg-violet-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 sm:hover:scale-105 max-w-sm mx-auto"
          >
            我已了解，开始测试
          </Link>

          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-zinc-500 mt-6">
            <span className="flex items-center justify-center gap-1">
              ⏱️ 预计用时：1分钟
            </span>
            <span className="flex items-center justify-center gap-1">
              📝 共 2 个问题
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
```

#### 步骤页 (app/test/step-1/page.tsx)

```typescript
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { testOptions } from '@/lib/test-data'

export default function Step1Page() {
  const router = useRouter()
  const [selected, setSelected] = useState<string | null>(null)

  const handleSelect = (optionId: string) => {
    setSelected(optionId)
    localStorage.setItem('selfChoice', optionId)
    
    // 短暂延迟后跳转
    setTimeout(() => {
      router.push('/test/step-2')
    }, 300)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-purple-50">
      {/* 顶部进度栏 */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b border-zinc-200 px-4 sm:px-6 py-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-zinc-600">
              步骤 1/2
            </span>
            <Link 
              href="/"
              className="text-sm text-zinc-500 hover:text-zinc-900 cursor-pointer"
            >
              × 退出
            </Link>
          </div>
          <div className="w-full h-2 bg-zinc-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-violet-600 rounded-full transition-all duration-300"
              style={{ width: '50%' }}
            />
          </div>
        </div>
      </div>

      {/* 问题区域 */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center mb-10">
          <div className="text-5xl sm:text-6xl mb-6">💭</div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-zinc-900 mb-2 leading-tight">
            请凭直觉选择一个最能代表
          </h1>
          <p className="text-2xl sm:text-3xl font-bold text-violet-600 mb-2">
            "你自己"
          </p>
          <p className="text-base sm:text-lg text-zinc-600">
            的物品
          </p>
        </div>

        {/* 选项列表 */}
        <div className="w-full max-w-md mx-auto space-y-3 sm:space-y-4">
          {testOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`
                w-full bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg
                border-2 transition-all duration-200 cursor-pointer text-center
                ${selected === option.id 
                  ? 'border-violet-600 bg-violet-50' 
                  : 'border-transparent hover:border-violet-200 hover:scale-105'
                }
              `}
            >
              <div className="text-5xl sm:text-6xl mb-3">{option.emoji}</div>
              <div className="text-xl sm:text-2xl font-semibold text-zinc-900">
                {option.name}
              </div>
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}
```

---

## 🎯 响应式设计要点

### 移动端（< 640px）
- 进度栏：紧凑，文字较小
- 问题文案：text-2xl
- 选项卡片：全宽，p-6
- 图标：text-5xl
- 间距：space-y-3

### 桌面端（≥ 640px）
- 进度栏：宽松，文字正常
- 问题文案：text-3xl
- 选项卡片：max-w-md，p-8
- 图标：text-6xl
- 间距：space-y-4
- Hover效果：scale-105

---

## 📊 性能优化

### 预加载
```typescript
// 在引导页预加载步骤1页面
<link rel="prefetch" href="/test/step-1" />
```

### 图片优化
- Emoji使用系统字体，无需加载图片
- 背景渐变使用CSS，性能优秀

### 代码分割
- 每个步骤独立页面，自动代码分割
- 按需加载，减少首屏体积

---

## ✅ MVP检查清单

### 阶段 0.5 必须有的（P0）
- [x] 引导页：4条小贴士完整展示
- [x] 步骤1：选择代表"自己"的物品
- [x] 步骤2：选择代表"财富"的物品
- [x] 进度指示：清晰的步骤和百分比
- [x] 响应式：移动端和桌面端适配
- [x] 状态保存：localStorage保存选择
- [x] 流畅跳转：选择后自动跳转下一步

### 可选增强（P1 - 后续迭代）
- [ ] 退出确认弹窗
- [ ] 返回上一步功能
- [ ] 选中状态动画
- [ ] 进度条动画
- [ ] 加载页面（步骤2到结果页之间）

---

## 🔄 讨论记录

### 2025-10-27 - 测试页面核心决策

**参与者**: 用户 + AI助手

**讨论主题**: 确定测试页面的流程、布局、交互和视觉设计

**决策过程**:
1. 参考首页设计风格（紫蓝渐变、温暖专业）
2. 分析4条小贴士的重要性
3. 确定三页式流程（引导→步骤1→步骤2）
4. 设计大卡片式选项，移动端友好
5. 保持视觉一致性和交互流畅性

**最终方案**:
- ✅ 流程：引导页 + 步骤1 + 步骤2（三页式）
- ✅ 小贴士：独立引导页，4个卡片完整展示原文
- ✅ 选项：大卡片式，纵向排列，5个选项
- ✅ 进度：顶部步骤条 + 进度条（50%/100%）
- ✅ 交互：点击选项自动跳转，无需额外按钮
- ✅ 风格：延续首页紫蓝渐变背景和紫色主色

**下一步**:
- [ ] 实现引导页代码（app/test/page.tsx）
- [ ] 实现步骤1代码（app/test/step-1/page.tsx）
- [ ] 实现步骤2代码（app/test/step-2/page.tsx）
- [ ] 创建测试数据文件（lib/test-data.ts）
- [ ] 测试完整流程
- [ ] 移动端测试

---

**创建时间**: 2025-10-27  
**最后更新**: 2025-10-27  
**状态**: ✅ 设计完成，待开发
