import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Users, FileText, Globe, Heart } from "lucide-react"

export const metadata = {
  title: "About Us - Hephzibah Global Christian Centre",
  description: "Learn about Hephzibah Global Christian Centre (HGCC), our history, vision, mission, and our founder Pastor Idoko Idu Idachaba.",
  openGraph: {
    title: "About Us - Hephzibah Global Christian Centre",
    description: "Learn about Hephzibah Global Christian Centre (HGCC), our history, vision, mission, and our founder Pastor Idoko Idu Idachaba.",
    image: "/pastor and congregation.jpg",
  },
}

export default function AboutPage() {
  return (
    <main>
      {/* Our Story / History */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
                <img
                  src="/pastor and congregation.jpg"
                  alt="HGCC Congregation"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-foreground">
                Our History
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hephzibah Global Christian Centre (HGCC) was founded by <strong>Pastor Idoko Idu Idachaba</strong> in Lugbe, Abuja. Since our inaugural service on <strong>6th August 2022</strong> and our first Sunday service on <strong>7th August 2022</strong>, the church has grown into a vibrant community of believers committed to spiritual growth, worship, and outreach.
                </p>
                <p>
                  We are a faith-preaching community grounded in the truth of <em>Isaiah 62:2-4</em>, committed to making the Word of God real in the lives of His people. Our vision is pursued with unwavering passion: to draw nations to righteousness and kings to behold God’s salvation and glory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <Card className="h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] mb-4">Vision Statement</h3>
                <p className="text-muted-foreground leading-relaxed italic mb-4">
                  "To make the word of God in our lives real thereby causing nations to come to our righteousness and luminance where kings shall behold our salvation and glory."
                </p>
                <p className="text-sm font-semibold text-primary mt-auto">(Isaiah 62:2 / Matthew 5:14)</p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] mb-4">Mission Statement</h3>
                <p className="text-muted-foreground leading-relaxed italic mb-4">
                  "To impact the word, gift, and the spirit of faith on all the tribes of the earth through the knowledge of God given to us, therefore subduing the kingdom of Satan on earth, and above all showing the tribes of the world the way of salvation."
                </p>
                <p className="text-sm font-semibold text-primary mt-auto">(Hebrews 11)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Corporate Objectives */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] mb-12 text-center">Corporate Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "To establish believers with the pure knowledge of God until they grow into the fullness of the measure of the stature of Christ.",
              "To expose every nation of the world to the person of the Holy Spirit and guide them into enjoying the fullness of His ministry.",
              "To create an understanding to all the tribes of this world that love is greater than religion and Christianity is demonstrating power of Christ and not a religion.",
              "To edify and furnish believers to preach the Good News of holistic salvation in Jesus Christ.",
              "To make every race of the world encounter the Lord Jesus Christ and establish an understanding of His birth, His assignment on earth, His death, and resurrection."
            ].map((obj, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-primary/10 p-2 rounded-full">
                      <Target className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{obj}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Biography */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/3 flex justify-center">
              <img
                src="/Pastor potrait.jpeg"
                alt="Pastor Idoko Idu Idachaba"
                className="rounded-xl shadow-2xl w-full max-w-sm object-cover"
              />
            </div>
            <div className="w-full lg:w-2/3">
              <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] mb-2">
                Meet Our Lead Pastor
              </h2>
              <h3 className="text-xl text-primary font-semibold mb-6">Pastor Idoko Idu Idachaba</h3>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Pastor Idoko Idu Idachaba is the Lead Pastor of HGCC. Born on <strong>20th October 1980</strong> in Kano State, Nigeria, and hailing from Idah, Kogi State, Pastor Idoko is blessed with a loving family, his wife <strong>Esther Idoko Idachaba</strong> and their daughter <strong>Chubiyojo</strong>.
                </p>
                <p>
                  His ministry journey began in 1998 with <strong>Living Faith Church Worldwide</strong>, serving faithfully as a part-time pastor for 4 years and a full-time pastor for 12 years, ministering both within and outside Nigeria. His last assignment was at LFC Gberigbe, Ikorodu, Lagos State in 2022.
                </p>
                <p>
                  Pastor Idoko’s ministry vision is anchored on empowering believers to walk boldly in God’s promises, preaching faith, and making God’s Word practical in everyday life. Under his leadership, HGCC has become a dynamic, faith-driven church impacting lives locally and globally.
                </p>
              </div>

              <blockquote className="mt-8 border-l-4 border-primary pl-6 py-2 italic text-lg text-foreground/80 bg-white/50 rounded-r-lg">
                "It is our prayer that through this ministry, your faith will grow, your life will be impacted, and your spiritual journey strengthened."
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
