import Groq from "groq-sdk";

export async function getRecipeFromMistral(input) {
    const userPrompt = Array.isArray(input) 
        ? `I have ${input.join(", ")}. Please give me a recipe you'd recommend I make!`
        : input;

    // Check if we are running locally in Vite dev mode
    if (import.meta.env.DEV) {
        try {
            // Local fallback: Call Groq directly using the Vite env variable
            const groq = new Groq({ 
                apiKey: import.meta.env.VITE_GROQ_API_KEY, 
                dangerouslyAllowBrowser: true 
            });

            const completion = await groq.chat.completions.create({
                model: "openai/gpt-oss-20b",
                messages: [
                    { role: "system", content: "You are an assistant that suggests a recipe using some or all of the user's ingredients. Format your response in markdown." },
                    { role: "user", content: userPrompt },
                ],
                max_tokens: 1024,
            });

            return completion.choices[0]?.message?.content || "No recipe generated.";
        } catch (err) {
            console.error("Local Groq Error:", err.message);
            return "Local AI error. Check your VITE_GROQ_API_KEY in your local .env file.";
        }
    } 
    
    // Production mode: Call your secure Vercel serverless function
    try {
        const response = await fetch('/api/recipe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ input }),
        });

        const text = await response.text();
        const data = text ? JSON.parse(text) : {};

        if (!response.ok) {
            throw new Error(data.error || 'Failed to fetch recipe');
        }

        return data.recipe;
    } catch (err) {
        console.error("Frontend API Error:", err.message);
        return "AI API is currently unavailable. Please try again later.";
    }
}