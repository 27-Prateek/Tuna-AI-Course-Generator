import { auth } from "@clerk/nextjs/server";
import { db } from "@/configs/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  const { userId } = auth();

  if (!userId) {
    return Response.json({ hasMembership: false });
  }

  const user = await db.query.users.findFirst({
    where: eq(users.clerkUserId, userId),
  });

  return Response.json({
    hasMembership: Boolean(user?.hasMembership),
  });
}
