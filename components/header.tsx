"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "HOME", href: "/" },
    { name: "OUR STORY", href: "/about" },
    { name: "MINISTRIES", href: "/programs" },
    { name: "GIVING", href: "/giving" },
    { name: "CONTACT", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <nav className={cn(
        "w-full max-w-7xl backdrop-blur-xl bg-background/80 border border-white/10 shadow-2xl flex h-20 items-center justify-between px-8 transition-all duration-500",
        "rounded-none" // Staying true to the sharp geometry mandate
      )}>
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative overflow-hidden">
            <img
              src="/Hepzibah_Logo.jpg"
              alt="HGCC Logo"
              className="h-14 w-auto grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
          <div className="hidden lg:block">
            <p className="text-xs font-bold tracking-[0.3em] text-primary">HEPHZIBAH</p>
            <p className="text-[10px] tracking-[0.2em] text-muted-foreground">GLOBAL CHRISTIAN CENTRE</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[11px] font-bold tracking-[0.25em] text-foreground/70 hover:text-primary transition-all duration-300 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/giving"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 text-[11px] font-bold tracking-[0.2em] transition-all duration-300 active:scale-95"
          >
            GIVE NOW
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 text-foreground/70 hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 bg-background/95 backdrop-blur-2xl z-[60] flex flex-col items-center justify-center transition-all duration-700 md:hidden",
        mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      )}>
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-8 right-8 text-foreground/50 hover:text-primary"
        >
          <X className="h-10 w-10 font-thin" />
        </button>
        <div className="flex flex-col gap-8 text-center">
          {navigation.map((item, i) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-2xl font-bold tracking-[0.3em] hover:text-primary transition-all duration-300",
                "font-[family-name:var(--font-playfair)]"
              )}
              onClick={() => setMobileMenuOpen(false)}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/giving"
            className="mt-4 bg-primary text-primary-foreground px-10 py-4 text-sm font-bold tracking-[0.3em]"
            onClick={() => setMobileMenuOpen(false)}
          >
            GIVE NOW
          </Link>
        </div>
      </div>
    </header>
  )
}
