import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // 1. Content von Gemini generieren lassen
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // 2. JSON aus der Antwort extrahieren
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("Kein JSON gefunden");
    const jsonData = JSON.parse(jsonMatch[0]);

    // 3. Direkt an deinen Zapier-Webhook schicken
    const zapierRes = await fetch("https://hooks.zapier.com/hooks/catch/27244867/uj41a24/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonData),
    });

    return NextResponse.json({ success: zapierRes.ok });
  } catch (error) {
    return NextResponse.json({ error: "Fehler im Zauber-Workflow" }, { status: 500 });
  }
}