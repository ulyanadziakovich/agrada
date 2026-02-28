interface Friend {
  name: string;
  description: string;
  website?: string;
}

interface PrzyjacieleSectionProps {
  friends: Friend[];
}

export default function PrzyjacieleSectiont({ friends }: PrzyjacieleSectionProps) {
  return (
    <main className="animate-fade-in">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
          {friends.map((friend, index) => {
            const isFirstRow = index === 0 || index === 1;
            const isSecondInRow = index === 1;
            return (
              <div
                key={friend.name}
                className={[
                  "pb-6",
                  isFirstRow ? "pt-0" : "pt-6 border-t border-border",
                  isSecondInRow ? "sm:border-t-0 sm:pt-0" : "",
                ].join(" ")}
              >
                <h3 className="text-[10px] tracking-[0.25em] uppercase font-medium text-accent-gold mb-1.5">
                  {friend.name}
                </h3>
                <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                  {friend.description}
                </p>
                {friend.website && (
                  <a
                    href={`https://${friend.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1.5 text-[11px] text-secondary hover:text-accent-gold transition-colors duration-300 tracking-wide"
                  >
                    {friend.website}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
