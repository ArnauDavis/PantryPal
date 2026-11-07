import React from 'react'

function IngredientsList(props) {
    const vibeOptions = [
        { id: 'spicy', label: '🌶️ Spicy' },
        { id: 'quick', label: '⚡ Under 20 Mins' },
        { id: 'comfort', label: '🧀 Comfort Food' },
        { id: 'vegan', label: '🌱 Plant-Based' },
        { id: 'protein', label: '💪 High Protein' }
    ];

    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li 
            key={ingredient.key} 
            className="inline-flex items-center gap-2 bg-amber-300 dark:bg-zinc-800 text-slate-900 dark:text-white px-4 py-2 border-2 border-slate-900 dark:border-white brutalist-shadow-sm font-bold text-sm font-['Space_Grotesk']"
        >
            <span>{ingredient.name}</span>
            <button 
                type="button" 
                className="ml-2 w-5 h-5 rounded bg-red-400 hover:bg-red-500 text-slate-900 border border-slate-900 flex items-center justify-center font-bold cursor-pointer transition-colors" 
                onClick={() => props.remove(ingredient.key)}
                aria-label={`Remove ${ingredient.name}`}
            >
                &times;
            </button>
        </li>
    ))

    return (
        <section className="bg-white dark:bg-zinc-900 border-4 border-slate-900 dark:border-white brutalist-shadow p-6 md:p-8 space-y-6 transition-colors">
            <div className="flex items-center justify-between border-b-2 border-slate-900 dark:border-zinc-700 pb-3">
                <h2 className="font-bold text-base md:text-lg uppercase tracking-wider font-['Space_Grotesk']">Ingredients on hand</h2>
                <span className="text-xs font-bold bg-amber-300 text-slate-900 px-3 py-1 border-2 border-slate-900 font-['Space_Grotesk']">
                    {props.ingredients.length}/4 required
                </span>
            </div>

            {props.ingredients.length === 0 ? (
                <p className="text-sm font-medium opacity-50 italic font-['Space_Grotesk']">No items logged yet. Start typing above!</p>
            ) : (
                <ul className="flex flex-wrap gap-3" aria-live="polite">
                    {ingredientsListItems}
                </ul>
            )}

            {props.ingredients.length > 0 && (
                <div className="pt-4 border-t-2 border-slate-900 dark:border-zinc-700">
                    <p className="text-xs font-bold uppercase tracking-wider mb-3 font-['Space_Grotesk']">Select Flavor Vibe</p>
                    <div className="flex flex-wrap gap-2">
                        {vibeOptions.map(vibe => {
                            const isSelected = props.selectedVibes.includes(vibe.id);
                            return (
                                <button
                                    key={vibe.id}
                                    type="button"
                                    onClick={() => props.toggleVibe(vibe.id)}
                                    className={`px-4 py-2 border-2 border-slate-900 dark:border-white font-bold text-xs uppercase brutalist-shadow-sm cursor-pointer transition-transform active:translate-x-0.5 active:translate-y-0.5 font-['Space_Grotesk'] ${
                                        isSelected 
                                            ? 'bg-emerald-400 text-slate-900' 
                                            : 'bg-white dark:bg-zinc-800 text-slate-900 dark:text-white'
                                    }`}
                                >
                                    {vibe.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}

            {props.ingredients.length > 3 && (
                <div className="pt-6 border-t-4 border-slate-900 dark:border-white flex flex-col sm:flex-row items-center justify-between gap-4" ref={props.recipeSectionRef}>
                    <div>
                        <h3 className="font-bold text-lg font-['Space_Grotesk']">Ready to cook?</h3>
                        <p className="text-xs opacity-75 font-['Space_Grotesk']">AI chef is standing by to formulate your recipe.</p>
                    </div>
                    <button 
                        onClick={props.present} 
                        disabled={props.isLoading}
                        className="w-full sm:w-auto bg-purple-500 hover:bg-purple-400 active:translate-x-1 active:translate-y-1 text-white border-4 border-slate-900 dark:border-white brutalist-shadow px-6 py-4 font-bold uppercase tracking-wider text-sm cursor-pointer transition-transform font-['Space_Grotesk'] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        ✨ Generate Recipe
                    </button>
                </div>
            )}
        </section>
    )
}

export default IngredientsList