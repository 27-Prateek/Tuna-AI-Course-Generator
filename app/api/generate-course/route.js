// import { NextResponse } from "next/server";
// import { run } from "@/configs/AiModel";

// export async function POST(req) {
//   try {
//     const body = await req.json();

//     const { category, topic, difficulty, duration, chapters } = body;

//     // Validate input
//     if (!category || !topic || !difficulty || !duration || !chapters) {
//       return NextResponse.json(
//         { error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     // STRICT JSON PROMPT
//     const prompt = `
// You are an API that returns ONLY valid JSON.
// No explanations. No markdown. No extra text.

// Return JSON EXACTLY in this format:

// {
//   "courseName": string,
//   "description": string,
//   "duration": string,
//   "category": string,
//   "difficulty": string,
//   "chapters": [
//     {
//       "chapterName": string,
//       "duration": string,
//       "explanation": string,
//       "keyPoints": string[],
//       "examples": string[]
//     }
//   ]
// }

// Course details:
// Category: ${category}
// Topic: ${topic}
// Difficulty: ${difficulty}
// Duration: ${duration}
// Number of chapters: ${chapters}
// `;

//     const raw = await run(prompt);
//     console.log("🧠 RAW AI RESPONSE:", raw);

//     if (!raw) {
//       throw new Error("Empty AI response");
//     }

//     // SAFE JSON EXTRACTION
//     let parsed;
//     try {
//       const match = raw.match(/\{[\s\S]*\}/);
//       if (!match) throw new Error("No JSON found");

//       parsed = JSON.parse(match[0]);
//     } catch (err) {
//       console.error("❌ JSON PARSE ERROR");
//       console.error(raw);
//       throw new Error("Invalid AI JSON output");
//     }

//     return NextResponse.json({
//       success: true,
//       data: parsed,
//     });

//   } catch (err) {
//     console.error("❌ AI route error:", err);

//     return NextResponse.json(
//       {
//         error: "AI failed",
//         message: err.message,
//       },
//       { status: 500 }
//     );
//   }
// }
// // // import { NextResponse } from "next/server";
// // // import { run } from "@/configs/AiModel";

// // // export async function POST(req) {
// // //   try {
// // //     const { prompt } = await req.json();
// // //     const result = await run(prompt);
// // //     return NextResponse.json(result);
// // //   } catch (err) {
// // //     return NextResponse.json({ error: "AI failed" }, { status: 500 });
// // //   }
// // // }
// // import { NextResponse } from "next/server";
// // import { run } from "@/configs/AiModel";

// // export async function POST(req) {
// //   try {
// //     const body = await req.json();

// //     if (!body?.prompt) {
// //       return NextResponse.json(
// //         { error: "Prompt is required" },
// //         { status: 400 }
// //       );
// //     }

// //     const result = await run(body.prompt);

// //     if (!result) {
// //       throw new Error("Empty AI response");
// //     }

// //     return NextResponse.json(result);

// //   } catch (err) {
// //     console.error("❌ AI route error:", err);

// //     return NextResponse.json(
// //       {
// //         error: "AI failed",
// //         message: err?.message ?? "Unknown error",
// //       },
// //       { status: 500 }
// //     );
// //   }
// // }
// import { NextResponse } from "next/server";
// import { run } from "@/configs/AiModel";

// export async function POST(req) {
//   try {
//     const body = await req.json();

//     const {
//       category,
//       topic,
//       difficulty,
//       duration,
//       chapters,
//     } = body;

//     if (!category || !topic || !difficulty || !duration || !chapters) {
//       return NextResponse.json(
//         { error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     const prompt = `
// Create a ${difficulty}-level ${category} course on "${topic}".

// Requirements:
// - Duration: ${duration}
// - Number of chapters: ${chapters}
// - Each chapter must include:
//   - Title
//   - Detailed explanation
//   - Key concepts
//   - Practical examples

// Return structured content.
// `;

//     const result = await run(prompt);

//     if (!result) {
//       throw new Error("Empty AI response");
//     }

//     return NextResponse.json({ result });

//   } catch (err) {
//     console.error("❌ AI route error:", err);

//     return NextResponse.json(
//       {
//         error: "AI failed",
//         message: err?.message ?? "Unknown error",
//       },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import { run } from "@/configs/AiModel";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      category,
      topic,
      difficulty,
      duration,
      chapters
    } = body;

    if (!category || !topic || !difficulty || !duration || !chapters) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const prompt = `
Generate a course tutorial with the following structure:

courseName
description
duration
category
difficulty
chapters (array)

Each chapter must include:
- chapterName
- duration
- explanation
- keyPoints
- examples

Course details:
Category: ${category}
Topic: ${topic}
Difficulty: ${difficulty}
Duration: ${duration}
Number of chapters: ${chapters}

Return clean, structured content.
`;

    const result = await run(prompt);
    console.log("RAW AI RESULT:", result);


    if (!result) {
      throw new Error("Empty AI response");
    }

    return NextResponse.json({
      success: true,
      data: result
    });

  } catch (err) {
    console.error("❌ AI route error:", err);

    return NextResponse.json(
      {
        error: "AI failed",
        message: err?.message || "Unknown error"
      },
      { status: 500 }
    );
  }
}