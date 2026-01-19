"use server";

import { clerkClient } from "@clerk/nextjs/server";
import { db } from "@/configs/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function syncUserMembership(email, clerkUserId) {
  const user = await clerkClient.users.getUser(clerkUserId);

  const hasActiveSubscription =
    user.publicMetadata?.subscription === "pro" ||
    user.privateMetadata?.subscription === "pro";

  await db
    .update(users)
    .set({ hasMembership: !!hasActiveSubscription })
    .where(eq(users.email, email));

  return {
    hasMembership: !!hasActiveSubscription,
  };
}
