"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-white/82 shadow-[0_16px_50px_-40px_rgba(28,28,28,0.65)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="section-grid flex h-20 items-center justify-between gap-6">
        <a
          href="#top"
          className="font-display text-[clamp(1.75rem,3vw,2.3rem)] font-semibold tracking-[0.03em] text-foreground"
        >
          {siteContent.brand.professionalName}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {siteContent.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button asChild className="hidden md:inline-flex">
          <a
            href={siteContent.contact.whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            Agendar sessão
          </a>
        </Button>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <button
              type="button"
              aria-label="Abrir menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-white/80 text-foreground shadow-card backdrop-blur-sm"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col">
            <SheetHeader className="mt-8">
              <SheetTitle>{siteContent.brand.professionalName}</SheetTitle>
              <SheetDescription>
                Atendimento psicológico com escuta ativa e sensível em Franca e
                toda a região.
              </SheetDescription>
            </SheetHeader>

            <div className="mt-10 flex flex-1 flex-col gap-3">
              {siteContent.navigation.map((item) => (
                <SheetClose asChild key={item.href}>
                  <a
                    href={item.href}
                    className="flex items-center justify-between rounded-[22px] border border-border/70 bg-white px-5 py-4 text-base font-medium text-foreground"
                  >
                    {item.label}
                    <ArrowUpRight className="h-4 w-4 text-accent" />
                  </a>
                </SheetClose>
              ))}
            </div>

            <Button asChild size="lg" className="mt-8">
              <a
                href={siteContent.contact.whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                Agendar sessão
              </a>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
