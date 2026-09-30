import Link from "next/link";
import { CalendarDays, ChevronUp, CircleHelp, CreditCard, Gauge, Library, LogOut, Settings2, Sparkles, UserRound } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

const workspaceNav = [
  { href: "/", label: "Dashboard", icon: Gauge },
  { href: "/calendar", label: "30-Day Plan", icon: CalendarDays },
  { href: "/library", label: "Content Library", icon: Library },
];

const accountNav = [
  { href: "/profile", label: "Profile", icon: UserRound },
  { href: "/brand-profile", label: "Brand Profile", icon: Settings2 },
  { href: "/billing", label: "Billing", icon: CreditCard },
  { href: "/usage", label: "AI Usage", icon: Sparkles },
  { href: "/settings", label: "Settings", icon: Settings2 },
  { href: "/support", label: "Help & Support", icon: CircleHelp },
];

export async function Sidebar() {
  const supabase = await createClient();
  let initials = "CS";
  let accountLabel = "My account";
  let accountHint = "Manage your studio";

  if (supabase) {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const fullName = String(user.user_metadata?.full_name || "").trim();
      initials = fullName ? fullName.split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase() : (user.email?.slice(0, 2).toUpperCase() || "ME");
      accountLabel = fullName || "My account";
      accountHint = user.email || "Manage your studio";
    }
  }

  async function signOut() {
    "use server";
    const client = await createClient();
    if (client) await client.auth.signOut();
    redirect("/login");
  }

  return <aside className="sidebar"><Link href="/" className="brand"><span className="brand-mark">CH</span><span>Content Studio</span></Link><nav>{workspaceNav.map(({ href, label, icon: Icon }) => <Link href={href} key={label} className="nav-link"><Icon size={17} strokeWidth={1.8}/><span>{label}</span></Link>)}</nav><details className="account-menu"><summary><span className="account-avatar">{initials}</span><span className="account-copy"><strong>{accountLabel}</strong><small>{accountHint}</small></span><ChevronUp className="account-chevron" size={16}/></summary><div className="account-popover">{accountNav.map(({ href, label, icon: Icon }) => <Link href={href} key={label} className="account-link"><Icon size={15} strokeWidth={1.8}/><span>{label}</span></Link>)}<form action={signOut}><button type="submit" className="account-link signout-link"><LogOut size={15} strokeWidth={1.8}/><span>Sign Out</span></button></form></div></details></aside>;
}
