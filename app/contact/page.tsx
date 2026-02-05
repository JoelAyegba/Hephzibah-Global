import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Music2, ArrowUpRight } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { cn } from "@/lib/utils"

export const metadata = {
  title: "Contact Us - Hephzibah Global Christian Centre",
  description: "Get in touch with Hephzibah Global Christian Centre. Join us for service in Abuja or send us a message.",
  openGraph: {
    title: "Contact Us - Hephzibah Global Christian Centre",
    description: "Get in touch with Hephzibah Global Christian Centre. Join us for service in Abuja or send us a message.",
    image: "/pastor preaching.JPG",
  },
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Sanctuary",
    details: ["Sharon Ultimate Hotel, Plot 1710 Tafawa Balewa Way, Area 3 Garki Abuja, Nigeria"],
  },
  {
    icon: Phone,
    title: "Voice",
    details: ["09138522984", "08023884729"],
  },
  {
    icon: Mail,
    title: "Letters",
    details: ["hgccww@gmail.com"],
  },
  {
    icon: Clock,
    title: "Times",
    details: ["Mon – Fri: 9:00 AM – 5:00 PM", "Sunday: Service Only"],
  },
]

export default function ContactPage() {
  return (
    <main className="bg-background">
      {/* Hero Section - The Connection Pillar */}
      <section className="relative min-h-[60vh] flex flex-col justify-end overflow-hidden pt-40 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/pastor preaching.JPG"
            alt="Contact HGCC"
            className="w-full h-full object-cover grayscale opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        {/* Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-10 overflow-hidden">
          <h2 className="text-[25vw] font-black leading-none text-primary/[0.03] tracking-tighter uppercase whitespace-nowrap font-sans">
            CONNECT
          </h2>
        </div>

        <div className="container mx-auto px-8 relative z-20">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-12 bg-primary" />
              <span className="text-xs font-bold tracking-[0.5em] text-primary uppercase">GET IN TOUCH</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-[family-name:var(--font-playfair)] text-white leading-[0.9] tracking-tight">
              Speak to <br />
              <span className="italic text-primary">Us.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content - Form and Details */}
      <section className="py-32 relative bg-background">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Contact Form Pillar */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-4">
                <h2 className="text-xs font-bold tracking-[0.5em] text-primary uppercase">MESSAGE</h2>
                <h3 className="text-4xl font-black font-[family-name:var(--font-playfair)] tracking-tight uppercase">SEND A PETITION.</h3>
              </div>
              <div className="border border-border p-8 lg:p-12 bg-foreground/[0.01]">
                <ContactForm />
              </div>
            </div>

            {/* Information Pillar */}
            <div className="lg:col-span-5 space-y-16">
              <div className="space-y-4">
                <h2 className="text-xs font-bold tracking-[0.5em] text-primary uppercase">DETAILS</h2>
                <h3 className="text-4xl font-black font-[family-name:var(--font-playfair)] tracking-tight uppercase">HOW TO REACH.</h3>
              </div>

              <div className="grid grid-cols-1 gap-px bg-border border border-border">
                {contactInfo.map((info, i) => (
                  <div key={info.title} className="p-10 bg-background space-y-6 group hover:bg-foreground/[0.02] transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                        <info.icon className="h-4 w-4" />
                      </div>
                      <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-primary">{info.title}</h4>
                    </div>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => {
                        const isEmail = detail.includes("@") && !detail.includes(" ");
                        const isPhone = detail.startsWith("091") || detail.startsWith("080");

                        return isEmail ? (
                          <a key={idx} href={`mailto:${detail}`} className="block text-xl font-bold font-[family-name:var(--font-playfair)] tracking-tight hover:text-primary transition-colors">{detail}</a>
                        ) : isPhone ? (
                          <a key={idx} href={`tel:${detail}`} className="block text-xl font-bold font-[family-name:var(--font-playfair)] tracking-tight hover:text-primary transition-colors">{detail}</a>
                        ) : (
                          <p key={idx} className="text-sm font-light leading-relaxed text-muted-foreground">{detail}</p>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Socials */}
              <div className="space-y-8">
                <h4 className="text-[10px] font-black tracking-[0.6em] text-muted-foreground uppercase py-4 border-b border-border">SOCIAL CHANNELS</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/share/1CC71oN5jG/' },
                    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/idokoidachaba?igsh=djRkd2c3b2Q5Ymcw' },
                    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@idokoiduidachaba1645?si=QZEFa_cMmQvAD2eo' },
                    { name: 'TikTok', icon: Music2, href: 'https://www.tiktok.com/@idokoiduidachaba?_r=1&_t=ZS-92Lprrw1Pn7' }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="flex items-center justify-between p-6 border border-border hover:border-primary group transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <social.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                        <span className="text-[10px] font-bold tracking-widest uppercase">{social.name}</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
