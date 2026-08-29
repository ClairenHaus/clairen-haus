"use client";

import { FormEvent, useMemo, useState } from "react";
import { Check, LoaderCircle, Save } from "lucide-react";

export type BrandProfileValues = {
  business_name: string;
  website_url: string;
  industry: string;
  business_description: string;
  ideal_customer: string;
  audience_problems: string[];
  desired_outcomes: string[];
  voice_traits: string[];
  avoid_language: string[];
  default_goals: string[];
  primary_cta: string;
  default_platforms: string[];
};

const platforms = ["Facebook", "Instagram", "LinkedIn"];
const lines = (values: string[]) => values.join("\n");
const splitLines = (value: FormDataEntryValue | null) => String(value || "").split(/\n|,/).map((item) => item.trim()).filter(Boolean);

export function BrandProfileForm({ initial }: { initial: BrandProfileValues }) {
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState(initial.default_platforms);
  const isDemo = useMemo(() => !process.env.NEXT_PUBLIC_SUPABASE_URL, []);

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setMessage("");
    const form = new FormData(event.currentTarget);
    const body: BrandProfileValues = {
      business_name: String(form.get("business_name") || "").trim(),
      website_url: String(form.get("website_url") || "").trim(),
      industry: String(form.get("industry") || "").trim(),
      business_description: String(form.get("business_description") || "").trim(),
      ideal_customer: String(form.get("ideal_customer") || "").trim(),
      audience_problems: splitLines(form.get("audience_problems")),
      desired_outcomes: splitLines(form.get("desired_outcomes")),
      voice_traits: splitLines(form.get("voice_traits")),
      avoid_language: splitLines(form.get("avoid_language")),
      default_goals: splitLines(form.get("default_goals")),
      primary_cta: String(form.get("primary_cta") || "").trim(),
      default_platforms: selectedPlatforms,
    };

    if (isDemo) {
      localStorage.setItem("clairen-content-studio-brand-profile", JSON.stringify(body));
      setMessage("Saved in demo mode on this device.");
      setSaving(false);
      return;
    }

    const response = await fetch("/api/brand-profile", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    const result = await response.json();
    setMessage(response.ok ? "Brand Profile saved." : result.error || "Could not save Brand Profile.");
    setSaving(false);
  }

  function togglePlatform(platform: string) {
    setSelectedPlatforms((current) => current.includes(platform) ? current.filter((item) => item !== platform) : [...current, platform]);
  }

  return <form className="brand-profile-form" onSubmit={save}>
    <section className="panel settings-card form-section"><span className="eyebrow accent">BUSINESS</span><h2>What should the studio understand?</h2><div className="field-grid"><label>Business name<input name="business_name" defaultValue={initial.business_name} required /></label><label>Industry<input name="industry" defaultValue={initial.industry} /></label></div><label>Website<input type="url" name="website_url" defaultValue={initial.website_url} placeholder="https://yourbusiness.com" /></label><label>What you sell<textarea name="business_description" defaultValue={initial.business_description} required /></label></section>
    <section className="panel settings-card form-section"><span className="eyebrow accent">AUDIENCE</span><h2>Who are you talking to?</h2><label>Ideal customer<textarea name="ideal_customer" defaultValue={initial.ideal_customer} required /></label><div className="field-grid"><label>Problems they are trying to solve<textarea name="audience_problems" defaultValue={lines(initial.audience_problems)} placeholder="One per line" /></label><label>Outcomes they want<textarea name="desired_outcomes" defaultValue={lines(initial.desired_outcomes)} placeholder="One per line" /></label></div></section>
    <section className="panel settings-card form-section"><span className="eyebrow accent">VOICE</span><h2>How should your content sound?</h2><div className="field-grid"><label>Voice traits<textarea name="voice_traits" defaultValue={lines(initial.voice_traits)} placeholder={'Direct\nPractical\nSpecific'} /></label><label>Words or styles to avoid<textarea name="avoid_language" defaultValue={lines(initial.avoid_language)} placeholder="One per line" /></label></div></section>
    <section className="panel settings-card form-section"><span className="eyebrow accent">DEFAULTS</span><h2>What should carry into every month?</h2><label>Primary CTA<input name="primary_cta" defaultValue={initial.primary_cta} placeholder="Book a call, join the list, complete the assessment..." /></label><label>Default content goals<textarea name="default_goals" defaultValue={lines(initial.default_goals)} placeholder={'Authority\nLead generation'} /></label><div className="platform-selector"><span>Default platforms</span><div>{platforms.map((platform) => <button type="button" key={platform} className={selectedPlatforms.includes(platform) ? "selected" : ""} onClick={() => togglePlatform(platform)}>{selectedPlatforms.includes(platform) ? <Check size={13}/> : null}{platform}</button>)}</div></div></section>
    <div className="sticky-save-bar"><span>{message || "Changes are not saved until you select Save Brand Profile."}</span><button className="button primary" disabled={saving}>{saving ? <LoaderCircle className="spin" size={15}/> : <Save size={15}/>} {saving ? "Saving" : "Save Brand Profile"}</button></div>
  </form>;
}
