"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface CarouselProduct {
  name: string
  models: string
  desc: string
  image?: string
  icon?: React.ReactNode
}

interface ProductCarouselProps {
  products: CarouselProduct[]
  autoAdvanceInterval?: number
}

export function ProductCarousel({ products, autoAdvanceInterval = 5000 }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState<"next" | "prev">("next")

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setDirection("next")
      setCurrentIndex((prev) => (prev + 1) % products.length)
    }, autoAdvanceInterval)

    return () => clearInterval(timer)
  }, [isAutoPlaying, products.length, autoAdvanceInterval])

  const nextProduct = () => {
    setDirection("next")
    setCurrentIndex((prev) => (prev + 1) % products.length)
    setIsAutoPlaying(false)
  }

  const prevProduct = () => {
    setDirection("prev")
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
    setIsAutoPlaying(false)
  }

  const goToIndex = (index: number) => {
    setDirection(index > currentIndex ? "next" : "prev")
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const animationClass = direction === "next" ? "animate-carouselSlideLeft" : "animate-carouselSlideRight"

  return (
    <div className="w-full">
      <div className="relative">
        <div className="overflow-hidden rounded-lg">
          <div key={currentIndex} className={animationClass}>
            <Card className="bg-card border-border hover:border-primary transition-all duration-300 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 md:h-80 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden">
                  {products[currentIndex].image ? (
                    <Image
                      src={products[currentIndex].image}
                      alt={products[currentIndex].name}
                      width={500}
                      height={400}
                      className="object-contain w-full h-full p-6"
                    />
                  ) : products[currentIndex].icon ? (
                    <div className="w-32 h-32 bg-primary/20 rounded-lg flex items-center justify-center">
                      {products[currentIndex].icon}
                    </div>
                  ) : (
                    <div className="w-32 h-32 bg-primary/20 rounded-lg flex items-center justify-center">
                      <span className="text-primary/50 text-4xl font-bold">
                        {products[currentIndex].name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-foreground mb-3">{products[currentIndex].name}</h3>
                  <p className="text-primary font-semibold text-sm mb-4 uppercase tracking-wide">
                    {products[currentIndex].models}
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed">{products[currentIndex].desc}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={prevProduct}
            className="border-primary text-primary hover:bg-primary/10 bg-transparent h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all"
            aria-label="Previous product"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex gap-2 items-center">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8 h-2"
                    : "bg-muted-foreground/30 w-2 h-2 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to product ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextProduct}
            className="border-primary text-primary hover:bg-primary/10 bg-transparent h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all"
            aria-label="Next product"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Product Counter */}
        <div className="text-center mt-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{currentIndex + 1}</span> of{" "}
            <span className="font-semibold text-foreground">{products.length}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
