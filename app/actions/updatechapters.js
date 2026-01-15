"use server";

import { db } from "@/configs/db";
import { courseList } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function updateChapters({
  courseId,
  chapterIndex,
  chapterName,
  explanation,
}) {
  if (!courseId && courseId !== "") {
    throw new Error("Course ID missing");
  }

  // 1️⃣ Get course
  const [course] = await db
    .select()
    .from(courseList)
    .where(eq(courseList.courseId, courseId));

  if (!course) {
    throw new Error("Course not found");
  }

  // 2️⃣ Update chapter locally
  const updatedChapters = [...course.courseOutput.chapters];

  updatedChapters[chapterIndex] = {
    ...updatedChapters[chapterIndex],
    chapterName,
    explanation,
  };

  // 3️⃣ Save back to DB
  await db
    .update(courseList)
    .set({
      courseOutput: {
        ...course.courseOutput,
        chapters: updatedChapters,
      },
    })
    .where(eq(courseList.courseId, courseId));

  return { success: true };
}
