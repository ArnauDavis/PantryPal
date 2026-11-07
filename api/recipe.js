import Groq from "groq-sdk";

const groq = new Groq({ 
    apiKey: process.env.GROQ_API_KEY // Securely read from Vercel's server environment
});

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Do not include links to other sites. Respond giving the recipe. Format your response in markdown to make it easier to render to a web page
`;

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { input } = req.body;
        const userPrompt = Array.isArray(input) 
            ? `I have ${input.join(", ")}. Please give me a recipe you'd recommend I make!`
            : input;

        const completion = await groq.chat.completions.create({
            model: "openai/gpt-oss-20b",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: userPrompt },
            ],
            max_tokens: 1024,
        });

        const recipe = completion.choices[0]?.message?.content || "No recipe generated.";
        return res.status(200).json({ recipe });
    } catch (err) {
        console.error("Groq Serverless Error:", err.message);
        return res.status(500).json({ error: 'Failed to generate recipe from AI.' });
    }
}