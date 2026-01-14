// "use server"

// import { db } from "@/configs/db"
// import { courseList } from "@/db/schema"
// import { and, eq } from "drizzle-orm"

// export async function getCourse(courseId, email) {
//   if (!courseId || !email) return []

//   const result = await db
//     .select()
//     .from(courseList)
//     .where(
//       and(
//         eq(courseList.courseId, courseId),
//         eq(courseList.createdBy, email)
//       )
//     )

//   return result
// }
"use server"

import { db } from "@/configs/db"
import { courseList } from "@/db/schema"
import { and, eq } from "drizzle-orm"

export async function getCourse(courseId, email) {
  return await db
    .select()
    .from(courseList)
    .where(
      and(
        eq(courseList.courseId, courseId),
        eq(courseList.createdBy, email)
      )
    )
}

