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

        {/* 小贴士标题 */}
        <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 mb-6 text-center">
          💡 测试前的重要小贴士
        </h2>

        {/* 小贴士卡片 */}
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
            className="inline-block w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-violet-600 hover:bg-violet-700 active:bg-violet-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 sm:hover:scale-105 max-w-sm mx-auto"
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

