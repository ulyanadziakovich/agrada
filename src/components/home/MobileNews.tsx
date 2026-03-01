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
    <section className="max-w-screen-xl mx-auto px-5 sm:px-8 md:px-10 py-8">
      <p className="text-[10px] tracking-[0.3em] uppercase text-accent-gold font-medium mb-6">
        Aktualności
      </p>
      <ul className="space-y-8">
        {items.map((item, i) => (
          <li key={i}>
            <p className="text-[10px] tracking-[0.25em] uppercase text-accent-gold/70 mb-1.5">
              {item.date}
            </p>
            <p className="text-sm sm:text-base font-semibold text-foreground leading-snug mb-1.5">
              {item.title}
            </p>
            <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
              {item.body}
            </p>
            {item.link && (
              <a
                href={item.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-1.5 text-[11px] text-secondary hover:text-accent-gold transition-colors duration-300"
              >
                {item.link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
