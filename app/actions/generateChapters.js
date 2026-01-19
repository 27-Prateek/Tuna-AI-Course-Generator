// // // // // "use server";

// // // // // import { db } from "@/configs/db";
// // // // // import { courseList } from "@/db/schema";
// // // // // import { eq, sql } from "drizzle-orm";
// // // // // import { getChapterContent } from "@/app/actions/getChapterContent";

// // // // // export async function generateChapters(courseId) {
// // // // //   if (!courseId) {
// // // // //     throw new Error("courseId missing");
// // // // //   }

// // // // //   const [course] = await db
// // // // //     .select()
// // // // //     .from(courseList)
// // // // //     .where(eq(courseList.courseId, courseId));

// // // // //   if (!course) {
// // // // //     throw new Error("Course not found");
// // // // //   }

// // // // //   const chapters = course.courseOutput?.chapters || [];
// // // // //   const MAX_PER_CLICK = 3;

// // // // //   for (let i = 0; i < MAX_PER_CLICK; i++) {
// // // // //     const nextIndex = course.numberOfChaptersCreated + i;
// // // // //     const chapter = chapters[nextIndex];
// // // // //     if (!chapter) break;

// // // // //     const PROMPT =
// // // // //       "Explain the concept in Detail on Topic: " +
// // // // //       course.name +
// // // // //       ", level: " +
// // // // //       course.level +
// // // // //       ", duration of this chapter: " +
// // // // //       chapter.duration +
// // // // //       " ,Chapter: " +
// // // // //       chapter.chapterName +
// // // // //       " in JSON Format with the list of array with fields as title,explanation of given chapter in detail, Code Example(Code field in <precode> format) if applicable";

// // // // //     const res = await getChapterContent(PROMPT);

// // // // //     // 🚫 Stop immediately on failure (quota-safe)
// // // // //     if (!res.success) break;

// // // // //     await db
// // // // //       .update(courseList)
// // // // //       .set({
// // // // //         chaptersContent: sql`
// // // // //   "chaptersContent" || ${JSON.stringify([res.data])}
// // // // // `,

// // // // //         numberOfChaptersCreated: sql`
// // // // //           numberOfChaptersCreated + 1
// // // // //         `,
// // // // //       })
// // // // //       .where(eq(courseList.courseId, courseId));
// // // // //   }

// // // // //   return { success: true };
// // // // // }
// // // // "use server";

// // // // import { db } from "@/configs/db";
// // // // import { courseList } from "@/db/schema";
// // // // import { eq, sql } from "drizzle-orm";
// // // // import { getChapterContent } from "@/app/actions/getChapterContent";

// // // // export async function generateChapters(courseId) {
// // // //   if (!courseId) {
// // // //     throw new Error("courseId missing");
// // // //   }

// // // //   // 1️⃣ Fetch course
// // // //   const [course] = await db
// // // //     .select()
// // // //     .from(courseList)
// // // //     .where(eq(courseList.courseId, courseId));

// // // //   if (!course) {
// // // //     throw new Error("Course not found");
// // // //   }

// // // //   const chapters = course.courseOutput?.chapters || [];
// // // //   const MAX_PER_CLICK = 1;

// // // //   // 2️⃣ Generate max 3 chapters per click
// // // //   for (let i = 0; i < MAX_PER_CLICK; i++) {
// // // //     const nextIndex = course.numberOfChaptersCreated + i;
// // // //     const chapter = chapters[nextIndex];

// // // //     if (!chapter) break;

// // // //     const PROMPT =
// // // //       "Explain the concept in Detail on Topic: " +
// // // //       course.name +
// // // //       ", level: " +
// // // //       course.level +
// // // //       ", duration of this chapter: " +
// // // //       chapter.duration +
// // // //       " ,Chapter: " +
// // // //       chapter.chapterName +
// // // //       " in JSON Format with the list of array with fields as title,explanation of given chapter in detail, Code Example(Code field in <precode> format) if applicable";

    
// // // //     const res = await getChapterContent(PROMPT);

// // // //     // 🚫 Stop immediately if Gemini fails (quota-safe)
// // // //     if (!res.success) break;

// // // //     // 4️⃣ Save chapter immediately (IMPORTANT)
// // // //     await db
// // // //       .update(courseList)
// // // //       .set({
// // // //         chaptersContent: sql`
// // // //           "chaptersContent" || ${JSON.stringify([res.data])}
// // // //         `,
// // // //         numberOfChaptersCreated: sql`
// // // //           "numberOfChaptersCreated" + 1
// // // //         `,
// // // //       })
// // // //       .where(eq(courseList.courseId, courseId));
// // // //   }

// // // //   return { success: true };
// // // // }

// // // "use server";

// // // import { db } from "@/configs/db";
// // // import { courseList } from "@/db/schema";
// // // import { eq, sql } from "drizzle-orm";
// // // import { getChapterContent } from "@/app/actions/getChapterContent";
// // // import { getVideos } from "@/configs/service";

// // // export async function generateChapters(courseId) {
// // //   if (!courseId) throw new Error("courseId missing");

// // //   const [course] = await db
// // //     .select()
// // //     .from(courseList)
// // //     .where(eq(courseList.courseId, courseId));

// // //   if (!course) throw new Error("Course not found");

// // //   const chapters = course.courseOutput?.chapters || [];
// // //   const MAX_PER_CLICK = 1;

// // //   for (let i = 0; i < MAX_PER_CLICK; i++) {
// // //     const nextIndex = course.numberOfChaptersCreated + i;
// // //     const chapter = chapters[nextIndex];
// // //     if (!chapter) break;

// // //     // 1️⃣ Gemini content
// // //     const PROMPT =
// // //       "Explain the concept in Detail on Topic: " +
// // //       course.name +
// // //       ", level: " +
// // //       course.level +
// // //       ", duration of this chapter: " +
// // //       chapter.duration +
// // //       " ,Chapter: " +
// // //       chapter.chapterName +
// // //       " in JSON Format with fields title, explanation, code_example";

// // //     const res = await getChapterContent(PROMPT);
// // //     if (!res.success) break;

// // //     // 2️⃣ YouTube video search
// // //     let youtubeUrl = null;
// // //     try {
// // //       const videos = await getVideos(
// // //         `${course.name} ${chapter.chapterName}`
// // //       );
// // //       if (videos?.length) {
// // //         youtubeUrl = `https://www.youtube.com/watch?v=${videos[0].id.videoId}`;
// // //       }
// // //     } catch (e) {
// // //       console.warn("YouTube fetch failed, continuing");
// // //     }

// // //     // 3️⃣ Save chapter + video URL
// // //     const chapterPayload = {
// // //       ...res.data,
// // //       youtubeUrl,
// // //     };

// // //     await db
// // //       .update(courseList)
// // //       .set({
// // //         chaptersContent: sql`
// // //           "chaptersContent" || ${JSON.stringify([chapterPayload])}
// // //         `,
// // //         numberOfChaptersCreated: sql`
// // //           "numberOfChaptersCreated" + 1
// // //         `,
// // //       })
// // //       .where(eq(courseList.courseId, courseId));
// // //   }

// // //   return { success: true };
// // // }
// // "use server";

// // import { db } from "@/configs/db";
// // import { courseList } from "@/db/schema";
// // import { eq, sql } from "drizzle-orm";
// // import { getChapterContent } from "@/app/actions/getChapterContent";
// // import { getVideos } from "@/configs/service"; // or youtubeService

// // export async function generateChapters(courseId) {
// //   if (!courseId) throw new Error("courseId missing");

// //   const [course] = await db
// //     .select()
// //     .from(courseList)
// //     .where(eq(courseList.courseId, courseId));

// //   if (!course) throw new Error("Course not found");

// //   const chapters = course.courseOutput?.chapters || [];
// //   const MAX_PER_CLICK = 1;

// //   for (let i = 0; i < MAX_PER_CLICK; i++) {
// //     const chapterIndex = course.numberOfChaptersCreated + i;
// //     const chapter = chapters[chapterIndex];
// //     if (!chapter) break;

// //     // 1️⃣ Gemini content
// //     const PROMPT =
// //       "Explain the concept in Detail on Topic: " +
// //       course.name +
// //       ", level: " +
// //       course.level +
// //       ", duration of this chapter: " +
// //       chapter.duration +
// //       " ,Chapter: " +
// //       chapter.chapterName +
// //       " in JSON Format with fields title, explanation, code_example";

// //     const res = await getChapterContent(PROMPT);
// //     if (!res.success) break;

// //     // 2️⃣ YouTube video
// //     let youtubeUrl = null;
// //     try {
// //       const videos = await getVideos(
// //         `${course.name} ${chapter.chapterName}`
// //       );
// //       if (videos?.length) {
// //         youtubeUrl = `https://www.youtube.com/watch?v=${videos[0].id.videoId}`;
// //       }
// //     } catch {
// //       console.warn("YouTube fetch failed");
// //     }

// //     // 3️⃣ Build final chapter object (IMPORTANT PART)
// //     const chapterPayload = {
// //       chapterNumber: chapterIndex + 1,
// //       chapterName: chapter.chapterName,
// //       duration: chapter.duration,
// //       title: res.data.title,
// //       explanation: res.data.explanation,
// //       code_example: res.data.code_example,
// //       youtubeUrl,
// //     };

// //     // 4️⃣ Save immediately
// //     await db
// //       .update(courseList)
// //       .set({
// //         chaptersContent: sql`
// //           "chaptersContent" || ${JSON.stringify([chapterPayload])}
// //         `,
// //         numberOfChaptersCreated: sql`
// //           "numberOfChaptersCreated" + 1
// //         `,
// //       })
// //       .where(eq(courseList.courseId, courseId));
// //   }

// //   return { success: true };
// // }

// "use server";

// import { db } from "@/configs/db";
// import { courseList } from "@/db/schema";
// import { eq, sql } from "drizzle-orm";
// import { getChapterContent } from "@/app/actions/getChapterContent";
// import { getVideos } from "@/configs/service";

// export async function generateChapters(courseId) {
//   if (!courseId) throw new Error("courseId missing");

//   // 1️⃣ Fetch course
//   const [course] = await db
//     .select()
//     .from(courseList)
//     .where(eq(courseList.courseId, courseId));

//   if (!course) throw new Error("Course not found");

//   const chapters = course.courseOutput?.chapters || [];

//   // 🚫 GUARD: All chapters already generated
//   if (course.numberOfChaptersCreated >= chapters.length) {
//     return { success: true, message: "All chapters already generated" };
//   }

//   const chapterIndex = course.numberOfChaptersCreated;
//   const chapter = chapters[chapterIndex];
//   if (!chapter) return { success: true };

//   // 2️⃣ Gemini content
//   const PROMPT =
//     "Explain the concept in Detail on Topic: " +
//     course.name +
//     ", level: " +
//     course.level +
//     ", duration of this chapter: " +
//     chapter.duration +
//     " ,Chapter: " +
//     chapter.chapterName +
//     " in JSON Format with fields title, explanation, code_example";

//   const res = await getChapterContent(PROMPT);
//   if (!res.success) return { success: false };

//   // 3️⃣ YouTube video
//   let youtubeUrl = null;
//   try {
//     const videos = await getVideos(
//       `${course.name} ${chapter.chapterName}`
//     );
//     if (videos?.length) {
//       youtubeUrl = `https://www.youtube.com/watch?v=${videos[0].id.videoId}`;
//     }
//   } catch {
//     console.warn("YouTube fetch failed");
//   }

//   // 4️⃣ Build chapter payload
//   const chapterPayload = {
//     chapterNumber: chapterIndex + 1,
//     chapterName: chapter.chapterName,
//     duration: chapter.duration,
//     title: res.data.title,
//     explanation: res.data.explanation,
//     code_example: res.data.code_example,
//     youtubeUrl,
//   };

//   // 5️⃣ Save immediately
//   await db
//     .update(courseList)
//     .set({
//       chaptersContent: sql`
//         "chaptersContent" || ${JSON.stringify([chapterPayload])}
//       `,
//       numberOfChaptersCreated: sql`
//         "numberOfChaptersCreated" + 1
//       `,
//     })
//     .where(eq(courseList.courseId, courseId));

//   return { success: true };
// }

"use server";

import { db } from "@/configs/db";
import { courseList } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import { getChapterContent } from "@/app/actions/getChapterContent";
import { getVideos } from "@/configs/service";

export async function generateChapters(courseId) {
  if (!courseId) {
    return { success: false, error: "courseId missing" };
  }

  const [course] = await db
    .select()
    .from(courseList)
    .where(eq(courseList.courseId, courseId));

  if (!course) {
    return { success: false, error: "Course not found" };
  }

  const chapters = course.courseOutput?.chapters || [];

  if (course.numberOfChaptersCreated >= chapters.length) {
    return { success: true, message: "All chapters generated" };
  }

  const chapterIndex = course.numberOfChaptersCreated;
  const chapter = chapters[chapterIndex];
  if (!chapter) return { success: true };

  const PROMPT =
    "Explain the concept in Detail on Topic: " +
    course.name +
    ", level: " +
    course.level +
    ", duration of this chapter: " +
    chapter.duration +
    " ,Chapter: " +
    chapter.chapterName +
    " in JSON Format with fields title, explanation, code_example";

  const res = await getChapterContent(PROMPT);

  // ✅ NO THROW
  if (!res?.success) {
    return {
      success: false,
      error: "AI generation failed",
    };
  }

  let youtubeUrl = null;
  try {
    const videos = await getVideos(
      `${course.name} ${chapter.chapterName}`
    );
    if (videos?.length && videos[0]?.id?.videoId) {
      youtubeUrl = `https://www.youtube.com/watch?v=${videos[0].id.videoId}`;
    }
  } catch {
    console.warn("YouTube fetch failed");
  }

  const chapterPayload = {
    chapterNumber: chapterIndex + 1,
    chapterName: chapter.chapterName,
    duration: chapter.duration,
    title: res.data.title,
    explanation: res.data.explanation,
    code_example: res.data.code_example,
    youtubeUrl,
  };

  await db
    .update(courseList)
    .set({
      chaptersContent: sql`
        "chaptersContent" || ${JSON.stringify([chapterPayload])}
      `,
      numberOfChaptersCreated: sql`
        "numberOfChaptersCreated" + 1
      `,
    })
    .where(eq(courseList.courseId, courseId));

  return { success: true };
}
