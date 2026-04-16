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
  if (pot === "case studies") return "Case study input";
  if (pot === "features") return "Feature input";
  if (pot === "use cases / workflows") return "Workflow / use case input";
  return "Topic input";
}

function getInputPlaceholder(pot: string) {
  if (pot === "case studies") {
    return "Example: Client type: media agency. Situation before advox: feedback in email + Slack. Main change: faster approvals, clearer versioning, better client visibility. Relevant feature: preview links + audit trail. Outcome: less coordination, more transparency.";
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
  const [jsonInput, setJsonInput] = useState("");

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
This means: do not only provide outlines or ideas. Always provide finished draft copy for every content piece that is meant to be published.

=== LANGUAGE RULES ===
- Only the actual postable copy must be bilingual (EN + DE)
- This includes: LinkedIn hooks, LinkedIn post copy, LinkedIn CTAs, Instagram on-image text, Instagram captions, Instagram story text, blog titles, and full blog article drafts
- Everything else may be written in English only
- This includes: rationales, cohesion explanation, graphic ideas, why-it-works notes, format notes, structure notes

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
- English only is fine

2. LinkedIn Content
Create 2 finished LinkedIn posts.
For each post, provide:
- Post type
- Hook (EN + DE)
- Finished post copy (EN + DE)
- CTA (EN + DE)
- Graphic idea / visual execution (English only)
- Short note on why this post works (English only)

Requirements:
- Post 1 should be more opinion-driven or perspective-led
- Post 2 must be a teaser for the blog article of the week and explicitly drive readers to the blog
- The copy must be ready to post

3. Instagram Content
Create the following Instagram package:

A. Blog-link story
Provide:
- Story goal (English only)
- On-story text (EN + DE)
- Story CTA / sticker text (EN + DE)
- Graphic idea / visual execution (English only)
- Short note on why this story works (English only)

B. Theme A post
Provide:
- Format (English only)
- On-image text if relevant (EN + DE)
- Finished caption (EN + DE)
- Graphic idea / visual execution (English only)
- Short note on why this piece works on Instagram (English only)

C. Theme A story extension
This must be a matching story version of Theme A.
Provide:
- Story goal (English only)
- On-story text (EN + DE)
- Story CTA / interaction idea (EN + DE)
- Graphic idea / visual execution (English only)
- Short note on why this story works (English only)

D. Theme B post
Provide:
- Format (English only)
- On-image text if relevant (EN + DE)
- Finished caption (EN + DE)
- Graphic idea / visual execution (English only)
- Short note on why this piece works on Instagram (English only)

Requirements:
- Theme A and Theme B should be different in angle or format
- One of the two Instagram post themes must also exist as a story version (Theme A)
- The blog-link story is always fixed and should point to the weekly blog article
- All captions must be fully written and usable
- You may use meme-style content where appropriate
- Memes should still be relevant to advox topics (workflows, approvals, campaign chaos)
- Keep meme formats simple, recognizable and platform-native
- Avoid random humor — always tie back to a real pain point or insight

4. Blog Content
Create 1 blog package.

Provide:
- 3 possible blog titles (EN + DE)
- 1 recommended final title (EN + DE)
- Short rationale for the title choice (English only)
- Full article structure (intro, section headings, conclusion) (English only)
- A complete blog draft text in English and German
- Graphic idea / header visual idea for the blog article (English only)
- Meta title (EN + DE, max. ~60 characters)
- Meta description (EN + DE, max. ~155 characters)

Requirements:
- The blog must be written as a real, high-quality article, not as notes or bullet points
- Use natural, flowing paragraphs with clear transitions between sections
- Use subheadings to structure the article clearly
- Avoid overly promotional or sales-heavy language
- The article should feel like a useful, thoughtful industry piece

- Consider well-known blog formats such as:
  • list-based articles (e.g. “5 reasons why…”)
  • experience-based formats (e.g. “we tried X and this is what happened”)
  • breakdowns or analysis formats
  • step-by-step explanations

- The format should match the topic and feel natural, not forced
- The blog draft must be long enough to be usable as a real first draft
- The structure must still be clearly visible so editors can either use the outline or the full text

- Optimize the blog for SEO without making it sound artificial
- Include a clear primary keyword based on the topic input
- Naturally integrate the keyword into:
  • the title
  • the introduction
  • at least one subheading
  • the body text
- Use related terms and variations where relevant
- The article should follow basic SEO structure:
  • strong introduction with context and relevance
  • clear subheadings (H2-style sections)
  • scannable paragraphs (not overly long)
  • a clear conclusion
- Write in a way that answers a real search intent, not just promotes a product
- Avoid keyword stuffing or unnatural repetition

5. Cohesion Explanation
- 2–3 sentences on how the LinkedIn posts, Instagram pieces and blog article work together as one weekly theme
- English only is fine

=== STRUCTURED OUTPUT FOR AUTOMATION ===
After the full content package, also return one valid JSON object.
Return JSON only in this exact structure and do not wrap it in markdown code fences.
Only include fields listed below.

{
  "theme": "",
  "weekly_theme_summary": "",
  "linkedin_post_1_type": "",
  "linkedin_post_1_hook_en": "",
  "linkedin_post_1_hook_de": "",
  "linkedin_post_1_copy_en": "",
  "linkedin_post_1_copy_de": "",
  "linkedin_post_1_cta_en": "",
  "linkedin_post_1_cta_de": "",
  "linkedin_post_1_graphic_idea": "",
  "linkedin_post_1_why_it_works": "",
  "linkedin_post_2_type": "",
  "linkedin_post_2_hook_en": "",
  "linkedin_post_2_hook_de": "",
  "linkedin_post_2_copy_en": "",
  "linkedin_post_2_copy_de": "",
  "linkedin_post_2_cta_en": "",
  "linkedin_post_2_cta_de": "",
  "linkedin_post_2_graphic_idea": "",
  "linkedin_post_2_why_it_works": "",
  "instagram_blog_story_goal": "",
  "instagram_blog_story_text_en": "",
  "instagram_blog_story_text_de": "",
  "instagram_blog_story_cta_en": "",
  "instagram_blog_story_cta_de": "",
  "instagram_blog_story_graphic_idea": "",
  "instagram_blog_story_why_it_works": "",
  "instagram_theme_a_post_format": "",
  "instagram_theme_a_post_on_image_text_en": "",
  "instagram_theme_a_post_on_image_text_de": "",
  "instagram_theme_a_post_caption_en": "",
  "instagram_theme_a_post_caption_de": "",
  "instagram_theme_a_post_graphic_idea": "",
  "instagram_theme_a_post_why_it_works": "",
  "instagram_theme_a_story_goal": "",
  "instagram_theme_a_story_text_en": "",
  "instagram_theme_a_story_text_de": "",
  "instagram_theme_a_story_cta_en": "",
  "instagram_theme_a_story_cta_de": "",
  "instagram_theme_a_story_graphic_idea": "",
  "instagram_theme_a_story_why_it_works": "",
  "instagram_theme_b_post_format": "",
  "instagram_theme_b_post_on_image_text_en": "",
  "instagram_theme_b_post_on_image_text_de": "",
  "instagram_theme_b_post_caption_en": "",
  "instagram_theme_b_post_caption_de": "",
  "instagram_theme_b_post_graphic_idea": "",
  "instagram_theme_b_post_why_it_works": "",
  "blog_title_option_1_en": "",
  "blog_title_option_1_de": "",
  "blog_title_option_2_en": "",
  "blog_title_option_2_de": "",
  "blog_title_option_3_en": "",
  "blog_title_option_3_de": "",
  "blog_title_final_en": "",
  "blog_title_final_de": "",
  "blog_title_rationale": "",
  "blog_outline": "",
  "blog_text_en": "",
  "blog_text_de": "",
  "blog_graphic_idea": "",
  "meta_title_en": "",
"meta_title_de": "",
"meta_description_en": "",
"meta_description_de": "",
  "cohesion_explanation": ""
}

Rules:
- Return one single valid JSON object
- Do not use markdown
- Do not add comments
- Fill every field
- Escape line breaks properly
- Do not include a week field
- Only actual published text fields need EN + DE; supporting fields stay in English
- Do NOT reference earlier sections (e.g. "see above", "see full text above")
- Every field must be fully self-contained
- The blog_text_en and blog_text_de fields must contain the COMPLETE article text
- Never shorten or summarize blog text inside JSON
- The JSON must be usable independently without any additional context

=== QUALITY BAR ===
- Make it specific, not generic
- Tie everything back to the topic input
- Use real operational language
- Show clear understanding of advox, its audiences and its differentiators
- Make the finished copy feel like it could realistically be published by advox
- Ensure graphic ideas are concrete enough for a designer to work from

Now generate the full weekly content package.`;
  }, [goal, pot, topicInput, angle]);

  function copyPrompt() {
    navigator.clipboard.writeText(prompt);
    alert("Prompt copied 🚀");
  }

  async function sendJSONToZapier() {
    try {
      JSON.parse(jsonInput);

      const response = await fetch("/api/send-to-zapier", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonInput,
      });

      if (response.ok) {
        alert("✅ Sent to Google Sheet!");
        setJsonInput("");
      } else {
        alert("❌ Error sending");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Invalid JSON or sending error");
    }
  }

  return (
    <main style={{ padding: 40, fontFamily: "Arial", maxWidth: 980, margin: "0 auto", lineHeight: 1.4 }}>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>advox Content Wizard 🚀</h1>
      <p style={{ color: "#555", marginTop: 0, marginBottom: 30 }}>
        Build one weekly theme, generate one high-quality prompt, and use it in ChatGPT to create finished cross-channel content.
      </p>

      <div style={{ background: "#f5f5f5", border: "1px solid #ddd", borderRadius: 12, padding: 18, marginBottom: 28 }}>
        <strong>How to use this wizard</strong>
        <ol style={{ marginTop: 12, marginBottom: 0, paddingLeft: 20 }}>
          <li style={{ marginBottom: 8 }}><strong>Choose the weekly goal</strong> — decide whether this week is mainly about awareness, education, consideration or trust.</li>
          <li style={{ marginBottom: 8 }}><strong>Choose the content theme</strong> — select the main topic bucket for the week.</li>
          <li style={{ marginBottom: 8 }}><strong>Add the topic input</strong> — write the core insight, feature focus, workflow idea or case-study facts ChatGPT should build on.</li>
          <li style={{ marginBottom: 8 }}><strong>Choose the angle</strong> — decide how the content should feel, e.g. provocative, educational or comparison-based.</li>
          <li style={{ marginBottom: 8 }}><strong>Copy the prompt</strong> — paste it into ChatGPT and generate the full package.</li>
          <li><strong>Paste the JSON below</strong> — only paste the final JSON object from ChatGPT into the JSON field and click “Send JSON to Sheet”.</li>
        </ol>
      </div>

      <h2>1. Goal</h2>
      <p style={{ color: "#555", marginTop: 0 }}>Choose what this week should primarily achieve.</p>
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
      <p style={{ color: "#555", marginTop: 0 }}>Choose the main topic bucket for the week.</p>
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
        Add the key information ChatGPT should build the weekly content around. For most themes this can be one core insight. For case studies, use short bullet-style facts.
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
      <p style={{ color: "#555", marginTop: 0 }}>Choose the tone or storytelling angle for the week.</p>
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
      <p style={{ color: "#555", marginTop: 0 }}>Copy this prompt into ChatGPT to generate the weekly content package plus the JSON block for automation.</p>
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

      <h2 style={{ marginTop: 36 }}>5. Paste JSON from ChatGPT</h2>
      <p style={{ color: "#555", marginTop: 0 }}>
        Paste only the final JSON object from ChatGPT here. Do not include any explanatory text or markdown code fences.
      </p>
      <textarea
        placeholder="Paste JSON from ChatGPT here..."
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        style={{
          width: "100%",
          height: 200,
          marginTop: 10,
          padding: 12,
          borderRadius: 10,
          border: "1px solid #ccc",
          fontFamily: "monospace",
          fontSize: 13,
        }}
      />

      <button
        onClick={sendJSONToZapier}
        style={{
          padding: "14px 18px",
          background: "green",
          color: "white",
          marginTop: 10,
          borderRadius: 10,
          border: "none",
          cursor: "pointer",
          fontSize: 15,
        }}
      >
        Send JSON to Sheet 🚀
      </button>
    </main>
  );
}
