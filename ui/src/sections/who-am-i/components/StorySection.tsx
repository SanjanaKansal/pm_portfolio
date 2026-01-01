import { useEffect, useRef, useState } from 'react'

interface StorySectionProps {
  title: string
  children: React.ReactNode
  delay?: number
}

export function StorySection({ title, children, delay = 0 }: StorySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <section
      ref={sectionRef}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
    >
      <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-amber-600 dark:text-amber-400">
        {title}
      </h2>
      {children}
    </section>
  )
}