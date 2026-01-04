"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import {
  Zap,
  Droplets,
  Settings,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react"
import { ScrollAnimate } from "@/components/scroll-animate"
import { ProductCarousel } from "@/components/product-carousel"

export default function Page() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const carouselProducts = [
    {
      name: "Filter Press",
      models: "8 Variants Available",
      desc: "Complete range from Manual to Fully Automatic, including Membrane and Stainless Steel models. Operating pressure up to 24 bar, sizes from 300mm to 1500mm.",
      image: "/industrial-filter-press-machine.jpg",
    },
    {
      name: "Sludge De-watering Machine",
      models: "Multi Disk & Volute Screw Press",
      desc: "Continuous operation with three zones: conditioning, thickening, and dewatering. Outlet consistency 15-25%, extremely low energy consumption.",
      image: "/screw-press-dewatering-machine.jpg",
    },
    {
      name: "Sludge Dryer (Paddle Dryer)",
      models: "SHA050 to SHA1000",
      desc: "Drying & sterilizing at low temperature (150°C). Conductive heat with horizontal mixing. Handles solutions up to 85% moisture.",
      image: "/placeholder.jpg",
    },
    {
      name: "DAF System",
      models: "Dissolved Air Flotation",
      desc: "Efficient removal of suspended solids, oils, and greases. 90-95% efficiency, very low retention time (5-20 minutes), pre-fabricated units.",
      image: "/placeholder.jpg",
    },
    {
      name: "Centrifuge",
      models: "Basket Centrifuge",
      desc: "High-speed centrifugal separation for effective solid-liquid separation. Fine particle handling, lower moisture content, wide size range.",
      image: "/basket-centrifuge-industrial-equipment.jpg",
    },
    {
      name: "Bag Filter",
      models: "Bag Filter System",
      desc: "Efficient bag filtration system for solid-liquid separation. Reusable filter bags, low operation cost, easy maintenance, high efficiency.",
      image: "/sludge-bag-dewatering-system.jpg",
    },
    {
      name: "Pump",
      models: "Industrial Pumps",
      desc: "High-performance pumps for various industrial applications including sludge transfer and filtration. Durable construction, reliable operation.",
      image: "/placeholder.jpg",
    },
    {
      name: "Filter Press Spares",
      models: "Genuine Parts & Components",
      desc: "Complete range of spare parts and components for filter press maintenance and repair. Quick delivery, quality assured, expert support.",
      image: "/placeholder.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-slideIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/sha-logo.png"
              alt="SHA Filtration Systems Logo"
              width={50}
              height={50}
              className="rounded"
              priority
            />
            <div>
              <h1 className="text-xl font-bold text-primary">SHA</h1>
              <p className="text-xs text-muted-foreground">Filtration Systems</p>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-foreground items-center">
            <a
              href="#about"
              className="hover:text-primary transition text-sm cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("about")
              }}
            >
              About
            </a>
            <a
              href="#products"
              className="hover:text-primary transition text-sm cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("products")
              }}
            >
              Products
            </a>
            <a
              href="#contact"
              className="hover:text-primary transition text-sm cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("contact")
              }}
            >
              Contact
            </a>
            <a
              href="tel:+919566696608"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              +91 9566 696 608
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Advanced <span className="text-primary">Filtration</span> Solutions
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Trusted since 1995. Manufacturing premium filtration and separation equipment for industries worldwide.
            </p>
            <div className="flex gap-4">
              <Link href="/products">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg animate-pulse-glow">
                  View Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg bg-transparent"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl p-12 border border-primary/30 h-96 flex items-center justify-center animate-slideInRight">
            <Image
              src="/sha-logo.png"
              alt="SHA Filtration Systems"
              width={300}
              height={300}
              className="object-contain opacity-90"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ScrollAnimate direction="left">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose SHA?</h2>
            <p className="text-xl text-muted-foreground">
              Industry-leading expertise with 30+ years of proven performance
            </p>
          </div>
        </ScrollAnimate>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              icon: Zap,
              title: "High Efficiency",
              desc: "Advanced separation technology",
              details:
                "Our state-of-the-art filtration systems achieve maximum separation efficiency with minimal energy consumption, reducing operational costs significantly.",
              bg: "bg-gradient-to-br from-chart-1/15 to-chart-1/5",
              borderColor: "border-chart-1/50",
            },
            {
              icon: Settings,
              title: "Customizable Solutions",
              desc: "Tailored for your industry",
              details:
                "Every business is unique. We design and manufacture custom filtration solutions that perfectly fit your specific operational requirements and capacity needs.",
              bg: "bg-gradient-to-br from-chart-2/15 to-chart-2/5",
              borderColor: "border-chart-2/50",
            },
            {
              icon: CheckCircle2,
              title: "Reliable & Proven",
              desc: "30+ years of trust",
              details:
                "Since 1995, SHA has delivered consistently reliable equipment used in wastewater treatment, mining, pharmaceuticals, and chemical industries worldwide.",
              bg: "bg-gradient-to-br from-chart-3/15 to-chart-3/5",
              borderColor: "border-chart-3/50",
            },
            {
              icon: Droplets,
              title: "Sustainable Operations",
              desc: "Eco-friendly manufacturing",
              details:
                "Our equipment minimizes water waste, reduces chemical usage, and operates with the lowest power consumption in the industry, supporting your sustainability goals.",
              bg: "bg-gradient-to-br from-chart-5/15 to-chart-5/5",
              borderColor: "border-chart-5/50",
            },
          ].map((feature, i) => (
            <ScrollAnimate key={i} direction={i % 2 === 0 ? "left" : "right"}>
              <Card
                className={`${feature.bg} ${feature.borderColor} border-2 p-8 hover:shadow-lg transition transform hover:scale-105 h-full flex flex-col group cursor-pointer`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="mb-4">
                  <feature.icon className="w-14 h-14 text-primary mb-4 transition-all duration-300 feature-icon-hover" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium mb-4">{feature.desc}</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{feature.details}</p>
              </Card>
            </ScrollAnimate>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gradient-to-r from-secondary/40 to-secondary/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimate direction="left">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">About SHA Filtration Systems</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Founded in 1995, SHA Filtration Systems is a pioneer in manufacturing advanced filtration and
                  separation equipment for diverse industries including wastewater treatment, mining, pharmaceuticals,
                  and chemicals.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  With over three decades of expertise, we've earned the trust of thousands of clients worldwide. Our
                  commitment to innovation, quality, and sustainability drives every product we create.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our team of experienced engineers continuously develops cutting-edge solutions that maximize
                  efficiency while minimizing environmental impact.
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-1 bg-primary rounded-full" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">30+ Years Experience</h3>
                      <p className="text-muted-foreground">Trusted by industries worldwide since 1995</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1 bg-primary rounded-full" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Premium Quality</h3>
                      <p className="text-muted-foreground">International standards and rigorous quality control</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1 bg-primary rounded-full" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Innovation Driven</h3>
                      <p className="text-muted-foreground">Continuous R&D for advanced filtration solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Products Carousel Section */}
      <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ScrollAnimate direction="left">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Products</h2>
            <p className="text-xl text-muted-foreground">
              Innovative filtration and separation solutions for every industry
            </p>
          </div>
        </ScrollAnimate>
        <ProductCarousel products={carouselProducts} />
        <div className="flex justify-center mt-12">
          <Link href="/products">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-primary blur-xl opacity-75 group-hover:opacity-100 transition duration-300 rounded-xl"></div>
              <button className="relative px-10 py-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/95 hover:to-primary text-primary-foreground font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-110 shadow-2xl border-2 border-primary/50 hover:border-primary/80 animate-button-pulse group-hover:animate-none flex items-center gap-3 whitespace-nowrap">
                <span>Explore All Products</span>
                <ArrowRight className="w-5 h-5 animate-arrow-bounce group-hover:translate-x-1 transition" />
              </button>
            </div>
          </Link>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimate direction="left">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Product Gallery</h2>
          </ScrollAnimate>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <ScrollAnimate key={i} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="bg-white/8 border border-white/20 rounded-xl overflow-hidden hover:border-primary/50 transition h-64 flex items-center justify-center">
                  <span className="text-muted-foreground">Gallery Image {i}</span>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ScrollAnimate direction="left">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Clients Trust Us</h2>
        </ScrollAnimate>
        <div className="grid md:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <ScrollAnimate key={i} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="bg-white/5 border border-white/20 rounded-xl p-8 flex items-center justify-center hover:border-primary/50 transition h-32">
                <span className="text-muted-foreground text-center">Client Logo {i}</span>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-20 border-t border-primary/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimate direction="left">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Let's Discuss Your Filtration Needs</h2>
              <p className="text-xl text-muted-foreground">
                Our team of expert engineers is ready to help you find the perfect solution for your operations. Reach
                out today for a comprehensive consultation.
              </p>
            </div>
          </ScrollAnimate>

          {/* Contact Cards with Enhanced Design */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <ScrollAnimate direction="left">
              <div className="group bg-gradient-to-br from-primary/15 to-transparent border-2 border-primary/40 rounded-2xl p-8 hover:border-primary/80 transition hover:shadow-lg hover:shadow-primary/20 hover:scale-105 transform">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:from-primary/50 group-hover:to-primary/20 transition">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Email</h3>
                <p className="text-muted-foreground mb-6">
                  Send us your inquiry or documentation, and we'll respond promptly with tailored recommendations.
                </p>
                <div className="space-y-2">
                  <a
                    href="mailto:shafilterson@gmail.com"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-sm group-hover:translate-x-1 transition"
                  >
                    shafilterson@gmail.com
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </ScrollAnimate>

            <ScrollAnimate direction="left">
              <div className="group bg-gradient-to-br from-chart-2/15 to-transparent border-2 border-chart-2/40 rounded-2xl p-8 hover:border-chart-2/80 transition hover:shadow-lg hover:shadow-chart-2/20 hover:scale-105 transform">
                <div className="w-16 h-16 bg-gradient-to-br from-chart-2/30 to-chart-2/10 rounded-xl flex items-center justify-center mb-6 group-hover:from-chart-2/50 group-hover:to-chart-2/20 transition">
                  <Phone className="w-8 h-8 text-chart-2" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Call Us</h3>
                <p className="text-muted-foreground mb-6">
                  Speak directly with our sales team for immediate assistance, technical support, and custom quotations.
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:+919363955858"
                    className="flex items-center gap-2 text-chart-2 hover:text-chart-2/80 font-semibold text-sm group-hover:translate-x-1 transition"
                  >
                    Office: +91 93639 55858
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="tel:+919566696608"
                    className="flex items-center gap-2 text-chart-2 hover:text-chart-2/80 font-semibold text-sm group-hover:translate-x-1 transition"
                  >
                    Mobile: +91 9566 696 608
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </ScrollAnimate>

            <ScrollAnimate direction="left">
              <div className="group bg-gradient-to-br from-chart-3/15 to-transparent border-2 border-chart-3/40 rounded-2xl p-8 hover:border-chart-3/80 transition hover:shadow-lg hover:shadow-chart-3/20 hover:scale-105 transform">
                <div className="w-16 h-16 bg-gradient-to-br from-chart-3/30 to-chart-3/10 rounded-xl flex items-center justify-center mb-6 group-hover:from-chart-3/50 group-hover:to-chart-3/20 transition">
                  <MapPin className="w-8 h-8 text-chart-3" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Visit Us</h3>
                <p className="text-muted-foreground mb-6">
                  Located in Tiruppur, we welcome facility tours and in-person discussions about your specific
                  requirements.
                </p>
                <p className="text-sm text-chart-3 font-semibold">
                  No.1/28A, Thottathu Palayam Road
                  <br />
                  City Garden Extension
                  <br />
                  Neruperichal, Tiruppur - 641 602
                </p>
              </div>
            </ScrollAnimate>
          </div>

          {/* Social Media Section */}
          <ScrollAnimate direction="left">
            <div className="bg-gradient-to-r from-white/10 to-primary/5 border border-white/20 rounded-2xl p-12 mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Connect With Us</h3>
              <p className="text-muted-foreground text-center mb-8">
                Follow us for product updates, industry insights, and technical advice from our engineering team.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { icon: Facebook, label: "Facebook", color: "hover:text-blue-500", bg: "hover:bg-blue-500/10" },
                  { icon: Instagram, label: "Instagram", color: "hover:text-pink-500", bg: "hover:bg-pink-500/10" },
                  { icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-600", bg: "hover:bg-blue-600/10" },
                  { icon: Twitter, label: "Twitter", color: "hover:text-sky-400", bg: "hover:bg-sky-400/10" },
                ].map((social, i) => (
                  <Link
                    key={i}
                    href="#"
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 transition-all duration-300 ${social.color} ${social.bg} hover:border-current`}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="font-semibold text-sm">{social.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollAnimate>

          {/* WhatsApp Quick Contact */}
          <ScrollAnimate direction="right">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-green-500/10 to-green-600/5 border-2 border-green-500/30 rounded-3xl p-10 text-center hover:border-green-500/60 transition duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-4">Need a Quick Response?</h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Click the button below to start a WhatsApp conversation with our office. We're available to discuss
                  your technical requirements immediately.
                </p>
                <a
                  href="https://wa.me/919566696608"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-green-700 transition-all transform hover:scale-110 shadow-xl shadow-green-900/20"
                >
                  <Phone className="w-6 h-6" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Image src="/sha-logo.png" alt="SHA Filtration Systems" width={40} height={40} className="rounded" />
                <h3 className="text-2xl font-bold text-primary">SHA Filtration Systems</h3>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Industry-leading manufacturer of high-performance filtration and separation equipment. Trusted for over
                30 years across multiple industrial sectors.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="p-2 bg-white/5 rounded-lg hover:bg-primary/20 transition">
                  <Facebook className="w-5 h-5 text-primary" />
                </Link>
                <Link href="#" className="p-2 bg-white/5 rounded-lg hover:bg-primary/20 transition">
                  <Instagram className="w-5 h-5 text-primary" />
                </Link>
                <Link href="#" className="p-2 bg-white/5 rounded-lg hover:bg-primary/20 transition">
                  <Linkedin className="w-5 h-5 text-primary" />
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-foreground mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-primary transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-muted-foreground hover:text-primary transition">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-foreground mb-6">Support</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition">
                    Technical Specs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition">
                    Inquiry
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition">
                    Maintenance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
            <p>© {new Date().getFullYear()} SHA Filtration Systems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
