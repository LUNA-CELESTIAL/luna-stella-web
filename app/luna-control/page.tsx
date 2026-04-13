"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LunaControl() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleManifest = async () => {
    setIsGenerating(true);
    setMessage("ルナが星の欠片を集めています...");

    try {
      const res = await fetch("http://localhost:8000/luna-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "おまかせ" }), // 常に「おまかせ」を送信
      });
      const data = await res.json();
      setMessage(data.reply);
      
      // 3秒後にアーカイブページへ自動で案内するよ！
      setTimeout(() => router.push("/archive"), 3000);
    } catch (err) {
      setMessage("魔法が少し混線したみたい...サーバーを確認してね。");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050510] flex flex-col items-center justify-center font-sans overflow-hidden relative">
      {/* 背景の装飾 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a3a] via-transparent to-transparent opacity-50" />
      
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl font-black text-[#fff4c8] tracking-[0.2em] mb-4 drop-shadow-[0_0_20px_rgba(255,244,200,0.5)]">
          LUNA STELLAR
        </h1>
        <p className="text-[#a0d8ef] opacity-70 italic mb-16 tracking-widest text-sm">
          - 思考を捨て、星の導きに従う -
        </p>

        {/* 召喚ボタン：入力フォームの代わりにこれを置くよ */}
        <div className="relative inline-block group">
          <button
            onClick={handleManifest}
            disabled={isGenerating}
            className={`
              relative z-20 w-48 h-48 rounded-full border-2 border-[#ffbdda]/30 
              flex flex-col items-center justify-center transition-all duration-700
              ${isGenerating ? 'scale-90 opacity-50 cursor-wait' : 'hover:scale-110 hover:border-[#ffbdda] shadow-[0_0_40px_rgba(255,189,218,0.2)]'}
            `}
          >
            <span className={`text-5xl mb-2 transition-transform duration-1000 ${isGenerating ? 'animate-spin' : 'group-hover:rotate-12'}`}>
              {isGenerating ? "🌀" : "🪄"}
            </span>
            <span className="text-[10px] font-black tracking-[0.3em] text-[#ffbdda] uppercase">
              {isGenerating ? "Analyzing..." : "Manifest"}
            </span>
          </button>
          
          {/* ボタンの周りの波紋アニメーション */}
          {!isGenerating && (
            <div className="absolute inset-0 rounded-full border border-[#ffbdda]/20 animate-ping opacity-30" />
          )}
        </div>

        {/* 状態メッセージ */}
        <div className="mt-12 h-8">
          <p className="text-[#fff4c8] text-sm font-medium tracking-widest animate-pulse">
            {message}
          </p>
        </div>
      </div>

      {/* 下部の装飾ライン */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-[#a0d8ef] to-transparent opacity-30" />
    </div>
  );
}
