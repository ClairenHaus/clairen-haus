import Link from "next/link";
import { Sidebar } from "@/components/sidebar";

export default function BillingPage(){
  return <div className="app-shell"><Sidebar/><main className="main-content"><header className="page-header compact"><div><span className="eyebrow accent">ACCOUNT</span><h1>Billing</h1><p>Manage your subscription, payment method, invoices, and AI generation charges.</p></div></header><div className="settings-grid"><section className="panel settings-card"><span className="eyebrow">PLAN</span><h2>Content Studio</h2><p>$9/month plus metered AI generation.</p><button className="button secondary">Manage subscription</button></section><section className="panel settings-card"><span className="eyebrow">USAGE</span><h2>AI charges</h2><p>See the generation actions that make up your current usage total.</p><Link href="/usage" className="button secondary">View AI usage</Link></section></div></main></div>;
}
