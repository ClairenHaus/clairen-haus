import { Sidebar } from "@/components/sidebar";

export default function SettingsPage(){
  return <div className="app-shell"><Sidebar/><main className="main-content"><header className="page-header compact"><div><span className="eyebrow accent">ACCOUNT</span><h1>Settings</h1><p>Set defaults for how Content Studio plans and generates your content.</p></div></header><div className="settings-grid"><section className="panel settings-card"><span className="eyebrow">CONTENT DEFAULTS</span><h2>Platforms & cadence</h2><p>Choose your default platforms and starting posting frequency for new plans.</p></section><section className="panel settings-card"><span className="eyebrow">NOTIFICATIONS</span><h2>Studio reminders</h2><p>Control plan-ready, billing, and account notifications.</p></section></div></main></div>;
}
