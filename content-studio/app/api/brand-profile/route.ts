import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const brandProfileSchema = z.object({
  business_name: z.string().trim().min(1).max(140),
  website_url: z.string().trim().url().or(z.literal("")),
  industry: z.string().trim().max(140),
  business_description: z.string().trim().min(1).max(5000),
  ideal_customer: z.string().trim().min(1).max(5000),
  audience_problems: z.array(z.string().trim().min(1).max(500)).max(30),
  desired_outcomes: z.array(z.string().trim().min(1).max(500)).max(30),
  voice_traits: z.array(z.string().trim().min(1).max(120)).max(30),
  avoid_language: z.array(z.string().trim().min(1).max(250)).max(50),
  default_goals: z.array(z.string().trim().min(1).max(120)).max(20),
  primary_cta: z.string().trim().max(500),
  default_platforms: z.array(z.enum(["Facebook", "Instagram", "LinkedIn"])).min(1).max(3),
});

export async function GET() {
  const supabase = await createClient();
  if (!supabase) return NextResponse.json({ error: "Supabase is not connected." }, { status: 503 });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { data, error } = await supabase.from("brand_profiles").select("*").eq("user_id", user.id).maybeSingle();
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ profile: data });
}

export async function POST(request: Request) {
  const supabase = await createClient();
  if (!supabase) return NextResponse.json({ error: "Supabase is not connected." }, { status: 503 });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = brandProfileSchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: parsed.error.issues[0]?.message || "Invalid Brand Profile." }, { status: 400 });
  const { data, error } = await supabase.from("brand_profiles").upsert({ user_id: user.id, ...parsed.data, updated_at: new Date().toISOString() }, { onConflict: "user_id" }).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ profile: data });
}
