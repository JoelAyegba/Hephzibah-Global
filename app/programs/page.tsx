import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookOpen, Sparkles, Users, Mic, Heart, HandHelping, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Our Ministries - Hephzibah Global Christian Centre Church",
  description: "Explore the ministries at Hephzibah Global Christian Centre Church. From discipleship to outreach, there is a place for everyone to serve and grow.",
  openGraph: {
    title: "Our Ministries - Hephzibah Global Christian Centre Church",
    description: "Explore the ministries at Hephzibah Global Christian Centre Church. From discipleship to outreach, there is a place for everyone to serve and grow.",
    image: "/choir ministration.jpg",
  },
}

export default function MinistriesPage() {
  return (
    <main>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/choir ministration.jpg"
            alt="Church Ministries"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/95 via-accent/90 to-accent/85" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-accent-foreground">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-foreground/10 backdrop-blur-sm border border-accent-foreground/20 mb-6">
              <span className="text-sm font-medium">Kingdom Service</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-balance leading-tight">
              Our Ministries
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-accent-foreground/95 max-w-3xl mx-auto mb-10">
              {
                "There is a place for everyone in God's house. Discover where you can serve, grow, and make an impact."
              }
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="p-6 rounded-lg bg-accent-foreground/10 backdrop-blur-sm border border-accent-foreground/20">
                <BookOpen className="h-8 w-8 mx-auto mb-3" />
                <div className="font-semibold">Discipleship</div>
              </div>
              <div className="p-6 rounded-lg bg-accent-foreground/10 backdrop-blur-sm border border-accent-foreground/20">
                <Users className="h-8 w-8 mx-auto mb-3" />
                <div className="font-semibold">Evangelism</div>
              </div>
              <div className="p-6 rounded-lg bg-accent-foreground/10 backdrop-blur-sm border border-accent-foreground/20">
                <Mic className="h-8 w-8 mx-auto mb-3" />
                <div className="font-semibold">Worship</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <p className="text-muted-foreground">Active Ministries</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                <p className="text-muted-foreground">Lives Impacted Weekly</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <p className="text-muted-foreground">Commitment to God</p>
              </CardContent>
            </Card>
          </div>

          {/* Discipleship & Bible Study */}
          <div id="discipleship" className="mb-20 scroll-mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-6">
                  Discipleship & Christian Education
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {
                    "We believe in grounding believers in the truth of God's word. Our discipleship ministry is dedicated to raising mature Christians who know their God."
                  }
                </p>

                <Accordion type="single" collapsible className="mb-6">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Believers' Foundation Class</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {
                          "A fundamental course for new believers and first-time guests to understand the basics of the Christian faith and our church culture."
                        }
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Weekly Bible Study</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {
                          "Join us every Wednesday at 6 PM for an in-depth study of the scriptures, where we explore the mysteries of the Kingdom."
                        }
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Leadership Academy</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {
                          "Training and equipping the next generation of spiritual leaders and workers for effective ministry."
                        }
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="flex gap-4">
                  <Button asChild>
                    <Link href="/contact">Join a Class</Link>
                  </Button>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="/pastor preaching.JPG"
                  alt="Bible Study"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Outreach & Evangelism */}
          <div
            id="outreach"
            className="mb-20 scroll-mt-20 bg-muted -mx-4 px-4 py-16 lg:mx-0 lg:px-8 lg:rounded-lg"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/pastor and first timers.jpeg"
                  alt="Community Outreach"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <HandHelping className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-6">
                  Pastor and First Timers
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {
                    "We are passionate about fulfilling the Great Commission. Our outreach team is committed to taking the love of Christ to the streets, hospitals, and prisons."
                  }
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <Heart className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Hospital Visitation</h4>
                      <p className="text-sm text-muted-foreground">
                        {"Praying for the sick and providing materials needs to patients in our community."}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Street Evangelism</h4>
                      <p className="text-sm text-muted-foreground">
                        {"Regular outings to share the gospel and win souls for the Kingdom."}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <Sparkles className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Welfare Ministry</h4>
                      <p className="text-sm text-muted-foreground">
                        {"Supporting the less privileged and vulnerable with food, clothing, and other essentials."}
                      </p>
                    </div>
                  </div>
                </div>

                <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Link href="/giving">
                    Support Our Mission <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Worship Ministry */}
          <div id="worship" className="scroll-mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Mic className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-6">
                  Worship & Arts
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {
                    "The Music Ministry leads the congregation in high praise and deep worship. We believe in the power of sound to create an atmosphere for miracles."
                  }
                </p>

                <div className="space-y-4 mb-6">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">The Choir</h4>
                      <p className="text-sm text-muted-foreground">
                        {
                          "A dedicated team of worshipers who minister through songs in every service."
                        }
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">Instrumentalists</h4>
                      <p className="text-sm text-muted-foreground">
                        {
                          "Skilled musicians who use their talents to glorify God and enhance the worship experience."
                        }
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="/choir ministration.jpg"
                  alt="Worship Team"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-balance">
            Find Your Place in the Body
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed text-primary-foreground/95">
            {
              "God has given you a unique gift. We want to help you use it to serve Him and bless His people."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href="/giving">Give Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Link href="/contact">Talk to a Pastor</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
