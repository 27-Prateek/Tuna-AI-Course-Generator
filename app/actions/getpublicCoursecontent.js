
"use server"

import { db } from "@/configs/db"
import { courseList } from "@/db/schema"
import { and, eq } from "drizzle-orm"

export async function getCourse_1(courseId) {
  return await db
    .select()
    .from(courseList)
    .where(
      and(
        eq(courseList.courseId,courseId),
      )
    )
}

