"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Phone, Mail, MapPin, Send, Facebook, Instagram, Linkedin, Twitter, ArrowRight } from "lucide-react"
import { ScrollAnimate } from "@/components/scroll-animate"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappMessage = `Hello! I'm interested in SHA Filtration Systems products.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}

Message: ${formData.message}`

    const whatsappUrl = `https://wa.me/919566696608?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
    } catch (error) {
      console.log("Message sent")
    }

    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", company: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

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
            <Link href="/" className="hover:text-primary transition text-sm">
              Home
            </Link>
            <Link href="/#about" className="hover:text-primary transition text-sm">
              About
            </Link>
            <Link href="/products" className="hover:text-primary transition text-sm">
              Products
            </Link>
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ScrollAnimate direction="left">
          <div className="text-center mb-12">
            <Link href="/">
              <Button variant="ghost" className="text-muted-foreground hover:text-primary mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Get in Touch With SHA</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our team of expert engineers is ready to help you find the perfect filtration solution. Reach out today
              for a comprehensive consultation.
            </p>
          </div>
        </ScrollAnimate>
      </section>

      {/* Contact Cards Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-20 border-t border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <ScrollAnimate direction="left">
              <div className="group bg-gradient-to-br from-primary/15 to-transparent border-2 border-primary/40 rounded-2xl p-8 hover:border-primary/80 transition hover:shadow-lg hover:shadow-primary/20 hover:scale-105 transform h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:from-primary/50 group-hover:to-primary/20 transition">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Email</h3>
                <p className="text-muted-foreground mb-6 flex-1">
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
              <div className="group bg-gradient-to-br from-chart-2/15 to-transparent border-2 border-chart-2/40 rounded-2xl p-8 hover:border-chart-2/80 transition hover:shadow-lg hover:shadow-chart-2/20 hover:scale-105 transform h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-chart-2/30 to-chart-2/10 rounded-xl flex items-center justify-center mb-6 group-hover:from-chart-2/50 group-hover:to-chart-2/20 transition">
                  <Phone className="w-8 h-8 text-chart-2" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Call Us</h3>
                <p className="text-muted-foreground mb-6 flex-1">
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
              <div className="group bg-gradient-to-br from-chart-3/15 to-transparent border-2 border-chart-3/40 rounded-2xl p-8 hover:border-chart-3/80 transition hover:shadow-lg hover:shadow-chart-3/20 hover:scale-105 transform h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-chart-3/30 to-chart-3/10 rounded-xl flex items-center justify-center mb-6 group-hover:from-chart-3/50 group-hover:to-chart-3/20 transition">
                  <MapPin className="w-8 h-8 text-chart-3" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Visit Us</h3>
                <p className="text-muted-foreground mb-6 flex-1">
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
                Follow us for product updates, industry insights, and company announcements
              </p>
              <div className="flex justify-center gap-6 flex-wrap">
                <a
                  href="#"
                  className="group bg-gradient-to-br from-primary/20 to-primary/5 hover:from-primary/40 hover:to-primary/20 transition p-4 rounded-xl border border-primary/30 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/30"
                >
                  <Facebook className="w-8 h-8 text-primary group-hover:scale-110 transition" />
                </a>
                <a
                  href="#"
                  className="group bg-gradient-to-br from-chart-2/20 to-chart-2/5 hover:from-chart-2/40 hover:to-chart-2/20 transition p-4 rounded-xl border border-chart-2/30 hover:border-chart-2/60 hover:shadow-lg hover:shadow-chart-2/30"
                >
                  <Instagram className="w-8 h-8 text-chart-2 group-hover:scale-110 transition" />
                </a>
                <a
                  href="#"
                  className="group bg-gradient-to-br from-chart-3/20 to-chart-3/5 hover:from-chart-3/40 hover:to-chart-3/20 transition p-4 rounded-xl border border-chart-3/30 hover:border-chart-3/60 hover:shadow-lg hover:shadow-chart-3/30"
                >
                  <Linkedin className="w-8 h-8 text-chart-3 group-hover:scale-110 transition" />
                </a>
                <a
                  href="#"
                  className="group bg-gradient-to-br from-chart-5/20 to-chart-5/5 hover:from-chart-5/40 hover:to-chart-5/20 transition p-4 rounded-xl border border-chart-5/30 hover:border-chart-5/60 hover:shadow-lg hover:shadow-chart-5/30"
                >
                  <Twitter className="w-8 h-8 text-chart-5 group-hover:scale-110 transition" />
                </a>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ScrollAnimate direction="left">
          <Card className="bg-card border-primary/30 border-2 p-10">
            <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>
            {submitted && (
              <div className="mb-6 p-4 bg-primary/20 border border-primary rounded-lg">
                <p className="text-primary font-semibold">
                  Thank you! We'll get back to you soon. Check your WhatsApp!
                </p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-foreground font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-foreground font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                    placeholder="Your company name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-foreground font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition resize-none"
                  placeholder="Tell us about your filtration needs..."
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message & WhatsApp
              </Button>
            </form>
            <p className="text-muted-foreground text-sm mt-6 text-center">
              By submitting, we'll send your message directly to our WhatsApp and email for faster response.
            </p>
          </Card>
        </ScrollAnimate>
      </section>

      {/* WhatsApp CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ScrollAnimate direction="left">
          <div className="bg-gradient-to-r from-chart-1/25 via-chart-1/15 to-chart-1/5 border-2 border-chart-1/50 rounded-2xl p-12 text-center hover:border-chart-1/80 transition hover:shadow-lg hover:shadow-chart-1/20">
            <h3 className="text-2xl font-bold text-foreground mb-3">Instant Support on WhatsApp</h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Get real-time responses to your questions and quick consultation from our experts
            </p>
            <a
              href="https://wa.me/919566696608"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-chart-1 to-chart-1/90 hover:from-chart-1/90 hover:to-chart-1 text-primary-foreground px-8 py-4 rounded-xl font-bold transition transform hover:scale-105 hover:shadow-lg hover:shadow-chart-1/30"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.783 1.14L4.88 2.566 6.1 6.362a9.843 9.843 0 00-.531 4.956c0 5.433 4.652 9.85 10.37 9.85 2.539 0 4.928-.987 6.614-2.605 1.686-1.618 2.67-3.737 2.67-5.976 0-5.718-4.652-10.37-10.37-10.37" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </ScrollAnimate>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-background/80 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4">SHA Filtration Systems</h4>
              <p className="text-sm text-muted-foreground">
                Leading manufacturer of filtration and separation equipment since 1995.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-primary transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-primary transition">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="hover:text-primary transition">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Industries</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Wastewater Treatment</li>
                <li>Mining & Minerals</li>
                <li>Pharmaceuticals</li>
                <li>Chemicals & Textiles</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2025 SHA Filtration Systems. All rights reserved. Manufacturing Excellence Since 1995.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
