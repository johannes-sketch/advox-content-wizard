import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    // 1. Initialisierung mit dem API-Key aus den Environment Variables
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

    // 2. Modell-Aufruf korrigieren 
    // Wir nutzen "gemini-1.5-flash" ohne zusätzliche Pfade
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // 3. Content generieren
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // 4. Robustes JSON-Parsing (sucht nur den Bereich zwischen { und })
    const startIndex = text.indexOf('{');
    const endIndex = text.lastIndexOf('}');

    if (startIndex === -1 || endIndex === -1) {
      console.error("Gemini Antwort ohne JSON:", text);
      return NextResponse.json({ error: "Kein JSON im Output gefunden" }, { status: 500 });
    }

    const jsonString = text.substring(startIndex, endIndex + 1);
    const jsonData = JSON.parse(jsonString);

    // 5. Daten an Zapier senden
    const zapierRes = await fetch("https://hooks.zapier.com/hooks/catch/27244867/uj41a24/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonData),
    });

    if (!zapierRes.ok) {
      throw new Error("Zapier antwortete mit Fehler");
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    // Detailliertes Logging für die Vercel Logs
    console.error("Magic API Fehler:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}