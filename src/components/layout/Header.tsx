import NavLogo from "@/src/components/navigation/NavLogo";
import NavBar from "@/src/components/navigation/NavBar";

interface NavChild {
  id: string;
  label: string;
  slug: string;
}

interface NavItemData {
  id: string;
  label: string;
  slug: string;
  sectionTitle?: string;
  children: NavChild[];
}

interface HeaderProps {
  logo: {
    src: string;
    alt: string;
    href: string;
    title: string;
    tagline: string;
  };
  nav: NavItemData[];
}

export default function Header({ logo, nav }: HeaderProps) {
  return (
    <header className="relative z-40 bg-background border-b border-border">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Logo + mobile toggle row */}
        <div className="flex items-center justify-between py-4 sm:py-5 md:py-6">
          <NavLogo
            src={logo.src}
            alt={logo.alt}
            href={logo.href}
            title={logo.title}
            tagline={logo.tagline}
          />
          {/* Mobile toggle rendered inside NavBar */}
          <div className="lg:hidden">
            <NavBar items={nav} mobileOnly />
          </div>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:block">
          <NavBar items={nav} />
        </div>
      </div>
    </header>
  );
}
