import { ContentItem } from "@/types/content";

const pillars = ["Education", "Authority", "Story", "Conversation", "Offer", "Objection", "Behind the scenes"];
const formats = ["Text post", "Carousel", "Static graphic", "Reel", "Founder POV"];
const platforms = [["Facebook", "LinkedIn"], ["Instagram"], ["Facebook", "Instagram"], ["LinkedIn"], ["Instagram", "LinkedIn"]] as const;

export const demoItems: ContentItem[] = Array.from({ length: 30 }, (_, index) => {
  const day = index + 1;
  const pillar = pillars[index % pillars.length];
  const format = formats[index % formats.length];
  const itemPlatforms = [...platforms[index % platforms.length]] as ContentItem["platforms"];
  const examples = [
    "The process problem hiding behind your marketing problem",
    "What your clients should know before they ever have to ask",
    "Three signs your follow-up depends too much on memory",
    "What changed when I stopped treating every task as urgent",
    "The question to ask before adding another tool",
  ];
  const title = examples[index % examples.length];

  return {
    id: `demo-${day}`,
    day,
    title,
    pillar,
    goal: pillar === "Offer" ? "Conversion" : pillar === "Conversation" ? "Engagement" : "Trust",
    format,
    platforms: itemPlatforms,
    hook: title,
    keyPoint: "Give the reader one specific operational idea they can recognize and act on without turning the post into generic advice.",
    caption: `Most business owners do not need another tool for day ${day}. They need to know where the work breaks down, who owns the next step, and what should happen without someone remembering to push it forward.\n\nStart with the handoff. If nobody can clearly explain what happens after a lead, sale, or client request comes in, that is the process to fix first.`,
    cta: day % 5 === 0 ? "DM CLARITY if you want help identifying the gap." : "What part of your process still depends on memory?",
    imageConcept: "Editorial business image with one direct headline and a clean operational visual cue.",
    imagePrompt: "Create a premium 4:5 social graphic for a service business owner. Dark editorial background, refined jewel-tone accents, clear headline hierarchy, no stock-photo feel, no fake logos. Leave safe margins for mobile cropping.",
    altText: "Dark editorial social graphic with a concise business operations message.",
    status: day < 4 ? "ready" : day < 10 ? "draft" : "idea",
  };
});
