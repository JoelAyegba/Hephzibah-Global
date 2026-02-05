import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Users, FileText, Globe, Heart, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export const metadata = {
  title: "Our Story - Hephzibah Global Christian Centre",
  description: "Learn about Hephzibah Global Christian Centre (HGCC), our history, vision, mission, and our founder Pastor Idoko Idu Idachaba.",
  openGraph: {
    title: "Our Story - Hephzibah Global Christian Centre",
    description: "Learn about Hephzibah Global Christian Centre (HGCC), our history, vision, mission, and our founder Pastor Idoko Idu Idachaba.",
    image: "/pastor and congregation.jpg",
  },
}

export default function AboutPage() {
  return (
    <main className="bg-background">
      {/* Hero / History - The Narrative Pillar */}
      <section className="relative pt-40 pb-32 overflow-hidden border-b border-border">
        {/* Watermark */}
        <div className="absolute top-20 right-[-5%] pointer-events-none select-none z-0">
          <h2 className="text-[20vw] font-black leading-none text-foreground/[0.03] tracking-tight uppercase whitespace-nowrap font-sans">
            HISTORY
          </h2>
        </div>

        <div className="container mx-auto px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-1/2 space-y-12">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="h-[1px] w-12 bg-primary" />
                  <span className="text-xs font-bold tracking-[0.6em] text-primary uppercase">SINCE 2022</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black font-[family-name:var(--font-playfair)] tracking-tighter leading-none">
                  THE RADIANCE <br />
                  OF OUR RISING.
                </h1>
              </div>

              <div className="space-y-6 text-sm md:text-base font-light text-muted-foreground leading-relaxed">
                <p>
                  Hephzibah Global Christian Centre (HGCC) was birthed from a divine mandate given to <span className="text-foreground font-bold italic">Pastor Idoko Idu Idachaba</span>.
                  Inaugurated on <span className="text-primary font-bold tracking-widest">6TH AUGUST 2022</span>, we began as a small fire that has since grown into a global beacon of righteousness.
                </p>
                <p className="border-l-2 border-primary pl-10 italic">
                  "We are a faith-preaching community grounded in the truth of Isaiah 62:2-4, committed to making the Word of God real. Our vision is simple yet profound: to draw nations to righteousness."
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-4 border border-primary/20 pointer-events-none group-hover:-inset-2 transition-all duration-700" />
              <div className="relative overflow-hidden rounded-none border border-white/5 shadow-2xl">
                <img
                  src="/pastor and congregation.jpg"
                  alt="HGCC Congregation"
                  className="w-full h-auto grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - The Pillars of Truth */}
      <section className="py-32 bg-foreground text-background relative flex justify-center">
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {/* Vision */}
            <div className="p-16 space-y-8 bg-foreground">
              <div className="w-16 h-16 border border-primary/20 flex items-center justify-center text-primary group">
                <Eye className="h-6 w-6" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xs font-bold tracking-[0.5em] text-primary uppercase">VISION</h3>
                <p className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-playfair)] leading-snug tracking-tight text-white italic">
                  "To make the word of God in our lives real thereby causing nations to come to our righteousness and luminance."
                </p>
              </div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">ISAIAH 62:2 / MATTHEW 5:14</span>
            </div>

            {/* Mission */}
            <div className="p-16 space-y-8 bg-foreground">
              <div className="w-16 h-16 border border-primary/20 flex items-center justify-center text-primary">
                <Target className="h-6 w-6" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xs font-bold tracking-[0.5em] text-primary uppercase">MISSION</h3>
                <p className="text-sm font-light leading-relaxed text-white/60">
                  To impact the word, gift, and the spirit of faith on all the tribes of the earth through the knowledge of God given to us, subduing the kingdom of Satan and showing the world the way of salvation.
                </p>
              </div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">HEBREWS 11</span>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Objectives */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3 space-y-4">
              <h2 className="text-xs font-bold tracking-[0.5em] text-primary uppercase">GOALS</h2>
              <h3 className="text-4xl md:text-5xl font-black font-[family-name:var(--font-playfair)] tracking-tighter leading-none">
                CORPORATE <br /> OBJECTIVES.
              </h3>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Establish believers with the pure knowledge of God until they grow into the fullness of Christ.",
                "Expose every nation to the person of the Holy Spirit and His transformative ministry.",
                "Demonstrate that love is greater than religion through the power of Christ.",
                "Edify believers to preach the Good News of holistic salvation.",
                "Make every race encounter the Lord Jesus Christ and His resurrection life."
              ].map((obj, i) => (
                <div key={i} className="p-10 border border-border group hover:border-primary/50 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[10px] font-black text-primary/30 group-hover:text-primary transition-colors">0{i + 1}</span>
                    <div className="h-[1px] w-8 bg-border group-hover:w-12 transition-all group-hover:bg-primary" />
                  </div>
                  <p className="text-sm font-light leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">{obj}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Biography - The Living Testament */}
      <section className="py-40 bg-[#050505] text-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 z-0" />
        <div className="container mx-auto px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-2/5 relative group">
              <div className="absolute -top-10 -left-10 text-[10rem] font-black font-sans text-white/[0.03] pointer-events-none select-none">
                IDOKO
              </div>
              <div className="relative border-2 border-white/5 p-4 z-10">
                <img
                  src="/Pastor potrait.jpeg"
                  alt="Pastor Idoko Idu Idachaba"
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>

            <div className="w-full lg:w-3/5 space-y-12">
              <div className="space-y-4">
                <h2 className="text-xs font-bold tracking-[0.6em] text-primary uppercase">THE VESSEL</h2>
                <h3 className="text-5xl md:text-6xl font-black font-[family-name:var(--font-playfair)] tracking-tighter leading-none">
                  PASTOR IDOKO <br /> IDU IDACHABA.
                </h3>
              </div>

              <div className="space-y-6 text-sm md:text-base font-light text-white/50 leading-loose max-w-2xl">
                <p>
                  Born with a mandate to empower believers, <span className="text-white font-bold">Pastor Idoko Idu Idachaba</span> has spent over two decades in faithful ministry.
                  His journey began in 1998, serving for 16 years with Living Faith Church Worldwide before being commissioned to lead HGCC.
                </p>
                <div className="grid grid-cols-2 gap-8 border-y border-white/10 py-10 my-10">
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold tracking-widest text-primary uppercase">ASSIGNMENT</p>
                    <p className="text-xl font-bold font-[family-name:var(--font-playfair)]">Preaching Faith</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold tracking-widest text-primary uppercase">RESTORATION</p>
                    <p className="text-xl font-bold font-[family-name:var(--font-playfair)]">Empowering Lives</p>
                  </div>
                </div>
                <p>
                  Under his leadership, HGCC has become a dynamic, faith-driven church impacting lives locally and globally,
                  anchored on the principle that through the Word made real, every tribe shall find the way of salvation.
                </p>
              </div>

              <blockquote className="relative p-12 border border-primary/20 bg-primary/5">
                <Heart className="absolute -top-4 -left-4 h-8 w-8 text-primary fill-primary/20" />
                <p className="text-xl md:text-2xl font-bold font-[family-name:var(--font-playfair)] text-white/90 italic leading-relaxed">
                  "It is our prayer that through this ministry, your faith will grow, your life will be impacted, and your spiritual journey strengthened."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
