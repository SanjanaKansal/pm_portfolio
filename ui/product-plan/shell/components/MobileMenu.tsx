import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import type { NavigationItem } from './AppShell'

interface MobileMenuProps {
  items: NavigationItem[]
  onNavigate?: (href: string) => void
  className?: string
}

export function MobileMenu({ items, onNavigate, className = '' }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigate = (href: string) => {
    setIsOpen(false)
    if (onNavigate) {
      onNavigate(href)
    }
  }

  return (
    <div className={className}>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-stone-600 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-16 z-40 bg-stone-900/20 backdrop-blur-sm dark:bg-stone-950/40"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Panel */}
          <nav className="fixed left-0 right-0 top-16 z-50 border-b border-stone-200 bg-stone-50 px-6 py-4 dark:border-stone-800 dark:bg-stone-950">
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigate(item.href)
                  }}
                  className={`py-2 text-base transition-colors duration-200 ${
                    item.isActive
                      ? 'text-amber-600 dark:text-amber-400'
                      : 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </>
      )}
    </div>
  )
}