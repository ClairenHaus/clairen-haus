"use client";

import { FormEvent, useState } from "react";
import { LoaderCircle, Save } from "lucide-react";

export function ProfileForm({ name, email, demo }: { name: string; email: string; demo: boolean }) {
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    const form = new FormData(event.currentTarget);
    const full_name = String(form.get("full_name") || "").trim();
    if (demo) {
      setMessage("Profile editing will persist when Supabase is connected.");
      setSaving(false);
      return;
    }
    const response = await fetch("/api/profile", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ full_name }) });
    const result = await response.json();
    setMessage(response.ok ? "Profile saved." : result.error || "Could not save profile.");
    setSaving(false);
  }

  return <form className="panel settings-card profile-form" onSubmit={save}><label>Name<input name="full_name" defaultValue={name} required /></label><label>Email<input value={email} disabled /></label><p className="field-note">Your email is managed by your sign-in account.</p><div className="inline-save"><span>{message}</span><button className="button primary" disabled={saving}>{saving ? <LoaderCircle className="spin" size={15}/> : <Save size={15}/>} Save profile</button></div></form>;
}
