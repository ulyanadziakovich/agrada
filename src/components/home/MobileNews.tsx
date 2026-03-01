import Link from "next/link";

interface NewsItem {
  date: string;
  title: string;
  body: string;
  link?: { label: string; url: string };
}

interface MobileNewsProps {
  items: NewsItem[];
}

export default function MobileNews({ items }: MobileNewsProps) {
  return (
    <section>
      <div className="flex items-center justify-between px-5 pt-6 pb-3">
        <p className="text-[10px] tracking-[0.3em] uppercase text-accent-gold font-medium">
          Aktualności
        </p>
        <Link
          href="/news"
          className="text-[10px] tracking-widest uppercase text-foreground/40 hover:text-foreground/70 transition-colors"
        >
          Wszystkie →
        </Link>
      </div>
      <ul className="divide-y divide-border">
        {items.slice(0, 3).map((item, i) => (
          <li key={i} className="px-5 py-4">
            <p className="text-[10px] tracking-[0.2em] uppercase text-accent-gold/70 mb-1">
              {item.date}
            </p>
            <p className="text-sm font-semibold text-foreground leading-snug mb-1">
              {item.title}
            </p>
            <p className="text-xs text-foreground/65 leading-relaxed line-clamp-2">
              {item.body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
