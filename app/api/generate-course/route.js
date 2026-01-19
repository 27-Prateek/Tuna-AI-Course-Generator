
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
- chapterNumber
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

// import { NextResponse } from "next/server";
// import { run } from "@/configs/AiModel";
// import { getUserStats } from "@/app/actions/getUserStats";

// const COURSE_LIMIT = 5;

// export async function POST(req) {
//   try {
//     const body = await req.json();

//     const {
//       category,
//       topic,
//       difficulty,
//       duration,
//       chapters,
//       email, // 🔑 MUST be sent from frontend
//     } = body;

//     // -------------------------------
//     // Basic validation
//     // -------------------------------
//     if (
//       !category ||
//       !topic ||
//       !difficulty ||
//       !duration ||
//       !chapters ||
//       !email
//     ) {
//       return NextResponse.json(
//         { error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     // -------------------------------
//     // 🔐 SERVER-SIDE COURSE LIMIT CHECK
//     // -------------------------------
//     const stats = await getUserStats(email);

//     if (!stats.hasMembership && stats.totalCourses >= COURSE_LIMIT) {
//       return NextResponse.json(
//         { error: "Upgrade required" },
//         { status: 403 }
//       );
//     }

//     // -------------------------------
//     // AI PROMPT
//     // -------------------------------
//     const prompt = `
// Generate a course tutorial with the following structure:

// courseName
// description
// duration
// category
// difficulty
// chapters (array)

// Each chapter must include:
// - chapterNumber
// - chapterName
// - duration
// - explanation
// - keyPoints
// - examples

// Course details:
// Category: ${category}
// Topic: ${topic}
// Difficulty: ${difficulty}
// Duration: ${duration}
// Number of chapters: ${chapters}

// Return clean, structured JSON only.
// `;

//     const result = await run(prompt);

//     if (!result) {
//       throw new Error("Empty AI response");
//     }

//     return NextResponse.json({
//       success: true,
//       data: result,
//     });

//   } catch (err) {
//     console.error("❌ AI route error:", err);

//     return NextResponse.json(
//       {
//         error: "AI failed",
//         message: err?.message || "Unknown error",
//       },
//       { status: 500 }
//     );
//   }
// }
