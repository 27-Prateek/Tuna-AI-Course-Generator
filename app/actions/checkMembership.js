"use server";

import { db } from "@/configs/db";
import { User } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function checkMembership(email) {
  const [user] = await db
    .select()
    .from(User)
    .where(eq(User.UserEmail, email));

  return user?.Membership === true;
}
