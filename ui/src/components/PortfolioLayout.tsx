import { useLocation, useNavigate } from 'react-router-dom'
import { Briefcase, Wrench, User } from 'lucide-react'

interface PortfolioLayoutProps {
  children: React.ReactNode
}

const navIcons = {
  '/who-am-i': Briefcase,
  '/my-toolbox': Wrench,
  '/contact-me': User,
}

export function PortfolioLayout({ children }: PortfolioLayoutProps) {
  const location = useLocation()
  const navigate = useNavigate()

  const navigationItems = [
    { label: 'Journey', href: '/who-am-i' },
    { label: 'Toolbox', href: '/my-toolbox' },
    { label: 'About Me', href: '/contact-me' },
  ]

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Elegant Header */}
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
          {/* Brand - Editorial Style */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              navigate('/who-am-i')
            }}
            className="group flex items-baseline gap-3"
          >
            <span className="text-xl font-semibold tracking-tight text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
              Sanjana Kansal
            </span>
            <span className="hidden text-sm text-[var(--muted-foreground)] transition-colors group-hover:text-[var(--foreground)] sm:inline">
              AI Product Manager
            </span>
          </a>

          {/* Desktop Navigation - Elegant Pills */}
          <nav className="hidden items-center gap-1 md:flex">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href
              const Icon = navIcons[item.href as keyof typeof navIcons]
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    navigate(item.href)
                  }}
                  className={`group relative flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                    isActive
                      ? 'bg-[var(--foreground)] text-[var(--background)]'
                      : 'text-[var(--muted-foreground)] hover:bg-[var(--secondary)] hover:text-[var(--foreground)]'
                  }`}
                >
                  <Icon size={16} className={isActive ? '' : 'opacity-60 group-hover:opacity-100'} />
                  <span className="font-medium">{item.label}</span>
                </a>
              )
            })}
          </nav>

          {/* Mobile Navigation */}
          <MobileNav
            items={navigationItems}
            currentPath={location.pathname}
            onNavigate={navigate}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="animate-fade-in">{children}</main>
    </div>
  )
}

interface MobileNavProps {
  items: { label: string; href: string }[]
  currentPath: string
  onNavigate: (href: string) => void
}

function MobileNav({ items, currentPath, onNavigate }: MobileNavProps) {
  return (
    <nav className="flex items-center gap-1 md:hidden">
      {items.map((item) => {
        const isActive = currentPath === item.href
        const Icon = navIcons[item.href as keyof typeof navIcons]
        return (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => {
              e.preventDefault()
              onNavigate(item.href)
            }}
            className={`rounded-full p-2.5 transition-all duration-300 ${
              isActive
                ? 'bg-[var(--foreground)] text-[var(--background)]'
                : 'text-[var(--muted-foreground)] hover:bg-[var(--secondary)] hover:text-[var(--foreground)]'
            }`}
            aria-label={item.label}
          >
            <Icon size={18} />
          </a>
        )
      })}
    </nav>
  )
}