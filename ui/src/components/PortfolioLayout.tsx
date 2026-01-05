import { useLocation, useNavigate } from 'react-router-dom'
import { MainNav } from '@/shell/components/MainNav'
import { MobileMenu } from '@/shell/components/MobileMenu'

interface PortfolioLayoutProps {
  children: React.ReactNode
}

export function PortfolioLayout({ children }: PortfolioLayoutProps) {
  const location = useLocation()
  const navigate = useNavigate()

  const navigationItems = [
    { label: 'Who Am I?', href: '/who-am-i', isActive: location.pathname === '/who-am-i' },
    { label: 'My Toolbox', href: '/my-toolbox', isActive: location.pathname === '/my-toolbox' },
    { label: 'Contact Me', href: '/contact-me', isActive: location.pathname === '/contact-me' },
  ]

  const handleNavigate = (href: string) => {
    navigate(href)
  }

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/80 backdrop-blur-sm dark:border-stone-800 dark:bg-stone-950/80">
        <div className="flex h-16 items-center justify-between px-6">
          {/* Brand */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              navigate('/who-am-i')
            }}
            className="font-medium text-stone-900 transition-colors hover:text-amber-600 dark:text-stone-100 dark:hover:text-amber-400"
          >
            Sanjana Kansal
          </a>

          {/* Desktop Navigation */}
          <MainNav
            items={navigationItems}
            onNavigate={handleNavigate}
            className="hidden md:flex"
          />

          {/* Mobile Menu */}
          <MobileMenu
            items={navigationItems}
            onNavigate={handleNavigate}
            className="relative z-50 md:hidden"
          />
        </div>
      </header>

      {/* Main Content - full width on mobile, 80% on desktop */}
      <main className="mx-auto w-full md:w-[80%]">{children}</main>
    </div>
  )
}