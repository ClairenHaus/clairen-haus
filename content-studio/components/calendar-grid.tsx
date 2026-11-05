import Link from "next/link";
import { ContentItem } from "@/types/content";

const statusLabels = { idea: "Idea", draft: "Draft", ready: "Ready", published: "Published" };

export function CalendarGrid({ items }: { items: ContentItem[] }) {
  return <div className="calendar-grid">{items.map((item) => <Link className="day-card" href={`/content/${item.id}`} key={item.id}><div className="day-card-top"><span className="day-number">{String(item.day).padStart(2, "0")}</span><span className={`status status-${item.status}`}>{statusLabels[item.status]}</span></div><span className="eyebrow">{item.pillar}</span><h3>{item.title}</h3><div className="platform-row">{item.platforms.map((platform) => <span key={platform}>{platform}</span>)}</div></Link>)}</div>;
}
