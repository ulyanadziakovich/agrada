interface NewsItem {
  date: string;
  title: string;
  body: string;
  link?: { label: string; url: string };
}

interface NewsSectionProps {
  items: NewsItem[];
}

export default function NewsSection({ items }: NewsSectionProps) {
  return (
    <main className="animate-fade-in">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-8 sm:py-10">
        <ul className="divide-y divide-border">
          {items.map((item, i) => (
            <li key={i} className="py-6 first:pt-0 last:pb-0">
              <p className="text-[10px] tracking-[0.25em] uppercase text-accent-gold mb-1.5">
                {item.date}
              </p>
              <h2 className="text-sm sm:text-base font-semibold text-foreground leading-snug mb-2">
                {item.title}
              </h2>
              <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                {item.body}
              </p>
              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-[11px] text-secondary hover:text-accent-gold transition-colors duration-300 tracking-wide"
                >
                  {item.link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
