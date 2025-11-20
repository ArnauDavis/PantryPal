import React from 'react'
import IngredientsList from './IngredientsList'
import Instructions from './Instructions'
import ClaudeRecipe from './ClaudeRecipe'
import { getRecipeFromMistral } from '../../ai' 
import { v4 as uuidv4 } from 'uuid';
import LoadingIcon from './LoadingIcon'


function Main(){
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)

    const recipeSectionRef = React.createRef()

    React.useEffect(()=>{
        if(recipe !=="" && recipeSectionRef.current !== null){
            recipeSectionRef.current.scrollIntoView({behavior: 'smooth'})
        }
    }, [recipe])

    function addIngredient(formData){
        const newIngredient = {
            key: uuidv4(),
            name: formData.get('ingredient')
        }
        setIngredients(prevIngredients => [...prevIngredients,newIngredient])
    }

    function removeItem(key){
        const updatedList = ingredients.filter(ingredient => ingredient.key !== key)
        setIngredients(updatedList)
    }   

    async function present(){
        setIsLoading(true)
        try{
            const generatedRecipe = await getRecipeFromMistral(ingredients.map(ingredient => ingredient.name))
            setRecipe(generatedRecipe)
        }catch(error){
            console.log('Error fetching recipe', error)
        }finally{
            setIsLoading(false)
        }
    }

    const LoadingSpinner = () => (
        <div className="loading-spinner">
            <p>Generating your recipe...</p>
            <img src={loadingWheel}/>
        </div>
    )


    return(
        <main>
            <form action={addIngredient} className = 'add-ingredient-form'>
                <input
                    type='text'
                    placeholder='e.g. oregano' 
                    aria-label='Add ingredient'
                    name="ingredient"
                />
                <button>+ Add ingredient</button>
            </form>
            {ingredients.length > 0 ?
            <IngredientsList ingredients={ingredients} present={present} recipeSectionRef={recipeSectionRef} remove={removeItem} isLoading={isLoading}/> : null} 
            {ingredients.length < 4 ? <Instructions/> : null}
            {isLoading 
                // Show spinner if loading
                ? <LoadingIcon />
                : recipe 
                        // Show recipe if not loading and recipe exists
                    ? <ClaudeRecipe recipe={recipe}/>
                    : null // Show nothing otherwise
            }
            
        </main>
    )
}

export default Main 