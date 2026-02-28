interface Show {
  number: number;
  title: string;
  premiere: string;
  crew: string[];
  description: string;
}

interface RepertuarSectionProps {
  shows: Show[];
}

export default function RepertuarSection({ shows }: RepertuarSectionProps) {
  return (
    <main className="animate-fade-in">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-8 sm:py-10 space-y-8">
        {shows.map((show) => (
          <div key={show.number} className="border-t border-border pt-6 first:border-t-0 first:pt-0">
            <div className="flex gap-4">
              <span className="text-2xl font-bold text-accent-gold/40 leading-none tabular-nums w-8 shrink-0 text-right">
                {show.number}
              </span>
              <div className="min-w-0">
                <h2 className="text-base sm:text-lg font-bold text-foreground leading-snug mb-1">
                  {show.title}
                </h2>
                <p className="text-[10px] tracking-[0.2em] uppercase text-secondary mb-3">
                  {show.premiere}
                </p>
                <ul className="space-y-0.5 mb-3">
                  {show.crew.map((line, i) => (
                    <li key={i} className="text-xs text-foreground/60 leading-snug">
                      {line}
                    </li>
                  ))}
                </ul>
                {show.description && (
                  <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed italic border-l border-accent-gold/30 pl-3">
                    {show.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
