import { MainNav } from './MainNav'
import { MobileMenu } from './MobileMenu'

export interface NavigationItem {
  label: string
  href: string
  isActive?: boolean
}

export interface AppShellProps {
  children: React.ReactNode
  navigationItems: NavigationItem[]
  brandName?: string
  onNavigate?: (href: string) => void
}

export function AppShell({
  children,
  navigationItems,
  brandName = 'Sanjana',
  onNavigate,
}: AppShellProps) {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/80 backdrop-blur-sm dark:border-stone-800 dark:bg-stone-950/80">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          {/* Brand */}
          <a
            href="/"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault()
                onNavigate('/')
              }
            }}
            className="font-medium text-stone-900 transition-colors hover:text-amber-600 dark:text-stone-100 dark:hover:text-amber-400"
          >
            {brandName}
          </a>

          {/* Desktop Navigation */}
          <MainNav
            items={navigationItems}
            onNavigate={onNavigate}
            className="hidden md:flex"
          />

          {/* Mobile Menu */}
          <MobileMenu
            items={navigationItems}
            onNavigate={onNavigate}
            className="md:hidden"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-6 py-12">{children}</main>
    </div>
  )
}