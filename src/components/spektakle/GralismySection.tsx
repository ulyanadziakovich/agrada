interface Group {
  period: string;
  events: string[];
}

interface GralismySectionProps {
  groups: Group[];
}

export default function GralismySection({ groups }: GralismySectionProps) {
  return (
    <main className="animate-fade-in">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-8 sm:py-10">
        <div className="space-y-6">
          {groups.map((group) => (
            <div key={group.period} className="grid grid-cols-[auto_1fr] gap-x-5">
              <p className="text-[10px] tracking-[0.2em] uppercase text-accent-gold font-medium pt-0.5 w-28 shrink-0 text-right">
                {group.period}
              </p>
              <div className="border-l border-border pl-5 space-y-1 pb-4">
                {group.events.map((event, i) => (
                  <p key={i} className="text-xs text-foreground/75 leading-relaxed">
                    {event}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
