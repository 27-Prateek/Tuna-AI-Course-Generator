// // // // import { GoogleGenAI } from "@google/genai";

// // // // async function main() {
// // // //   const ai = new GoogleGenAI({
// // // //     apiKey: process.env.GEMINI_API_KEY,
// // // //   });

// // // //   const model = "gemini-3-flash-preview";

// // // //   const contents = [
// // // //     {
// // // //       role: "user",
// // // //       parts: [
// // // //         {
// // // //           text: `
// // // // Respond ONLY in valid JSON.
// // // // No markdown.
// // // // No explanation.

// // // // Input:
// // // // INSERT_INPUT_HERE
// // // //           `,
// // // //         },
// // // //       ],
// // // //     },
// // // //   ];

// // // //   const config = {
// // // //     thinkingConfig: {
// // // //       thinkingLevel: "HIGH",
// // // //     },
// // // //     responseMimeType: "application/json",
// // // //   };

// // // //   const stream = await ai.models.generateContentStream({
// // // //     model,
// // // //     contents,
// // // //     config,
// // // //   });

// // // //   let jsonString = "";

// // // //   for await (const chunk of stream) {
// // // //     if (chunk.text) {
// // // //       jsonString += chunk.text;
// // // //     }
// // // //   }

// // // //   const jsonOutput = JSON.parse(jsonString);
// // // //   console.log(jsonOutput);
// // // // }

// // // // main();
// // // import { GoogleGenAI } from "@google/genai";
// // // import fs from "fs";

// // // async function main() {
// // //   const ai = new GoogleGenAI({
// // //     apiKey: process.env.GEMINI_API_KEY,
// // //   });

// // //   const model = "gemini-3-flash-preview";

// // //   const GenerateCourseLayout = {
// // //     sessionId: Date.now(),
// // //     messages: [],
// // //   };

// // //   const userInput = "INSERT_INPUT_HERE";

// // //   GenerateCourseLayout.messages.push({
// // //     role: "user",
// // //     content: userInput,
// // //     timestamp: new Date().toISOString(),
// // //   });

// // //   const contents = [
// // //     {
// // //       role: "user",
// // //       parts: [{ text: userInput }],
// // //     },
// // //   ];

// // //   const config = {
// // //     responseMimeType: "application/json",
// // //   };

// // //   const stream = await ai.models.generateContentStream({
// // //     model,
// // //     contents,
// // //     config,
// // //   });

// // //   let aiResponse = "";

// // //   for await (const chunk of stream) {
// // //     if (chunk.text) {
// // //       aiResponse += chunk.text;
// // //     }
// // //   }

// // //   GenerateCourseLayout.messages.push({
// // //     role: "assistant",
// // //     content: JSON.parse(aiResponse),
// // //     timestamp: new Date().toISOString(),
// // //   });

// // //   fs.writeFileSync(
// // //     `chat-session-${GenerateCourseLayout.sessionId}.json`,
// // //     JSON.stringify(GenerateCourseLayout, null, 2)
// // //   );

// // //   console.log("Chat session exported ✅");
// // // }

// // // main();
// // import { GoogleGenAI } from "@google/genai";
// // import fs from "fs";

// // // ================= CONFIG =================
// // const ai = new GoogleGenAI({
// //   apiKey: process.env.GEMINI_API_KEY,
// // });

// // const MODEL = "gemini-3-flash-preview";

// // // Chat history (THIS IS THE MEMORY)
// // let contents = [];

// // // Chat session object (for export)
// // const chatSession = {
// //   sessionId: Date.now(),
// //   messages: [],
// // };

// // // ================= FUNCTIONS =================

// // // Generate AI response (JSON)
// // async function generateResponse() {
// //   const stream = await ai.models.generateContentStream({
// //     model: MODEL,
// //     contents,
// //     config: {
// //       responseMimeType: "application/json",
// //       thinkingConfig: {
// //         thinkingLevel: "HIGH",
// //       },
// //     },
// //   });

// //   let responseText = "";

// //   for await (const chunk of stream) {
// //     if (chunk.text) {
// //       responseText += chunk.text;
// //     }
// //   }

// //   // Save assistant message
// //   contents.push({
// //     role: "assistant",
// //     parts: [{ text: responseText }],
// //   });

// //   chatSession.messages.push({
// //     role: "assistant",
// //     content: JSON.parse(responseText),
// //     timestamp: new Date().toISOString(),
// //   });

// //   return JSON.parse(responseText);
// // }

// // // Add user message
// // function addUserMessage(text) {
// //   contents.push({
// //     role: "user",
// //     parts: [{ text }],
// //   });

// //   chatSession.messages.push({
// //     role: "user",
// //     content: text,
// //     timestamp: new Date().toISOString(),
// //   });
// // }

// // // Regenerate last response
// // async function regenerateResponse() {
// //   if (contents.length === 0) return null;

// //   // Remove last assistant message
// //   contents.pop();
// //   chatSession.messages.pop();

// //   return await generateResponse();
// // }

// // // Export chat session
// // function exportChat() {
// //   fs.writeFileSync(
// //     `chat-session-${chatSession.sessionId}.json`,
// //     JSON.stringify(chatSession, null, 2)
// //   );
// // }

// // // ================= MAIN FLOW =================

// // async function main() {
// //   // USER MESSAGE 1
// //   addUserMessage(`
// // Create a beginner AI course.
// // Respond ONLY in valid JSON.
// // No markdown.
// // No explanation.
// // `);

// //   const first = await generateResponse();
// //   console.log("First response:", first);

// //   // FOLLOW-UP MESSAGE
// //   addUserMessage("Make it advanced and add projects");

// //   const second = await generateResponse();
// //   console.log("Second response:", second);

// //   // 🔁 REGENERATE LAST RESPONSE
// //   const regenerated = await regenerateResponse();
// //   console.log("Regenerated response:", regenerated);

// //   // EXPORT CHAT SESSION
// //   exportChat();
// //   console.log("Chat session exported ✅");
// // }

// // main();
// // import { GoogleGenAI } from "@google/genai";

// // // SAME VARIABLE NAME
// // const genAI = new GoogleGenAI({
// //   apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
// // });

// // // LATEST MODEL
// // const model = "gemini-3-flash-preview";

// // // SAME VARIABLE NAME
// // const generationConfig = {
// //   responseMimeType: "application/json",
// //   thinkingConfig: {
// //     thinkingLevel: "HIGH",
// //   },
// // };

// // // SAME VARIABLE NAME (acts like startChat)
// // const chatSession = {
// //   history: [
// //     {
// //       role: "user",
// //       parts: [
// //         {
// //           text: `
// // You must respond ONLY in valid JSON.
// // No markdown.
// // No explanation.
// //           `,
// //         },
// //       ],
// //     },
// //   ],
// // };

// // // SAME FUNCTION NAME
// // async function run(prompt) {
// //   // add user message
// //   chatSession.history.push({
// //     role: "user",
// //     parts: [{ text: prompt }],
// //   });

// //   const stream = await genAI.models.generateContentStream({
// //     model,
// //     contents: chatSession.history,
// //     config: generationConfig,
// //   });

// //   let responseText = "";

// //   for await (const chunk of stream) {
// //     if (chunk.text) responseText += chunk.text;
// //   }

// //   // add assistant message
// //   chatSession.history.push({
// //     role: "assistant",
// //     parts: [{ text: responseText }],
// //   });

// //   return JSON.parse(responseText);
// // }

// // // OPTIONAL: regenerate last response
// // async function regenerate() {
// //   // remove last assistant message
// //   chatSession.history.pop();
// //   return await run(
// //     chatSession.history[chatSession.history.length - 1].parts[0].text
// //   );
// // }

// // export { run, regenerate, chatSession };
// import { GoogleGenAI } from "@google/genai";

// const genAI = new GoogleGenAI({
//   apiKey: process.env.GEMINI_API_KEY, // ❗ NOT NEXT_PUBLIC
// });

// const model = "gemini-3-flash-preview";

// const generationConfig = {
//   responseMimeType: "application/json",
//   thinkingConfig: { thinkingLevel: "HIGH" },
// };

// const chatSession = {
//   history: [
//     {
//       role: "user",
//       parts: [{ text: "Respond ONLY in valid JSON." }],
//     },
//   ],
// };

// export async function run(prompt) {
//   chatSession.history.push({
//     role: "user",
//     parts: [{ text: prompt }],
//   });

//   const stream = await genAI.models.generateContentStream({
//     model,
//     contents: chatSession.history,
//     config: generationConfig,
//   });

//   let responseText = "";

//   for await (const chunk of stream) {
//     if (chunk.text) responseText += chunk.text;
//   }

//   chatSession.history.push({
//     role: "assistant",
//     parts: [{ text: responseText }],
//   });

//   return JSON.parse(responseText);
// }
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
    console.error("🔥 Gemini run() error:", err);
    throw err;
  }
}
