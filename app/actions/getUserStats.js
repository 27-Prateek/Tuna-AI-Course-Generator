"use server";

import { db } from "@/configs/db";
import { courseList } from "@/db/schema";
import { eq, count } from "drizzle-orm";

export async function getUserStats(email) {

  const [courseCount] = await db
    .select({ value: count() })
    .from(courseList)
    .where(eq(courseList.createdBy, email));

  return {
    totalCourses: courseCount.value ?? 0,
  };
}
