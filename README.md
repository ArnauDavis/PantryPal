# Pantry Pal
Turn the ingredients you already have into your next meal with AI-powered recipe recommendations.

**Link to project:** https://pantry-pal-dusky.vercel.app/

<div style="height: 200px; overflow: hidden;">
    <img src="pantryPal-gif.gif" style="height: auto; width: 100%; object-fit: cover; transform: translateY(-30px);" alt="pantryPal-gif"/>
</div>

**Tech used:** CSS, React, HuggingFace API (Mixtral-8x7B)

<br>

## How It's Made:

Pantry Pal is an AI-powered recipe generator that helps users discover meals they can make with ingredients they already have. Users enter at least four ingredients, submit their list to an AI model, and receive a recipe recommendation based on their available ingredients.

>Managing Ingredients with React

I used React state to keep track of the ingredients entered by the user and dynamically update the interface as the list changes.

Each ingredient can be individually removed, allowing users to correct mistakes or adjust their list before requesting a recipe. Conditional rendering determines which components and options are displayed depending on the number of ingredients provided.

Once the user has entered at least four ingredients, the option to generate a recipe becomes available.

<br>

>Integrating the Hugging Face API

I integrated the Hugging Face API to send the user's ingredients to the Mixtral-8x7B model. The ingredients are combined into a prompt asking the model to recommend a recipe based on the available items.

The API response is then passed to React Markdown, allowing the generated recipe to be rendered as formatted content rather than plain text.

I also implemented error handling to account for unsuccessful API requests, including situations where the available API credits have been exhausted.

<br>

>Managing Asynchronous Requests

One improvement I made was introducing a loading state to manage the time between submitting ingredients and receiving the AI-generated recipe.

I used try, catch, and finally to handle the API request and ensure the loading state is reset regardless of whether the request succeeds or fails.

While a request is processing, the recipe generation button is disabled. This prevents users from repeatedly submitting requests before the previous one has finished, helping avoid unnecessary API usage and confusing interface behavior.

<br>

## Optimizations
- Introduce user accounts so people can save and revisit recipes they enjoyed.
- Improve the overall styling and visual presentation.
- Explore ways to improve the consistency and usefulness of AI-generated recipe recommendations.
- *update: I added a loading icon, how cool!*

<br>


## Lessons Learned:

>Working with AI APIs

Integrating the Hugging Face API gave me hands-on experience communicating with an AI model through code. I learned how to construct prompts using user-provided information, submit requests, and handle the responses returned by an external AI service.

<br>

>Managing Asynchronous Operations

I gained experience managing asynchronous API requests and handling different outcomes. Using try, catch, and finally helped me understand how to manage loading states and ensure the interface responds appropriately whether a request succeeds or fails.

<br>

>Dynamic Rendering with React

I got additional practice using React state and passing props between components. Managing the ingredient list through state allowed me to dynamically add and remove ingredients while keeping the interface synchronized with the user's input.

<br>

>Rendering Markdown with React

I learned how to use React Markdown to transform the formatted text returned by the AI model into readable content within the application. This allowed generated recipes to display with proper formatting rather than appearing as an unstructured block of text.

