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

const advoxContext = `About advox:
advox is a creative operations platform for media agencies, brands, publishers and freelancers. It combines creative workflow, approvals, ad streaming, production planning, workspaces and engagement analytics in one platform.

Positioning:
- From the first file to the live campaign
- Creative workflow, approvals, ad streaming and engagement analytics in one place
- Built for teams that are tired of approval chaos, version confusion and re-uploading live ads

Key audiences:
- Media agencies
- Brands / in-house marketing teams
- Publishers
- Freelancers

Key pain points advox solves:
- Feedback scattered across email, chat, calls and screenshots
- Version chaos and uncertainty about which file is final
- Approval processes without audit trail
- Re-uploading and re-booking live ads after changes
- Lack of meaningful proof of creative performance

Core feature areas:
- Workspaces with isolated access and role control
- Creative workflow and versioning
- Production plan with live asset status
- Approvals via secure preview links, no client account needed
- Ad streaming: update the ad, not the tag
- Cookieless engagement analytics

Important product truths:
- Ad streaming is a key differentiator
- Engagement analytics are cookieless and GDPR-compliant
- Analytics focus on CTR, 3-second impressions, interaction events, variant comparison, per-creative breakdown and report export
- Do not mention hover time or scroll depth
- Approvals are version-locked and auditable
- Clients do not need an account to review or approve via preview link
- Lite starts at €3/month

Tone for advox:
- Clear, direct, practical
- Slightly opinionated, not exaggerated
- No startup clichés, no empty buzzwords
- Focus on real workflow problems and operational clarity
- Sound like someone who understands campaign operations, not generic SaaS marketing`;

function getInputLabel(pot: string) {
  if (pot === "case studies") return "Case study inputs";
  if (pot === "features") return "Feature focus";
  if (pot === "use cases / workflows") return "Workflow / use case input";
  return "Topic input";
}

function getInputPlaceholder(pot: string) {
  if (pot === "case studies") {
    return "Example: Client type: media agency. Problem before advox: feedback in email + Slack. Main change: faster approvals, clearer versioning, better client visibility. Relevant feature: preview links + audit trail. Outcome: less coordination, more transparency.";
  }
  if (pot === "features") {
    return "Example: Focus on approvals. Main point: clients can review and approve via secure preview link without creating an account. Versions are locked, feedback stays on the asset, audit trail is clear.";
  }
  if (pot === "use cases / workflows") {
    return "Example: Show how a campaign moves from briefing to review, approval and live delivery without scattered feedback or version confusion.";
  }
  return "Example: Approvals become unnecessarily slow when feedback is spread across email, chat and calls instead of being centralized.";
}

export default function Home() {
  const [goal, setGoal] = useState("awareness");
  const [pot, setPot] = useState("pain points");
  const [topicInput, setTopicInput] = useState("");
  const [angle, setAngle] = useState("provocative");

  const prompt = useMemo(() => {
    return `You are a senior B2B content strategist for advox.

${advoxContext}

=== WEEKLY CONTENT INPUT ===
Goal: ${goal}
Content theme: ${pot}
Topic input: ${topicInput}
Angle: ${angle}

=== YOUR JOB ===
Create one coherent weekly cross-channel content package for advox.
The output must be directly usable by a marketing team without additional ideation.
This means: do not only provide outlines or ideas. Always provide finished draft copy for every content piece.
All content must be delivered in English and German.
Every content piece must also include an idea for the graphic or visual execution.

=== CONTENT LOGIC ===
- All content pieces must connect back to the same weekly theme
- Each piece should approach the theme from a slightly different angle
- Adapt the same topic to the logic of each channel instead of repeating the same wording
- Keep the language concrete and useful
- Make the content feel grounded in real campaign work
- The blog should act as the deeper anchor content of the week

=== STYLE & TONE ===
- Clear, direct, no fluff
- No startup clichés or buzzwords
- Slightly opinionated, but not aggressive
- Practical and grounded in real workflows
- Write like a smart operator, not like generic marketing copy

=== WHAT TO AVOID ===
- “game-changing”, “revolutionary”, “next-level”
- vague statements without examples
- generic advice that applies to any SaaS tool
- over-polished corporate phrasing
- claims that contradict the advox context above

=== OUTPUT FORMAT ===

1. Weekly Theme Summary
- 2–3 sentences explaining the focus of the week
- explain why this theme matters for the target audience
- provide both English and German

2. LinkedIn Content
Create 2 finished LinkedIn posts.
For each post, provide:
- Post type
- Hook (EN + DE)
- Finished post copy (EN + DE)
- CTA (EN + DE)
- Graphic idea / visual execution
- Short note on why this post works

Requirements:
- Post 1 should be more opinion-driven or perspective-led
- Post 2 must be a teaser for the blog article of the week and explicitly drive readers to the blog
- The copy must be ready to post

3. Instagram Content
Create the following Instagram package:

A. Blog-link story
Provide:
- Story goal
- On-story text (EN + DE)
- Story CTA / sticker text (EN + DE)
- Graphic idea / visual execution
- Short note on why this story works

B. Theme A post
Provide:
- Format
- On-image text if relevant (EN + DE)
- Finished caption (EN + DE)
- Graphic idea / visual execution
- Short note on why this piece works on Instagram

C. Theme A story extension
This must be a matching story version of Theme A.
Provide:
- Story goal
- On-story text (EN + DE)
- Story CTA / interaction idea (EN + DE)
- Graphic idea / visual execution
- Short note on why this story works

D. Theme B post
Provide:
- Format
- On-image text if relevant (EN + DE)
- Finished caption (EN + DE)
- Graphic idea / visual execution
- Short note on why this piece works on Instagram

Requirements:
- Theme A and Theme B should be different in angle or format
- One of the two Instagram post themes must also exist as a story version (Theme A)
- The blog-link story is always fixed and should point to the weekly blog article
- All captions must be fully written and usable

4. Blog Content
Create 1 blog package.
Provide:
- 3 possible blog titles (EN + DE)
- 1 recommended final title (EN + DE)
- Short rationale for the title choice
- Full article structure (intro, section headings, conclusion)
- A complete blog draft text in English and German
- Graphic idea / header visual idea for the blog article

Requirements:
- The blog draft must be long enough to use as a real first draft
- The structure should still be clearly visible so an editor can either use the outline or the full text
- The blog should be useful, practical and not overly promotional

5. Cohesion Explanation
- 2–3 sentences on how the LinkedIn posts, Instagram pieces and blog article work together as one weekly theme
- provide both English and German

=== QUALITY BAR ===
- Make it specific, not generic
- Tie everything back to the topic input
- Use real operational language
- Show clear understanding of advox, its audiences and its differentiators
- Make the finished copy feel like it could realistically be published by advox
- Ensure all output is bilingual: English and German for every content piece
- Ensure every content piece includes a concrete graphic or visual idea

Now generate the full weekly content package.`;
  }, [goal, pot, topicInput, angle]);

  function copyPrompt() {
    navigator.clipboard.writeText(prompt);
    alert("Prompt copied 🚀");
  }

  return (
    <main style={{ padding: 40, fontFamily: "Arial", maxWidth: 980, margin: "0 auto", lineHeight: 1.4 }}>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>advox Content Wizard 🚀</h1>
      <p style={{ color: "#555", marginTop: 0, marginBottom: 30 }}>
        Build one weekly theme, generate one high-quality prompt, and use it in ChatGPT to create finished cross-channel content.
      </p>

      <h2>1. Goal</h2>
      <div style={{ marginBottom: 24 }}>
        {goals.map((g) => (
          <button
            key={g}
            onClick={() => setGoal(g)}
            style={{
              marginRight: 10,
              marginBottom: 10,
              padding: "10px 14px",
              border: "1px solid #ccc",
              borderRadius: 10,
              background: goal === g ? "black" : "#f2f2f2",
              color: goal === g ? "white" : "black",
              cursor: "pointer",
              textTransform: "capitalize",
            }}
          >
            {g}
          </button>
        ))}
      </div>

      <h2>2. Content Theme</h2>
      <div style={{ marginBottom: 24 }}>
        {contentPots.map((p) => (
          <button
            key={p}
            onClick={() => setPot(p)}
            style={{
              marginRight: 10,
              marginBottom: 10,
              padding: "10px 14px",
              border: "1px solid #ccc",
              borderRadius: 10,
              background: pot === p ? "black" : "#f2f2f2",
              color: pot === p ? "white" : "black",
              cursor: "pointer",
              textTransform: "capitalize",
            }}
          >
            {p}
          </button>
        ))}
      </div>

      <h2>3. {getInputLabel(pot)}</h2>
      <p style={{ color: "#555", marginTop: 0 }}>
        Add the key information ChatGPT should build the weekly content around. For most themes this can be one core insight. For case studies, use short bullet-style inputs.
      </p>
      <textarea
        value={topicInput}
        onChange={(e) => setTopicInput(e.target.value)}
        placeholder={getInputPlaceholder(pot)}
        style={{
          width: "100%",
          minHeight: 140,
          marginBottom: 24,
          padding: 14,
          borderRadius: 12,
          border: "1px solid #ccc",
          fontFamily: "Arial",
          fontSize: 14,
        }}
      />

      <h2>4. Angle</h2>
      <div style={{ marginBottom: 30 }}>
        {angles.map((a) => (
          <button
            key={a}
            onClick={() => setAngle(a)}
            style={{
              marginRight: 10,
              marginBottom: 10,
              padding: "10px 14px",
              border: "1px solid #ccc",
              borderRadius: 10,
              background: angle === a ? "black" : "#f2f2f2",
              color: angle === a ? "white" : "black",
              cursor: "pointer",
              textTransform: "capitalize",
            }}
          >
            {a}
          </button>
        ))}
      </div>

      <h2>Generated Prompt</h2>
      <pre
        style={{
          background: "#f5f5f5",
          padding: 20,
          whiteSpace: "pre-wrap",
          borderRadius: 12,
          border: "1px solid #ddd",
          fontSize: 13,
          lineHeight: 1.5,
          overflowX: "auto",
        }}
      >
        {prompt}
      </pre>

      <button
        onClick={copyPrompt}
        style={{
          padding: "14px 18px",
          background: "black",
          color: "white",
          marginTop: 20,
          borderRadius: 10,
          border: "none",
          cursor: "pointer",
          fontSize: 15,
        }}
      >
        Copy Prompt
      </button>
    </main>
  );
}
