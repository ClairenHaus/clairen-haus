import { Sidebar } from "@/components/sidebar";
import { ProfileForm } from "@/components/profile-form";
import { createClient } from "@/lib/supabase/server";

export default async function ProfilePage(){
  const supabase = await createClient();
  let name = "Demo User";
  let email = "Connect Supabase to load account email";
  let demo = true;

  if (supabase) {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      demo = false;
      name = String(user.user_metadata?.full_name || "");
      email = user.email || "";
      const { data: profile } = await supabase.from("profiles").select("full_name").eq("id", user.id).maybeSingle();
      if (profile?.full_name) name = profile.full_name;
    }
  }

  return <div className="app-shell"><Sidebar/><main className="main-content"><header className="page-header compact"><div><span className="eyebrow accent">ACCOUNT</span><h1>Profile</h1><p>Manage the personal details tied to your Content Studio account.</p></div></header><ProfileForm name={name} email={email} demo={demo}/></main></div>;
}
