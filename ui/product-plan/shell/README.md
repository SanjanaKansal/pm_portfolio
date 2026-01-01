# Application Shell

## Overview

A minimal, Notion-inspired top navigation shell for Sanjana's Portfolio. Clean and functional with separate pages for each section.

## Navigation Structure

- Who Am I? → `/who-am-i`
- My Toolbox → `/my-toolbox`
- Mutual Fit → `/mutual-fit`
- Contact Me → `/contact-me`

## Components Provided

- `AppShell.tsx` — Main layout wrapper with header and content area
- `MainNav.tsx` — Desktop navigation links
- `MobileMenu.tsx` — Mobile hamburger menu with overlay

## Props

### AppShell

| Prop | Type | Description |
|------|------|-------------|
| `children` | ReactNode | Page content |
| `navigationItems` | NavigationItem[] | Nav links with label, href, isActive |
| `brandName` | string | Brand name in header (default: "Sanjana") |
| `onNavigate` | (href: string) => void | Navigation callback for SPA routing |

## Usage Example

```tsx
const navItems = [
  { label: 'Who Am I?', href: '/who-am-i', isActive: true },
  { label: 'My Toolbox', href: '/my-toolbox' },
  { label: 'Mutual Fit', href: '/mutual-fit' },
  { label: 'Contact Me', href: '/contact-me' },
]

<AppShell navigationItems={navItems} onNavigate={(href) => router.push(href)}>
  <YourPageContent />
</AppShell>
```