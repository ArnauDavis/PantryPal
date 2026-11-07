import React from 'react'
import IngredientsList from './IngredientsList'
import Instructions from './Instructions'
import ClaudeRecipe from './ClaudeRecipe'
import { getRecipeFromMistral } from '../../ai' 
import { v4 as uuidv4 } from 'uuid';
import LoadingIcon from './LoadingIcon'


function Main() {
    const [ingredients, setIngredients] = React.useState([])
    const [selectedVibes, setSelectedVibes] = React.useState([])
    const [recipe, setRecipe] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)

    const recipeSectionRef = React.createRef()

    React.useEffect(() => {
        if(recipe !== "" && recipeSectionRef.current !== null){
            recipeSectionRef.current.scrollIntoView({behavior: 'smooth'})
        }
    }, [recipe])

    function addIngredient(formData){
        const newIngredient = {
            key: uuidv4(),
            name: formData.get('ingredient')
        }
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    function removeItem(key){
        const updatedList = ingredients.filter(ingredient => ingredient.key !== key)
        setIngredients(updatedList)
    }   

    function toggleVibe(vibeId) {
        setSelectedVibes(prev => 
            prev.includes(vibeId) 
                ? prev.filter(id => id !== vibeId) 
                : [...prev, vibeId]
        )
    }

    async function present(){
        setIsLoading(true)
        try{
            const ingredientNames = ingredients.map(ingredient => ingredient.name)
            const vibeString = selectedVibes.length > 0 
                ? ` Make sure the recipe fits these styles/vibes: ${selectedVibes.join(', ')}.` 
                : ''
            
            const enhancedPrompt = `Recommend a delicious recipe using these available ingredients: ${ingredientNames.join(', ')}.${vibeString}`
            
            const generatedRecipe = await getRecipeFromMistral(enhancedPrompt)
            setRecipe(generatedRecipe)
        }catch(error){
            console.log('Error fetching recipe', error)
        }finally{
            setIsLoading(false)
        }
    }

    return(
        <main className="max-w-2xl w-full mx-auto p-6 md:p-10 flex-1 flex flex-col gap-8">
            {ingredients.length < 4 ? <Instructions /> : null}
            
            <form action={addIngredient} className="flex gap-3">
                <input 
                    type='text'
                    placeholder='Type an ingredient (e.g. garlic)...' 
                    aria-label='Add ingredient'
                    name="ingredient"
                    required
                    className="flex-1 bg-white dark:bg-zinc-900 border-4 border-slate-900 dark:border-white brutalist-shadow px-5 py-4 text-sm font-semibold font-['Space_Grotesk'] placeholder-slate-400 focus:outline-none"
                    autoComplete="off"
                />
                <button className="bg-emerald-400 hover:bg-emerald-300 active:translate-x-1 active:translate-y-1 text-slate-900 border-4 border-slate-900 dark:border-white brutalist-shadow px-6 py-4 font-bold uppercase tracking-wider text-sm cursor-pointer transition-transform font-['Space_Grotesk']">
                    + Add
                </button>
            </form>

            <IngredientsList 
                ingredients={ingredients} 
                selectedVibes={selectedVibes}
                toggleVibe={toggleVibe}
                present={present} 
                recipeSectionRef={recipeSectionRef} 
                remove={removeItem} 
                isLoading={isLoading}
            />

            {isLoading ? (
                <LoadingIcon />
            ) : recipe ? (
                <ClaudeRecipe recipe={recipe} />
            ) : null}
        </main>
    )
}

export default Main