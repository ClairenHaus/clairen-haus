import { Sidebar } from "@/components/sidebar";
import { BrandProfileForm, type BrandProfileValues } from "@/components/brand-profile-form";
import { createClient } from "@/lib/supabase/server";

const demoProfile: BrandProfileValues = {
  business_name: "Clairen Haus",
  website_url: "https://clairenhaus.com",
  industry: "Operations Consulting",
  business_description: "Operational systems and custom business infrastructure for service-based founders.",
  ideal_customer: "Established service-based business owners whose growth has exposed gaps in follow-up, delivery, handoffs, and visibility.",
  audience_problems: ["Disconnected tools", "Inconsistent follow-up", "Delivery gaps"],
  desired_outcomes: ["Clear client journey", "Consistent execution", "Scalable delivery"],
  voice_traits: ["Direct", "Practical", "Intelligent", "Specific", "Founder-led"],
  avoid_language: ["Generic motivation", "Hype"],
  default_goals: ["Authority", "Lead generation"],
  primary_cta: "Complete the operations assessment",
  default_platforms: ["Facebook", "Instagram", "LinkedIn"],
};

export default async function BrandProfilePage() {
  const supabase = await createClient();
  let initial = demoProfile;

  if (supabase) {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data } = await supabase.from("brand_profiles").select("business_name,website_url,industry,business_description,ideal_customer,audience_problems,desired_outcomes,voice_traits,avoid_language,default_goals,primary_cta,default_platforms").eq("user_id", user.id).maybeSingle();
      if (data) initial = {
        business_name: data.business_name || "",
        website_url: data.website_url || "",
        industry: data.industry || "",
        business_description: data.business_description || "",
        ideal_customer: data.ideal_customer || "",
        audience_problems: data.audience_problems || [],
        desired_outcomes: data.desired_outcomes || [],
        voice_traits: data.voice_traits || [],
        avoid_language: data.avoid_language || [],
        default_goals: data.default_goals || [],
        primary_cta: data.primary_cta || "",
        default_platforms: data.default_platforms || [],
      };
    }
  }

  return <div className="app-shell"><Sidebar/><main className="main-content"><header className="page-header compact"><div><span className="eyebrow accent">ACCOUNT</span><h1>Brand Profile</h1><p>This is the source the studio uses to keep monthly content aligned with your business, audience, and voice.</p></div></header><BrandProfileForm initial={initial}/></main></div>;
}
