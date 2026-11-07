import "../assets/LoadingIcon.css"

export default function LoadingIcon() {
  return (
    <div className="bg-white dark:bg-zinc-900 border-4 border-slate-900 dark:border-white brutalist-shadow p-8 flex flex-col items-center justify-center gap-4 font-['Space_Grotesk']">
        <div className="loader"></div>
        <p className="text-sm font-bold uppercase tracking-wider">Compiling custom recipe...</p>
    </div>
  )
}