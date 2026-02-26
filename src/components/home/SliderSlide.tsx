import Image from "next/image";

interface SliderSlideProps {
  layout: "image" | "content";
  image: string;
  title: string;
  description: string;
  cta: { label: string; href: string } | null;
}

export default function SliderSlide({
  layout,
  image,
  title,
  description,
  cta,
}: SliderSlideProps) {
  if (layout === "image") {
    return (
      <div className="relative w-full hero-slide overflow-hidden">
        <Image
          src={image}
          alt={title || "Teatr Agrada"}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/60 to-transparent" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] hero-slide">
      {/* Zdjęcie */}
      <div className="relative h-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Tekst */}
      <div className="flex flex-col justify-center px-10 py-10 bg-surface">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-snug mb-4">
          {title}
        </h2>
        <p className="text-secondary text-sm leading-relaxed mb-8">
          {description}
        </p>
        {cta && (
          <a
            href={cta.href}
            className="inline-block w-fit border border-accent text-accent px-5 py-2 text-xs tracking-widest uppercase hover:bg-accent hover:text-white transition-colors duration-200"
          >
            {cta.label}
          </a>
        )}
      </div>
    </div>
  );
}
