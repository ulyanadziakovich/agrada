interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <div className="max-w-screen-xl mx-auto px-5 sm:px-8 md:px-10 pt-8 pb-2 text-center">
      <p className="text-[10px] tracking-[0.3em] uppercase text-accent-gold font-medium">
        {title}
      </p>
      {subtitle && (
        <p className="mt-1 text-[10px] tracking-[0.15em] uppercase text-secondary">
          {subtitle}
        </p>
      )}
    </div>
  );
}
