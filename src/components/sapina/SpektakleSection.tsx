interface Show {
  number: number;
  title: string;
  premiere: string;
  crew: string[];
  description?: string;
  cast?: string;
  dates?: string[];
}

interface SpektakleSectionProps {
  shows: Show[];
}

export default function SpektakleSection({ shows }: SpektakleSectionProps) {
  return (
    <main className="animate-fade-in">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-8 sm:py-10">
        <div>
          {shows.map((show, index) => (
            <div key={show.number}>
              {index > 0 && <div className="h-px bg-border my-7" />}

              <div className="flex gap-4 sm:gap-6">
                {/* Numer */}
                <div className="shrink-0 pt-0.5 w-6 text-right">
                  <span className="text-xs font-medium tracking-widest text-accent-gold">
                    {String(show.number).padStart(2, "0")}
                  </span>
                </div>

                {/* Treść */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-semibold text-foreground leading-snug mb-0.5">
                    {show.title}
                  </h3>
                  <p className="text-[11px] tracking-wide text-secondary mb-2">
                    {show.premiere}
                  </p>

                  <div className="space-y-0.5 mb-2">
                    {show.crew.map((line, i) => (
                      <p key={i} className="text-xs text-foreground/55 leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>

                  {show.description && (
                    <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed mt-2">
                      {show.description}
                    </p>
                  )}

                  {show.dates && show.dates.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-x-3 gap-y-0.5">
                      {show.dates.map((date, i) => (
                        <span key={i} className="text-[11px] text-secondary">
                          {date}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
