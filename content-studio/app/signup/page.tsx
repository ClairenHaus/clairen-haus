"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function signUp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);
    const form = new FormData(event.currentTarget);
    const fullName = String(form.get("fullName") || "").trim();
    const email = String(form.get("email") || "").trim();
    const password = String(form.get("password") || "");
    const supabase = createClient();

    if (!supabase) {
      setError("Supabase is not connected yet. Add the project URL and publishable key to enable account creation.");
      setLoading(false);
      return;
    }

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } },
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    if (data.session) {
      window.location.assign("/brand-profile");
      return;
    }

    setSent(true);
    setLoading(false);
  }

  if (sent) return <main className="auth-wrap"><section className="auth-card success-card"><span className="success-orb"><CheckCircle2/></span><span className="eyebrow accent">CHECK YOUR EMAIL</span><h1>Confirm your account.</h1><p>Use the confirmation link we sent you. After confirmation, you will go straight into your Brand Profile setup.</p><Link href="/login" className="button secondary">Back to sign in</Link></section></main>;

  return <main className="auth-wrap"><section className="auth-card"><Link href="/" className="brand auth-brand"><span className="brand-mark">CH</span><span>Content Studio</span></Link><span className="eyebrow accent">CREATE YOUR ACCOUNT</span><h1>Set up your content workspace.</h1><p>Your Brand Profile is saved to your account and reused every month.</p><form onSubmit={signUp} className="auth-form"><label>Name<input name="fullName" autoComplete="name" required /></label><label>Email<input type="email" name="email" autoComplete="email" required /></label><label>Password<input type="password" name="password" autoComplete="new-password" required minLength={8} /><small>Use at least 8 characters.</small></label>{error ? <p className="form-error" role="alert">{error}</p> : null}<button className="button primary full" disabled={loading}>{loading ? <LoaderCircle className="spin" size={16}/> : null}{loading ? "Creating account" : "Create account"}<ArrowRight size={16}/></button></form><p className="auth-switch">Already have an account? <Link href="/login">Sign in</Link></p></section></main>;
}
