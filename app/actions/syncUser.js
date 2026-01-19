// "use server";

// import { auth, currentUser } from "@clerk/nextjs/server";
// import { db } from "@/configs/db";
// import { users } from "@/db/schema";

// export async function syncUserToDB() {
//   const { userId } = auth();
//   if (!userId) return;

//   const user = await currentUser();
//   if (!user) return;

//   const email = user.emailAddresses[0]?.emailAddress;
//   if (!email) return;

//   try {
//     await db.insert(users).values({
//       clerkUserId: userId,
//       email,
//       hasMembership: false,
//     });
//   } catch {
//     // user already exists → do nothing
//   }
// }
"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "@/configs/db";
import { users } from "@/db/schema";

export async function syncUserToDB() {
  const { userId } = auth();

  if (!userId) {
    console.log("❌ No userId (not authenticated)");
    return;
  }

  const user = await currentUser();

  if (!user) {
    console.log("❌ currentUser() is null");
    return;
  }

  const email = user.emailAddresses?.[0]?.emailAddress;

  if (!email) {
    console.log("❌ No email found");
    return;
  }

  console.log("✅ Syncing user:", userId, email);

  try {
    await db.insert(users).values({
      clerkUserId: userId,
      email,
      hasMembership: false,
    });
    console.log("✅ User inserted into DB");
  } catch (err) {
    console.log("⚠️ User already exists, skipping insert");
  }
}
