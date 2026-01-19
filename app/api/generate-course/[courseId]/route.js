
import { NextResponse } from "next/server";
import { db } from "@/configs/db";
import { courseList } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function PUT(req, { params }) {
  try {
    const { courseId } = params;
    const { courseOutput } = await req.json();

    if (!courseId) {
      return NextResponse.json(
        { error: "Missing courseId" },
        { status: 400 }
      );
    }

    await db
      .update(courseList)
      .set({ courseOutput })
      .where(eq(courseList.id, String(courseId)));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("UPDATE ERROR:", err);
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
