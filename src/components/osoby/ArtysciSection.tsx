interface Artist {
  name: string;
  role?: string;
  bio: string;
  website?: string;
}

interface ArtysciSectionProps {
  artists: Artist[];
}

export default function ArtysciSection({ artists }: ArtysciSectionProps) {
  return (
    <main className="animate-fade-in">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-8 sm:py-10">
        {artists.map((artist, index) => (
          <div key={artist.name}>
            {index > 0 && <div className="h-px bg-border my-7" />}

            <div className="flex gap-4 sm:gap-6">
              {/* Dekoracyjna kreska */}
              <div className="shrink-0 pt-1.5">
                <div className="w-[2px] h-full min-h-[2rem] bg-accent-gold/30" />
              </div>

              {/* Treść */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold tracking-wider text-foreground leading-snug">
                  {artist.name}
                </h3>

                {artist.role && (
                  <p className="text-[10px] tracking-[0.2em] uppercase text-accent-gold mt-0.5 mb-2">
                    {artist.role}
                  </p>
                )}

                <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed mt-1.5">
                  {artist.bio}
                </p>

                {artist.website && (
                  <a
                    href={`https://${artist.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-[11px] text-secondary hover:text-accent-gold transition-colors duration-300 tracking-wide"
                  >
                    {artist.website}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
