"use client";

import { useState } from "react";
import NavItem from "./NavItem";

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

interface NavBarProps {
  items: NavItemData[];
}

export default function NavBar({ items }: NavBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden flex flex-col gap-1.5 p-2"
        aria-label="Menu"
      >
        <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Desktop nav */}
      <nav className="hidden lg:flex items-center justify-center">
        {items.map((item) => (
          <NavItem
            key={item.id}
            label={item.label}
            slug={item.slug}
            sectionTitle={item.sectionTitle}
            children={item.children.length > 0 ? item.children : undefined}
          />
        ))}
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden absolute top-full left-0 right-0 bg-surface border-t border-border py-4 px-6 z-50">
          {items.map((item) => (
            <div key={item.id}>
              <NavItem label={item.label} slug={item.slug} />
              {item.children.length > 0 && (
                <div className="pl-4">
                  {item.children.map((child) => (
                    <NavItem key={child.id} label={child.label} slug={child.slug} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      )}
    </>
  );
}
