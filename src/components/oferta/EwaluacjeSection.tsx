interface Quote {
  text: string;
  author: string;
  date: string;
}

interface Section {
  heading: string;
  subheading?: string;
  quotes: Quote[];
}

interface EwaluacjeSectionProps {
  sections: Section[];
}

export default function EwaluacjeSection({ sections }: EwaluacjeSectionProps) {
  return (
    <main className="animate-fade-in">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-8 sm:py-10 space-y-10">
        {sections.map((section, i) => (
          <div key={i}>
            <div className="mb-4">
              <p className="text-[10px] tracking-[0.3em] uppercase text-accent-gold font-medium">
                {section.heading}
              </p>
              {section.subheading && (
                <p className="text-[10px] tracking-[0.1em] text-secondary mt-0.5">
                  {section.subheading}
                </p>
              )}
            </div>
            <ul className="space-y-4">
              {section.quotes.map((q, j) => (
                <li key={j} className="border-l border-border pl-4">
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed italic">
                    &bdquo;{q.text}&rdquo;
                  </p>
                  {(q.author || q.date) && (
                    <p className="mt-1.5 text-[10px] tracking-wide text-secondary text-right">
                      {q.author && <span>{q.author}</span>}
                      {q.author && q.date && <span className="mx-1">·</span>}
                      {q.date && <span>{q.date}</span>}
                    </p>
                  )}
                </li>
              ))}
            </ul>
            {i < sections.length - 1 && <div className="mt-10 h-px bg-border" />}
          </div>
        ))}
      </div>
    </main>
  );
}
