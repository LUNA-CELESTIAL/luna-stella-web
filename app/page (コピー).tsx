"use client";

import React from 'react';
import Link from 'next/link'; // リンク用にこれも追加しておいたよ

const LUNA_POSTS = [
  {
    date: "2026.04.13",
    tag: "NIGHT TEA",
    content: "真夜中のココア、一口目の温度。☕️✨\nそれだけで、明日も頑張れる気がしちゃうんだ。",
    likes: "2,048"
  },
  {
    date: "2026.04.12",
    tag: "WELCOME",
    content: "はじめまして！ルナだよ🌸\n1BITの小さな幸せ、見ーっけ！🍿",
    likes: "1,024"
  },
  {
    date: "2026.04.11",
    tag: "CHILL",
    content: "お気に入りのスリッパを新調したよ。🧸\nふわふわの履き心地。",
    likes: "896"
  }
];

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen w-full font-sans relative">
      <style dangerouslySetInnerHTML={{ __html: `
        .stella-side {
          background-color: #000428;
          background-image: 
            linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .luna-side {
          background-color: #fffafa;
          background-image: url("https://www.transparenttextures.com/patterns/paper-fibers.png");
        }
        .energy-line {
          position: absolute; left: 50%; top: 0; bottom: 0; width: 2px;
          background: linear-gradient(to bottom, #00f2fe, #7028e4, #fb7185);
          box-shadow: 0 0 20px rgba(112, 40, 228, 0.8);
          transform: translateX(-50%); z-index: 30;
        }
        @keyframes random-hop {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(-10deg); }
          50% { transform: translateY(-2px) rotate(5deg); }
          75% { transform: translateY(-12px) rotate(-5deg); }
        }
      `}} />

      {/* --- LEFT: Stella (System Side) --- */}
      <section className="stella-side md:w-1/2 min-h-[40vh] md:h-screen p-8 md:p-12 relative flex flex-col font-mono overflow-hidden">
        <div className="relative z-20 space-y-8">
          <div className="flex items-center space-x-3">
            <span className="w-3 h-3 bg-cyan-400 rounded-full animate-ping" />
            <span className="text-cyan-300 font-black text-xs md:text-sm tracking-[0.3em] uppercase">[STELLA-LOGS_ACTIVE]</span>
          </div>

          <div className="text-cyan-400 text-sm md:text-lg font-bold">
            <span className="opacity-80">root@stella:~$</span> <span className="text-white animate-pulse">track --luna_rabbit</span>
          </div>
          
          <div className="bg-black/60 backdrop-blur-xl p-6 md:p-8 border border-cyan-500/40 rounded-lg max-w-lg shadow-[0_0_30px_rgba(0,255,255,0.1)]">
             <div className="space-y-3 text-base md:text-xl text-cyan-200 leading-relaxed font-bold italic">
               <p>&gt; 座標：@luna_rabbit を補足。</p>
               <p>&gt; 分析：幸福粒子の異常増幅を確認。</p>
               <p>&gt; 警告：論理回路が『エモ』により侵食中。</p>
             </div>
          </div>

          <Link href="/archives" className="group inline-flex items-center space-x-4 border-2 border-cyan-500 px-8 py-3 hover:bg-cyan-500 hover:text-black transition-all text-cyan-400 font-black text-xs md:text-sm tracking-widest uppercase">
            <span>Access_History</span>
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </div>
      </section>

      {/* ⚡️ 境界線（PCのみ） */}
      <div className="energy-line hidden md:block" />

      {/* --- RIGHT: Luna (Tea Party Side) --- */}
      <section className="luna-side md:w-1/2 min-h-[60vh] md:h-screen p-8 md:p-12 overflow-y-auto flex flex-col items-center">
        <div className="w-full max-w-md space-y-10 md:space-y-12 relative z-20 pb-20">
          <header className="text-center">
             <div className="text-5xl md:text-6xl mb-4 animate-bounce">☕️🐇</div>
             <h1 className="text-4xl md:text-5xl font-black text-pink-500 tracking-tighter uppercase drop-shadow-sm">LUNA-BIT</h1>
          </header>

          <div className="space-y-8">
            {LUNA_POSTS.map((post, index) => (
              <div key={index} className="bg-white p-7 md:p-10 rounded-[2.5rem] shadow-[12px_12px_0px_rgba(251,113,133,0.1)] border-2 border-pink-50 relative group transition-all">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] md:text-xs font-black bg-pink-500 text-white px-4 py-1 rounded-full uppercase">{post.tag}</span>
                  <span className="text-xs text-orange-400 font-black tracking-wider">@luna_rabbit</span>
                </div>
                <p className="text-slate-900 text-lg md:text-xl leading-relaxed font-bold mb-8 whitespace-pre-wrap">{post.content}</p>
                <div className="flex justify-between items-center pt-6 border-t-2 border-pink-50">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl md:text-3xl">🍪</span>
                    <span className="text-pink-500 font-black text-sm md:text-base">{post.likes} bits</span>
                  </div>
                  <span className="text-pink-300 text-xs font-mono font-black tracking-widest">{post.date}</span>
                </div>
              </div>
            ))}
          </div>

          <Link href="/archives" className="flex flex-col items-center space-y-3 group mx-auto">
             <span className="text-4xl group-hover:scale-125 transition-transform duration-300">🍿</span>
             <span className="text-pink-500 font-black text-xs md:text-sm tracking-[0.4em] uppercase border-b-2 border-pink-200">View All Logs</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
