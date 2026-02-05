"use client"

import Link from "next/link"
import { Menu, X, ArrowRight } from "lucide-react"
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
        "w-full max-w-7xl bg-white border border-black/5 shadow-xl flex h-20 items-center justify-between px-8 transition-all duration-500",
        "rounded-none"
      )}>
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative overflow-hidden">
            <img
              src="/Hepzibah_Logo.jpg"
              alt="HGCC Logo"
              className="h-14 w-auto transition-all duration-700"
            />
          </div>
          <div className="hidden lg:block">
            <p className="text-sm font-bold tracking-[0.3em] text-primary">HEPHZIBAH</p>
            <p className="text-[11px] tracking-[0.2em] text-slate-500">GLOBAL CHRISTIAN CENTRE</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs font-bold tracking-[0.25em] text-slate-800 hover:text-primary transition-all duration-300 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/giving"
            className="bg-primary hover:bg-black text-primary-foreground px-6 py-2 text-xs font-bold tracking-[0.2em] transition-all duration-300 active:scale-95"
          >
            GIVE NOW
          </Link>
        </div>

        <button
          type="button"
          className={cn(
            "md:hidden p-2 transition-colors z-[70]",
            mobileMenuOpen ? "text-white" : "text-slate-800 hover:text-primary"
          )}
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

      {/* Mobile Navigation Drawer */}
      <div className={cn(
        "fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-500 md:hidden",
        mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )} onClick={() => setMobileMenuOpen(false)}>
        <div
          className={cn(
            "fixed top-0 right-0 h-full w-[85%] bg-[#0a0a0a] border-l border-white/10 p-12 transition-transform duration-500 ease-out flex flex-col justify-between",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="space-y-12">
            <div className="space-y-2 pb-8 border-b border-white/5">
              <p className="text-[10px] font-bold tracking-[0.5em] text-primary uppercase">HEPHZIBAH</p>
              <p className="text-[8px] tracking-[0.2em] text-muted-foreground uppercase">Global Christian Centre</p>
            </div>

            <nav className="flex flex-col gap-6">
              {navigation.map((item, i) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-3xl font-black tracking-tight text-white hover:text-primary transition-all duration-300 flex items-center justify-between group",
                    "font-[family-name:var(--font-playfair)]"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="group-hover:italic group-hover:translate-x-2 transition-all duration-300">{item.name}</span>
                  <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-8">
            <Link
              href="/giving"
              className="w-full bg-primary text-primary-foreground py-6 text-xs font-bold tracking-[0.4em] uppercase text-center block"
              onClick={() => setMobileMenuOpen(false)}
            >
              GIVE NOW
            </Link>
            <p className="text-[8px] tracking-[0.4em] text-white/20 uppercase text-center">Walking in the Light since 2022</p>
          </div>
        </div>
      </div>
    </header>
  )
}
