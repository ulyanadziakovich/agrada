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
      <>
        {/* Desktop — original */}
        <div className="relative w-full hero-slide overflow-hidden hidden md:block">
          <Image
            src={image}
            alt={title || "Teatr Agrada"}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/60 to-transparent" />
        </div>
        {/* Mobile — same size as content slides */}
        <div className="md:hidden">
          <div className="relative aspect-[16/9] bg-background">
            <Image
              src={image}
              alt={title || "Teatr Agrada"}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Desktop — original layout */}
      <div className="hidden md:grid grid-cols-[3fr_2fr] hero-slide">
        <div className="relative h-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col justify-center px-10 py-10 bg-surface">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-snug mb-4">
            {title}
          </h2>
          <p className="text-secondary text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Mobile — compact, no cropping */}
      <div className="flex flex-col md:hidden">
        <div className="relative aspect-[16/9] bg-background">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="flex flex-col px-4 py-3 bg-surface">
          <h2 className="text-base font-bold text-foreground leading-snug mb-1.5">
            {title}
          </h2>
          <p className="text-secondary text-[11px] leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
