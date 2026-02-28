interface UpcomingShow {
  date: string;
  venue: string;
  time: string;
  title: string;
}

interface AktualnieGramySectionProps {
  upcomingShows: UpcomingShow[];
  currentRepertoire: string[];
  message: string;
  contact: string;
}

export default function AktualnieGramySection({
  upcomingShows,
  currentRepertoire,
  message,
  contact,
}: AktualnieGramySectionProps) {
  return (
    <main className="animate-fade-in">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-8 sm:py-10 space-y-8">

        {upcomingShows.length > 0 && (
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-accent-gold font-medium mb-3">
              Najbliższe spektakle
            </p>
            <ul className="space-y-3">
              {upcomingShows.map((s, i) => (
                <li key={i} className="border border-border p-4">
                  <p className="text-base font-bold text-foreground leading-snug mb-1">{s.title}</p>
                  <p className="text-xs text-foreground/70">{s.date} · {s.time}</p>
                  <p className="text-xs text-secondary mt-0.5">{s.venue}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="h-px bg-border" />

        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-accent-gold font-medium mb-3">
            Aktualny repertuar
          </p>
          <ul className="space-y-1.5">
            {currentRepertoire.map((title) => (
              <li key={title} className="flex gap-2 items-baseline text-sm text-foreground/80">
                <span className="shrink-0 w-1 h-1 rounded-full bg-accent-gold/60 mt-1.5" />
                {title}
              </li>
            ))}
          </ul>
        </div>

        <div className="h-px bg-border" />

        <div>
          <p className="text-sm text-foreground/75 leading-relaxed mb-2">{message}</p>
          <p className="text-xs text-secondary tracking-wide">tel. {contact}</p>
        </div>

      </div>
    </main>
  );
}
