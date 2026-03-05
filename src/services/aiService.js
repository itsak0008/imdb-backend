import OpenAI from "openai";
import { OPENAI_API_KEY } from "../config/env.js";

const client = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

export const analyzeSentiment = async (reviews) => {
  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `Return JSON {summary, classification}. Reviews: ${reviews}`,
        },
      ],
    });

    const content = completion.choices[0].message.content;

    return JSON.parse(content);
  } catch (error) {
    console.error("AI sentiment error:", error.message);

    return {
      summary: "Sentiment analysis failed.",
      classification: "Unknown",
    };
  }
};
