
import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const model = "gemini-3-flash-preview";

const generationConfig = {
  responseMimeType: "application/json",
  thinkingConfig: { thinkingLevel: "HIGH" },
};

const chatSession = {
  history: [
    {
      role: "user",
      parts: [
        {
          text:
            "Respond ONLY with a single valid JSON object. " +
            "No markdown. No explanation. No extra text.",
        },
      ],
    },
  ],
};

export async function run(prompt) {
  try {
    chatSession.history.push({
      role: "user",
      parts: [{ text: prompt }],
    });

    const stream = await genAI.models.generateContentStream({
      model,
      contents: chatSession.history,
      config: generationConfig,
    });

    let responseText = "";

    for await (const chunk of stream) {
      if (chunk.text) responseText += chunk.text;
    }

    console.log("====== RAW GEMINI OUTPUT ======");
    console.log(responseText);
    console.log("================================");

    chatSession.history.push({
      role: "assistant",
      parts: [{ text: responseText }],
    });

    const cleaned = responseText.trim();

    if (!cleaned) {
      throw new Error("Empty Gemini response");
    }

    return JSON.parse(cleaned);
  } catch (err) {
    console.error("Gemini run() error:", err);
    throw err;
  }
}
