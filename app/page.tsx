"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { ArrowRight, Heart, Users, BookOpen, Sparkles, Quote, Calendar, MapPin, Clock, Landmark, ArrowUpRight, Copy, Check } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const sliderImages = [
  {
    src: "/pastor preaching.JPG",
    alt: "Pastor Preaching the Word of Faith",
    caption: "The Master Key of Faith",
    subCaption:
      "Faith comes by hearing, and hearing by the word of God. Join us as we grow in faith together.",
  },
  {
    src: "/pastor and congregation.jpg",
    alt: "A Family of Believers",
    caption: "A Family of Believers",
    subCaption: "We are a community united in love, dedicated to walking with God and restoring lives.",
  },
  {
    src: "/pastor in praises.jpeg",
    alt: "Worship and Praise",
    caption: "Worship in Spirit & Truth",
    subCaption: "Experience the transformative power of worship in His presence.",
  },
]

export default function HomePage() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))
  const [copiedValue, setCopiedValue] = useState<string | null>(null)

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value)
    setCopiedValue(value)
    setTimeout(() => setCopiedValue(null), 2000)
  }

  return (
    <main>
      {/* Hero Section - The Sacred Pillar */}
      <section className="relative min-h-[95vh] flex flex-col justify-end overflow-hidden pt-32 pb-20">
        {/* Background Canvas */}
        <div className="absolute inset-0 z-0">
          <Carousel
            // @ts-ignore
            plugins={[plugin.current]}
            className="w-full h-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="h-full ml-0">
              {sliderImages.map((image, index) => (
                <CarouselItem key={index} className="h-full pl-0">
                  <div className="w-full h-[100vh] relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover scale-105 animate-[subtle-zoom_20s_infinite_alternate] brightness-[0.7] contrast-[1.1]"
                    />
                    {/* Sacred Luminance Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    <div className="absolute inset-0 bg-black/40" />
                    {/* Warm Gold Tint Layer */}
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Radiant Light Beam */}
          <div className="absolute top-0 right-[10%] w-[1px] h-full bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 blur-[2px] opacity-30" />
        </div>

        {/* Massive Watermark Typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-10 overflow-hidden">
          <h2 className="text-[25vw] font-black leading-none text-white/[0.05] tracking-tighter uppercase whitespace-nowrap animate-slide-right font-sans">
            HEPHZIBAH
          </h2>
        </div>

        {/* Content Layer - Asymmetric Tension */}
        <div className="container mx-auto px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 space-y-10">
              <div className="space-y-4 animate-in fade-in slide-in-from-left-10 duration-1000">
                <div className="flex items-center gap-4">
                  <span className="h-[1px] w-12 bg-primary shadow-[0_0_15px_rgba(var(--primary),0.8)]" />
                  <span className="text-xs font-bold tracking-[0.5em] text-primary uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">ESTD. 2022</span>
                </div>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-[family-name:var(--font-playfair)] text-white leading-[0.9] tracking-tight [text-shadow:0_10px_30px_rgba(0,0,0,0.8),0_4px_8px_rgba(0,0,0,0.9)]">
                  The Word <br />
                  <span className="italic text-primary drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">Made Real.</span>
                </h1>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
                <Link
                  href="/about"
                  className="bg-primary text-primary-foreground px-12 py-5 text-sm font-bold tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all duration-500 shadow-2xl shadow-black/50"
                >
                  DISCOVER OUR STORY
                </Link>
                <Link
                  href="/programs"
                  className="border border-white/40 backdrop-blur-md bg-white/10 px-12 py-5 text-sm font-bold tracking-[0.3em] uppercase text-white hover:bg-white/20 transition-all duration-500 shadow-lg shadow-black/20"
                >
                  OUR MINISTRIES
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <div className="space-y-6 animate-in fade-in slide-in-from-right-10 duration-1000 delay-500">
                <div className="relative group/quote">
                  <p className="text-base md:text-lg font-medium text-white leading-relaxed italic border-r border-primary/60 pr-8 lg:pr-0 lg:border-r-0 lg:border-l lg:pl-8 [text-shadow:0_4px_20px_rgba(0,0,0,1),0_0_40px_rgba(0,0,0,0.5)]">
                    "Making the word of God in our lives real thereby causing nations to come to our righteousness."
                  </p>
                </div>
                <p className="text-[11px] tracking-[0.4em] font-black text-primary uppercase [text-shadow:0_2px_10px_rgba(0,0,0,1)]">ISAIAH 62:2-4</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 group cursor-pointer animate-bounce">
          <span className="text-[10px] tracking-[0.5em] text-white/60 group-hover:text-primary transition-colors uppercase font-bold">SCROLL</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* Vision and Mission Section - The foundation */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="container mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 space-y-6 lg:sticky lg:top-32">
              <h2 className="text-xs font-bold tracking-[0.6em] text-primary uppercase">OUR CORE</h2>
              <h3 className="text-4xl md:text-6xl font-black font-[family-name:var(--font-playfair)] leading-none tracking-tighter">
                WALKING IN <br />
                THE LIGHT.
              </h3>
              <p className="text-base text-muted-foreground font-light leading-relaxed max-w-sm">
                We are a community grounded in the truth of Isaiah 62:2-4, committed to making the Word of God real.
              </p>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-10 border border-border bg-card/50 backdrop-blur-sm space-y-4 hover:border-primary/50 transition-colors duration-500 rounded-none">
                <span className="text-[11px] font-bold tracking-[0.4em] text-primary uppercase">01</span>
                <h4 className="text-3xl font-bold font-[family-name:var(--font-playfair)] tracking-tight">Walking with God</h4>
                <p className="text-base font-light leading-relaxed text-muted-foreground">
                  Building a personal relationship with God, walking daily in His light, and growing in spiritual maturity through the living Word.
                </p>
              </div>
              <div className="p-10 border border-border bg-card/50 backdrop-blur-sm space-y-4 hover:border-primary/50 transition-colors duration-500 rounded-none mt-8 md:mt-16">
                <span className="text-[11px] font-bold tracking-[0.4em] text-primary uppercase">02</span>
                <h4 className="text-3xl font-bold font-[family-name:var(--font-playfair)] tracking-tight">Building Faith</h4>
                <p className="text-base font-light leading-relaxed text-muted-foreground">
                  Teaching the word of God to build strong, unshakable faith in every believer, causing nations to come to our righteousness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries - The Sacred Work */}
      <section className="py-32 bg-foreground text-background relative">
        <div className="container mx-auto px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-4">
              <h2 className="text-xs font-bold tracking-[0.6em] text-primary uppercase">MINISTRIES</h2>
              <h3 className="text-4xl md:text-6xl font-black font-[family-name:var(--font-playfair)] tracking-tighter">OUR SACRED WORK.</h3>
            </div>
            <Link href="/programs" className="group flex items-center gap-3 text-xs font-bold tracking-[0.3em] uppercase hover:text-primary transition-colors">
              VIEW ALL <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              { icon: BookOpen, title: "Bible Study", desc: "Deep dive into the scriptures to understand God's will and apply it to our daily lives." },
              { icon: Sparkles, title: "Discipleship", desc: "Mentoring and guiding believers to becoming mature followers of Christ and leaders." },
              { icon: Users, title: "Outreach", desc: "Extending the love of Christ to our community through evangelism, support, and care." }
            ].map((m, i) => (
              <div key={m.title} className={cn(
                "p-12 border-white/5 space-y-6 hover:bg-white/[0.02] transition-colors duration-700",
                i === 0 ? "border-b md:border-b-0 md:border-r" : i === 1 ? "border-b md:border-b-0 md:border-r" : ""
              )}>
                <div className="w-16 h-16 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <m.icon className="h-6 w-6" />
                </div>
                <h4 className="text-3xl font-bold font-[family-name:var(--font-playfair)] tracking-tight text-white">{m.title}</h4>
                <p className="text-base font-light leading-relaxed text-white/80">{m.desc}</p>
                <Link href="/programs" className="inline-block text-[11px] font-bold tracking-[0.4em] uppercase text-primary hover:text-white transition-colors">LEARN MORE</Link>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Watch Our Services Section - The Digital Gate */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-8 flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3 space-y-8 lg:sticky lg:top-32">
            <h2 className="text-xs font-bold tracking-[0.6em] text-primary uppercase">THE STREAM</h2>
            <h3 className="text-4xl md:text-6xl font-black font-[family-name:var(--font-playfair)] tracking-tighter leading-none">
              EXPERIENCE <br />
              THE RADIANCE.
            </h3>
            <p className="text-base font-light text-muted-foreground leading-relaxed">
              Join our global congregation online. Every word spoken is a seed of righteousness making the Word real.
            </p>
            <div className="pt-6">
              <a
                href="https://youtube.com/@idokoiduidachaba1645"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-xs font-bold tracking-[0.3em] uppercase hover:text-red-600 transition-colors"
              >
                YOUTUBE CHANNEL <ArrowUpRight className="h-4 w-4 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="lg:w-2/3 relative group">
            {/* The "Golden Gate" Frame */}
            <div className="absolute -inset-4 border border-primary/20 pointer-events-none transition-all duration-700 group-hover:-inset-2 opacity-50" />
            <div className="aspect-video w-full bg-foreground relative overflow-hidden z-10 rounded-none border border-white/5">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/videoseries?list=UULFidokoiduidachaba1645"
                title="HGCC Services"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Book Launch - The Printed Pillar */}
      <section className="py-32 bg-[#0a0a0a] text-white relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative group p-4 border border-white/10">
                <img src="/book.jpg" alt="When Your Boat is Filling With Water" className="w-[300px] shadow-2xl transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-0 right-0 h-full w-[1px] bg-primary/30" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary/30" />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-10 order-1 lg:order-2">
              <div className="space-y-4">
                <span className="text-[10px] font-bold tracking-[0.6em] text-primary uppercase">SACRED WISDOM</span>
                <h2 className="text-4xl md:text-6xl font-black font-[family-name:var(--font-playfair)] leading-[0.9] tracking-tighter">
                  WHEN YOUR BOAT <br /> IS FILLING.
                </h2>
              </div>

              <div className="space-y-6 text-base md:text-lg font-light text-white/90 leading-relaxed max-w-xl italic">
                <p>
                  "Faith is the master key to living above the storms of life. I defined faith and how it can be built in the life of the believer... I also mentioned the enemies of faith and how to walk with God."
                </p>
                <div className="pt-6 border-l-2 border-primary pl-8">
                  <p className="text-white font-bold tracking-[0.1em] text-[11px] uppercase opacity-90 mb-2">Forwarded by</p>
                  <p className="text-3xl font-[family-name:var(--font-playfair)] text-white">Bishop Thomas Aremu</p>
                </div>
              </div>

              <p className="text-[10px] tracking-[0.3em] font-bold text-primary uppercase">OFFICIAL RELEASE / DEC 31ST</p>
            </div>
          </div>
        </div>
      </section>

      {/* Giving - Support the Vision */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row shadow-none overflow-hidden border border-border rounded-none">
            <div className="lg:w-1/2 p-12 lg:p-20 bg-foreground text-background space-y-12">
              <div className="space-y-4">
                <h2 className="text-[11px] font-bold tracking-[0.6em] text-primary uppercase">PARTNERSHIP</h2>
                <h3 className="text-4xl md:text-6xl font-black font-[family-name:var(--font-playfair)] leading-none tracking-tighter">
                  SUPPORT <br /> THE VISION.
                </h3>
              </div>
              <p className="text-base font-light leading-relaxed opacity-70 max-w-sm">
                Join us in spreading the gospel and making an impact. Your generosity fuels the mission to draw nations to righteousness.
              </p>
              <Link
                href="/giving"
                className="inline-block bg-primary text-primary-foreground px-12 py-5 text-sm font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-500 rounded-none shadow-xl shadow-primary/20"
              >
                VIEW GIVING OPTIONS
              </Link>
            </div>

            <div className="lg:w-1/2 p-12 lg:p-20 space-y-12 bg-card">
              <h3 className="text-xs font-bold tracking-[0.6em] text-foreground uppercase border-b border-border pb-4">DIRECT TRANSFER</h3>
              <div className="space-y-8">
                <div className="group">
                  <p className="text-[11px] tracking-[0.4em] font-bold text-primary uppercase mb-1">BANK</p>
                  <p className="text-4xl font-black font-[family-name:var(--font-playfair)] tracking-tight">UBA</p>
                </div>
                <div className="group flex justify-between items-end relative z-20">
                  <div className="relative">
                    <p className="text-[11px] tracking-[0.4em] font-bold text-primary uppercase mb-1">ACCOUNT NUMBER</p>
                    <p className="text-5xl font-black font-[family-name:var(--font-playfair)] tracking-widest text-foreground relative z-10">1025194880</p>
                  </div>
                  <button
                    onClick={() => handleCopy("1025194880")}
                    className="flex items-center gap-2 text-[12px] font-black tracking-[0.2em] text-primary uppercase hover:text-foreground transition-all duration-300 group/copy pb-2 relative z-30 cursor-pointer hover:scale-105"
                  >
                    {copiedValue === "1025194880" ? (
                      <>
                        <Check className="h-4 w-4" />
                        <span className="drop-shadow-sm">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 group-hover/copy:scale-110 transition-transform" />
                        <span className="drop-shadow-sm">COPY</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="group">
                  <p className="text-[11px] tracking-[0.4em] font-bold text-primary uppercase mb-1">ACCOUNT NAME</p>
                  <p className="text-base font-bold tracking-widest uppercase text-foreground">Hephzibah Global Christian Center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call - The Sacred Delight */}
      <section className="relative py-48 bg-cover bg-center bg-fixed group" style={{ backgroundImage: "url('/pastor&wife.jpeg')" }}>
        <div className="absolute inset-0 bg-[#050505]/70 backdrop-blur-[2px] transition-all duration-1000 group-hover:backdrop-blur-none" />
        <div className="container mx-auto px-8 text-center relative z-10 space-y-12">
          <div className="space-y-4">
            <span className="text-[10px] font-bold tracking-[1em] text-primary uppercase block animate-pulse">EXODUS</span>
            <h2 className="text-5xl md:text-8xl lg:text-9xl font-black font-[family-name:var(--font-playfair)] text-white tracking-tighter leading-none">
              YOU ARE <br />
              GOD'S <span className="italic text-primary">DELIGHT.</span>
            </h2>
          </div>
          <p className="text-base md:text-lg font-light text-white/90 tracking-widest uppercase max-w-lg mx-auto leading-loose border-y border-white/10 py-6">
            JOIN US AS WE WALK TOGETHER IN FAITH TOWARDS THE BRIGHTNESS OF OUR RISING.
          </p>
          <div className="pt-8 flex justify-center flex-col sm:flex-row gap-6">
            <Link
              href="/contact"
              className="bg-primary hover:bg-white text-primary-foreground hover:text-black px-12 py-5 text-xs font-bold tracking-[0.4em] transition-all duration-500 rounded-none shadow-2xl"
            >
              CONNECT WITH US
            </Link>
            <Link
              href="/about"
              className="border border-white/30 text-white hover:bg-white/10 px-12 py-5 text-xs font-bold tracking-[0.4em] backdrop-blur-sm transition-all duration-500 rounded-none"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
