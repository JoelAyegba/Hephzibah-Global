"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Coins, Landmark, Calendar, Send, MessageSquare, ArrowDown } from "lucide-react"


const givingMethods = [
    {
        icon: Landmark,
        title: "Bank Transfer",
        description: "Secure and direct transfer to our church account.",
        details: [
            { label: "Bank Name", value: "UBA" },
            { label: "Account Name", value: "Hephzibah Global Christian Center" },
            { label: "Account Number", value: "1025194880" },
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
    return (
        <main className="min-h-screen">
            <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/pastor and congregation.jpg"
                        alt="Giving at HGCC"
                        className="w-full h-full object-cover scale-110 animate-subtle-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-black/80" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fade-in shadow-xl">
                            <Heart className="h-5 w-5 text-secondary" />
                            <span className="text-sm font-semibold tracking-wide text-white uppercase">Sacrificial Service</span>
                        </div>

                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-playfair)] mb-8 text-white leading-[1.1] tracking-tight drop-shadow-2xl">
                            Giving & <span className="text-secondary italic">Support</span>
                        </h1>

                        <div className="relative mb-12 max-w-2xl mx-auto">
                            <p className="text-2xl md:text-3xl leading-relaxed text-white/90 font-light italic">
                                "{
                                    "Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver."
                                }"
                            </p>
                            <p className="mt-4 text-lg font-medium tracking-widest text-secondary uppercase opacity-80">- 2 Corinthians 9:7</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Button
                                size="lg"
                                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-10 py-7 text-lg rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 group"
                                onClick={() => document.getElementById('giving-methods')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Give Now
                                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                    <div className="w-1 h-12 rounded-full bg-gradient-to-b from-white/50 to-transparent" />
                </div>
            </section>

            {/* Giving Options */}
            <section id="giving-methods" className="py-32 relative scroll-mt-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
                            Ways to Give
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            {"Thank you for your generosity. Your support helps us spread the gospel and care for the community."}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {givingMethods.map((method) => (
                            <Card key={method.title} className="group hover:shadow-lg transition-transform hover:-translate-y-1">
                                <CardContent className="p-8">
                                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                        <method.icon className="h-7 w-7 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{method.title}</h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">{method.description}</p>
                                    <div className="space-y-4">
                                        {method.details.map((detail, idx) => (
                                            <div key={idx} className="bg-muted/50 p-4 rounded-lg">
                                                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                                                    {detail.label}
                                                </div>
                                                <div className="text-foreground font-medium">{detail.value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] mb-8">Your Impact</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-6 bg-background rounded-xl shadow-sm border border-border/50">
                                <div className="text-3xl font-bold text-primary mb-2">Community</div>
                                <p className="text-muted-foreground text-sm">Providing food, clothing, and support to families in need.</p>
                            </div>
                            <div className="p-6 bg-background rounded-xl shadow-sm border border-border/50">
                                <div className="text-3xl font-bold text-primary mb-2">Spiritual</div>
                                <p className="text-muted-foreground text-sm">Supporting gospel outreaches and spiritual development programs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA / Contact */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center bg-primary rounded-3xl p-12 text-primary-foreground shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

                        <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-6">
                            Need Assistance?
                        </h2>
                        <p className="text-lg opacity-90 mb-8 leading-relaxed">
                            If you have questions about giving, partnerships, or special donations, our finance team is here to help.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" className="font-semibold" asChild>
                                <a href="mailto:hgccww@gmail.com">
                                    <Send className="mr-2 h-4 w-4" /> Email Us
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" className="border-primary-foreground/30 hover:bg-white/10 text-white" asChild>
                                <a href="tel:09138522984">
                                    <MessageSquare className="mr-2 h-4 w-4" /> Call Finance
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
