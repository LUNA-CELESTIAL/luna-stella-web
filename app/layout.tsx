{/* 【中央：MAIN NAVIGATION】 スマホでは3つ並べるよ！ */}
          <div className="w-full md:w-1/3 bg-black flex items-center justify-center">
            <nav className="flex items-center space-x-4 md:space-x-8 font-mono">
              <Link href="/" className="group flex flex-col items-center">
                <span className="text-[10px] text-cyan-500/50 group-hover:text-cyan-400 transition-colors uppercase font-bold">01</span>
                <span className="text-white text-xs md:text-lg font-black tracking-widest group-hover:text-cyan-400 transition-all">[ HOME ]</span>
              </Link>
              
              <Link href="/" className="text-xl md:text-4xl hover:scale-125 hover:rotate-12 transition-all duration-300 px-1">
                🐇
              </Link>

              <Link href="/archives" className="group flex flex-col items-center">
                <span className="text-[10px] text-pink-500/50 group-hover:text-pink-400 transition-colors uppercase font-bold">02</span>
                <span className="text-white text-xs md:text-lg font-black tracking-widest group-hover:text-pink-400 transition-all">[ LOGS ]</span>
              </Link>

              {/* ↓ スマホの時だけ表示される会社概要リンクを追加！ */}
              <Link href="/company-profile.html" className="md:hidden group flex flex-col items-center">
                <span className="text-[10px] text-yellow-500/50 group-hover:text-yellow-400 transition-colors uppercase font-bold">03</span>
                <span className="text-white text-xs font-black tracking-widest group-hover:text-yellow-400 transition-all">[ CORP ]</span>
              </Link>
            </nav>
          </div>
