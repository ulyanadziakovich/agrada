interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative bg-surface overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />

      <div className="relative flex flex-col items-center justify-center min-h-[140px] sm:min-h-[170px] md:min-h-[200px] px-4 sm:px-6 py-10 sm:py-14 md:py-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-foreground text-center leading-tight">
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
