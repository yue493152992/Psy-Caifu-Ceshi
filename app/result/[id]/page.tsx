import Link from 'next/link';
import { testOptions, ItemType } from '@/lib/test-data';
import { getResultData, typeNames, conclusionText } from '@/lib/result-data';
import ExportableContainer from './ExportableContainer';

interface ResultPageProps {
  params: Promise<{ id: string }>;
}

// 为静态导出生成所有可能的路径
export async function generateStaticParams() {
  const types: ItemType[] = ['doll', 'jewelry', 'book', 'phone', 'lion'];
  const params = [];
  
  // 生成所有可能的组合 (5 x 5 = 25 种)
  for (const selfType of types) {
    for (const wealthType of types) {
      params.push({
        id: `${selfType}-${wealthType}`
      });
    }
  }
  
  return params;
}

export default async function ResultPage({ params }: ResultPageProps) {
  const { id } = await params;
  const [selfTypeStr, wealthTypeStr] = id.split('-') as [ItemType, ItemType];

  const selfItem = testOptions.find(item => item.id === selfTypeStr);
  const wealthItem = testOptions.find(item => item.id === wealthTypeStr);
  
  if (!selfItem || !wealthItem) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-violet-50 via-blue-50 to-purple-50 p-4 text-center">
        <h1 className="text-3xl font-bold text-zinc-900 mb-4">结果未找到</h1>
        <p className="text-zinc-700 mb-8">请重新进行测试。</p>
        <Link 
          href="/test" 
          className="px-8 py-4 text-lg font-semibold text-white bg-violet-600 hover:bg-violet-700 rounded-full shadow-lg transition-all"
        >
          重新测试
        </Link>
      </main>
    );
  }

  const resultData = getResultData(selfTypeStr, wealthTypeStr);

  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-purple-50 py-6 sm:py-10 lg:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 顶部标题卡片 */}
        <div className="mb-8 sm:mb-10">
          <div className="bg-white rounded-2xl sm:rounded-3xl px-6 sm:px-8 lg:px-10 py-8 sm:py-10 shadow-lg border border-violet-100">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 mb-6 text-center">
              你的财富心理报告
            </h1>
            
            {/* 类型展示 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-3 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl px-5 py-3 border border-violet-200">
                  <span className="text-4xl sm:text-5xl">{selfItem.emoji}</span>
                  <div className="flex flex-col">
                    <span className="text-lg sm:text-xl font-bold text-violet-700">{typeNames[selfTypeStr]}</span>
                    <span className="text-xs sm:text-sm text-zinc-500">自己</span>
                  </div>
                </div>
                
                <span className="text-2xl sm:text-3xl text-violet-300 font-light">×</span>
                
                <div className="flex items-center gap-3 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl px-5 py-3 border border-violet-200">
                  <span className="text-4xl sm:text-5xl">{wealthItem.emoji}</span>
                  <div className="flex flex-col">
                    <span className="text-lg sm:text-xl font-bold text-violet-700">{typeNames[wealthTypeStr]}</span>
                    <span className="text-xs sm:text-sm text-zinc-500">财富</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 主内容区域 */}
        <ExportableContainer fileName={`result-${id}`} buttonText="导出整页图片">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden border border-zinc-100">
            
            {/* 第一部分：财富潜力 - 浅蓝色主题 */}
            <section className="p-6 sm:p-8 lg:p-10 border-b border-zinc-100 bg-gradient-to-br from-blue-50/30 to-sky-50/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-sky-100 flex items-center justify-center border border-blue-200 shadow-sm">
                  <span className="text-2xl">✨</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">你的财富潜力</h2>
              </div>

              <div className="space-y-8">
                {/* 自己部分 */}
                <div className="bg-white/70 rounded-xl p-5 sm:p-6 border-2 border-blue-200 shadow-sm">
                  <h3 className="text-lg sm:text-xl font-bold text-blue-700 mb-2 flex items-center gap-2">
                    <span>自己 → {typeNames[selfTypeStr]}</span>
                    <span className="text-2xl">{selfItem.emoji}</span>
                  </h3>
                  <p className="text-sm text-zinc-500 mb-3 italic">
                    选择「{typeNames[selfTypeStr]}」代表自己，说明：
                  </p>
                  <p className="text-base sm:text-lg text-zinc-800 leading-relaxed">
                    {resultData.selfAnalysis.potential}
                  </p>
                </div>

                {/* 财富部分 */}
                <div className="bg-white/70 rounded-xl p-5 sm:p-6 border-2 border-blue-200 shadow-sm">
                  <h3 className="text-lg sm:text-xl font-bold text-blue-700 mb-2 flex items-center gap-2">
                    <span>财富 → {typeNames[wealthTypeStr]}</span>
                    <span className="text-2xl">{wealthItem.emoji}</span>
                  </h3>
                  <p className="text-sm text-zinc-500 mb-3 italic">
                    选择「{typeNames[wealthTypeStr]}」代表财富，说明你：
                  </p>
                  <p className="text-base sm:text-lg text-zinc-800 leading-relaxed">
                    {resultData.wealthAnalysis.potential}
                  </p>
                </div>
              </div>
            </section>

            {/* 第二部分：财富卡点 - 琥珀色主题 */}
            <section className="p-6 sm:p-8 lg:p-10 border-b border-zinc-100 bg-gradient-to-br from-amber-50/30 to-orange-50/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center border border-amber-200 shadow-sm">
                  <span className="text-2xl">💡</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">你的财富卡点</h2>
              </div>

              <div className="space-y-8">
                {/* 自己部分 */}
                <div className="bg-white/70 rounded-xl p-5 sm:p-6 border-2 border-amber-200 shadow-sm">
                  <h3 className="text-lg sm:text-xl font-bold text-amber-700 mb-2 flex items-center gap-2">
                    <span>自己 → {typeNames[selfTypeStr]}</span>
                    <span className="text-2xl">{selfItem.emoji}</span>
                  </h3>
                  <p className="text-sm text-zinc-500 mb-3 italic">
                    选择「{typeNames[selfTypeStr]}」代表自己，说明有一些：
                  </p>
                  <p className="text-base sm:text-lg text-zinc-800 leading-relaxed">
                    {resultData.selfAnalysis.blockage}
                  </p>
                </div>

                {/* 财富部分 */}
                <div className="bg-white/70 rounded-xl p-5 sm:p-6 border-2 border-amber-200 shadow-sm">
                  <h3 className="text-lg sm:text-xl font-bold text-amber-700 mb-2 flex items-center gap-2">
                    <span>财富 → {typeNames[wealthTypeStr]}</span>
                    <span className="text-2xl">{wealthItem.emoji}</span>
                  </h3>
                  <p className="text-sm text-zinc-500 mb-3 italic">
                    选择「{typeNames[wealthTypeStr]}」代表财富，说明：
                  </p>
                  <p className="text-base sm:text-lg text-zinc-800 leading-relaxed">
                    {resultData.wealthAnalysis.blockage}
                  </p>
                </div>
              </div>
            </section>

            {/* 第三部分：提升方向 - 绿色/青色主题 */}
            <section className="p-6 sm:p-8 lg:p-10 border-b border-zinc-100 bg-gradient-to-br from-emerald-50/30 to-teal-50/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center border border-emerald-200 shadow-sm">
                  <span className="text-2xl">🚀</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">提升方向</h2>
              </div>

              <div className="space-y-8">
                {/* 自己部分 */}
                <div className="bg-white/70 rounded-xl p-5 sm:p-6 border-2 border-emerald-200 shadow-sm">
                  <h3 className="text-lg sm:text-xl font-bold text-emerald-700 mb-2 flex items-center gap-2">
                    <span>自己 → {typeNames[selfTypeStr]}</span>
                    <span className="text-2xl">{selfItem.emoji}</span>
                  </h3>
                  <p className="text-sm text-zinc-500 mb-3 italic">
                    选择「{typeNames[selfTypeStr]}」代表自己，说明有一些：
                  </p>
                  <p className="text-base sm:text-lg text-zinc-800 leading-relaxed">
                    {resultData.selfAnalysis.improvement}
                  </p>
                </div>

                {/* 财富部分 */}
                <div className="bg-white/70 rounded-xl p-5 sm:p-6 border-2 border-emerald-200 shadow-sm">
                  <h3 className="text-lg sm:text-xl font-bold text-emerald-700 mb-2 flex items-center gap-2">
                    <span>财富 → {typeNames[wealthTypeStr]}</span>
                    <span className="text-2xl">{wealthItem.emoji}</span>
                  </h3>
                  <p className="text-sm text-zinc-500 mb-3 italic">
                    选择「{typeNames[wealthTypeStr]}」代表财富，说明：
                  </p>
                  <p className="text-base sm:text-lg text-zinc-800 leading-relaxed">
                    {resultData.wealthAnalysis.improvement}
                  </p>
                </div>
              </div>
            </section>

            {/* 第四部分：结语 */}
            <section className="p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-violet-50/30 to-purple-50/20">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center border border-violet-200 shadow-sm">
                  <span className="text-2xl">💎</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-violet-800">写在最后</h2>
              </div>
              <div className="bg-white/70 rounded-xl p-5 sm:p-6 border-2 border-violet-200 shadow-sm">
                <p className="text-base sm:text-lg text-zinc-800 leading-relaxed whitespace-pre-line">
                  {conclusionText}
                </p>
              </div>
            </section>

          </div>
        </ExportableContainer>

        {/* 底部行动按钮 */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
          <Link
            href="/test"
            className="flex-1 sm:flex-initial px-8 py-4 text-base sm:text-lg font-semibold text-white bg-violet-600 hover:bg-violet-700 active:bg-violet-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] text-center"
          >
            🔄 重新测试
          </Link>
          <Link
            href="/"
            className="flex-1 sm:flex-initial px-8 py-4 text-base sm:text-lg font-semibold text-zinc-700 bg-white hover:bg-zinc-50 active:bg-zinc-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] border-2 border-zinc-200 text-center"
          >
            🏠 返回首页
          </Link>
        </div>

        {/* 底部说明 */}
        <p className="text-center text-xs sm:text-sm text-zinc-500 mt-6 px-4">
          测试基于心理学原理，结果仅供自我觉察参考
        </p>

      </div>
    </main>
  );
}
