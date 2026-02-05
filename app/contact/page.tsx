import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Music2 } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

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
    title: "Church Location",
    details: ["Sharon Ultimate Hotel, Plot 1710 Tafawa Balewa Way, Area 3 Garki Abuja, Nigeria"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["09138522984", "08023884729"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hgccww@gmail.com"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Mon – Fri: 9:00 AM – 5:00 PM", "Saturday: 9:00 AM – 1:00 PM", "Sunday: Church Services Only"],
  },
]

export default function ContactPage() {
  return (
    <main>
      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <Card key={info.title}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{info.title}</h3>
                          {info.details.map((detail, index) => {
                            // Check if it's an email address
                            if (typeof detail === "string" && detail.includes("@") && !detail.includes(" ")) {
                              return (
                                <a
                                  key={index}
                                  href={`mailto:${detail}`}
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                                >
                                  {detail}
                                </a>
                              );
                            }
                            // Check if it's a phone number (simple check)
                            if (typeof detail === "string" && (detail.startsWith("091") || detail.startsWith("080"))) {
                              return (
                                <a
                                  key={index}
                                  href={`tel:${detail}`}
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                                >
                                  {detail}
                                </a>
                              );
                            }
                            // Default case
                            return (
                              <p key={index} className="text-sm text-muted-foreground">
                                {detail}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Media Link */}
              <div className="mt-12 p-8 bg-primary/5 rounded-xl border border-primary/10">
                <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] mb-6">Follow Us</h3>
                <div className="flex flex-wrap gap-4">
                  {[
                    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/share/1CC71oN5jG/' },
                    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/idokoidachaba?igsh=djRkd2c3b2Q5Ymcw' },
                    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@idokoiduidachaba1645?si=QZEFa_cMmQvAD2eo' },
                    { name: 'TikTok', icon: Music2, href: 'https://www.tiktok.com/@idokoiduidachaba?_r=1&_t=ZS-92Lprrw1Pn7' }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="flex items-center gap-3 px-4 py-2 bg-white rounded-lg border border-border hover:border-primary hover:text-primary transition-all shadow-sm group"
                    >
                      <social.icon className="h-5 w-5" />
                      <span className="font-medium">{social.name}</span>
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
