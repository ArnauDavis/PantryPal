function Footer() {
    return (
        <footer className="mt-auto border-t-4 border-slate-900 dark:border-white bg-white dark:bg-zinc-900 px-6 md:px-10 py-8 transition-colors">
            <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-['Space_Grotesk'] text-center md:text-left">
              
                <div className="space-y-1">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <span className="w-3 h-3 bg-emerald-400 border-2 border-slate-900 dark:border-white animate-pulse"></span>
                        <span className="font-bold text-sm uppercase tracking-wider">Pantry Pal v2.0</span>
                    </div>
                    <p className="text-xs font-semibold opacity-75">Artificial Chef, Authentic Taste.</p>
                    <p className="text-xs font-semibold opacity-75">Paid hourly & milking the clock.</p>
                </div>

                {/* Individual boxes for LIVE, LAUGH, AI */}
                <div className="flex flex-wrap items-center justify-center gap-2">
                    <span className="px-3 py-1.5 bg-pink-400 text-slate-900 border-2 border-slate-900 dark:border-white brutalist-shadow-sm font-bold text-xs uppercase rotate-[-2deg] inline-block">
                        LIVE
                    </span>
                    <span className="px-3 py-1.5 bg-amber-300 text-slate-900 border-2 border-slate-900 dark:border-white brutalist-shadow-sm font-bold text-xs uppercase rotate-[1deg] inline-block">
                        LAUGH
                    </span>
                    <span className="px-3 py-1.5 bg-cyan-300 text-slate-900 border-2 border-slate-900 dark:border-white brutalist-shadow-sm font-bold text-xs uppercase rotate-[-1deg] inline-block">
                        AI
                    </span>
                </div>

            </div>
        </footer>
    )
}

export default Footer