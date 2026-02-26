import { ReactNode } from "react";

interface ContentPageProps {
  paragraphs: string[];
  centered?: boolean;
  imageSlot?: ReactNode;
  showGalleryPlaceholder?: boolean;
}

export default function ContentPage({
  paragraphs,
  centered = false,
  imageSlot,
  showGalleryPlaceholder = false,
}: ContentPageProps) {
  return (
    <main className="animate-fade-in">
      <div className="relative bg-gradient-to-b from-surface/30 to-background">
        <div className={`max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16 ${centered ? "text-center" : ""}`}>
          {imageSlot && <div className="mb-8 sm:mb-12">{imageSlot}</div>}

          <div className={`prose-theater space-y-4 sm:space-y-5 md:space-y-6 ${centered ? "sm:space-y-4" : ""}`}>
            {paragraphs.map((p, i) => {
              const isQuote = p.startsWith("\u201E") || p.startsWith('"');
              return (
                <p
                  key={i}
                  className={
                    isQuote
                      ? "border-l-2 border-accent-gold pl-4 sm:pl-5 italic text-foreground/80"
                      : ""
                  }
                >
                  {p}
                </p>
              );
            })}
          </div>

          {showGalleryPlaceholder && (
            <div className="mt-10 sm:mt-16 flex items-center justify-center min-h-[150px] sm:min-h-[200px] border border-dashed border-border rounded-sm">
              <p className="text-secondary text-xs sm:text-sm tracking-wide">
                Galeria zdjęć wkrótce
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
