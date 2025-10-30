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
              className="text-sm text-zinc-500 hover:text-zinc-900 cursor-pointer transition-colors"
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
                  : 'border-transparent hover:border-violet-200 sm:hover:scale-105'
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

