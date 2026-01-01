import { AppShell } from './components/AppShell'

export default function ShellPreview() {
  const navigationItems = [
    { label: 'Who Am I?', href: '/who-am-i', isActive: true },
    { label: 'My Toolbox', href: '/my-toolbox' },
    { label: 'Mutual Fit', href: '/mutual-fit' },
    { label: 'Contact Me', href: '/contact-me' },
  ]

  return (
    <AppShell
      navigationItems={navigationItems}
      brandName="Sanjana"
      onNavigate={(href) => console.log('Navigate to:', href)}
    >
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-medium text-stone-900 dark:text-stone-100">
            Content Area
          </h1>
          <p className="text-stone-600 dark:text-stone-400">
            Section content will render here.
          </p>
        </div>
      </div>
    </AppShell>
  )
}