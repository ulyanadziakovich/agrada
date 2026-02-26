import Link from "next/link";

interface NavDropdownItem {
  label: string;
  slug: string;
}

interface NavDropdownProps {
  sectionTitle?: string;
  sectionSlug: string;
  items: NavDropdownItem[];
}

export default function NavDropdown({ sectionTitle, sectionSlug, items }: NavDropdownProps) {
  return (
    <div className="absolute top-full left-0 min-w-48 bg-surface border border-border py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
      {[
        ...(sectionTitle ? [{ label: sectionTitle, slug: sectionSlug }] : []),
        ...items,
      ].map((item) => (
        <Link
          key={item.slug}
          href={item.slug}
          className="block px-4 py-2 text-xs tracking-widest uppercase text-secondary hover:text-foreground hover:bg-border transition-colors duration-150"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
