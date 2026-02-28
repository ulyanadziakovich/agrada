interface Location {
  city: string;
  venue: string;
  workshop: string;
  instructors: string;
  dates: string[];
}

interface ProjektySectionProps {
  subtitle: string;
  statusNote: string;
  intro: string;
  formatNote: string;
  locations: Location[];
}

export default function ProjektySection({
  subtitle,
  statusNote,
  intro,
  formatNote,
  locations,
}: ProjektySectionProps) {
  return (
    <main className="animate-fade-in">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-8 sm:py-10 space-y-8">

        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-accent-gold font-medium mb-1">
            {subtitle}
          </p>
          <p className="text-xs text-secondary italic">{statusNote}</p>
        </div>

        <div className="h-px bg-border" />

        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">{intro}</p>

        <p className="text-xs text-foreground/55 leading-relaxed italic border-l border-accent-gold/30 pl-3">
          {formatNote}
        </p>

        <div className="h-px bg-border" />

        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-accent-gold font-medium mb-4">
            Miejsca warsztatów
          </p>
          <ul className="space-y-6">
            {locations.map((loc) => (
              <li key={loc.city} className="border-t border-border pt-4 first:border-t-0 first:pt-0">
                <p className="text-sm font-semibold text-foreground mb-0.5">{loc.city}</p>
                {loc.venue && (
                  <p className="text-[10px] tracking-wide text-secondary mb-2">{loc.venue}</p>
                )}
                <p className="text-xs text-accent-gold/80 mb-1">{loc.workshop}</p>
                {loc.instructors && (
                  <p className="text-xs text-foreground/60 leading-snug mb-2">{loc.instructors}</p>
                )}
                {loc.dates.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {loc.dates.map((d) => (
                      <span
                        key={d}
                        className="text-[10px] border border-border px-2 py-0.5 text-foreground/55"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </main>
  );
}
