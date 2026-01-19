// "use server";

// import { run } from "@/configs/AiModel";

// const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// export async function getChapterContent(prompt) {
//   if (!prompt || typeof prompt !== "string") {
//     return {
//       success: false,
//       error: "Prompt is missing or invalid",
//     };
//   }

//   const MAX_ATTEMPTS = 3;
//   let lastError = null;

//   for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
//     try {
//       console.log(`🧠 AI attempt ${attempt}/${MAX_ATTEMPTS}`);

//       const result = await run(prompt);

//       if (!result) {
//         throw new Error("Empty AI response");
//       }

//       return {
//         success: true,
//         data: result,
//       };
//     } catch (error) {
//       lastError = error;

//       const message = error?.message || "";

//       console.warn(`⚠️ Attempt ${attempt} failed:`, message);

//       // 🚫 FAIL FAST ON GEMINI INTERNAL ERRORS
//       if (message.includes("Internal error")) {
//         console.error("🚫 Gemini internal error — not retrying");
//         break;
//       }

//       // ⏳ retry only for recoverable issues
//       if (attempt < MAX_ATTEMPTS) {
//         await sleep(1000);
//       }
//     }
//   }

//   console.error("🚫 AI generation failed");

//   return {
//     success: false,
//     error:
//       lastError?.message ||
//       "Failed to generate chapter content",
//   };
// }

// const GenerateChapterContent = async () => {
//   if (!course?.length) return;

//   const data = course[0];

//   try {
//     await fetch("/api/generate-chapters", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         courseId: data.courseId,
//       }),
//     });

//     // refresh course after generation
//     fetchCourse();
//   } catch (err) {
//     console.error("Generation failed", err);
//   }
// };

"use server";

import { run } from "@/configs/AiModel";

export async function getChapterContent(prompt) {
  try {
    const result = await run(prompt);
    if (!result) throw new Error("Empty response");
    return { success: true, data: result };
  } catch (error) {
    if (error?.message?.includes("Internal error")) {
      return { success: false };
    }
    return { success: false };
  }
}
