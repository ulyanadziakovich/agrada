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
  mobileOnly?: boolean;
}

export default function NavBar({ items, mobileOnly = false }: NavBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  if (mobileOnly) {
    return (
      <>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {mobileOpen && (
          <nav className="fixed top-0 left-0 right-0 bottom-0 bg-background/95 backdrop-blur-sm z-50 overflow-y-auto pt-20 px-6 pb-8">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-5 p-2 text-white"
              aria-label="Zamknij menu"
            >
              <span className="block w-6 h-0.5 bg-white rotate-45 translate-y-0.5" />
              <span className="block w-6 h-0.5 bg-white -rotate-45 -translate-y-0" />
            </button>

            {items.map((item) => (
              <div key={item.id} className="border-b border-border/50 last:border-0">
                <NavItem label={item.label} slug={item.slug} />
                {item.children.length > 0 && (
                  <div className="pl-4 pb-2">
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

  return (
    <nav className="flex items-center justify-center flex-wrap">
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
  );
}
