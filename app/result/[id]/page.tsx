'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { testOptions, ItemType } from '@/lib/test-data';
import { getResultData, typeNames, conclusionText } from '@/lib/result-data';

interface ResultPageProps {
  params: Promise<{ id: string }>;
}

export default function ResultPage({ params }: ResultPageProps) {
  const [id, setId] = useState<string>('');
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    params.then(p => setId(p.id));
  }, [params]);

  if (!id) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-blue-50 to-purple-50">
        <div className="text-center">
          <div className="text-4xl mb-4 animate-pulse">💫</div>
          <p className="text-zinc-600">加载中...</p>
        </div>
      </main>
    );
  }

  const [selfTypeStr, wealthTypeStr] = id.split('-') as [ItemType, ItemType];

  const selfItem = testOptions.find(item => item.id === selfTypeStr);
  const wealthItem = testOptions.find(item => item.id === wealthTypeStr);
  const resultData = getResultData(selfTypeStr, wealthTypeStr);

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

  const handleCopyResult = () => {
    const shareText = `我的财富心理测试结果：${selfItem.emoji} ${typeNames[selfTypeStr]}（自己）× ${wealthItem.emoji} ${typeNames[wealthTypeStr]}（财富）

通过心理测试，了解真实的自己，找到财富突破口。立即测试：${window.location.origin}`;
    
    navigator.clipboard.writeText(shareText).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-purple-50 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Hero 区：类型标题 */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-white rounded-2xl px-6 sm:px-10 py-8 sm:py-10 shadow-xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 mb-4">
              你的财富心理报告
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-xl sm:text-2xl">
              <div className="flex items-center gap-2">
                <span className="text-4xl sm:text-5xl">{selfItem.emoji}</span>
                <span className="font-semibold text-violet-700">{typeNames[selfTypeStr]}</span>
                <span className="text-sm sm:text-base text-zinc-500">（自己）</span>
              </div>
              <span className="text-zinc-400 hidden sm:inline">×</span>
              <div className="flex items-center gap-2">
                <span className="text-4xl sm:text-5xl">{wealthItem.emoji}</span>
                <span className="font-semibold text-violet-700">{typeNames[wealthTypeStr]}</span>
                <span className="text-sm sm:text-base text-zinc-500">（财富）</span>
              </div>
            </div>
          </div>
        </div>

        {/* 主内容卡片 */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          
          {/* 第一部分：关于你自己 */}
          <section className="p-6 sm:p-10 bg-gradient-to-br from-green-50/50 to-emerald-50/30">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl sm:text-4xl">{selfItem.emoji}</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
                关于你自己
              </h2>
            </div>

            {/* 财富潜力 */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">✨</span>
                <h3 className="text-xl sm:text-2xl font-semibold text-emerald-700">财富潜力</h3>
              </div>
              <p className="text-base sm:text-lg text-zinc-800 leading-relaxed pl-8">
                {resultData.selfAnalysis.potential}
              </p>
            </div>

            {/* 财富卡点 */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">💡</span>
                <h3 className="text-xl sm:text-2xl font-semibold text-amber-700">财富卡点</h3>
              </div>
              <p className="text-base sm:text-lg text-zinc-800 leading-relaxed pl-8">
                {resultData.selfAnalysis.blockage}
              </p>
            </div>

            {/* 提升方向 */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🚀</span>
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-700">提升方向</h3>
              </div>
              <p className="text-base sm:text-lg text-zinc-800 leading-relaxed pl-8 font-medium">
                {resultData.selfAnalysis.improvement}
              </p>
            </div>
          </section>

          {/* 分隔线 */}
          <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent"></div>

          {/* 第二部分：关于财富观 */}
          <section className="p-6 sm:p-10 bg-gradient-to-br from-blue-50/50 to-cyan-50/30">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl sm:text-4xl">{wealthItem.emoji}</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
                关于财富观
              </h2>
            </div>

            {/* 财富潜力 */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">✨</span>
                <h3 className="text-xl sm:text-2xl font-semibold text-emerald-700">财富潜力</h3>
              </div>
              <p className="text-base sm:text-lg text-zinc-800 leading-relaxed pl-8">
                {resultData.wealthAnalysis.potential}
              </p>
            </div>

            {/* 财富卡点 */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">💡</span>
                <h3 className="text-xl sm:text-2xl font-semibold text-amber-700">财富卡点</h3>
              </div>
              <p className="text-base sm:text-lg text-zinc-800 leading-relaxed pl-8">
                {resultData.wealthAnalysis.blockage}
              </p>
            </div>

            {/* 提升方向 */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🚀</span>
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-700">提升方向</h3>
              </div>
              <p className="text-base sm:text-lg text-zinc-800 leading-relaxed pl-8 font-medium">
                {resultData.wealthAnalysis.improvement}
              </p>
            </div>
          </section>

          {/* 分隔线 */}
          <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent"></div>

          {/* 第三部分：激励结语 */}
          <section className="p-6 sm:p-10 bg-gradient-to-br from-violet-50/50 to-purple-50/30">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl sm:text-4xl">💎</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-violet-800">
                写在最后
              </h2>
            </div>
            <p className="text-base sm:text-lg text-zinc-800 leading-relaxed whitespace-pre-line">
              {conclusionText}
            </p>
          </section>

        </div>

        {/* 底部行动区 */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleCopyResult}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-violet-700 bg-white hover:bg-violet-50 active:bg-violet-100 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 sm:hover:scale-105 border-2 border-violet-200"
          >
            {copySuccess ? '✓ 已复制' : '📱 分享结果'}
          </button>
          <Link
            href="/test"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-violet-600 hover:bg-violet-700 active:bg-violet-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 sm:hover:scale-105 text-center"
          >
            🔄 重新测试
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-zinc-700 bg-white hover:bg-zinc-50 active:bg-zinc-100 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 sm:hover:scale-105 border-2 border-zinc-200 text-center"
          >
            🏠 返回首页
          </Link>
        </div>

        {/* 底部说明 */}
        <p className="text-center text-sm text-zinc-500 mt-6 sm:mt-8 px-4">
          测试基于心理学原理，结果仅供自我觉察参考
        </p>

      </div>
    </main>
  );
}
