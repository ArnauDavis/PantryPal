

    function IngredientsList(props){
      
    const ingredientsListItems = props.ingredients.map(ingredient=> (
        <li key={ingredient.key}><button type="button" className="removeButton" onClick={() => props.remove(ingredient.key)}>x</button>{ingredient.name}</li>
    ))

    return(    
        <>
        <section className="ingredientsContainer">
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
            {props.ingredients.length >3 ? <div className="get-recipe-container" ref={props.recipeSectionRef}>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
                <button onClick={props.present}>Get a recipe</button>
            </div> : null}
        </section>
        </>
    )
}

    export default IngredientsList