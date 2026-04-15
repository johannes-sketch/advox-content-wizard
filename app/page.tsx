"use client";

import React, { useMemo, useState } from "react";

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

function Card({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card">
      {title ? <h2 className="card-title">{title}</h2> : null}
      {children}
    </div>
  );
}

export default function Page() {
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
advox is a platform for creative operations in marketing and media teams. It combines workflows, approvals, asset management, ad streaming and engagement analytics in one central solution.

=== STYLE & TONE ===
- Clear, direct, no fluff
- No startup clichés or buzzwords
- Slightly opinionated, but not aggressive
- Practical and grounded in real workflows
- Write like a smart operator, not like marketing copy

=== WHAT TO AVOID ===
- "game-changing", "revolutionary", "next-level"
- vague statements without examples
- generic advice that applies to everything
- overly polished or corporate language

=== STRUCTURE REQUIREMENTS ===
The weekly content must feel like ONE coherent theme, not random posts.
Each piece should approach the same insight from a different angle.

=== OUTPUT ===

1. Weekly Theme Summary
- 2–3 sentences explaining the focus of the week

2. LinkedIn Content (2 posts)
Post 1:
- Hook (strong, scroll-stopping)
- Main idea
- Key takeaway
- CTA

Post 2:
- Must be clearly different from Post 1
- More educational or comparison-based

3. Instagram Content (2 ideas)
Concept 1 (Meme / Relatable):
- Visual idea
- Caption
- Why it works

Concept 2 (Educational / Visual):
- Format (carousel / visual / etc.)
- Slide structure or concept
- Caption

4. Blog Content (1 idea)
- 3 title options
- 1 recommended title
- Outline (intro + 3–5 sections + conclusion)

5. Cohesion Explanation
- 2–3 sentences explaining how all pieces connect

=== QUALITY BAR ===
- Make it specific, not generic
- Tie everything back to the core insight
- Use concrete language (not abstract marketing talk)
- Make it feel like it comes from real experience

=== OPTIONAL CONTEXT (if useful) ===
Examples of good advox-style thinking:
- "Freigaben sind nicht langsam, sondern falsch organisiert"
- "Das Problem ist nicht das Creative, sondern der Prozess"

Now generate the full weekly content set.
`;
  }, [goal, pot, coreInsight, angle]);

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(prompt);
      alert("Prompt copied.");
    } catch {
      alert("Copy failed. Please copy manually.");
    }
  }

  function resetWizard() {
    setGoal("awareness");
    setPot("pain points");
    setCoreInsight("");
    setAngle("provocative");
  }

  const progress =
    [goal, pot, coreInsight.trim(), angle].filter(Boolean).length / 4;

  return (
    <main className="page">
      <div className="layout">
        <section className="left-col">
          <div className="hero">
            <div className="pill">advox Content Theme Wizard</div>
            <h1>Weekly theme builder for cross-channel content</h1>
            <p>
              Define one weekly content theme, turn it into a high-quality prompt
              and use it in ChatGPT to create posts and ideas faster.
            </p>
          </div>

          <Card title="1. Goal">
            <div className="grid two">
              {goals.map((item) => (
                <button
                  key={item}
                  className={`choice ${goal === item ? "active" : ""}`}
                  onClick={() => setGoal(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </Card>

          <Card title="2. Content theme">
            <div className="grid two">
              {contentPots.map((item) => (
                <button
                  key={item}
                  className={`choice ${pot === item ? "active" : ""}`}
                  onClick={() => setPot(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </Card>

          <Card title="3. Core insight">
            <textarea
              className="textarea"
              placeholder="Example: Approvals become unnecessarily slow when feedback is spread across email, chat and calls."
              value={coreInsight}
              onChange={(e) => setCoreInsight(e.target.value)}
            />
          </Card>

          <Card title="4. Angle">
            <div className="grid three">
              {angles.map((item) => (
                <button
                  key={item}
                  className={`choice ${angle === item ? "active" : ""}`}
                  onClick={() => setAngle(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </Card>

          <div className="actions">
            <button className="secondary-btn" onClick={resetWizard}>
              Reset
            </button>
            <button className="primary-btn" onClick={copyPrompt}>
              Copy prompt
            </button>
          </div>
        </section>

        <aside className="right-col">
          <Card title="Summary">
            <div className="summary-list">
              <div>
                <span>Goal</span>
                <strong>{goal}</strong>
              </div>
              <div>
                <span>Theme</span>
                <strong>{pot}</strong>
              </div>
              <div>
                <span>Angle</span>
                <strong>{angle}</strong>
              </div>
              <div>
                <span>Progress</span>
                <strong>{Math.round(progress * 100)}%</strong>
              </div>
            </div>

            <div className="progress-wrap">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
            </div>
          </Card>

          <Card title="How to use it">
            <ol className="steps">
              <li>Choose the weekly goal and content theme.</li>
              <li>Write one clear core insight.</li>
              <li>Choose the angle.</li>
              <li>Copy the prompt and paste it into ChatGPT.</li>
            </ol>
          </Card>

          <Card title="Generated prompt">
            <pre className="prompt-box">{prompt}</pre>
            <button className="primary-btn full" onClick={copyPrompt}>
              Copy prompt
            </button>
          </Card>
        </aside>
      </div>
    </main>
  );
}