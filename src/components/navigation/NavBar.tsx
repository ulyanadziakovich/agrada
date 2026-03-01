"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  const openMenu = () => {
    setMobileOpen(true);
    requestAnimationFrame(() => setVisible(true));
  };

  const closeMenu = () => {
    setVisible(false);
    setTimeout(() => setMobileOpen(false), 300);
  };

  // Close on route change
  useEffect(() => {
    closeMenu();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  if (mobileOnly) {
    return (
      <>
        {/* Hamburger */}
        <button
          onClick={openMenu}
          className="flex flex-col justify-center gap-[5px] w-10 h-10 items-center"
          aria-label="Otwórz menu"
        >
          <span className="block w-6 h-px bg-foreground" />
          <span className="block w-4 h-px bg-foreground self-end" />
          <span className="block w-6 h-px bg-foreground" />
        </button>

        {/* Overlay */}
        {mobileOpen && (
          <div
            className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm transition-opacity duration-300"
            style={{ opacity: visible ? 1 : 0 }}
            onClick={() => setMobileOpen(false)}
          />
        )}

        {/* Drawer */}
        {mobileOpen && (
          <aside
            className="fixed top-0 right-0 bottom-0 z-50 w-[min(340px,100vw)] bg-surface flex flex-col transition-transform duration-300 ease-out"
            style={{ transform: visible ? "translateX(0)" : "translateX(100%)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-wider text-foreground">AGRADA</span>
                <span className="text-[8px] tracking-[0.3em] uppercase text-accent-gold mt-0.5">
                  Teatr w Drodze
                </span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Zamknij menu"
                className="w-8 h-8 flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <line x1="1" y1="1" x2="15" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="15" y1="1" x2="1" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Nav items */}
            <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
              {items.map((item) => {
                const isActive = pathname === item.slug || pathname.startsWith(item.slug + "/");
                return (
                  <div key={item.id}>
                    <Link
                      href={item.slug}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-2.5 text-[11px] tracking-[0.25em] uppercase font-medium transition-colors duration-200 ${
                        isActive ? "text-accent-gold" : "text-foreground hover:text-accent-gold"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.children.length > 0 && (
                      <ul className="mb-2 space-y-0.5">
                        {item.children.map((child) => {
                          const childActive = pathname === child.slug;
                          return (
                            <li key={child.id}>
                              <Link
                                href={child.slug}
                                onClick={() => setMobileOpen(false)}
                                className={`flex items-center gap-2.5 py-1.5 pl-3 text-[11px] transition-colors duration-200 ${
                                  childActive
                                    ? "text-foreground"
                                    : "text-foreground/50 hover:text-foreground/80"
                                }`}
                              >
                                <span className={`shrink-0 w-3 h-px ${childActive ? "bg-accent-gold" : "bg-border"}`} />
                                {child.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Footer */}
            <div className="px-6 py-5 border-t border-border">
              <a
                href="mailto:agradaart@gmail.com"
                className="text-[10px] tracking-wide text-foreground/40 hover:text-foreground/70 transition-colors"
              >
                agradaart@gmail.com
              </a>
            </div>
          </aside>
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
