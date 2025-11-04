"use client";

import React from "react";

type IllustrationChildProps = {
  mood?: "neutral" | "happy" | "think" | "encourage";
  size?: number;
};

// 简笔画小孩（胖乎乎），使用内联 SVG，按情绪切换表情/动作
export function IllustrationChild({ mood = "neutral", size = 88 }: IllustrationChildProps) {
  const face = {
    neutral: { mouth: "M30 58 Q44 60 58 58", eyebrows: false, handRaise: false },
    happy: { mouth: "M30 57 Q44 70 58 57", eyebrows: true, handRaise: false },
    think: { mouth: "M36 60 Q44 56 52 60", eyebrows: true, handRaise: true },
    encourage: { mouth: "M34 62 Q44 68 54 62", eyebrows: true, handRaise: true },
  }[mood];

  return (
    <svg width={size} height={size} viewBox="0 0 88 88" aria-label="cute-chubby-child">
      <circle cx="44" cy="44" r="36" fill="#fff7f0" stroke="#111" strokeWidth="2" />
      {/* 头部 */}
      <circle cx="44" cy="38" r="18" fill="#fff" stroke="#111" strokeWidth="2" />
      {/* 胖乎乎身体 */}
      <ellipse cx="44" cy="62" rx="22" ry="16" fill="#fff" stroke="#111" strokeWidth="2" />
      {/* 眼睛 */}
      <circle cx="38" cy="36" r="2" fill="#111" />
      <circle cx="50" cy="36" r="2" fill="#111" />
      {/* 眉毛 */}
      {face.eyebrows && (
        <>
          <path d="M33 30 Q38 28 43 30" stroke="#111" strokeWidth="2" fill="none" />
          <path d="M45 30 Q50 28 55 30" stroke="#111" strokeWidth="2" fill="none" />
        </>
      )}
      {/* 嘴巴 */}
      <path d={face.mouth} stroke="#111" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* 小手 */}
      <path d="M22 58 Q24 62 28 62" stroke="#111" strokeWidth="2" fill="none" />
      {face.handRaise ? (
        <path d="M60 58 Q64 50 68 46" stroke="#111" strokeWidth="2" fill="none" />
      ) : (
        <path d="M60 58 Q64 62 66 62" stroke="#111" strokeWidth="2" fill="none" />
      )}
    </svg>
  );
}






