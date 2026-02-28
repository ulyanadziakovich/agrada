interface PageHeroProps {
  title: string;
  subtitle?: string;
  compact?: boolean;
}

export default function PageHero({ title, subtitle, compact = true }: PageHeroProps) {
  return (
    <section className="relative bg-surface overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />

      <div className={`relative flex flex-col items-center justify-center px-4 sm:px-6 ${compact ? "min-h-[80px] sm:min-h-[100px] py-6 sm:py-8" : "min-h-[140px] sm:min-h-[170px] md:min-h-[200px] py-10 sm:py-14 md:py-16"}`}>
        <h1 className={`font-bold tracking-wide text-foreground text-center leading-tight ${compact ? "text-lg sm:text-xl md:text-2xl" : "text-2xl sm:text-3xl md:text-4xl lg:text-5xl"}`}>
          {title}
        </h1>
        <div className="mt-3 sm:mt-4 w-[40px] sm:w-[60px] h-[2px] bg-accent-gold" />
        {subtitle && (
          <p className="mt-2 sm:mt-3 text-secondary text-xs sm:text-sm tracking-widest uppercase text-center px-4">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
