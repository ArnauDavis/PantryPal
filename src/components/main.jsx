import React from 'react'
import IngredientsList from './IngredientsList'
import Instructions from './Instructions'
import ClaudeRecipe from './ClaudeRecipe'
import { getRecipeFromMistral } from '../../ai' 
import { v4 as uuidv4 } from 'uuid';


function Main(){
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState('')

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
        const generatedRecipe = await getRecipeFromMistral(ingredients.map(ingredient => ingredient.name))
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
            <IngredientsList ingredients={ingredients} present={present} recipeSectionRef={recipeSectionRef} remove={removeItem}/> : null} 
            {ingredients.length < 4 ? <Instructions/> : null}
            {recipe ? <ClaudeRecipe recipe={recipe}/> : null}
            
        </main>
    )
}

export default Main 