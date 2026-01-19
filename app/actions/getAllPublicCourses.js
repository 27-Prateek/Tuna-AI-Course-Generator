"use server";

import { db } from "@/configs/db";
import { courseList } from "@/db/schema";
import { desc, gt } from "drizzle-orm";

export async function getAllPublicCourses() {
  try {
    const courses = await db
      .select({
        courseId: courseList.courseId,
        name: courseList.name,
        category: courseList.category,
        level: courseList.level,
        picture_URL: courseList.picture_URL,
        createdAt: courseList.createdAt,
        numberOfChaptersCreated: courseList.numberOfChaptersCreated,
      })
      .from(courseList)
      // ✅ only courses with at least 1 chapter generated
      .where(gt(courseList.numberOfChaptersCreated, 0))
      .orderBy(desc(courseList.createdAt));

    return courses;
  } catch (error) {
    console.error("❌ getAllPublicCourses error:", error);
    return [];
  }
}
