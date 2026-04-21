import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    // Sicherstellen, dass der Key da ist und keine Anführungszeichen hat
    const apiKey = process.env.GEMINI_API_KEY?.replace(/['"]+/g, '');
    
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY fehlt in den Vercel Settings.");
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    // Wir versuchen es mit der stabilen Bezeichnung
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // API-Call mit Fehler-Details
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    const startIndex = text.indexOf('{');
    const endIndex = text.lastIndexOf('}');

    if (startIndex === -1 || endIndex === -1) {
      return NextResponse.json({ error: "Kein JSON im Output" }, { status: 500 });
    }

    const jsonString = text.substring(startIndex, endIndex + 1);
    const jsonData = JSON.parse(jsonString);

    // Dein Zapier Webhook
    const zapierRes = await fetch("https://hooks.zapier.com/hooks/catch/27244867/uj41a24/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonData),
    });

    return NextResponse.json({ success: zapierRes.ok });
  } catch (error: any) {
    console.error("Detaillierter Fehler:", error);
    // Wir geben die Fehlermeldung direkt zurück, um sie im Browser zu sehen
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}