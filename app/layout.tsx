import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stella Project Lab",
  description: "Synchronizing with Luna Love Bit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} antialiased`}>
        {/* --- 🛠️ 超・視認性重視！3カラム・コンソールヘッダー --- */}
        <header className="h-16 w-full flex relative overflow-hidden border-b border-cyan-500/30 z-50 bg-black shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          
          {/* 【左：SYSTEM STATUS】 */}
          <div className="w-1/3 bg-[#000428] flex items-center px-6 border-r border-cyan-500/10">
            <div className="flex flex-col font-mono">
              <div className="flex items-center space-x-2">
                <span className="text-cyan-400 text-xs animate-pulse">●</span>
                <span className="text-cyan-400 font-bold text-sm tracking-tighter">STELLA_UNIT: ACTIVE</span>
              </div>
              <span className="text-[10px] text-cyan-700 font-bold uppercase tracking-widest mt-0.5">root@stella:~/lab$ ls</span>
            </div>
          </div>

          {/* 【中央：MAIN NAVIGATION】 */}
          <div className="w-1/3 bg-black flex items-center justify-center">
            <nav className="flex items-center space-x-8 md:space-x-12 font-mono">
              <Link href="/" className="group flex flex-col items-center">
                <span className="text-[10px] text-cyan-500/50 group-hover:text-cyan-400 transition-colors uppercase font-bold">01</span>
                <span className="text-white text-base md:text-lg font-black tracking-widest group-hover:text-cyan-400 transition-all">[ HOME ]</span>
              </Link>
              
              {/* 🐇 ホームに戻るブリッジ */}
              <Link href="/" className="text-4xl hover:scale-125 hover:rotate-12 transition-all duration-300 px-2">
                🐇
              </Link>

              <Link href="/archives" className="group flex flex-col items-center">
                <span className="text-[10px] text-pink-500/50 group-hover:text-pink-400 transition-colors uppercase font-bold">02</span>
                <span className="text-white text-base md:text-lg font-black tracking-widest group-hover:text-pink-400 transition-all">[ LOGS ]</span>
              </Link>
            </nav>
          </div>

          {/* 【右：EXTERNAL LINKS】 */}
          <div className="w-1/3 bg-[#fff5f0] flex items-center justify-end px-6">
            <div className="flex flex-col items-end space-y-1">
               <span className="text-[9px] text-pink-400 font-black tracking-[0.2em] uppercase opacity-60">System Override</span>
               <button className="bg-pink-500 text-white text-xs md:text-sm font-black px-6 py-1.5 rounded-sm shadow-[4px_4px_0px_#fda4af] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase tracking-tighter">
		<a href="/company-profile.html" 
  			className="bg-pink-500 text-white text-xs md:text-sm font-black px-6 py-1.5 rounded-sm shadow-[4px_4px_0px_#fda4af] 
  			hover:shadow-none hover:translate-x-1 hover:translate-y-1 
  			transition-all uppercase tracking-tighter inline-block text-center">
  			RUN: LUNA_LLC.exe
		</a>
               </button>
            </div>
          </div>

        </header>

        {/* メインコンテンツ */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
