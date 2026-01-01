import type { NavigationItem } from './AppShell'

interface MainNavProps {
  items: NavigationItem[]
  onNavigate?: (href: string) => void
  className?: string
}

export function MainNav({ items, onNavigate, className = '' }: MainNavProps) {
  return (
    <nav className={`items-center gap-8 ${className}`}>
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={(e) => {
            if (onNavigate) {
              e.preventDefault()
              onNavigate(item.href)
            }
          }}
          className={`text-sm transition-colors duration-200 ${
            item.isActive
              ? 'text-amber-600 dark:text-amber-400'
              : 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100'
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}