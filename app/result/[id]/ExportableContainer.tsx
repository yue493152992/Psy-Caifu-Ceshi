"use client";

import React, { useRef, useState } from 'react';
import { toPng } from 'html-to-image';

type Props = {
  fileName: string;
  children: React.ReactNode;
  buttonText?: string;
};

export default function ExportableContainer({ fileName, children, buttonText = '导出图片' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [saving, setSaving] = useState(false);

  const handleExport = async () => {
    if (!ref.current) return;
    try {
      setSaving(true);
      const url = await toPng(ref.current, { backgroundColor: '#ffffff', pixelRatio: 2, cacheBust: true });
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName.endsWith('.png') ? fileName : `${fileName}.png`;
      a.click();
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <div ref={ref}>{children}</div>
      <div className="text-center mt-6">
        <button onClick={handleExport} className="px-6 py-3 text-base font-semibold text-white bg-violet-600 hover:bg-violet-700 active:bg-violet-800 rounded-full shadow-lg hover:shadow-xl transition-all">
          {saving ? '导出中…' : buttonText}
        </button>
      </div>
    </div>
  );
}


