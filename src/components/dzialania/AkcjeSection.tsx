type Block =
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "highlight"; text: string }
  | { type: "prose"; text: string }
  | { type: "attribution"; text: string };

interface AkcjeSectionProps {
  blocks: Block[];
}

export default function AkcjeSection({ blocks }: AkcjeSectionProps) {
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
            case "subheading":
              return (
                <p key={i} className="text-[10px] tracking-[0.2em] uppercase text-secondary">
                  {block.text}
                </p>
              );
            case "highlight":
              return (
                <p key={i} className="text-xs text-foreground/50 italic">
                  {block.text}
                </p>
              );
            case "prose":
              return (
                <p key={i} className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                  {block.text}
                </p>
              );
            case "attribution":
              return (
                <p key={i} className="text-xs text-secondary tracking-widest text-right pt-2">
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
