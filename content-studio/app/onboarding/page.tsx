"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";

const goals = ["Authority", "Lead generation", "Engagement", "Sales", "Community growth"];
const frequencies = ["3 posts / week", "5 posts / week", "Daily"];
const platforms = ["Facebook", "Instagram", "LinkedIn"];

export default function MonthlyBriefPage() {
  const [saved, setSaved] = useState(false);
  const [selectedGoals, setSelectedGoals] = useState(["Authority", "Lead generation"]);
  const [selectedPlatforms, setSelectedPlatforms] = useState(platforms);
  const [frequency, setFrequency] = useState("5 posts / week");

  function toggle(value: string, current: string[], setter: (next: string[]) => void) {
    setter(current.includes(value) ? current.filter((item) => item !== value) : [...current, value]);
  }

  function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    localStorage.setItem("clairen-content-studio-monthly-brief", JSON.stringify({
      monthly_focus: String(form.get("monthly_focus") || ""),
      deadlines: String(form.get("deadlines") || ""),
      topics: String(form.get("topics") || ""),
      goals: selectedGoals,
      platforms: selectedPlatforms,
      posting_frequency: frequency,
    }));
    setSaved(true);
  }

  if (saved) return <main className="onboarding-wrap"><div className="onboarding-card success-card"><span className="success-orb"><Sparkles/></span><span className="eyebrow accent">MONTHLY BRIEF READY</span><h1>Now generate the strategy.</h1><p>Your Brand Profile supplies the permanent context. This brief tells the studio what matters for this month.</p><Link href="/calendar" className="button primary">Generate demo plan <ArrowRight size={16}/></Link></div></main>;

  return <main className="onboarding-wrap"><div className="onboarding-top"><Link href="/" className="back-link"><ArrowLeft size={15}/> Dashboard</Link><Link href="/brand-profile">Edit Brand Profile</Link></div><form className="onboarding-card" onSubmit={save}><span className="eyebrow accent">MONTHLY BRIEF</span><h1>What needs attention this month?</h1><p>The calendar should support a business priority instead of filling dates with unrelated posts.</p><label>What are you promoting or focused on?<textarea name="monthly_focus" defaultValue="Educate founders on operational gaps and introduce the Ops Accelerator as the next step." required /></label><label>Launches, events, offers, or deadlines<textarea name="deadlines" placeholder="Add anything the calendar needs to work toward." /></label><label>Topics you want included<textarea name="topics" placeholder="Optional. One topic per line." /></label><div className="brief-section"><span>Primary goals</span><div className="goal-pills">{goals.map((goal) => <button key={goal} type="button" className={selectedGoals.includes(goal) ? "selected" : ""} onClick={() => toggle(goal, selectedGoals, setSelectedGoals)}>{selectedGoals.includes(goal) ? <Check size={12}/> : null}{goal}</button>)}</div></div><div className="brief-section"><span>Posting frequency</span><div className="goal-pills">{frequencies.map((item) => <button key={item} type="button" className={frequency === item ? "selected" : ""} onClick={() => setFrequency(item)}>{frequency === item ? <Check size={12}/> : null}{item}</button>)}</div></div><div className="brief-section"><span>Platforms this month</span><div className="goal-pills">{platforms.map((platform) => <button key={platform} type="button" className={selectedPlatforms.includes(platform) ? "selected" : ""} onClick={() => toggle(platform, selectedPlatforms, setSelectedPlatforms)}>{selectedPlatforms.includes(platform) ? <Check size={12}/> : null}{platform}</button>)}</div></div><div className="form-footer"><span/><button className="button primary">Continue to strategy <ArrowRight size={16}/></button></div></form></main>;
}
