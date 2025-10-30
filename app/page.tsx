import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] sm:min-h-[80vh] flex items-center bg-gradient-to-br from-violet-50 via-blue-50 to-purple-50 overflow-hidden">
        {/* 背景装饰元素 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* 左上角装饰圆 */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-violet-200/30 rounded-full blur-3xl"></div>
          {/* 右上角装饰圆 */}
          <div className="absolute top-32 -right-16 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
          {/* 左下角装饰圆 */}
          <div className="absolute -bottom-16 left-16 w-56 h-56 bg-purple-200/30 rounded-full blur-3xl"></div>
          {/* 中心装饰 - 大图标 */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl sm:text-9xl opacity-5">
            💎
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-32 text-center w-full relative z-10">
          {/* 装饰小图标 */}
          <div className="absolute top-20 left-10 text-3xl opacity-20 animate-pulse hidden sm:block">✨</div>
          <div className="absolute top-40 right-16 text-2xl opacity-20 animate-pulse hidden sm:block" style={{animationDelay: '1s'}}>💫</div>
          <div className="absolute bottom-32 left-20 text-2xl opacity-20 animate-pulse hidden sm:block" style={{animationDelay: '0.5s'}}>⭐</div>
          
          {/* 主标题上方装饰 */}
          <div className="mb-4 text-4xl sm:text-5xl">💎</div>
          
          {/* 主标题 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 mb-4 sm:mb-6 leading-tight">
            发现你的财富潜力
          </h1>
          
          {/* 副标题 */}
          <p className="text-lg sm:text-xl lg:text-2xl text-zinc-600 mb-10 sm:mb-12 leading-relaxed max-w-2xl mx-auto px-2">
            通过心理测试，了解真实的自己，找到财富突破口
          </p>
          
          {/* CTA 主按钮 */}
          <Link
            href="/test"
            className="inline-block w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-violet-600 hover:bg-violet-700 active:bg-violet-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 sm:hover:scale-105 max-w-xs mx-auto"
          >
            开始探索
          </Link>
          
          {/* 社会证明 */}
          <p className="mt-5 sm:mt-6 text-sm text-zinc-500 px-4">
            ✨ 已有 1万+ 人发现了自己的财富密码
          </p>
        </div>
      </section>

      {/* 简要介绍区域 */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* 卡片1：双维度测试 */}
            <div className="bg-zinc-50 rounded-2xl p-6 sm:p-8 text-center">
              <div className="text-4xl mb-3 sm:mb-4">🎯</div>
              <h3 className="text-base sm:text-lg font-semibold text-zinc-900 mb-2 sm:mb-3">
                双维度深度测试
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                不同于传统测试，我们从"自我认知"和"财富观念"两个维度交叉分析，提供更立体的洞察。
              </p>
            </div>

            {/* 卡片2：正向赋能 */}
            <div className="bg-zinc-50 rounded-2xl p-6 sm:p-8 text-center">
              <div className="text-4xl mb-3 sm:mb-4">🌟</div>
              <h3 className="text-base sm:text-lg font-semibold text-zinc-900 mb-2 sm:mb-3">
                正向赋能，无批判
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                没有好坏之分，只有不同特点。我们帮你认识优势，发现可提升空间，而非贴标签。
              </p>
            </div>

            {/* 卡片3：科学有效 */}
            <div className="bg-zinc-50 rounded-2xl p-6 sm:p-8 text-center">
              <div className="text-4xl mb-3 sm:mb-4">💡</div>
              <h3 className="text-base sm:text-lg font-semibold text-zinc-900 mb-2 sm:mb-3">
                科学方法，即刻获得
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                基于心理学投射原理，1分钟完成测试，立即获得详细解读和具体提升方向。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 底部 CTA 区域 */}
      <section className="bg-gradient-to-br from-violet-50 to-blue-50 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* 引导文案 */}
          <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 mb-6 sm:mb-8 px-4">
            准备好了解真实的自己吗？
          </h2>
          
          {/* CTA 按钮 */}
          <Link
            href="/test"
            className="inline-block w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-violet-600 hover:bg-violet-700 active:bg-violet-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 sm:hover:scale-105 max-w-xs mx-auto"
          >
            开始探索
          </Link>
          
          {/* 补充说明 */}
          <p className="mt-5 sm:mt-6 text-xs sm:text-sm text-zinc-500 px-4">
            测试基于心理学原理，结果仅供自我觉察参考
          </p>
        </div>
      </section>
    </main>
  );
}
