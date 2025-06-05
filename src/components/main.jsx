
import React from 'react'
import IngredientsList from './IngredientsList'
import ClaudeRecipe from './ClaudeRecipe'
import { getRecipeFromMistral } from '../../ai' 


function Main(){


    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState('')

    

    function addIngredient(formData){
        const newIngredient = formData.get('ingredient')
        setIngredients(prevIngredients => [...prevIngredients,newIngredient])
        
    }

     async function present(){
           const generatedRecipe = await getRecipeFromMistral(ingredients)
           setRecipe(generatedRecipe)
        }

   
    return(
        <main>
            <form action={addIngredient} className = 'add-ingredient-form'>
                <input
                    type='text'
                    placeholder='e.g. oregano' 
                    aria-label='Add ingredient'
                    name="ingredient"
                />
                <button> Add ingredient</button>
            </form>
            {ingredients.length > 0 ?
            <IngredientsList ingredients={ingredients} present={present}/> : null} 
            {recipe && <ClaudeRecipe recipe={recipe}/>}
            
        </main>
    )
}


export default Main