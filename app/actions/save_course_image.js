"use server";

import { db } from "@/configs/db";
import { courseList } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function saveCourseImageUrl(courseId, imageUrl) {
  if (!courseId || !imageUrl) {
    throw new Error("Missing courseId or imageUrl");
  }

  await db
    .update(courseList)
    .set({
      picture_Url: imageUrl,
    })
    .where(eq(courseList.courseId, courseId));

  return { success: true };
}
