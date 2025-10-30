'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { testOptions } from '@/lib/test-data'

export default function Step2Page() {
  const router = useRouter()
  const [selected, setSelected] = useState<string | null>(null)
  const [selfChoice, setSelfChoice] = useState<string | null>(null)

  // 获取步骤1的选择
  useEffect(() => {
    const savedSelfChoice = localStorage.getItem('selfChoice')
    if (savedSelfChoice) {
      setSelfChoice(savedSelfChoice)
    }
  }, [])

  const handleSelect = (optionId: string) => {
    setSelected(optionId)
    
    // 获取步骤1的选择
    const selfChoice = localStorage.getItem('selfChoice')
    
    if (selfChoice) {
      // 组合结果ID
      const resultId = `${selfChoice}-${optionId}`
      
      // 保存步骤2的选择
      localStorage.setItem('wealthChoice', optionId)
      
      // 短暂延迟后跳转到结果页
      setTimeout(() => {
        router.push(`/result/${resultId}`)
      }, 300)
    } else {
      // 如果没有步骤1的选择，返回步骤1
      router.push('/test/step-1')
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-purple-50">
      {/* 顶部进度栏 */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b border-zinc-200 px-4 sm:px-6 py-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-zinc-600">
              步骤 2/2
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
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>

      {/* 问题区域 */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center mb-10">
          <div className="text-5xl sm:text-6xl mb-6">💰</div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-zinc-900 mb-2 leading-tight">
            请凭直觉选择一个最能代表
          </h1>
          <p className="text-2xl sm:text-3xl font-bold text-violet-600 mb-2">
            "财富"
          </p>
          <p className="text-base sm:text-lg text-zinc-600">
            的物品
          </p>
        </div>

        {/* 选项列表 */}
        <div className="w-full max-w-md mx-auto space-y-3 sm:space-y-4">
          {testOptions.map((option) => {
            const isDisabled = selfChoice === option.id
            
            return (
              <button
                key={option.id}
                onClick={() => !isDisabled && handleSelect(option.id)}
                disabled={isDisabled}
                className={`
                  w-full bg-white rounded-2xl p-6 sm:p-8 shadow-md
                  border-2 transition-all duration-200 text-center relative
                  ${isDisabled
                    ? 'border-zinc-200 bg-zinc-100 opacity-50 cursor-not-allowed'
                    : selected === option.id 
                      ? 'border-violet-600 bg-violet-50 hover:shadow-lg' 
                      : 'border-transparent hover:border-violet-200 hover:shadow-lg sm:hover:scale-105 cursor-pointer'
                  }
                `}
              >
                <div className={`text-5xl sm:text-6xl mb-3 ${isDisabled ? 'grayscale' : ''}`}>
                  {option.emoji}
                </div>
                <div className={`text-xl sm:text-2xl font-semibold ${isDisabled ? 'text-zinc-400' : 'text-zinc-900'}`}>
                  {option.name}
                </div>
                {isDisabled && (
                  <div className="mt-2 text-sm text-zinc-500">
                    已选为"自己"
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </main>
  )
}

