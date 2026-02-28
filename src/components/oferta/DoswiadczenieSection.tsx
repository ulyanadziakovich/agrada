interface Workshop {
  location: string;
  date: string;
  description: string;
}

interface DoswiadczenieSectionProps {
  workshops: Workshop[];
}

export default function DoswiadczenieSection({ workshops }: DoswiadczenieSectionProps) {
  return (
    <main className="animate-fade-in">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-8 sm:py-10">
        <ul className="divide-y divide-border">
          {workshops.map((w, i) => (
            <li key={i} className="py-4 flex gap-4">
              <div className="shrink-0 w-1 self-stretch bg-accent-gold/30 rounded-full" />
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-semibold text-foreground leading-snug">
                  {w.location}
                </p>
                <p className="text-[10px] tracking-[0.15em] uppercase text-secondary mt-0.5 mb-2">
                  {w.date}
                </p>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  {w.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
