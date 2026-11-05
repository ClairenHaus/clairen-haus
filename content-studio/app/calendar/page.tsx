import Link from "next/link";
import { Plus, SlidersHorizontal } from "lucide-react";
import { Sidebar } from "@/components/sidebar";
import { CalendarGrid } from "@/components/calendar-grid";
import { demoItems } from "@/lib/demo-data";

export default function CalendarPage() {
  return <div className="app-shell"><Sidebar/><main className="main-content wide"><header className="page-header compact"><div><span className="eyebrow accent">30-DAY PLAN</span><h1>August content calendar</h1><p>Review the whole strategy before spending AI usage on individual assets.</p></div><div className="header-actions"><button className="button secondary"><SlidersHorizontal size={16}/> Filter</button><Link href="/onboarding" className="button primary"><Plus size={16}/> New month</Link></div></header><div className="filter-row"><button className="filter active">All 30</button><button className="filter">Facebook</button><button className="filter">Instagram</button><button className="filter">LinkedIn</button></div><CalendarGrid items={demoItems}/></main></div>;
}
