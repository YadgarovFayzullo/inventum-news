"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  MagnifyingGlass,
  List,
  X,
  Flask,
} from "@phosphor-icons/react";

const navLinks = [
  { label: "Главная", href: "/" },
  { label: "Все статьи", href: "/articles" },
  { label: "Категории", href: "/#categories" },
  { label: "О нас", href: "/#about" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-primary/10 py-2" 
          : "bg-background py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all group-hover:scale-110 group-hover:rotate-3">
            <Flask size={22} weight="duotone" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight leading-none text-primary">
              INVENTUM
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase mt-0.5">
              Science Press
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex bg-secondary/50 p-1.5 rounded-2xl border border-primary/5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-xl px-5 py-2 text-sm font-semibold text-muted-foreground transition-all hover:text-primary hover:bg-background"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="icon" className="rounded-2xl hover:bg-primary/10 hover:text-primary">
            <MagnifyingGlass size={20} weight="bold" />
          </Button>
          <Button className="rounded-2xl px-6 font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95">
            Подписка
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="rounded-2xl md:hidden border border-primary/10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={22} weight="bold" />
          ) : (
            <List size={22} weight="bold" />
          )}
        </Button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-2xl border-b border-primary/10 px-6 pb-8 pt-4 md:hidden animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-2xl px-5 py-4 text-base font-bold text-muted-foreground transition-colors hover:bg-primary/5 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
