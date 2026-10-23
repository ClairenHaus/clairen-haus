import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const profileSchema = z.object({ full_name: z.string().trim().min(1).max(140) });

export async function POST(request: Request) {
  const supabase = await createClient();
  if (!supabase) return NextResponse.json({ error: "Supabase is not connected." }, { status: 503 });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = profileSchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: "Enter a valid name." }, { status: 400 });
  const { error: authError } = await supabase.auth.updateUser({ data: { full_name: parsed.data.full_name } });
  if (authError) return NextResponse.json({ error: authError.message }, { status: 400 });
  const { error } = await supabase.from("profiles").upsert({ id: user.id, email: user.email, full_name: parsed.data.full_name, updated_at: new Date().toISOString() }, { onConflict: "id" });
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ ok: true });
}
