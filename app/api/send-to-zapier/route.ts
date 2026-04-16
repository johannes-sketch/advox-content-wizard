import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.text();

    const zapierResponse = await fetch(
      "https://hooks.zapier.com/hooks/catch/27244867/uj41a24/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      }
    );

    if (!zapierResponse.ok) {
      return NextResponse.json(
        { success: false, status: zapierResponse.status },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Zapier proxy error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}