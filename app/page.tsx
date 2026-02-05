"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Heart, Users, BookOpen, Sparkles, Quote, Calendar, MapPin, Clock, Landmark } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

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

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <Carousel
          plugins={[plugin.current]}
          className="w-full h-full absolute inset-0 z-0"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="h-full">
            {sliderImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="w-full h-full">
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-primary/30" />

        <div className="container mx-auto px-4 z-10 text-center">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-balance text-white"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.5)" }}
          >
            Welcome to Hephzibah Global Christian Centre
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed text-white/90"
            style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.4)" }}
          >
            We are delighted to have you visit our online home. Our church is a vibrant and dynamic faith-preaching community grounded in the truth of Isaiah 62:2-4, committed to making the Word of God real in the lives of His people.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10 bg-transparent">
              <Link href="/about">
                Join Our Family <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)]">Our Beliefs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 text-center">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] mb-4 text-primary">Walking with God</h3>
              <p className="text-lg leading-relaxed text-foreground/80">
                {"We believe in building a personal relationship with God, walking daily in His light, and growing in spiritual maturity."}
              </p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] mb-4 text-primary">Building Faith</h3>
              <p className="text-lg leading-relaxed text-foreground/80">
                {"Faith is the substance of things hoped for. We are committed to teaching the word of God to build strong, unshakable faith in every believer."}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Ministries */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">Our Ministries</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Bible Study</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {
                      "Deep dive into the scriptures to understand God's will and apply it to our daily lives."
                    }
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <Sparkles className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Discipleship</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {"Mentoring and guiding believers to becoming mature followers of Christ and leaders in their communities."}
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Community Outreach</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {"Extending the love of Christ to our community through evangelism, support, and care."}
                  </p>
                </CardContent>
              </Card>
            </div>


          </div>
        </div>
      </section>


      {/* Watch Our Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">Watch Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Join us online and experience the power of worship and the Word of God
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl border-4 border-primary/10">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/videoseries?list=UULFidokoiduidachaba1645"
                title="HGCC Services"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://youtube.com/@idokoiduidachaba1645?si=QZEFa_cMmQvAD2eo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Subscribe to Our Channel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Book Launch Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3 flex justify-center">
              {/* Book Cover */}
              <div className="aspect-[2/3] w-full max-w-sm rounded-lg shadow-xl overflow-hidden">
                <img src="/book.jpg" alt="Book Cover: When Your Boat is Filling With Water" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">New Book Release</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-6">
                WHEN YOUR BOAT IS FILLING WITH WATER, WHERE IS YOUR FAITH
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  "In it, sir, I wrote on how faith is the master key to living above the storms of life. I defined faith and how it can be built in the life of the believer. I also mentioned the enemies of faith and how to walk with God."
                </p>
                <div className="bg-white p-6 rounded-lg border border-border/50 shadow-sm">
                  <p className="font-semibold text-foreground">
                    "I am privileged by God to have the book forwarded by Bishop Thomas Aremu. Thank you, Sir."
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-foreground">
                    Official Release: Dec 31st at our Cross-over Service tagged EXODUS.
                  </p>
                  <p className="text-sm">
                    Available in Hard Copy (Paperback & Hardcover) and on all platforms.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-xl font-bold font-[family-name:var(--font-playfair)] text-primary mb-2">
                  "All things are Possible. You are God's Delight."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Giving Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-slate-50 rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 bg-primary text-primary-foreground flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6 w-fit">
                <Heart className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">Partnership & Giving</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-6">
                Support the Vision
              </h2>
              <p className="text-lg opacity-90 mb-8 leading-relaxed">
                Join us in spreading the gospel and making an impact in our community. Your generosity fuels the mission of Hephzibah Global Christian Centre.
              </p>
              <Button size="lg" variant="secondary" asChild className="w-fit font-bold">
                <Link href="/giving">
                  All Giving Options <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Landmark className="h-6 w-6 text-primary" />
                Direct Transfer
              </h3>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Bank Name</div>
                  <div className="text-xl font-bold text-slate-900 uppercase">UBA</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Account Number</div>
                  <div className="text-2xl font-bold text-slate-900 tracking-wider">1025194880</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Account Name</div>
                  <div className="text-lg font-bold text-slate-900 uppercase">Hephzibah Global Christian Center</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-32 bg-cover bg-center" style={{ backgroundImage: "url('/pastor&wife.jpeg')" }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Users className="h-12 w-12 mx-auto mb-6 text-primary-foreground" />
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-balance text-primary-foreground">
            You are God's Delight
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed text-primary-foreground/90">
            {"Join us as we walk together in faith."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
              <Link href="/contact">Connect With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
