'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="p-10 bg-white h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-red-500 mb-4">
        ステラが魔法（生成）に失敗して、世界がちょっと崩れちゃったみたい。
      </h2>
      <p className="mb-8">でも大丈夫、公式の銀行向け情報はここから見れるよ！</p>
      
      {/* 聖域へのリンク */}
      <a href="/index.html" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg">
        🏢 会社概要（公式）を見る
      </a>
      
      <button onClick={() => reset()} className="mt-4 text-gray-500 underline">
        もう一度ステラを信じてみる（再読み込み）
      </button>
    </div>
  );
}
