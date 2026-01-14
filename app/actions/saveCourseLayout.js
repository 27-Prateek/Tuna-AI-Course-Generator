// // // "use server";

// // // import { db } from "@/configs/db";
// // // import { v4 as uuidv4 } from "uuid";
// // // import { courseList } from "@/db/schema.js";

// // // export async function saveCourseLayout({
// // //   userCourseInput,
// // //   courseLayout,
// // //   user,
// // // }) {
// // //   const id = uuidv4();

// // //   await db.insert(courseList).values({
// // //     courseId: id,
// // //     name: userCourseInput.topic,
// // //     level: userCourseInput.difficulty,
// // //     category: userCourseInput.category,
// // //     courseOutput: courseLayout,
// // //     createdBy: user.primaryEmailAddress?.emailAddress,
// // //     userName: user.fullName,
// // //     userProfileImage: user.imageUrl,
// // //   });

// // //   return { success: true };
// // // }
// // "use server";

// // import { db } from "@/configs/db";
// // import { v4 as uuidv4 } from "uuid";
// // import { courseList } from "@/db/schema";
// // import { auth, clerkClient } from "@clerk/nextjs/server";

// // export async function saveCourseLayout({
// //   userCourseInput,
// //   courseLayout,
// // }) {
// //   const { userId } = auth();

// //   if (!userId) {
// //     throw new Error("Unauthorized");
// //   }

// //   const user = await clerkClient.users.getUser(userId);

// //   const id = uuidv4();

// //   await db.insert(CourseList).values({
// //     courseId: id,
// //     name: userCourseInput.topic,
// //     level: userCourseInput.difficulty,
// //     category: userCourseInput.category,
// //     courseOutput: courseLayout,
// //     createdBy: user.emailAddresses[0]?.emailAddress,
// //     userName: user.fullName,
// //     userProfileImage: user.imageUrl,
// //   });

// //   return { success: true };
// // }
// "use server";

// import { db } from "@/configs/db";
// import { v4 as uuidv4 } from "uuid";
// import { courseList } from "@/db/schema";

// export async function saveCourseLayout({
//   userCourseInput,
//   courseLayout,
//   userInfo,
// }) {
//   if (!userInfo?.userId) {
//     throw new Error("Unauthorized");
//   }

//   await db.insert(courseList).values({
//     courseId: uuidv4(),
//     name: userCourseInput.topic,
//     level: userCourseInput.difficulty,
//     category: userCourseInput.category,
//     courseOutput: courseLayout,
//     createdBy: userInfo.email,
//     userName: userInfo.name,
//     userProfileImage: userInfo.image,
//   });

//   return { success: true,courseId };
// }

"use server";

import { db } from "@/configs/db";
import { v4 as uuidv4 } from "uuid";
import { courseList } from "@/db/schema";

export async function saveCourseLayout({
  userCourseInput,
  courseLayout,
  userInfo,
}) {
  if (!userInfo?.userId) {
    throw new Error("Unauthorized");
  }

  // ✅ DEFINE courseId
  const courseId = uuidv4();

  await db.insert(courseList).values({
    courseId,
    name: userCourseInput.topic,
    level: userCourseInput.difficulty,
    category: userCourseInput.category,
    includeVideo: userCourseInput.includeVideo ?? "Yes",
    courseOutput: courseLayout,
    createdBy: userInfo.email,
    userName: userInfo.name,
    userProfileImage: userInfo.image,
  });

  // ✅ RETURN it
  return { success: true, courseId };
}
