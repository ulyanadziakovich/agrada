import Link from "next/link";

interface NavLogoProps {
  src: string;
  alt: string;
  href: string;
  title: string;
  tagline: string;
}

export default function NavLogo({ src, alt, href, title, tagline }: NavLogoProps) {
  return (
    <Link href={href} className="inline-flex items-center gap-4">
      <img src={src} alt={alt} className="h-14 w-auto" />
      <div className="flex flex-col">
        <span className="text-4xl font-bold tracking-wider text-white leading-none">
          {title}
        </span>
        <span className="text-[10px] tracking-[0.4em] uppercase text-accent-gold mt-1">
          {tagline}
        </span>
      </div>
    </Link>
  );
}
