"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Quienes somos", href: "/#nosotros" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Casos de exito", href: "/#casos" },
  { label: "Contacto", href: "/#contacto" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="section-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-16 w-16 overflow-hidden rounded-full border border-slate-200 bg-white">
            <img
              src="/assets/logo.jpeg"
              alt="Marin Industries Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="font-bold leading-none text-brandDark">Marin Industries</p>
            <span className="text-xs text-slate-500">Tecnologia para negocios locales</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-brandAccent">
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="text-brandDark md:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <span className="block h-0.5 w-7 bg-current" />
          <span className="mt-1.5 block h-0.5 w-7 bg-current" />
          <span className="mt-1.5 block h-0.5 w-7 bg-current" />
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4 text-sm font-medium">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
