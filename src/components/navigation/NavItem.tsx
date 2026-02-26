"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NavDropdown from "./NavDropdown";

interface NavChild {
  id: string;
  label: string;
  slug: string;
}

interface NavItemProps {
  label: string;
  slug: string;
  sectionTitle?: string;
  children?: NavChild[];
}

export default function NavItem({ label, slug, sectionTitle, children }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === slug || pathname.startsWith(slug + "/");
  const hasChildren = children && children.length > 0;

  return (
    <div className="relative group">
      <Link
        href={slug}
        className={`block px-4 py-3 text-xs tracking-widest uppercase transition-colors duration-200 ${
          isActive ? "text-accent" : "text-secondary hover:text-foreground"
        }`}
      >
        {label}
      </Link>
      {hasChildren && (
        <NavDropdown
          sectionTitle={sectionTitle}
          sectionSlug={slug}
          items={children}
        />
      )}
    </div>
  );
}
