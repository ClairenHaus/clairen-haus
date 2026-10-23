import { Sidebar } from "@/components/sidebar";

const usage = [
  ["30-day plan", "GPT-5.6", "$0.62", "$1.24"],
  ["Caption rewrites", "GPT-5.6", "$0.18", "$0.36"],
  ["Repurposing", "GPT-5.6", "$0.12", "$0.24"],
];

export default function UsagePage() {
  return <div className="app-shell"><Sidebar/><main className="main-content"><header className="page-header compact"><div><span className="eyebrow accent">AI USAGE</span><h1>Know what generation costs.</h1><p>The $9 subscription covers access. AI actions are metered separately with the configured markup.</p></div></header><section className="panel usage-total"><span>Estimated August AI charge</span><strong>$1.84</strong><small>Demo values. Live cost tracking starts when provider pricing is connected.</small></section><section className="panel usage-table"><div className="usage-row usage-head"><span>Action</span><span>Model</span><span>Provider cost</span><span>Customer charge</span></div>{usage.map(row => <div className="usage-row" key={row[0]}>{row.map(cell => <span key={cell}>{cell}</span>)}</div>)}</section></main></div>;
}
