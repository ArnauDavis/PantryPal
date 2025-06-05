import ReactMarkdown from 'react-markdown'



function ClaudeRecipe(props){
     
    return(
            <section className='suggested-recipe-container' aria-live='polite'>
                <h2>AI chef recommends:</h2>
                <ReactMarkdown>{props.recipe}</ReactMarkdown>
            </section>
    )    
        } 

            export default ClaudeRecipe