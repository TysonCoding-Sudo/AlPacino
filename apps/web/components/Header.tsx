"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, Menu, X, HardHat, Wifi } from "lucide-react";
import { company } from "@al-pacino/shared";

const nav = [
  { href: "/", label: "Home" },
  { href: "/construction", label: "Construction", icon: HardHat },
  { href: "/it", label: "ICT Solutions", icon: Wifi },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-white/85 backdrop-blur-md">
      <div className="container-site flex h-16 items-center justify-between gap-6">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center bg-stone-900 font-construction text-lg font-semibold tracking-wide text-white">
            AP
          </span>
          <span className="leading-tight">
            <span className="block font-construction text-[1.05rem] font-semibold uppercase tracking-wide text-stone-900">
              {company.shortName}
            </span>
            <span className="block text-[0.68rem] font-medium uppercase tracking-widest text-stone-500">
              Construction · ICT
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-stone-900 text-white"
                    : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                }`}
              >
                {Icon && <Icon className="h-4 w-4" />}
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/quote"
            className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-stone-700"
          >
            Request a quote
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-stone-700 hover:bg-stone-100 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-stone-200 bg-white md:hidden">
          <nav className="container-site flex flex-col gap-1 py-4">
            {nav.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-100"
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/quote"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center gap-3 rounded-lg bg-stone-900 px-3 py-2.5 text-sm font-semibold text-white"
            >
              <LayoutGrid className="h-4 w-4" />
              Request a quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}