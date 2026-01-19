"use server";

import { db } from "@/configs/db";
import { courseList } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getUserCourses(email) {
  if (!email) return [];

  return await db
    .select()
    .from(courseList)
    .where(eq(courseList.createdBy, email));
}
