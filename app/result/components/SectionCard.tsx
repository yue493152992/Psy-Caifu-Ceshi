"use client";

import React from "react";
import { IllustrationChild } from "../components/IllustrationChild";

type SectionCardProps = {
  title: string;
  items: string[];
  mood?: "neutral" | "happy" | "think" | "encourage";
};

export function SectionCard({ title, items, mood = "neutral" }: SectionCardProps) {
  return (
    <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 16, background: "#fff" }}>
      <div style={{ fontWeight: 600, marginBottom: 8 }}>{title}</div>
      <ul style={{ margin: 0, paddingLeft: 18 }}>
        {items.map((text, idx) => (
          <li key={idx} style={{ lineHeight: 1.6 }}>{text}</li>
        ))}
      </ul>
      <div style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 8 }}>
        <IllustrationChild mood={mood} />
        <div style={{ fontSize: 12, color: "#6b7280" }}>插画：情绪与动作随本段语义变化</div>
      </div>
    </div>
  );
}






