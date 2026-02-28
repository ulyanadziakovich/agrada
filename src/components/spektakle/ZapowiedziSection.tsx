type Block =
  | { type: "heading"; text: string }
  | { type: "prose"; text: string }
  | { type: "cta"; text: string }
  | { type: "link"; label: string; url: string };

interface ZapowiedziSectionProps {
  blocks: Block[];
}

export default function ZapowiedziSection({ blocks }: ZapowiedziSectionProps) {
  return (
    <main className="animate-fade-in">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-8 sm:py-10 space-y-4">
        {blocks.map((block, i) => {
          switch (block.type) {
            case "heading":
              return (
                <p key={i} className="text-[10px] tracking-[0.3em] uppercase text-accent-gold font-medium">
                  {block.text}
                </p>
              );
            case "prose":
              return (
                <p key={i} className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                  {block.text}
                </p>
              );
            case "link":
              return (
                <a
                  key={i}
                  href={block.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-secondary hover:text-accent-gold transition-colors duration-300"
                >
                  {block.label}
                </a>
              );
            case "cta":
              return (
                <p key={i} className="text-xs tracking-[0.2em] uppercase text-foreground/60 pt-2">
                  {block.text}
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
