import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookOpen, Sparkles, Users, Mic, Heart, HandHelping, ArrowRight, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export const metadata = {
  title: "Our Ministries - Hephzibah Global Christian Centre",
  description: "Explore the ministries at Hephzibah Global Christian Centre. From discipleship to outreach, there is a place for everyone to serve and grow.",
  openGraph: {
    title: "Our Ministries - Hephzibah Global Christian Centre",
    description: "Explore the ministries at Hephzibah Global Christian Centre. From discipleship to outreach, there is a place for everyone to serve and grow.",
    image: "/choir ministration.jpg",
  },
}

export default function MinistriesPage() {
  return (
    <main className="bg-background">
      {/* Hero Section - The Service Pillar */}
      <section className="relative min-h-[85vh] flex flex-col justify-end overflow-hidden pt-40 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/choir ministration.jpg"
            alt="Church Ministries"
            className="w-full h-full object-cover scale-105 animate-[subtle-zoom_20s_infinite_alternate] brightness-[0.7] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-black/40" />

          {/* Radiant Light Beam */}
          <div className="absolute top-0 right-[15%] w-[1px] h-full bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0 blur-[1px] opacity-20" />
        </div>

        {/* Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-10 overflow-hidden">
          <h2 className="text-[25vw] font-black leading-none text-white/[0.04] tracking-tighter uppercase whitespace-nowrap font-sans animate-slide-right">
            SERVICE
          </h2>
        </div>

        <div className="container mx-auto px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 space-y-10 animate-in fade-in slide-in-from-left-10 duration-1000">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="h-[1px] w-12 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                  <span className="text-xs font-bold tracking-[0.5em] text-primary uppercase drop-shadow-sm">KINGDOM MANDATE</span>
                </div>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-[family-name:var(--font-playfair)] text-white leading-[0.9] tracking-tight [text-shadow:0_10px_30px_rgba(0,0,0,0.8)]">
                  Our <br />
                  <span className="italic text-primary drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">Ministries.</span>
                </h1>
              </div>
              <p className="text-[10px] tracking-[0.4em] font-bold text-white/90 uppercase max-w-sm drop-shadow-sm">
                Discover where you can serve, grow, and make an impact in the body of Christ.
              </p>
            </div>

            <div className="lg:col-span-4 grid grid-cols-2 gap-px bg-white/10 border border-white/5 animate-in fade-in slide-in-from-right-10 duration-1000 delay-300">
              <div className="p-8 bg-black/40 backdrop-blur-md hover:bg-black/60 transition-colors group cursor-default">
                <BookOpen className="h-6 w-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-[10px] font-bold tracking-widest text-white uppercase">Discipleship</p>
              </div>
              <div className="p-8 bg-black/40 backdrop-blur-md hover:bg-black/60 transition-colors group cursor-default">
                <Users className="h-6 w-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-[10px] font-bold tracking-widest text-white uppercase">Evangelism</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discipleship Section - The Foundation */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-1/2 relative group">
              <div className="absolute -inset-4 border border-primary/20 pointer-events-none group-hover:-inset-2 transition-all duration-700" />
              <img
                src="/pastor preaching.JPG"
                alt="Bible Study"
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
            </div>

            <div className="lg:w-1/2 space-y-12 animate-in fade-in slide-in-from-right-10 duration-1000">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="h-[1px] w-8 bg-primary/40" />
                  <span className="text-[10px] font-bold tracking-[0.6em] text-primary uppercase">FOUNDATION</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black font-[family-name:var(--font-playfair)] tracking-tighter leading-none">
                  DISCIPLESHIP <br /> & EDUCATION.
                </h2>
              </div>

              <p className="text-sm font-light text-muted-foreground leading-relaxed max-w-xl">
                We believe in grounding believers in the truth of God's word. Our discipleship ministry is dedicated to raising mature Christians who know their God.
              </p>

              <Accordion type="single" collapsible className="w-full">
                {[
                  { title: "Believers' Foundation Class", content: "Understanding the basics of the Christian faith and our church culture." },
                  { title: "Weekly Bible Study", content: "In-depth study of the scriptures, exploring the mysteries of the Kingdom." },
                  { title: "Leadership Academy", content: "Equipping the next generation of spiritual leaders for effective ministry." }
                ].map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-border rounded-none">
                    <AccordionTrigger className="text-sm font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors py-6 text-left">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-base font-light leading-relaxed text-muted-foreground pb-6">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Outreach Section - The Extension */}
      <section className="py-32 bg-[#050505] text-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />

        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-1 border-l border-primary/20 hidden lg:block h-32" />
            <div className="lg:col-span-5 space-y-8 animate-in fade-in slide-in-from-left-10 duration-1000">
              <div className="space-y-4">
                <span className="text-[11px] font-bold tracking-[0.6em] text-primary uppercase">OUTREACH</span>
                <h2 className="text-4xl md:text-6xl font-black font-[family-name:var(--font-playfair)] tracking-tighter text-white">
                  PASTOR & <br /> FIRST TIMERS.
                </h2>
              </div>
              <p className="text-base font-light text-white/80 leading-relaxed italic border-l border-primary/30 pl-6">
                "We are passionate about fulfilling the Great Commission. Our outreach team is committed to taking the love of Christ to the streets."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                <div className="space-y-3 group cursor-default">
                  <Heart className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <h4 className="text-[10px] font-bold tracking-widest text-white uppercase">Hospital Visitation</h4>
                </div>
                <div className="space-y-3 group cursor-default">
                  <Users className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <h4 className="text-[10px] font-bold tracking-widest text-white uppercase">Street Evangelism</h4>
                </div>
              </div>
              <div className="pt-8">
                <Link
                  href="/giving"
                  className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.5em] uppercase text-primary hover:text-white transition-all duration-300 group"
                >
                  SUPPORT THE MISSION <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative group lg:translate-x-12">
              <div className="absolute -inset-4 border border-white/5 pointer-events-none group-hover:-inset-2 transition-all duration-700" />
              <img
                src="/pastor and first timers.jpeg"
                alt="Community Outreach"
                className="w-full h-auto grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Worship Section - The Sound of Heaven */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        <div className="container mx-auto px-8 flex flex-col items-center">
          <div className="text-center mb-20 space-y-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <h2 className="text-xs font-bold tracking-[0.6em] text-primary uppercase">SOUND</h2>
            <h3 className="text-5xl md:text-7xl font-black font-[family-name:var(--font-playfair)] tracking-tighter">WORSHIP & ARTS.</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border border border-border max-w-6xl w-full hover:border-primary/20 transition-colors">
            <div className="bg-background p-16 space-y-6 group hover:bg-foreground/[0.02] transition-colors relative">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              <Mic className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              <h4 className="text-3xl font-bold font-[family-name:var(--font-playfair)] tracking-tight">The Choir</h4>
              <p className="text-base font-light leading-relaxed text-muted-foreground">
                A dedicated team of worshipers who lead the congregation in high praise and deep worship every service.
              </p>
            </div>
            <div className="bg-background p-16 space-y-6 group hover:bg-foreground/[0.02] transition-colors relative">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              <Sparkles className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              <h4 className="text-3xl font-bold font-[family-name:var(--font-playfair)] tracking-tight">Instrumentalists</h4>
              <p className="text-base font-light leading-relaxed text-muted-foreground">
                Skilled musicians who use their talents to create an atmosphere for miracles and glorify God.
              </p>
            </div>
          </div>

          <div className="mt-20 w-full max-w-6xl relative group overflow-hidden">
            <div className="absolute -inset-4 border border-primary/20 pointer-events-none group-hover:-inset-2 transition-all duration-700 z-10" />
            <img
              src="/choir ministration.jpg"
              alt="Worship Team"
              className="w-full h-[600px] object-cover grayscale brightness-40 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
          </div>
        </div>
      </section>

      {/* Final CTA - Join the Body */}
      <section className="py-48 bg-[#0a0a0a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 opacity-30 animate-pulse" />

        <div className="container mx-auto px-8 relative z-10 text-center space-y-16">
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <span className="text-[10px] font-bold tracking-[0.8em] text-primary uppercase block">CONNECTION</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black font-[family-name:var(--font-playfair)] tracking-tighter leading-none">
              FIND YOUR <br /> <span className="text-primary italic">SACRED PLACE.</span>
            </h2>
          </div>

          <div className="max-w-xl mx-auto space-y-8">
            <p className="text-sm font-light tracking-[0.5em] uppercase text-white/80 leading-loose border-y border-white/10 py-10">
              GOD HAS GIVEN YOU A UNIQUE GIFT. WE WANT TO HELP YOU USE IT TO SERVE HIM AND BLESS HIS PEOPLE.
            </p>

            <div className="pt-8 flex justify-center flex-col sm:flex-row gap-8">
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground px-16 py-6 text-xs font-bold tracking-[0.5em] transition-all duration-500 rounded-none shadow-2xl shadow-primary/30 hover:bg-white hover:text-black hover:-translate-y-1"
              >
                TALK TO A PASTOR
              </Link>
              <Link
                href="/giving"
                className="border border-white/20 text-white hover:bg-white/10 px-16 py-6 text-xs font-bold tracking-[0.5em] transition-all duration-500 rounded-none backdrop-blur-md hover:-translate-y-1"
              >
                SUPPORT THE WORK
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll To Top Decoration */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-primary to-transparent opacity-20" />
      </section>
    </main>
  )
}
