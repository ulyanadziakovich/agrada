type Block =
  | { type: "heading"; text: string }
  | { type: "section-heading"; text: string }
  | { type: "prose"; text: string }
  | { type: "quote"; text: string }
  | { type: "poem"; part: string; lines: string[] }
  | { type: "attribution"; text: string };

interface HistoriaSectionProps {
  blocks: Block[];
}

export default function HistoriaSection({ blocks }: HistoriaSectionProps) {
  return (
    <main className="animate-fade-in">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-8 sm:py-10 space-y-5">
        {blocks.map((block, i) => {
          switch (block.type) {
            case "heading":
              return (
                <h2
                  key={i}
                  className="text-sm sm:text-base font-bold tracking-wider text-foreground pt-1"
                >
                  {block.text}
                </h2>
              );

            case "section-heading":
              return (
                <div key={i} className="pt-4 pb-1">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-accent-gold font-medium mb-2">
                    {block.text}
                  </p>
                  <div className="h-px bg-border" />
                </div>
              );

            case "prose":
              return (
                <p
                  key={i}
                  className="text-sm sm:text-base text-foreground/80 leading-relaxed"
                >
                  {block.text}
                </p>
              );

            case "quote":
              return (
                <blockquote
                  key={i}
                  className="border-l-2 border-accent-gold/40 pl-4 sm:pl-5 text-sm text-foreground/75 leading-relaxed italic"
                >
                  {block.text}
                </blockquote>
              );

            case "poem":
              return (
                <div key={i} className="py-1">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-accent-gold mb-2">
                    {block.part}
                  </p>
                  <div className="pl-4 border-l border-border space-y-0.5">
                    {block.lines.map((line, j) => (
                      <p
                        key={j}
                        className="text-sm text-foreground/70 leading-snug italic"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              );

            case "attribution":
              return (
                <p
                  key={i}
                  className="text-xs text-secondary tracking-widest text-right pt-2"
                >
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
