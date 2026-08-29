import Link from "next/link";
import { Sidebar } from "@/components/sidebar";
import { demoItems } from "@/lib/demo-data";

export default function LibraryPage(){
  return <div className="app-shell"><Sidebar/><main className="main-content"><header className="page-header compact"><div><span className="eyebrow accent">CONTENT LIBRARY</span><h1>Everything you have created.</h1><p>Find saved drafts, ready posts, published content, and previous ideas.</p></div></header><div className="preview-list">{demoItems.map(item=><Link href={`/content/${item.id}`} className="preview-row" key={item.id}><span className="preview-day">DAY {item.day}</span><div><strong>{item.title}</strong><small>{item.pillar} · {item.status}</small></div><span className="platform-chip">{item.platforms.join(" + ")}</span></Link>)}</div></main></div>;
}
