"use server";

import { db } from "@/configs/db";
import { courseList } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getPublicCourse(courseId) {
  if (!courseId) return null;

  const [course] = await db
    .select()
    .from(courseList)
    .where(eq(courseList.courseId, courseId));

  return course || null;
}
