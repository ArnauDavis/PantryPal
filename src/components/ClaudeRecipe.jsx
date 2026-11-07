import ReactMarkdown from 'react-markdown'

function ClaudeRecipe(props) {
    return(
        <section className="bg-emerald-100 dark:bg-zinc-900 border-4 border-slate-900 dark:border-white brutalist-shadow p-6 md:p-8 space-y-4 font-['Space_Grotesk']" aria-live='polite'>
            <h2 className="text-xl font-bold uppercase tracking-tight flex items-center gap-2">
                <span>🤖</span> AI Chef Recommendation:
            </h2>
            <div className="prose dark:prose-invert text-sm font-medium space-y-3 leading-relaxed">
                <ReactMarkdown>{props.recipe}</ReactMarkdown>
            </div>
        </section>
    )    
}

export default ClaudeRecipe