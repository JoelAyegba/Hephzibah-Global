"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Coins, Landmark, Calendar, Send, MessageSquare, ArrowDown, ArrowUpRight, Copy, Check } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useState } from "react"

const givingMethods = [
    {
        icon: Landmark,
        title: "Bank Transfer",
        description: "Secure and direct transfer to our church account.",
        details: [
            { label: "Bank Name", value: "UBA" },
            { label: "Account Name", value: "Hephzibah Global Christian Center" },
            { label: "Account Number", value: "1025194880", canCopy: true },
        ],
    },
    {
        icon: Coins,
        title: "Tithe & Offerings",
        description: "Honoring God with our substance and the firstfruits of our increase.",
        details: [
            { label: "Proverbs 3:9-10", value: "Honor the LORD with your wealth and with the firstfruits of all your produce." },
        ],
    },
    {
        icon: Calendar,
        title: "Pledges & Projects",
        description: "Supporting specific church projects and missionary work.",
        details: [
            { label: "Missionary Fund", value: "For community outreach programs" },
            { label: "Building Fund", value: "For church facility development" },
        ],
    },
]

export default function GivingPage() {
    const [copiedValue, setCopiedValue] = useState<string | null>(null);

    const handleCopy = (value: string) => {
        navigator.clipboard.writeText(value);
        setCopiedValue(value);
        setTimeout(() => setCopiedValue(null), 2000);
    };

    return (
        <main className="bg-background">
            {/* Hero Section - The Sacrificial Pillar */}
            <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden pt-40 pb-20">
                {/* Background Canvas */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/pastor and congregation.jpg"
                        alt="Giving at HGCC"
                        className="w-full h-full object-cover scale-105 animate-[subtle-zoom_20s_infinite_alternate] brightness-[0.7] contrast-[1.1]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Radiant Light Beam */}
                    <div className="absolute top-0 right-[20%] w-[1px] h-full bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 blur-[1px] opacity-20" />
                </div>

                {/* Massive Watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-10 overflow-hidden">
                    <h2 className="text-[20vw] font-black leading-none text-white/[0.04] tracking-tighter uppercase whitespace-nowrap font-sans animate-slide-right">
                        SACRIFICE
                    </h2>
                </div>

                <div className="container mx-auto px-8 relative z-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                        <div className="lg:col-span-8 space-y-10 animate-in fade-in slide-in-from-left-10 duration-1000">
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <span className="h-[1px] w-12 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                                    <span className="text-xs font-bold tracking-[0.5em] text-primary uppercase drop-shadow-sm">HONORING GOD</span>
                                </div>
                                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-[family-name:var(--font-playfair)] text-white leading-[0.9] tracking-tight [text-shadow:0_10px_30px_rgba(0,0,0,0.8)]">
                                    Giving & <br />
                                    <span className="italic text-primary drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">Support.</span>
                                </h1>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <button
                                    onClick={() => {
                                        const el = document.getElementById('giving-methods');
                                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="bg-primary text-primary-foreground px-12 py-5 text-xs font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-500 rounded-none shadow-2xl shadow-primary/20"
                                >
                                    GIVE NOW
                                </button>
                            </div>
                        </div>

                        <div className="lg:col-span-4 lg:text-right animate-in fade-in slide-in-from-right-10 duration-1000 delay-300">
                            <div className="space-y-6">
                                <p className="text-base md:text-lg font-medium text-white leading-relaxed italic border-l lg:border-l-0 lg:border-r border-primary/60 pl-8 lg:pl-0 lg:pr-8 [text-shadow:0_4px_20px_rgba(0,0,0,1),0_0_40px_rgba(0,0,0,0.5)]">
                                    "Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver."
                                </p>
                                <p className="text-[11px] tracking-[0.4em] font-black text-primary uppercase [text-shadow:0_2px_10px_rgba(0,0,0,1)]">2 CORINTHIANS 9:7</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Giving Options - The Grid of Honor */}
            <section id="giving-methods" className="py-32 relative bg-background overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

                <div className="container mx-auto px-8 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                        <div className="space-y-4">
                            <h2 className="text-xs font-bold tracking-[0.6em] text-primary uppercase">CHANNELS</h2>
                            <h3 className="text-4xl md:text-6xl font-black font-[family-name:var(--font-playfair)] tracking-tighter uppercase">WAYS TO GIVE.</h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 border border-border animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
                        {givingMethods.map((method, i) => (
                            <div key={method.title} className={cn(
                                "p-12 space-y-8 group hover:bg-foreground/[0.02] transition-colors duration-700 relative",
                                i < 2 ? "border-b md:border-b-0 md:border-r border-border" : ""
                            )}>
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                                <div className="w-16 h-16 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                                    <method.icon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-3xl font-bold font-[family-name:var(--font-playfair)] tracking-tight">{method.title}</h4>
                                    <p className="text-base font-light leading-relaxed text-muted-foreground">{method.description}</p>
                                </div>
                                <div className="space-y-4">
                                    {method.details.map((detail: any, idx) => (
                                        <div key={idx} className="border-l border-primary/20 pl-6 space-y-1 group-hover:border-primary transition-colors flex justify-between items-end">
                                            <div>
                                                <p className="text-[11px] font-bold tracking-widest text-primary uppercase">{detail.label}</p>
                                                <p className="text-base font-bold tracking-tight text-foreground">{detail.value}</p>
                                            </div>
                                            {detail.canCopy && (
                                                <button
                                                    onClick={() => handleCopy(detail.value)}
                                                    className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-primary uppercase hover:text-foreground transition-colors group/copy pb-1"
                                                >
                                                    {copiedValue === detail.value ? (
                                                        <>
                                                            <Check className="h-3 w-3" />
                                                            <span>COPIED</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Copy className="h-3 w-3 group-hover/copy:scale-110 transition-transform" />
                                                            <span>COPY</span>
                                                        </>
                                                    )}
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact - The Fruit of Luminosity */}
            <section className="py-40 bg-[#050505] text-background relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                <div className="absolute top-0 left-0 w-full h-full bg-primary/2 opacity-20" />

                <div className="container mx-auto px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-4 space-y-6 animate-in fade-in slide-in-from-left-10 duration-1000">
                            <h2 className="text-[11px] font-bold tracking-[0.6em] text-primary uppercase">OUTCOME</h2>
                            <h3 className="text-4xl md:text-5xl font-black font-[family-name:var(--font-playfair)] tracking-tighter leading-none text-white">
                                YOUR <br /> IMPACT.
                            </h3>
                            <p className="text-base font-light leading-relaxed text-white/80">
                                Your generosity is the fuel that causes nations to come to our righteousness.
                            </p>
                        </div>

                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-12 border border-white/10 space-y-6 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 group">
                                <h4 className="text-3xl font-bold font-[family-name:var(--font-playfair)] tracking-tight text-white group-hover:text-primary transition-colors">Community</h4>
                                <p className="text-base font-light leading-relaxed text-white/70 group-hover:text-white/90 transition-colors">Providing food, clothing, and essential support to families in need across Lugbe and beyond.</p>
                                <div className="h-[1px] w-12 bg-primary group-hover:w-full transition-all duration-700" />
                            </div>
                            <div className="p-12 border border-white/10 space-y-6 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 group md:mt-12">
                                <h4 className="text-3xl font-bold font-[family-name:var(--font-playfair)] tracking-tight text-white group-hover:text-primary transition-colors">Spiritual</h4>
                                <p className="text-base font-light leading-relaxed text-white/70 group-hover:text-white/90 transition-colors">Supporting gospel outreaches and spiritual development programs that draw souls to Christ.</p>
                                <div className="h-[1px] w-12 bg-primary group-hover:w-full transition-all duration-700" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Assistance - The Support Bridge */}
            <section className="py-40 bg-background relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary/20 via-primary/5 to-transparent" />

                <div className="container mx-auto px-8">
                    <div className="max-w-4xl mx-auto border border-border p-16 lg:p-24 text-center space-y-12 relative overflow-hidden group bg-white/[0.01]">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                            <h2 className="text-[11px] font-bold tracking-[0.5em] text-primary uppercase">QUESTIONS?</h2>
                            <h3 className="text-4xl md:text-6xl font-black font-[family-name:var(--font-playfair)] tracking-tighter uppercase leading-none">NEED <br /> ASSISTANCE.</h3>
                        </div>
                        <p className="text-base font-light leading-relaxed text-muted-foreground max-w-lg mx-auto">
                            If you have questions about giving, partnerships, or special donations, our finance team is here to guide you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                            <a
                                href="mailto:hgccww@gmail.com"
                                className="flex items-center justify-center gap-3 bg-foreground text-background px-10 py-5 text-sm font-bold tracking-[0.4em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500 rounded-none shadow-xl"
                            >
                                <Send className="h-4 w-4" /> EMAIL US
                            </a>
                            <a
                                href="tel:09138522984"
                                className="flex items-center justify-center gap-3 border border-border px-10 py-5 text-sm font-bold tracking-[0.4em] uppercase hover:bg-foreground hover:text-background transition-all duration-500 rounded-none shadow-xl"
                            >
                                <MessageSquare className="h-4 w-4" /> CALL FINANCE
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
