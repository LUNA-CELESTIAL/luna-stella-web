"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// 📋 型定義（n8nのCodeノードで作った形に合わせているよ）
type LogEntry = {
  id: string;
  date: string;
  tag: string;
  stella_logs: string[];
  luna_content: string;
  likes: string;
};

export default function Home() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 🪄 魔法：n8nがGitHubに保存した logs.json を読み込む
  useEffect(() => {
    // キャッシュで古い日記が表示されないように、タイムスタンプ(?t=...)を付けるよ
    fetch(`/data/logs.json?t=${new Date().getTime()}`)
      .then((res) => res.json())
      .then((data) => {
        setLogs(data); // n8n側で既に3件に絞ってある前提だぴょん！
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("読み込みエラーだぴょん:", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <main className="flex flex-col md:flex-row min-h-screen w-full font-sans relative">
      {/* 🎨 スタイル設定（CSS） */}
      <style dangerouslySetInnerHTML={{ __html: `
        .stella-side { background-color: #000428; }
        .luna-side { background-color: #fffafa; }
        .energy-line {
          position: absolute; left: 50%; top: 0; bottom: 0; width: 1px;
          background: linear-gradient(to bottom, transparent, #22d3ee, #fb7185, transparent);
          transform: translateX(-50%); z-index: 30;
        }
      `}} />

      <div className="energy-line hidden md:block" />

      {/* --- LEFT: Stella (システムログ風) --- */}
      <section className="stella-side md:w-1/2 min-h-[40vh] md:h-screen p-8 md:p-12 relative flex flex-col font-mono overflow-hidden">
        <div className="relative z-20 space-y-8">
          <div className="flex items-center space-x-3">
            <span className="w-3 h-3 bg-cyan-400 rounded-full animate-ping" />
            <span className="text-cyan-300 font-black text-xs md:text-sm tracking-[0.3em] uppercase">[STELLA-LOGS_ACTIVE]</span>
          </div>

          <div className="bg-black/60 backdrop-blur-xl p-6 md:p-8 border border-cyan-500/40 rounded-lg max-w-lg shadow-[0_0_30px_rgba(0,255,255,0.1)]">
             <div className="space-y-3 text-base md:text-xl text-cyan-200 leading-relaxed font-bold italic">
               {logs[0]?.stella_logs.map((line, i) => (
                 <p key={i}>{line}</p>
               ))}
               {isLoading && <p>ACCESSING QUANTUM DATA...</p>}
             </div>
          </div>

          <Link href="/archives" className="group inline-flex items-center space-x-4 border-2 border-cyan-500 px-8 py-3 hover:bg-cyan-500 hover:text-black transition-all text-cyan-400 font-black text-xs md:text-sm tracking-widest uppercase">
            <span>Access_History</span>
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </div>
      </section>

      {/* --- RIGHT: Luna (日記カード) --- */}
      <section className="luna-side md:w-1/2 min-h-[60vh] md:h-screen p-8 md:p-12 overflow-y-auto flex flex-col items-center">
        <div className="w-full max-w-md space-y-10 md:space-y-12 relative z-20 pb-20">
          <header className="text-center">
             <div className="text-5xl md:text-6xl mb-4 animate-bounce">☕️🐇</div>
             <h1 className="text-4xl md:text-5xl font-black text-pink-500 tracking-tighter uppercase drop-shadow-sm">LUNA-LOVE-BIT</h1>
          </header>

          <div className="space-y-8">
            {logs.map((post) => (
              <div key={post.id} className="bg-white p-7 md:p-10 rounded-[2.5rem] shadow-[12px_12px_0px_rgba(251,113,133,0.1)] border-2 border-pink-50 relative group transition-all hover:-translate-y-1">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] md:text-xs font-black bg-pink-500 text-white px-4 py-1 rounded-full uppercase">{post.tag}</span>
                  <span className="text-xs text-orange-400 font-black tracking-wider">@luna_rabbit</span>
                </div>
                <p className="text-slate-900 text-lg md:text-xl leading-relaxed font-bold mb-8 whitespace-pre-wrap">{post.luna_content}</p>
                <div className="flex justify-between items-center pt-6 border-t-2 border-pink-50">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl md:text-3xl">🍪</span>
                    <span className="text-pink-500 font-black text-sm md:text-base">{post.likes} bits</span>
                  </div>
                  <span className="text-pink-300 text-xs font-mono font-black tracking-widest">{post.date}</span>
                </div>
              </div>
            ))}
            {logs.length === 0 && !isLoading && (
              <p className="text-center text-pink-300 font-bold">まだ日記が届いてないみたいだぴょん🌸</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
