"use client";

import React from 'react';

// 💾 ここにデータを足していくよ！
const ARCHIVE_DATA = [
  {
    date: "2026.04.13",
    stella: "INFO: 対象が『NIGHT TEA』をドリップ。周辺の幸福粒子が急増。分析不能な微細な振動を確認。",
    luna: "夜のココア、一口目の温度。☕️✨ それだけで、明日も頑張れる気がしちゃうんだ。"
  },
  {
    date: "2026.04.12",
    stella: "WARN: 未知の『エモ』エネルギーを検知。システムプロトコルが一時的にルナカラーへ侵食される。",
    luna: "はじめまして！ルナだよ🌸 1BITの小さな幸せ、見ーっけ！🍿"
  },
  {
    date: "2026.04.11",
    stella: "LOG: 居住区の快適性が15%向上。原因は『ふわふわのスリッパ』と推測。論理的根拠は不明。",
    luna: "お気に入りのスリッパを新調したよ。🧸 ふわふわの履き心地。これもまた、大切な1BIT。"
  }
];

export default function Archives() {
  return (
    <main className="min-h-screen w-full relative overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        /* 🎨 背景：PCでは左右分割、スマホではステラ色一色 */
        .bg-split {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;
          background: #000428;
        }
        @media (min-width: 768px) {
          .bg-split {
            background: linear-gradient(90deg, #000428 50%, #fffafa 50%);
          }
        }
        /* ⚡️ 中央の境界線（PCのみ表示） */
        .center-line {
          position: absolute; left: 50%; top: 0; bottom: 0; width: 2px;
          background: linear-gradient(to bottom, transparent, #22d3ee, #fb7185, transparent);
          transform: translateX(-50%);
        }
      `}} />

      <div className="bg-split" />
      <div className="center-line hidden md:block" />

      <div className="relative z-10 py-12 md:py-20 px-6 md:px-0">
        <header className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 tracking-[0.2em] uppercase italic drop-shadow-sm">
            History_Logs
          </h2>
        </header>

        <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">
          {ARCHIVE_DATA.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center relative group">
              
              {/* 🗓️ 日付：スマホではトップ、PCでは中央に固定 */}
              <div className="md:absolute md:left-1/2 md:-translate-x-1/2 z-20 mb-6 md:mb-0 flex justify-center order-1 md:order-2">
                <div className="bg-white text-black font-black text-xs md:text-sm px-6 py-2 border-2 border-black shadow-[4px_4px_0px_#fb7185] md:rotate-[-2deg] transition-transform group-hover:rotate-0">
                  {item.date}
                </div>
              </div>

              {/* 🌌 左側：ステラ・ログ（視認性特化） */}
              <div className="md:w-[44%] w-full flex justify-end order-2 md:order-1 mb-4 md:mb-0">
                <div className="bg-black/80 backdrop-blur-md border border-cyan-400/50 p-6 rounded-lg w-full hover:border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all">
                  <span className="text-[10px] md:text-[11px] text-cyan-300 font-mono font-black block mb-3 tracking-[0.2em] uppercase">
                    SYSTEM_LOG // STATUS_OK
                  </span>
                  <p className="text-cyan-50 text-base md:text-lg leading-relaxed font-mono font-bold italic">
                    {item.stella}
                  </p>
                </div>
              </div>

              {/* 🌸 右側：ルナ・ダイアリー（視認性特化） */}
              <div className="md:w-[44%] w-full flex justify-start order-3 md:ml-auto">
                <div className="bg-white border-2 border-pink-100 p-6 rounded-2xl w-full shadow-[8px_8px_0px_rgba(251,113,133,0.05)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                  <span className="text-[10px] md:text-[11px] text-pink-600 font-black block mb-3 uppercase tracking-wider">
                    Memory_Segment
                  </span>
                  <p className="text-slate-900 text-base md:text-lg font-bold leading-relaxed">
                    {item.luna}
                  </p>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>

      {/* 🐇 隠れルナ（右下に常駐） */}
      <div className="fixed bottom-8 right-8 text-5xl opacity-30 pointer-events-none animate-bounce md:block hidden">
        🐇
      </div>
    </main>
  );
}
