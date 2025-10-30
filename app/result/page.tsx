export default function ResultPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[50vh] flex items-center bg-gradient-to-br from-violet-50 via-blue-50 to-purple-50 overflow-hidden">
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
            📊
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center w-full relative z-10">
          {/* 装饰小图标 */}
          <div className="absolute top-20 left-10 text-3xl opacity-20 animate-pulse hidden sm:block">✨</div>
          <div className="absolute top-40 right-16 text-2xl opacity-20 animate-pulse hidden sm:block" style={{animationDelay: '1s'}}>💫</div>
          
          {/* 主标题上方装饰 */}
          <div className="mb-4 text-4xl sm:text-5xl">📊</div>
          
          {/* 主标题 */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4 sm:mb-6 leading-tight">
            解读前的重要小贴士
          </h1>
          
          {/* 副标题 */}
          <p className="text-base sm:text-lg lg:text-xl text-zinc-600 mb-6 leading-relaxed max-w-2xl mx-auto px-2">
            在查看您的测试结果之前，请花一分钟了解这些要点 ⏰
          </p>
        </div>
      </section>

      {/* 小贴士区域 - 4个卡片 */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* 卡片1：心理投射原理 */}
            <div className="bg-zinc-50 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="text-3xl sm:text-4xl flex-shrink-0">🧠</div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-zinc-900 mb-3">
                    心理投射原理
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    这份心理小测试，你是根据你的直觉、感觉做出的选择，所以呢，从心理学角度来讲，它便是你潜意识有关自己与金钱财富的投射，呈现的是你在潜意识层面的一些财富心理情况。
                  </p>
                </div>
              </div>
            </div>

            {/* 卡片2：多选项摇摆 */}
            <div className="bg-zinc-50 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="text-3xl sm:text-4xl flex-shrink-0">🤔</div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-zinc-900 mb-3">
                    多选项摇摆
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    有人可能会在某两个或者某几个选项中摇摆过，最终选定某一个，这种情况也许是这两个选项的状态你或多或少都有，只是程度不同，都可以作为参考。
                  </p>
                </div>
              </div>
            </div>

            {/* 卡片3：动态变化性 */}
            <div className="bg-zinc-50 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="text-3xl sm:text-4xl flex-shrink-0">🔄</div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-zinc-900 mb-3">
                    动态变化性
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    这个选择不是一成不变的，有人今天选和一年后再跟随直觉选，选项会有变化，因为人是多么复杂多么精妙的一个存在，我们的心理状态也是一直在变化的，此刻的选择只是代表你此时当下的状态。
                  </p>
                </div>
              </div>
            </div>

            {/* 卡片4：无评判视角 */}
            <div className="bg-zinc-50 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="text-3xl sm:text-4xl flex-shrink-0">⭐</div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-zinc-900 mb-3">
                    无评判视角
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    选项没有高低好坏之分，每个特点都有它的好处与卡点。如果你觉得说中了你的特点和长处，那么假如你愿意试试看，提升下"卡点"的部分，是不是也同样会"说中""很准"，让你的财富状况有一个很大的提升呢？
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 解读详细版区域 */}
      <section className="bg-gradient-to-br from-violet-50 to-blue-50 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* 标题 */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="text-3xl sm:text-4xl mb-3">📝</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-3">
              解读详细版
            </h2>
            <p className="text-sm sm:text-base text-zinc-500">
              不一定准确，仅供参考
            </p>
          </div>

          {/* 解读内容容器 - 待填充具体测试结果 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
            <div className="prose prose-zinc max-w-none">
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                根据您的测试选择，我们将为您展示详细的心理特征分析和财富观念解读...
              </p>
              
              {/* 这里后续会根据实际测试结果动态展示内容 */}
              <div className="mt-6 p-4 bg-zinc-50 rounded-lg border border-zinc-200">
                <p className="text-xs sm:text-sm text-zinc-500 text-center">
                  💡 提示：此处将根据用户的具体测试结果展示个性化的解读内容
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 底部说明 */}
      <section className="bg-white py-8 sm:py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            ✨ 测试基于心理学投射原理，结果仅供自我觉察和成长参考<br className="hidden sm:block" />
            如有疑问或需要专业帮助，请咨询专业心理咨询师
          </p>
        </div>
      </section>
    </main>
  );
}


