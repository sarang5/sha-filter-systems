"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollAnimateProps {
  children: React.ReactNode
  direction?: "left" | "right"
  className?: string
}

export function ScrollAnimate({ children, direction = "left", className = "" }: ScrollAnimateProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const animationClass = direction === "left" ? "animate-slideInLeft" : "animate-slideInFromRight"

  return (
    <div ref={ref} className={`${isVisible ? animationClass : "opacity-0"} ${className}`}>
      {children}
    </div>
  )
}
