import { Mail, Phone, Linkedin, Twitter, BookOpen, ArrowUpRight } from 'lucide-react'
import type { ContactMeProps } from '@/../product/sections/contact-me/types'

const platformIcons: Record<string, typeof Mail> = {
  LinkedIn: Linkedin,
  'X (Twitter)': Twitter,
  Medium: BookOpen,
}

export function ContactMe({ identity, socials, tagline }: ContactMeProps) {
  const whatsappNumber = identity.phone.replace(/[^0-9]/g, '')

  const contactLinks = [
    {
      id: 'email',
      label: 'Email',
      value: identity.email,
      href: `mailto:${identity.email}`,
      icon: Mail,
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      value: identity.phone,
      href: `https://wa.me/${whatsappNumber}`,
      icon: Phone,
      external: true,
    },
  ]

  const socialLinks = socials.map((social) => ({
    id: social.platform,
    label: social.platform,
    value: social.url.replace('https://', '').replace('www.', ''),
    href: social.url,
    icon: platformIcons[social.platform] || BookOpen,
    external: true,
  }))

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[var(--background)]">
      <div className="mx-auto max-w-4xl px-6 py-12 lg:px-8 lg:py-16">
        {/* Hero Section */}
        <header className="animate-fade-in-up fill-both mb-12 text-center">
          <h1 className="text-3xl font-semibold text-[var(--foreground)] lg:text-4xl">
            Let's Connect
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[var(--muted-foreground)]">
            {tagline}
          </p>
        </header>

        {/* Contact Cards */}
        <section className="animate-fade-in-up delay-100 fill-both mb-12">
          <h2 className="mb-6 text-xs font-medium uppercase tracking-widest text-[var(--muted-foreground)]">
            Direct Contact
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {contactLinks.map((link, index) => (
              <ContactCard key={link.id} link={link} index={index} />
            ))}
          </div>
        </section>

        {/* Social Links */}
        <section className="animate-fade-in-up delay-200 fill-both">
          <h2 className="mb-6 text-xs font-medium uppercase tracking-widest text-[var(--muted-foreground)]">
            Find Me Online
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {socialLinks.map((link, index) => (
              <SocialCard key={link.id} link={link} index={index} />
            ))}
          </div>
        </section>

        {/* Footer Quote */}
        <footer className="animate-fade-in-up delay-300 fill-both mt-16 border-t border-[var(--border)] pt-8 text-center">
          <blockquote className="text-[var(--muted-foreground)] italic">
            "Building products that matter, one insight at a time."
          </blockquote>
        </footer>
      </div>
    </div>
  )
}

interface LinkData {
  id: string
  label: string
  value: string
  href: string
  icon: typeof Mail
  external?: boolean
}

function ContactCard({ link, index }: { link: LinkData; index: number }) {
  const Icon = link.icon

  return (
    <a
      href={link.href}
      target={link.external ? '_blank' : undefined}
      rel={link.external ? 'noopener noreferrer' : undefined}
      className="group relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-300 hover:shadow-md"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[var(--foreground)] opacity-20 group-hover:opacity-40 transition-opacity" />

      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--secondary)] p-2">
            <Icon size={20} className="text-[var(--muted-foreground)]" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              {link.label}
            </div>
            <div className="mt-1 text-sm text-[var(--foreground)]">
              {link.value}
            </div>
          </div>
        </div>
        <ArrowUpRight
          size={16}
          className="text-[var(--muted-foreground)] opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
    </a>
  )
}

function SocialCard({ link, index }: { link: LinkData; index: number }) {
  const Icon = link.icon

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 transition-all duration-300 hover:shadow-md"
      style={{ animationDelay: `${(index + 2) * 50}ms` }}
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[var(--foreground)] opacity-20 group-hover:opacity-40 transition-opacity" />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Icon size={18} className="text-[var(--muted-foreground)]" />
          <span className="text-sm font-medium text-[var(--foreground)]">
            {link.label}
          </span>
        </div>
        <ArrowUpRight
          size={14}
          className="text-[var(--muted-foreground)] opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
    </a>
  )
}