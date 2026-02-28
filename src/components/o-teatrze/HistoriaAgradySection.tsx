type StatItem = { value: string; label: string };
type AcrosticLine = { letter: string; rest: string };

type Block =
  | { type: "prose"; text: string }
  | { type: "highlight"; text: string }
  | { type: "stats"; items: StatItem[] }
  | { type: "acrostic"; lines: AcrosticLine[] }
  | { type: "attribution"; text: string };

interface HistoriaAgradySectionProps {
  blocks: Block[];
}

export default function HistoriaAgradySection({ blocks }: HistoriaAgradySectionProps) {
  return (
    <main className="animate-fade-in">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-8 sm:py-10 space-y-5">
        {blocks.map((block, i) => {
          switch (block.type) {
            case "prose":
              return (
                <p key={i} className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                  {block.text}
                </p>
              );

            case "highlight":
              return (
                <p
                  key={i}
                  className="text-sm sm:text-base text-foreground leading-relaxed font-medium border-l-2 border-accent-gold pl-4"
                >
                  {block.text}
                </p>
              );

            case "stats":
              return (
                <div key={i} className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border my-2 border border-border">
                  {block.items.map((item) => (
                    <div key={item.label} className="bg-surface px-4 py-5 text-center">
                      <p className="text-2xl sm:text-3xl font-bold text-accent-gold tracking-tight">
                        {item.value}
                      </p>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-secondary mt-1">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              );

            case "acrostic":
              return (
                <div key={i} className="py-4">
                  <div className="h-px bg-border mb-6" />
                  <div className="space-y-2">
                    {block.lines.map((line, j) => (
                      <p key={j} className="text-sm sm:text-base text-foreground/80 leading-snug">
                        <span className="font-bold text-accent-gold">{line.letter}</span>
                        <span>{line.rest}</span>
                      </p>
                    ))}
                  </div>
                  <div className="h-px bg-border mt-6" />
                </div>
              );

            case "attribution":
              return (
                <p key={i} className="text-xs text-secondary tracking-widest text-right pt-1">
                  — {block.text}
                </p>
              );

            default:
              return null;
          }
        })}
      </div>
    </main>
  );
}
