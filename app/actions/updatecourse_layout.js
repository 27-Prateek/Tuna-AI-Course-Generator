"use server";

import { db } from "@/configs/db";
import { courseList } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function updateCourseBasicInfo({
  id,
  courseName,
  description,
}) {
  if (!id) {
    throw new Error("Course ID is required");
  }

  // get existing courseOutput
  const [course] = await db
    .select({ courseOutput: courseList.courseOutput })
    .from(courseList)
    .where(eq(courseList.id, id));

  if (!course) {
    throw new Error("Course not found");
  }

  // update only required fields
  const updatedCourseOutput = {
    ...course.courseOutput,
    courseName,
    description,
  };

  await db
    .update(courseList)
    .set({ courseOutput: updatedCourseOutput })
    .where(eq(courseList.id, id));

  return { success: true };
}
