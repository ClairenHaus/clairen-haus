"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") || "").trim();
    const password = String(form.get("password") || "");
    const supabase = createClient();

    if (!supabase) {
      setError("Supabase is not connected yet. Add the project URL and publishable key to enable sign in.");
      setLoading(false);
      return;
    }

    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    if (signInError) {
      setError(signInError.message);
      setLoading(false);
      return;
    }
    window.location.assign("/");
  }

  return <main className="auth-wrap"><section className="auth-card"><Link href="/" className="brand auth-brand"><span className="brand-mark">CH</span><span>Content Studio</span></Link><span className="eyebrow accent">WELCOME BACK</span><h1>Sign in to your studio.</h1><p>Pick up your plan, drafts, and brand profile where you left them.</p><form onSubmit={signIn} className="auth-form"><label>Email<input type="email" name="email" autoComplete="email" required /></label><label>Password<input type="password" name="password" autoComplete="current-password" required minLength={8} /></label>{error ? <p className="form-error" role="alert">{error}</p> : null}<button className="button primary full" disabled={loading}>{loading ? <LoaderCircle className="spin" size={16}/> : null}{loading ? "Signing in" : "Sign in"}<ArrowRight size={16}/></button></form><p className="auth-switch">New here? <Link href="/signup">Create your account</Link></p></section></main>;
}
