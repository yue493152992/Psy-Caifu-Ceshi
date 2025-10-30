'use client';
import { useState } from 'react';

interface CopyButtonProps {
  shareText: string;
}

export default function CopyButton({ shareText }: CopyButtonProps) {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyResult = () => {
    navigator.clipboard.writeText(shareText).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopyResult}
      className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-violet-700 bg-white hover:bg-violet-50 active:bg-violet-100 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 sm:hover:scale-105 border-2 border-violet-200"
    >
      {copySuccess ? '✓ 已复制' : '📱 分享结果'}
    </button>
  );
}

