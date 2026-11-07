import chefLogo from '../assets/robo-logo.png'

function Header({ darkMode, setDarkMode }) {
    return (
        <header className="border-b-4 border-slate-900 dark:border-white bg-white dark:bg-zinc-900 px-6 md:px-8 py-5 flex items-center justify-between sticky top-0 z-50 transition-colors">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500 border-3 border-slate-900 dark:border-white brutalist-shadow-sm flex items-center justify-center overflow-hidden p-1.5 rotate-[-3deg]">
                    <img src={chefLogo} alt='chefLogo' className='w-full h-full object-contain filter drop-shadow' />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-xl md:text-2xl font-bold tracking-tight uppercase font-['Space_Grotesk']">
                            Pantry Pal 
                            <span className="bg-emerald-400 text-slate-900 text-[10px] px-2 py-0.5 border-2 border-slate-900 ml-1.5 uppercase">v2.0</span>
                        </h1>
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wider opacity-75 font-['Space_Grotesk']">Artificial Chef, Authentic Taste</p>
                </div>
            </div>

            <button 
                onClick={() => setDarkMode(!darkMode)}
                className="px-4 py-2 bg-pink-400 dark:bg-purple-600 text-slate-900 dark:text-white border-3 border-slate-900 dark:border-white brutalist-shadow-sm font-bold text-xs uppercase tracking-wider cursor-pointer active:translate-x-0.5 active:translate-y-0.5 transition-transform font-['Space_Grotesk']"
            >
                {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
        </header>
    )
}

export default Header