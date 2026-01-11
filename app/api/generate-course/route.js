import { NextResponse } from "next/server";
import { run } from "@/configs/AiModel";

export async function POST(req) {
  try {
    const { prompt } = await req.json();
    const result = await run(prompt);
    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json({ error: "AI failed" }, { status: 500 });
  }
}
