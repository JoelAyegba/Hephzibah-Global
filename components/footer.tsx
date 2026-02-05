import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Music2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] mb-4">HGCC</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Making the word of God in our lives real thereby causing nations to come to our righteousness.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-primary transition-colors">
                  Ministries
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/giving" className="hover:text-primary transition-colors">
                  Giving
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Sharon Ultimate Hotel, Plot 1710 Tafawa Balewa Way, Area 3 Garki Abuja, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:hgccww@gmail.com" className="hover:text-primary transition-colors break-all">
                  hgccww@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:09138522984" className="hover:text-primary transition-colors">
                    09138522984
                  </a>
                  <a href="tel:08023884729" className="hover:text-primary transition-colors">
                    08023884729
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Times</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Sunday Service: 9:00 AM</li>
              <li>Office: Mon-Fri 9AM-5PM, Sat 9AM-1PM</li>
            </ul>
            <div className="mt-6 flex gap-4">
              <a href="https://www.facebook.com/share/1CC71oN5jG/" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/idokoidachaba?igsh=djRkd2c3b2Q5Ymcw" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/@idokoiduidachaba1645?si=QZEFa_cMmQvAD2eo" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@idokoiduidachaba?_r=1&_t=ZS-92Lprrw1Pn7" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                <Music2 className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Hephzibah Global Christian Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
