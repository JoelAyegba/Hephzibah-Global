import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Music2, ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-[#050505] text-white overflow-hidden border-t border-primary/20">
      {/* Luminance Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="container mx-auto px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* About Section */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-3xl font-black tracking-tighter font-[family-name:var(--font-playfair)] text-primary">HGCC</h3>
              <p className="text-[10px] tracking-[0.4em] font-bold text-muted-foreground uppercase">Global Christian Centre</p>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Making the word of God in our lives real thereby causing nations to come to our righteousness and kings to the brightness of our rising.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase mb-8 text-primary">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: "Our Story", href: "/about" },
                { name: "Ministries", href: "/programs" },
                { name: "Contact Us", href: "/contact" },
                { name: "Giving", href: "/giving" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm font-light text-slate-400 hover:text-white transition-all flex items-center group">
                    <span className="tracking-widest capitalize">{link.name}</span>
                    <ArrowUpRight className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Out */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase mb-8 text-primary">Reach Out</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm font-light text-slate-400 leading-relaxed">
                  Sharon Ultimate Hotel, Plot 1710 Tafawa Balewa Way, Area 3 Garki Abuja, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:hgccww@gmail.com" className="text-sm font-light text-slate-400 hover:text-white transition-colors">
                  hgccww@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Connection */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase mb-8 text-primary">Connection</h4>
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-light text-slate-400">Sunday Service: 9:00 AM</p>
                <p className="text-sm font-light text-slate-400">Office: Mon-Fri 9AM-5PM</p>
              </div>
              <div className="flex gap-2">
                {[
                  { icon: Facebook, href: "https://www.facebook.com/share/1CC71oN5jG/", label: "Facebook" },
                  { icon: Instagram, href: "https://www.instagram.com/idokoidachaba?igsh=djRkd2c3b2Q5Ymcw", label: "Instagram" },
                  { icon: Youtube, href: "https://youtube.com/@idokoiduidachaba1645?si=QZEFa_cMmQvAD2eo", label: "YouTube" },
                  { icon: Music2, href: "https://www.tiktok.com/@idokoiduidachaba?_r=1&_t=ZS-92Lprrw1Pn7", label: "TikTok" }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 flex items-center justify-center border border-white/10 hover:border-primary hover:bg-primary transition-all duration-500 group rounded-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.2em] uppercase font-bold text-slate-500">
          <p>&copy; {new Date().getFullYear()} Hephzibah Global Christian Centre</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
