export type Platform = "Facebook" | "Instagram" | "LinkedIn";
export type ContentStatus = "idea" | "draft" | "ready" | "published";

export interface ContentItem {
  id: string;
  day: number;
  title: string;
  pillar: string;
  goal: string;
  format: string;
  platforms: Platform[];
  hook: string;
  keyPoint: string;
  caption: string;
  cta: string;
  imageConcept: string;
  imagePrompt: string;
  altText: string;
  status: ContentStatus;
}
