"use client";

import { useMemo, useState } from "react";

const goals = ["awareness", "education", "consideration", "trust"];

const contentPots = [
  "pain points",
  "insights",
  "features",
  "use cases / workflows",
  "case studies",
  "team / behind the product",
  "trends",
];

const angles = [
  "provocative",
  "educational",
  "comparison",
  "humor",
  "behind the scenes",
];

export default function Home() {
  const [goal, setGoal] = useState("awareness");
  const [pot, setPot] = useState("pain points");
  const [coreInsight, setCoreInsight] = useState("");
  const [angle, setAngle] = useState("provocative");

  const prompt = useMemo(() => {
    return `You are a senior B2B content strategist for advox.

=== CONTEXT ===
Goal: ${goal}
Content theme: ${pot}
Core insight: ${coreInsight}
Angle: ${angle}

About advox:
advox is a platform for creative operations in marketing and media teams. It combines workflows, approvals, asset management, ad streaming and engagement analytics.

=== STYLE & TONE ===
- Clear, direct, no fluff
- No startup clichés or buzzwords
- Slightly opinionated, not aggressive
- Practical and grounded

=== OUTPUT ===

1. Weekly Theme Summary
2. 2 LinkedIn posts (hook + idea)
3. 2 Instagram ideas (meme + carousel)
4. 1 blog idea with outline
5. Cohesion explanation
`;
  }, [goal, pot, coreInsight, angle]);

  function copyPrompt() {
    navigator.clipboard.writeText(prompt);
    alert("Prompt copied 🚀");
  }

  return (
    <main style={{ padding: 40, fontFamily: "Arial", maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 32 }}>advox Content Wizard 🚀</h1>

      <h2>1. Goal</h2>
      {goals.map((g) => (
        <button
          key={g}
          onClick={() => setGoal(g)}
          style={{
            marginRight: 10,
            marginBottom: 10,
            padding: 10,
            background: goal === g ? "black" : "#eee",
            color: goal === g ? "white" : "black",
          }}
        >
          {g}
        </button>
      ))}

      <h2>2. Content Theme</h2>
      {contentPots.map((p) => (
        <button
          key={p}
          onClick={() => setPot(p)}
          style={{
            marginRight: 10,
            marginBottom: 10,
            padding: 10,
            background: pot === p ? "black" : "#eee",
            color: pot === p ? "white" : "black",
          }}
        >
          {p}
        </button>
      ))}

      <h2>3. Core Insight</h2>
      <textarea
        value={coreInsight}
        onChange={(e) => setCoreInsight(e.target.value)}
        placeholder="Write your key insight here..."
        style={{ width: "100%", height: 100, marginBottom: 20 }}
      />

      <h2>4. Angle</h2>
      {angles.map((a) => (
        <button
          key={a}
          onClick={() => setAngle(a)}
          style={{
            marginRight: 10,
            marginBottom: 10,
            padding: 10,
            background: angle === a ? "black" : "#eee",
            color: angle === a ? "white" : "black",
          }}
        >
          {a}
        </button>
      ))}

      <h2>Generated Prompt</h2>
      <pre style={{ background: "#f5f5f5", padding: 20, whiteSpace: "pre-wrap" }}>
        {prompt}
      </pre>

      <button
        onClick={copyPrompt}
        style={{
          padding: 15,
          background: "black",
          color: "white",
          marginTop: 20,
        }}
      >
        Copy Prompt
      </button>
    </main>
  );
}